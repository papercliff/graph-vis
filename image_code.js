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

function nextAction(action, maxNodeWeight) {
    switch (action.action) {
        case 'add-node':
            addNode(action, maxNodeWeight);
            break;
        case 'add-edge':
            addEdge(action);
            break;
        case 'remove-node':
            nodes.remove(action.id);
            break;
        case 'update-node':
            nodes.update({
                id: action.id,
                font: font(action, maxNodeWeight)
            });
            break;
        case 'remove-edge':
            removeEdges(action);
            break;
        default:
            console.log(action);
            break;
    }
}

fetch("http://localhost:3333/" + prevDayStr + "-single-day-actions.json")
    .then(response => response.json())
    .then(json => {
            let maxNodeWeight = Math.max.apply(
                null,
                json.map(x => x.weight).filter(x => !isNaN(x))
            );
            json.forEach(action => nextAction(action, maxNodeWeight));
            network.fit();
            setTimeout(() => network.fit(), 3000);
            setTimeout(() => network.fit(), 6000);
    });
