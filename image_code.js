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

function nextAction(action, maxNodeWeight) {
    switch (action.action) {
        case 'add-node':
            addNode(action, maxNodeWeight);
            break;
        case 'add-edge':
            addEdge(action);
            break;
        default:
            console.log(action);
            break;
    }
}

let maxNodeWeight = Math.max.apply(
    null,
    singleDayActions.map(x => x.weight).filter(x => !isNaN(x))
);
singleDayActions.forEach(action => nextAction(action, maxNodeWeight));

function eternalFit() {
    network.fit();
    setTimeout(() => eternalFit(), 5000);
}

eternalFit();
