const inBetweenMillis = 300;
const changeHourMillis = 100;

const prevDay = new Date(new Date().setDate(new Date().getDate() - 1));
const prevDayStr = prevDay.toISOString().split('T')[0];

document.getElementById("date").textContent = prevDay.toDateString();

const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {};
const network = new vis.Network(container, data, options);

function addNode(action) {
    nodes.add({
        id: action.id,
        label: action.id,
        shadow: {
            enabled: true
        },
        x: 1080 * (0.5 - Math.random()),
        y: 1080.0 * (0.5 - Math.random()),
        font: {
            size: 40,
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
        width: 10
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
            network.fit({
                animation: {
                    duration: inBetweenMillis,
                    easingFunction: 'easeInOutQuad'
                }
            });
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
                document.getElementById("hour").textContent = action.new_hour;
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
