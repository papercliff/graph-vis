const inBetweenMillis = 300;

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics: {wind: {x: -0.14, y: 0}}};
const network = new vis.Network(container, data, options);

nodes.add({
    id: 'day-node',
    label: "      \n        ",
    x: 480,
    y: 0,
    fixed: {x: true, y: true},
    font: {
        size: 30,
        color: 'white',
        face: 'monospace'
    },
    color: 'black',
    shape: 'circle',
    borderWidth: 20
});

function addNode(action) {
    nodes.add({
        id: action.id,
        label: action.id,
        shadow: {
            enabled: true
        },
        x: -500,
        y: 1080.0 * (0.5 - Math.random()) / 2.0,
        font: {
            size: 30,
            strokeWidth: 1
        },
        group: action.cluster
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

function nextAction(json, i) {
    let action = json[i];
    switch (action.action) {
        case 'add-node':
            addNode(action);
            break;
        case 'add-edge':
            addEdge(action);
            break;
        case 'remove-node':
            nodes.remove(action.id);
            break;
        case 'remove-edge':
            removeEdges(action);
            break;
        case 'change-day':
            nodes.update({id: 'day-node', label: action.new_day});
            simulateClick();
            break;
        default:
            console.log(action);
    }

    if (action.action === 'add-edge') {
        setTimeout(() => nextAction(json, i + 1), inBetweenMillis);
    } else {
        nextAction(json, i + 1);
    }
}

fetch("http://localhost:3333/2022-11-06-actions-with-days.json")
    .then(response => response.json())
    .then(json =>
        setTimeout(() =>
                nextAction(json, 0),
            1000
        )
    );
