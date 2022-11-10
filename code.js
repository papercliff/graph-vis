const inBetweenMillis = 450;

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics: {wind: {x: -0.10, y: 0}}};
const network = new vis.Network(container, data, options);

let dayAnchor = {
    id: 'day-anchor',
    hidden: true,
    x: 680,
    y: 0,
    fixed: {
        x: true,
        y: true,
    },
    mass: 7
};
const dayNode = {
    id: 'day-node',
    label: "      \n        ",
    x: 480,
    y: 0,
    font: {color: 'white'},
    color: 'black',
    shape: 'circle',
    mass: 7
};
nodes.add(dayAnchor);
nodes.add(dayNode);
edges.add({
    id: 'day-edge',
    from: 'day-anchor',
    to: 'day-node',
    hidden: true
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
            size: 45,
            strokeWidth: 1
        },
        group: action.cluster,
        mass: 1.2
    });
}

function addEdge(action) {
    edges.add({
        id: action.source + ":" + action.target,
        from: action.source,
        to: action.target,
        width: 10
    });
}

function removeEdges(action) {
    edges.remove(action.source + ":" + action.target);
    edges.remove(action.target + ":" + action.source);
}

function changeDay(action) {
    let font_sizes = {
        'Mon': 30,
        'Tue': 35,
        'Wed': 40,
        'Thu': 45,
        'Fri': 50,
        'Sat': 55,
        'Sun': 25
    }

    nodes.update({
        id: 'day-node',
        label: action.new_day,
        borderWidth: 20,
        font: {
            size: font_sizes[action.new_day.substring(0, 3)],
        }
    });
}

function nextAction(json, i) {
    let action = json[i];
    switch (action.action) {
        case 'add-node':
            addNode(action);
            nextAction(json, i + 1);
            break;
        case 'add-edge':
            addEdge(action);
            let dayPos = network.getPositions(['day-node'])['day-node'];
            simulateClick(dayPos.x, dayPos.y, inBetweenMillis);
            setTimeout(() => nextAction(json, i + 1), inBetweenMillis);
            break;
        case 'remove-node':
            nodes.remove(action.id);
            nextAction(json, i + 1);
            break;
        case 'remove-edge':
            removeEdges(action);
            nextAction(json, i + 1);
            break;
        case 'change-day':
            changeDay(action);
            nextAction(json, i + 1);
            break;
        default:
            console.log(action);
    }
}

fetch("http://localhost:3333/2022-10-30-actions-with-days.json")
    .then(response => response.json())
    .then(json => nextAction(json, 0));
