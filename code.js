const prevDay = new Date(new Date().setDate(new Date().getDate() - 1));
const prevDayStr = prevDay.toISOString().split('T')[0];

document.getElementById("date").textContent = prevDay.toDateString();

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics:{solver:'forceAtlas2Based'}};
const network = new vis.Network(container, data, options);

function font(action, maxNodeWeight){
    return {
        color: 'black',
        strokeColor: 'black',
        strokeWidth: 0,
        size: 60.0 * (0.33 + 0.66 * (action.weight / maxNodeWeight))
    };
}

function addNode(action, maxNodeWeight) {
    nodes.add({
        id: action.id,
        label: action.id,
        shadow: {
            enabled: true
        },
        x: 1080.0 * (0.5 - Math.random()),
        y: 1080.0 * (0.5 - Math.random()),
        font: font(action, maxNodeWeight),
        color: colors[action.cluster % 21]
    });
}

function addEdge(action) {
    edges.add({
        id: action.source + ":" + action.target,
        from: action.source,
        to: action.target,
        width: 7
    });
}

function removeEdges(action) {
    edges.remove(action.source + ":" + action.target);
    edges.remove(action.target + ":" + action.source);
}

function nextAction(json, maxNodeWeight, i) {
    let action = json[i];
    switch (action.action) {
        case 'add-node':
            addNode(action, maxNodeWeight);
            nextAction(json, maxNodeWeight, i + 1);
            break;
        case 'add-edge':
            addEdge(action);
            nextAction(json, maxNodeWeight, i + 1);
            break;
        case 'remove-node':
            nodes.remove(action.id);
            nextAction(json, maxNodeWeight, i + 1);
            break;
        case 'update-node':
            nodes.update({
                id: action.id,
                font: font(action, maxNodeWeight)
            });
            nextAction(json, maxNodeWeight, i + 1);
            break;
        case 'remove-edge':
            removeEdges(action);
            nextAction(json, maxNodeWeight, i + 1);
            break;
        case 'change-hour':
            let waitMillis = 1000;
            setTimeout(() => {
                document.getElementById("hour").textContent = action.new_hour;
                nextAction(json, maxNodeWeight, i + 1);
            }, waitMillis);
            simulateClick(10);
            network.fit({
                animation: {
                    duration: waitMillis,
                    easingFunction: 'easeInOutQuad'
                }
            });
            break;
        default:
            console.log(action);
    }
}

fetch("http://localhost:3333/" + prevDayStr + "-actions-with-hours.json")
    .then(response => response.json())
    .then(json => {
            let maxNodeWeight = Math.max.apply(
                null,
                json.map(x => x.weight).filter(x => !isNaN(x))
            );
            setTimeout(() => nextAction(json, maxNodeWeight, 0), 1000);
    });
