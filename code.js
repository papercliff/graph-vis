const inBetweenMillis = 450;
const changeHourMillis = 100;

const prevDay = new Date(new Date().setDate(new Date().getDate() - 1));
const prevDayStr = prevDay.toISOString().split('T')[0];

document.getElementById("date").textContent = prevDay.toDateString();

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics: {wind: {x: -0.11, y: 0}}};
const network = new vis.Network(container, data, options);

nodes.add({
    id: 'hour-node',
    label: "     \n    ",
    x: 320,
    y: 0,
    fixed: {x: true, y: true},
    font: {
        size: 20,
        strokeWidth: 1,
        vadjust: 5,
        color: 'white',
        face: 'clock'
    },
    color: 'black',
    shape: 'circle',
    borderWidth: 10
});

function addNode(action) {
    nodes.add({
        id: action.id,
        label: action.id,
        shadow: {
            enabled: true
        },
        x: 1280.0 * (0.0 - Math.random()) / 2.0,
        y: 720.0 * (0.5 - Math.random()) / 2.0,
        font: {
            size: 16,
            strokeWidth: 1
        },
        mass: 0.23,
        group: action.cluster
    });
}

function addEdge(action) {
    edges.add({
        id: action.source + ":" + action.target,
        from: action.source,
        to: action.target,
        width: 4,
        length: 1
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
            nextAction(json, i + 1);
            break;
        case 'add-edge':
            addEdge(action);
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
        case 'change-hour':
            setTimeout(() => {
                nodes.update({id: 'hour-node', label: action.new_hour});
                nextAction(json, i + 1);
            }, changeHourMillis);
            simulateClick(changeHourMillis);
            break;
        default:
            console.log(action);
    }
}

fetch("http://localhost:3333/" + prevDayStr + "-actions-with-hours.json")
    .then(response => response.json())
    .then(json =>
        setTimeout(() =>
                nextAction(json, 0),
            1000
        )
    );
