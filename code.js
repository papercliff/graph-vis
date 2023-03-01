const prevMonthDate = new Date(new Date().setDate(new Date().getMonth() - 1));

document.getElementById("date").textContent = prevMonthDate.toLocaleString(
    'default',
    { month: 'long', year: 'numeric' }
);

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics:{
    solver:'forceAtlas2Based',
    maxVelocity: 4
}};
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
        x: 0.5 * 1080.0 * (0.5 - Math.random()),
        y: 0.5 * 1080.0 * (0.5 - Math.random()),
        font: font(action, maxNodeWeight),
        color: colors[action.cluster % 19]
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
        case 'change-day':
            let waitMillis = 3000;
            setTimeout(() => {
                document.getElementById("day").textContent = action.new_day;
                nextAction(json, maxNodeWeight, i + 1);
            }, waitMillis);
            simulateClick(10);
            break;
        default:
            console.log(action);
    }
}

let maxNodeWeight = Math.max.apply(
    null,
    actionsWithDays.map(x => x.weight).filter(x => !isNaN(x))
);

setTimeout(() => nextAction(actionsWithDays, maxNodeWeight, 0), 1000);

function eternalFit() {
    network.fit({animation: {duration: 750}});
    setTimeout(() => eternalFit(), 750);
}

eternalFit();
