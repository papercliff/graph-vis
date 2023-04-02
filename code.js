const container = document.getElementById("mynetwork");
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = {nodes: nodes, edges: edges,};
const options = {physics:{
    solver:'forceAtlas2Based',
    maxVelocity: 7.5,
    forceAtlas2Based:{gravitationalConstant: -20}
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

function avgCoordinate(sameClusterNodePositions, coordinateF){
    return (
        sameClusterNodePositions.reduce((acc, el) => acc + el.x, 0)
            / sameClusterNodePositions.length
    || 0.5 * 1080.0 * (0.5 - Math.random()));
}

function addNode(action, maxNodeWeight) {
    let sameClusterNodeIds = nodes.get({
      filter: item => item.cluster == action.cluster
    }).map(item => item.id);
    let sameClusterNodePositions = Object.values(
        network.getPositions(sameClusterNodeIds)
    );
    nodes.add({
        id: action.id,
        label: action.id,
        shadow: {
            enabled: true
        },
        x: avgCoordinate(sameClusterNodePositions, el => el.x),
        y: avgCoordinate(sameClusterNodePositions, el => el.y),
        font: font(action, maxNodeWeight),
        color: colors[action.cluster % 19],
        cluster: action.cluster
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
                font: font(action, maxNodeWeight),
                color: colors[action.cluster % 19],
                cluster: action.cluster
            });
            break;
        case 'remove-edge':
            removeEdges(action);
            break;
        default:
            console.log(action);
    }
    switch (action.action) {
        case 'change-day':
            setTimeout(() => {
                document.getElementById("date").textContent = '';
            }, 4900);
            setTimeout(() => {
                document.getElementById("date").textContent = action.new_day;
                nextAction(json, maxNodeWeight, i + 1);
            }, 5000);
            break;
        case 'add-node':
            setTimeout(() => nextAction(json, maxNodeWeight, i + 1), 1);
            break;
        case 'update-node':
            setTimeout(() => nextAction(json, maxNodeWeight, i + 1), 1);
            break;
        default:
            nextAction(json, maxNodeWeight, i + 1);
    }
}

let maxNodeWeight = Math.max.apply(
    null,
    actionsWithDays.map(x => x.weight).filter(x => !isNaN(x))
);

setTimeout(() => nextAction(actionsWithDays, maxNodeWeight, 0), 1000);

function eternalFit() {
    simulateClick(1);
    network.fit({animation: {duration: 500}});
    setTimeout(() => eternalFit(), 500);
}

eternalFit();
