const actionsWithDays = [
                          {
                            "action": "change-day",
                            "new_day": "MON FEB 06 2023"
                          },
                          {
                            "source": "syria",
                            "target": "earthquake",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "earthquake",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "syria",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "magnitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "magnitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "quake",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "quake",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "earthquakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "earthquakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "kong",
                            "action": "add-edge"
                          },
                          {
                            "source": "trial",
                            "target": "hong",
                            "action": "add-edge"
                          },
                          {
                            "source": "trial",
                            "target": "kong",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "strikes",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "strikes",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "chinese",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "spy",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "chinese",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "china",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "spy",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "buildings",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "buildings",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "suspected",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "suspected",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deadly",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deadly",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "quake",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "buildings",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "gunmen",
                            "action": "add-edge"
                          },
                          {
                            "source": "raid",
                            "target": "gunmen",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "raid",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "raid",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "palestinian",
                            "target": "gunmen",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescuers",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescuers",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deadly",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "central",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "central",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "body",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "body",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "musharraf",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "magnitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "people",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "people",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "subversion",
                            "action": "add-edge"
                          },
                          {
                            "source": "trial",
                            "target": "subversion",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "accuses",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "accuses",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "force",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "force",
                            "action": "add-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "anthem",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "anthem",
                            "action": "add-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "iran",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "debris",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "debris",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastation",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastation",
                            "action": "add-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "central",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "america",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "america",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "people",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "shooting",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "shooting",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "killing",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "killing",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "balloons",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "balloons",
                            "action": "add-edge"
                          },
                          {
                            "source": "accuses",
                            "target": "force",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "kill",
                            "action": "add-edge"
                          },
                          {
                            "source": "raid",
                            "target": "kill",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "powerful",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "powerful",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescuers",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "raid",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "strikes",
                            "action": "add-edge"
                          },
                          {
                            "source": "central",
                            "target": "shakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "shakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "shakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "shakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "democracy",
                            "action": "add-edge"
                          },
                          {
                            "source": "trial",
                            "target": "democracy",
                            "action": "add-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "quake",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "quakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "quakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "carrying",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "carrying",
                            "action": "add-edge"
                          },
                          {
                            "source": "body",
                            "target": "carrying",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "plane",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "plane",
                            "action": "add-edge"
                          },
                          {
                            "source": "plane",
                            "target": "carrying",
                            "action": "add-edge"
                          },
                          {
                            "source": "body",
                            "target": "plane",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "conflict",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "conflict",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "devastation",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastating",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastating",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aftershocks",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "aftershocks",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "debris",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "subversion",
                            "action": "add-edge"
                          },
                          {
                            "source": "rescuers",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "kill",
                            "target": "gunmen",
                            "action": "add-edge"
                          },
                          {
                            "source": "kill",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "gaziantep",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "gaziantep",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "wikipedia",
                            "action": "add-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "strikes",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "suspected",
                            "action": "add-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "prison",
                            "action": "add-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "singer",
                            "action": "add-edge"
                          },
                          {
                            "source": "prison",
                            "target": "singer",
                            "action": "add-edge"
                          },
                          {
                            "source": "prison",
                            "target": "anthem",
                            "action": "add-edge"
                          },
                          {
                            "source": "anthem",
                            "target": "singer",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "gunmen",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "kills",
                            "target": "pakistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "strikes",
                            "target": "powerful",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "photos",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "photos",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "democracy",
                            "action": "add-edge"
                          },
                          {
                            "source": "america",
                            "target": "latin",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "latin",
                            "action": "add-edge"
                          },
                          {
                            "source": "gaziantep",
                            "target": "castle",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "castle",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "castle",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "latin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "wider",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "wider",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquakes",
                            "target": "deadly",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "fears",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "fears",
                            "action": "add-edge"
                          },
                          {
                            "source": "aid",
                            "target": "rescuers",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescuers",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "tremors",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "pervez",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "pervez",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "activists",
                            "action": "add-edge"
                          },
                          {
                            "source": "trial",
                            "target": "activists",
                            "action": "add-edge"
                          },
                          {
                            "source": "kills",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "suspected",
                            "action": "add-edge"
                          },
                          {
                            "id": "syria",
                            "weight": 47,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 34,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "central",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 25,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "activists",
                            "weight": 7,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "quake",
                            "weight": 20,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "strikes",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "earthquakes",
                            "weight": 18,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "deadly",
                            "weight": 12,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "gunmen",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 48,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "tremors",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 24,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "trial",
                            "weight": 18,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "shakes",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "prison",
                            "weight": 9,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "photos",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "grammy",
                            "weight": 17,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "spy",
                            "weight": 25,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 42,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "palestinian",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "devastating",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "body",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "force",
                            "weight": 6,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "china",
                            "weight": 32,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "castle",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "rescue",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "conflict",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "iran",
                            "weight": 8,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "hundreds",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "aid",
                            "weight": 13,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "fears",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "powerful",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "killed",
                            "weight": 15,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "kong",
                            "weight": 14,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "raid",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "hong",
                            "weight": 17,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "carrying",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "plane",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "accuses",
                            "weight": 9,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "america",
                            "weight": 9,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "singer",
                            "weight": 5,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 9,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "debris",
                            "weight": 10,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "gaziantep",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "aftershocks",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "quakes",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "killing",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "toll",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "people",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "kill",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 30,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "dead",
                            "weight": 16,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 18,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "suspected",
                            "weight": 10,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "wikipedia",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "subversion",
                            "weight": 6,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "anthem",
                            "weight": 7,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "latin",
                            "weight": 7,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "wider",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "kills",
                            "weight": 18,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "magnitude",
                            "weight": 21,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "rescuers",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "balloons",
                            "weight": 10,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "devastation",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "buildings",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "musharraf",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "pervez",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "democracy",
                            "weight": 9,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "TUE FEB 07 2023"
                          },
                          {
                            "id": "central",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "force",
                            "weight": 6,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "magnitude",
                            "weight": 21,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "accuses",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "people",
                            "weight": 11,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "tremors",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "prison",
                            "weight": 9,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "anthem",
                            "weight": 7,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "castle",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "killing",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "body",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "palestinian",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "devastating",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "dead",
                            "weight": 16,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 8,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "gunmen",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "strikes",
                            "weight": 14,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "trial",
                            "weight": 18,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "subversion",
                            "weight": 6,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "shakes",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "deadly",
                            "weight": 12,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "conflict",
                            "weight": 7,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "america",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "grammy",
                            "weight": 17,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "suspected",
                            "weight": 10,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "devastation",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "quakes",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "buildings",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "carrying",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "activists",
                            "weight": 7,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "latin",
                            "weight": 7,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "plane",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "wider",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "pervez",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "democracy",
                            "weight": 9,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "powerful",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "gaziantep",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "kill",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "fears",
                            "weight": 7,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "singer",
                            "weight": 5,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "source": "earthquake",
                            "target": "magnitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "magnitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trial",
                            "target": "hong",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trial",
                            "target": "kong",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "strikes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "strikes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "buildings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "buildings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "suspected",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "suspected",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deadly",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deadly",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "quake",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "buildings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "gunmen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "raid",
                            "target": "gunmen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "raid",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "palestinian",
                            "target": "gunmen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deadly",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "central",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "central",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "body",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "body",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "magnitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "people",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "people",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "subversion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trial",
                            "target": "subversion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "accuses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "accuses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "force",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "force",
                            "action": "remove-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "anthem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "anthem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "iran",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "central",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "america",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "america",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "people",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "shooting",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "shooting",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "killing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "killing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "balloons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "accuses",
                            "target": "force",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "kill",
                            "action": "remove-edge"
                          },
                          {
                            "source": "raid",
                            "target": "kill",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "powerful",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "powerful",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "strikes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "central",
                            "target": "shakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "shakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "shakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "shakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "democracy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trial",
                            "target": "democracy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "quake",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "quakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "quakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "carrying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "carrying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "body",
                            "target": "carrying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "plane",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "plane",
                            "action": "remove-edge"
                          },
                          {
                            "source": "plane",
                            "target": "carrying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "body",
                            "target": "plane",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "conflict",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "conflict",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "devastation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastating",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastating",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "debris",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "subversion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kill",
                            "target": "gunmen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kill",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "gaziantep",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "gaziantep",
                            "action": "remove-edge"
                          },
                          {
                            "source": "magnitude",
                            "target": "strikes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "suspected",
                            "action": "remove-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "prison",
                            "action": "remove-edge"
                          },
                          {
                            "source": "grammy",
                            "target": "singer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prison",
                            "target": "singer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prison",
                            "target": "anthem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "anthem",
                            "target": "singer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "gunmen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kills",
                            "target": "pakistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "strikes",
                            "target": "powerful",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "democracy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "america",
                            "target": "latin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "latin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "gaziantep",
                            "target": "castle",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "castle",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "castle",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "latin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "wider",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "wider",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquakes",
                            "target": "deadly",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "fears",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "fears",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aid",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "tremors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "pervez",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "pervez",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "activists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trial",
                            "target": "activists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kills",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "suspected",
                            "action": "remove-edge"
                          },
                          {
                            "id": "earthquakes",
                            "weight": 19,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "killed",
                            "weight": 11,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 30,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "photos",
                            "weight": 11,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 19,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 22,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "balloons",
                            "weight": 6,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "rescuers",
                            "weight": 12,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 26,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "debris",
                            "weight": 6,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 7,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 35,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "kong",
                            "weight": 9,
                            "cluster": 11,
                            "action": "update-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 23,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 13,
                            "cluster": 5,
                            "action": "update-node"
                          },
                          {
                            "id": "hundreds",
                            "weight": 6,
                            "cluster": 5,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 21,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "musharraf",
                            "weight": 9,
                            "cluster": 5,
                            "action": "update-node"
                          },
                          {
                            "id": "aftershocks",
                            "weight": 6,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 36,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "spy",
                            "weight": 22,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "wikipedia",
                            "weight": 6,
                            "cluster": 5,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 37,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "raid",
                            "weight": 6,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 28,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "rescue",
                            "weight": 20,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 22,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "kills",
                            "weight": 6,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "hong",
                            "weight": 9,
                            "cluster": 11,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 24,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "source": "earthquake",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "officer",
                            "action": "add-edge"
                          },
                          {
                            "source": "officer",
                            "target": "rapist",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "rapist",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "safeguard",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "safeguard",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "funeral",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "funeral",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "interests",
                            "action": "add-edge"
                          },
                          {
                            "source": "safeguard",
                            "target": "interests",
                            "action": "add-edge"
                          },
                          {
                            "source": "officer",
                            "target": "jailed",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "jailed",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "interests",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "newborn",
                            "action": "add-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "newborn",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "address",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "address",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "union",
                            "action": "add-edge"
                          },
                          {
                            "source": "teen",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "teen",
                            "target": "raid",
                            "action": "add-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "hostage",
                            "action": "add-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "zealand",
                            "action": "add-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "zealand",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "shootdown",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "shootdown",
                            "action": "add-edge"
                          },
                          {
                            "source": "interests",
                            "target": "shootdown",
                            "action": "add-edge"
                          },
                          {
                            "source": "safeguard",
                            "target": "shootdown",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "speech",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "speech",
                            "action": "add-edge"
                          },
                          {
                            "source": "chatgpt",
                            "target": "bard",
                            "action": "add-edge"
                          },
                          {
                            "source": "google",
                            "target": "bard",
                            "action": "add-edge"
                          },
                          {
                            "source": "google",
                            "target": "chatgpt",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "newborn",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "simpsons",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "simpsons",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "disney",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "disney",
                            "action": "add-edge"
                          },
                          {
                            "source": "disney",
                            "target": "simpsons",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "earthquakes",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "newborn",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "newborn",
                            "target": "syrian",
                            "action": "add-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "syrian",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "navy",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "navy",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "ban",
                            "target": "wikipedia",
                            "action": "add-edge"
                          },
                          {
                            "source": "jailed",
                            "target": "rapist",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "exposed",
                            "action": "add-edge"
                          },
                          {
                            "source": "rapist",
                            "target": "exposed",
                            "action": "add-edge"
                          },
                          {
                            "source": "officer",
                            "target": "exposed",
                            "action": "add-edge"
                          },
                          {
                            "source": "jailed",
                            "target": "exposed",
                            "action": "add-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "rebels",
                            "action": "add-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "rebels",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "massacre",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "vietnam",
                            "action": "add-edge"
                          },
                          {
                            "source": "vietnam",
                            "target": "massacre",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "joe",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "joe",
                            "action": "add-edge"
                          },
                          {
                            "source": "aid",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "aid",
                            "target": "sanctions",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "sanctions",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "sanctions",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "sanctions",
                            "action": "add-edge"
                          },
                          {
                            "source": "mali",
                            "target": "lavrov",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "lavrov",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "mali",
                            "action": "add-edge"
                          },
                          {
                            "source": "funeral",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "hundreds",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "hiroshima",
                            "action": "add-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "children",
                            "action": "add-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "hiroshima",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "collision",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bus",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "collision",
                            "action": "add-edge"
                          },
                          {
                            "source": "ai",
                            "target": "chatgpt",
                            "action": "add-edge"
                          },
                          {
                            "source": "ai",
                            "target": "google",
                            "action": "add-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "navy",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "emergency",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "emergency",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "teen",
                            "action": "add-edge"
                          },
                          {
                            "source": "emergency",
                            "target": "erdogan",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "erdogan",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "erdogan",
                            "action": "add-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "birth",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "birth",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "syrian",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "debris",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "state",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "state",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "south",
                            "action": "add-edge"
                          },
                          {
                            "source": "vietnam",
                            "target": "south",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "mother",
                            "action": "add-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "mother",
                            "action": "add-edge"
                          },
                          {
                            "source": "officer",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "source": "rapist",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "victims",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "victims",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "balloons",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "trump",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "korea",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "massacre",
                            "action": "add-edge"
                          },
                          {
                            "source": "rescue",
                            "target": "wreckage",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "wreckage",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "vietnam",
                            "action": "add-edge"
                          },
                          {
                            "source": "aid",
                            "target": "countries",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "countries",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "military",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "military",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "hiroshima",
                            "action": "add-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "court",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "court",
                            "action": "add-edge"
                          },
                          {
                            "source": "military",
                            "target": "mali",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "military",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "newspaper",
                            "action": "add-edge"
                          },
                          {
                            "source": "military",
                            "target": "lavrov",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "children",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "hiroshima",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "victims",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "newspaper",
                            "action": "add-edge"
                          },
                          {
                            "source": "address",
                            "target": "joe",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "images",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "images",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "power",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "power",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "emergency",
                            "action": "add-edge"
                          },
                          {
                            "source": "tanks",
                            "target": "leopard",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "leopard",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "tanks",
                            "action": "add-edge"
                          },
                          {
                            "source": "ai",
                            "target": "bard",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "id": "newborn",
                            "weight": 15,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "hiroshima",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "images",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 18,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "erdogan",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "union",
                            "weight": 14,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "hostage",
                            "weight": 8,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 12,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "rapist",
                            "weight": 10,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "zealand",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "sentenced",
                            "weight": 8,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "chatgpt",
                            "weight": 9,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "state",
                            "weight": 8,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "massacre",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "newspaper",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "biden",
                            "weight": 17,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "wreckage",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "sanctions",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "officer",
                            "weight": 14,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "shootdown",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "teen",
                            "weight": 8,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "ban",
                            "weight": 9,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "joe",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "google",
                            "weight": 10,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "simpsons",
                            "weight": 6,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "mother",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "navy",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "military",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "jailed",
                            "weight": 11,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "lavrov",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "exposed",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "rebels",
                            "weight": 5,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "emergency",
                            "weight": 12,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "congress",
                            "weight": 6,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "ai",
                            "weight": 11,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "address",
                            "weight": 7,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "bus",
                            "weight": 8,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "mali",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "disney",
                            "weight": 6,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 6,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "trump",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "court",
                            "weight": 13,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "countries",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "speech",
                            "weight": 8,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "interests",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "pilot",
                            "weight": 9,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "bard",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "vietnam",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "collision",
                            "weight": 6,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "tanks",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "deaths",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "birth",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "south",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "syrian",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "police",
                            "weight": 15,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "leopard",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "children",
                            "weight": 13,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "funeral",
                            "weight": 8,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "power",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "victims",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "safeguard",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "death",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "WED FEB 08 2023"
                          },
                          {
                            "id": "court",
                            "weight": 13,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "navy",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "sentenced",
                            "weight": 8,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "safeguard",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "war",
                            "weight": 18,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "kong",
                            "weight": 9,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "rapist",
                            "weight": 10,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "tanks",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "debris",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "kills",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "newspaper",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "aftershocks",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "massacre",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "emergency",
                            "weight": 12,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "wreckage",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "vietnam",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "south",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "mother",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "simpsons",
                            "weight": 6,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 22,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "raid",
                            "weight": 6,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "google",
                            "weight": 10,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "chatgpt",
                            "weight": 9,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "pilot",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "ai",
                            "weight": 11,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 12,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "erdogan",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "mali",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 6,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "teen",
                            "weight": 8,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "musharraf",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "military",
                            "weight": 14,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "syrian",
                            "weight": 14,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "balloons",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "power",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 13,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "rescuers",
                            "weight": 12,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "exposed",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "hostage",
                            "weight": 8,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "trump",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "shootdown",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "lavrov",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "interests",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "rebels",
                            "weight": 5,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "jailed",
                            "weight": 11,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "collision",
                            "weight": 6,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "hundreds",
                            "weight": 6,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "countries",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "hiroshima",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "images",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "funeral",
                            "weight": 8,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "wikipedia",
                            "weight": 6,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "victims",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "newborn",
                            "weight": 15,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "leopard",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "disney",
                            "weight": 6,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 18,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "hong",
                            "weight": 9,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "ban",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "bard",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 7,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "birth",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "source": "turkey",
                            "target": "aid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "officer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "officer",
                            "target": "rapist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "rapist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "safeguard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "safeguard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "funeral",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "funeral",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "musharraf",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "interests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "safeguard",
                            "target": "interests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "officer",
                            "target": "jailed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "jailed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "interests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "newborn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "newborn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "raid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "teen",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "teen",
                            "target": "raid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "hostage",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "zealand",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "zealand",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "shootdown",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "shootdown",
                            "action": "remove-edge"
                          },
                          {
                            "source": "interests",
                            "target": "shootdown",
                            "action": "remove-edge"
                          },
                          {
                            "source": "safeguard",
                            "target": "shootdown",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chatgpt",
                            "target": "bard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "google",
                            "target": "bard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "google",
                            "target": "chatgpt",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "newborn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "kong",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "simpsons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "simpsons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "disney",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "disney",
                            "action": "remove-edge"
                          },
                          {
                            "source": "disney",
                            "target": "simpsons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aftershocks",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "aftershocks",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "earthquakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "newborn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "source": "newborn",
                            "target": "syrian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "syrian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "navy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "navy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ban",
                            "target": "wikipedia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "wikipedia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jailed",
                            "target": "rapist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "exposed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rapist",
                            "target": "exposed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "officer",
                            "target": "exposed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jailed",
                            "target": "exposed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "rebels",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "rebels",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "massacre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "vietnam",
                            "action": "remove-edge"
                          },
                          {
                            "source": "vietnam",
                            "target": "massacre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aid",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "sanctions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "sanctions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mali",
                            "target": "lavrov",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "lavrov",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "mali",
                            "action": "remove-edge"
                          },
                          {
                            "source": "funeral",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musharraf",
                            "target": "hundreds",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "hiroshima",
                            "action": "remove-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "children",
                            "action": "remove-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "hiroshima",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "collision",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bus",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "collision",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ai",
                            "target": "chatgpt",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ai",
                            "target": "google",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pilot",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "navy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "emergency",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "emergency",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "debris",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "debris",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "raid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "teen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "emergency",
                            "target": "erdogan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "erdogan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "erdogan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescuers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "birth",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "birth",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "syrian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "debris",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "south",
                            "action": "remove-edge"
                          },
                          {
                            "source": "vietnam",
                            "target": "south",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "mother",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "mother",
                            "action": "remove-edge"
                          },
                          {
                            "source": "officer",
                            "target": "sentenced",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rapist",
                            "target": "sentenced",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "victims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "victims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "balloons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "balloons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "trump",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "korea",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "massacre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rescue",
                            "target": "wreckage",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "wreckage",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "vietnam",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aid",
                            "target": "countries",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "countries",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "military",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "military",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "hiroshima",
                            "action": "remove-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "court",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "court",
                            "action": "remove-edge"
                          },
                          {
                            "source": "military",
                            "target": "mali",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "military",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "newspaper",
                            "action": "remove-edge"
                          },
                          {
                            "source": "military",
                            "target": "lavrov",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "children",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "survivors",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hiroshima",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "victims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "newspaper",
                            "action": "remove-edge"
                          },
                          {
                            "source": "address",
                            "target": "joe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "images",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "images",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "power",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "power",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "emergency",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tanks",
                            "target": "leopard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "leopard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "tanks",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ai",
                            "target": "bard",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "photos",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "photos",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "sentenced",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "id": "biden",
                            "weight": 33,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "state",
                            "weight": 14,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "joe",
                            "weight": 14,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 14,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 15,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 30,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 24,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 33,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 17,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 15,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "address",
                            "weight": 11,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "killed",
                            "weight": 10,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "bus",
                            "weight": 18,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquakes",
                            "weight": 15,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "speech",
                            "weight": 19,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "union",
                            "weight": 30,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "death",
                            "weight": 14,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 26,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 30,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "sanctions",
                            "weight": 8,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 35,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "rescue",
                            "weight": 19,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "spy",
                            "weight": 19,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 21,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "police",
                            "weight": 15,
                            "cluster": 10,
                            "action": "update-node"
                          },
                          {
                            "id": "zealand",
                            "weight": 13,
                            "cluster": 8,
                            "action": "update-node"
                          },
                          {
                            "id": "photos",
                            "weight": 11,
                            "cluster": 11,
                            "action": "update-node"
                          },
                          {
                            "id": "congress",
                            "weight": 8,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "officer",
                            "weight": 5,
                            "cluster": 11,
                            "action": "update-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 17,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "children",
                            "weight": 16,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "deaths",
                            "weight": 11,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "source": "mh17",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "mh17",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "china",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "china",
                            "action": "add-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "ocean",
                            "action": "add-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "pacific",
                            "action": "add-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "pacific",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "children",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "crashes",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "crashes",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deadliest",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deadliest",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "speech",
                            "action": "add-edge"
                          },
                          {
                            "source": "lebron",
                            "target": "james",
                            "action": "add-edge"
                          },
                          {
                            "source": "james",
                            "target": "nba",
                            "action": "add-edge"
                          },
                          {
                            "source": "lebron",
                            "target": "nba",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "pentagon",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "pentagon",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "pentagon",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "republicans",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "republicans",
                            "action": "add-edge"
                          },
                          {
                            "source": "state",
                            "target": "address",
                            "action": "add-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "tons",
                            "action": "add-edge"
                          },
                          {
                            "source": "pacific",
                            "target": "tons",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "tons",
                            "action": "add-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "zealand",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "ocean",
                            "action": "add-edge"
                          },
                          {
                            "source": "speech",
                            "target": "smeared",
                            "action": "add-edge"
                          },
                          {
                            "source": "union",
                            "target": "smeared",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "smeared",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "smeared",
                            "action": "add-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "probe",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "probe",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "daycare",
                            "action": "add-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "daycare",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "montreal",
                            "action": "add-edge"
                          },
                          {
                            "source": "daycare",
                            "target": "montreal",
                            "action": "add-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "jong",
                            "action": "add-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "kim",
                            "action": "add-edge"
                          },
                          {
                            "source": "kim",
                            "target": "jong",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "king",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "king",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "hope",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "hope",
                            "action": "add-edge"
                          },
                          {
                            "source": "king",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "deadliest",
                            "action": "add-edge"
                          },
                          {
                            "source": "deadliest",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "korean",
                            "target": "impeach",
                            "action": "add-edge"
                          },
                          {
                            "source": "lawmakers",
                            "target": "impeach",
                            "action": "add-edge"
                          },
                          {
                            "source": "korean",
                            "target": "lawmakers",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "balloon",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "pacific",
                            "action": "add-edge"
                          },
                          {
                            "source": "impeach",
                            "target": "crush",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "crush",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "impeach",
                            "action": "add-edge"
                          },
                          {
                            "source": "korean",
                            "target": "minister",
                            "action": "add-edge"
                          },
                          {
                            "source": "korean",
                            "target": "crush",
                            "action": "add-edge"
                          },
                          {
                            "source": "lawmakers",
                            "target": "crush",
                            "action": "add-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "troops",
                            "action": "add-edge"
                          },
                          {
                            "source": "kim",
                            "target": "troops",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "lawmakers",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "montreal",
                            "action": "add-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "korean",
                            "action": "add-edge"
                          },
                          {
                            "source": "kim",
                            "target": "korean",
                            "action": "add-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "montreal",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "visit",
                            "action": "add-edge"
                          },
                          {
                            "source": "visit",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "quebec",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "quebec",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "daycare",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastation",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastation",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "twitter",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "twitter",
                            "action": "add-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "supply",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "supply",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "refused",
                            "action": "add-edge"
                          },
                          {
                            "source": "pentagon",
                            "target": "refused",
                            "action": "add-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "floating",
                            "action": "add-edge"
                          },
                          {
                            "source": "pacific",
                            "target": "floating",
                            "action": "add-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "floating",
                            "action": "add-edge"
                          },
                          {
                            "source": "charles",
                            "target": "stamps",
                            "action": "add-edge"
                          },
                          {
                            "source": "king",
                            "target": "stamps",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "jets",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "jets",
                            "action": "add-edge"
                          },
                          {
                            "source": "rescue",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "australian",
                            "target": "indonesian",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "australian",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "indonesian",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "born",
                            "action": "add-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "born",
                            "action": "add-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "downed",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "downed",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "downed",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "injured",
                            "action": "add-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "injured",
                            "action": "add-edge"
                          },
                          {
                            "source": "children",
                            "target": "injured",
                            "action": "add-edge"
                          },
                          {
                            "source": "visit",
                            "target": "surprise",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "surprise",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "tons",
                            "action": "add-edge"
                          },
                          {
                            "source": "korean",
                            "target": "troops",
                            "action": "add-edge"
                          },
                          {
                            "source": "jets",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "quebec",
                            "action": "add-edge"
                          },
                          {
                            "source": "james",
                            "target": "scoring",
                            "action": "add-edge"
                          },
                          {
                            "source": "nba",
                            "target": "scoring",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "supply",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "sunak",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "sunak",
                            "action": "add-edge"
                          },
                          {
                            "source": "nichols",
                            "target": "officer",
                            "action": "add-edge"
                          },
                          {
                            "source": "nichols",
                            "target": "tyre",
                            "action": "add-edge"
                          },
                          {
                            "source": "officer",
                            "target": "tyre",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deadliest",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "refused",
                            "action": "add-edge"
                          },
                          {
                            "source": "photos",
                            "target": "nichols",
                            "action": "add-edge"
                          },
                          {
                            "source": "photos",
                            "target": "tyre",
                            "action": "add-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "vladimir",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "vladimir",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "trafficking",
                            "action": "add-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "downing",
                            "action": "add-edge"
                          },
                          {
                            "source": "probe",
                            "target": "downing",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "criticism",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "criticism",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "criticism",
                            "action": "add-edge"
                          },
                          {
                            "id": "charles",
                            "weight": 13,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "tyre",
                            "weight": 5,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "impeach",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "criticism",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "deadliest",
                            "weight": 13,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "missile",
                            "weight": 20,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "montreal",
                            "weight": 8,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "hope",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "vladimir",
                            "weight": 5,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "sunak",
                            "weight": 10,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 9,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "born",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "crashes",
                            "weight": 12,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "pentagon",
                            "weight": 11,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "tons",
                            "weight": 6,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesian",
                            "weight": 6,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "trafficking",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "supply",
                            "weight": 5,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "pacific",
                            "weight": 10,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "downed",
                            "weight": 6,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "republicans",
                            "weight": 11,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "lawmakers",
                            "weight": 9,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "devastation",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "korean",
                            "weight": 11,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "probe",
                            "weight": 13,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "king",
                            "weight": 14,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "mh17",
                            "weight": 25,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "surprise",
                            "weight": 5,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "lebron",
                            "weight": 10,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "daycare",
                            "weight": 9,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "cocaine",
                            "weight": 16,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "quebec",
                            "weight": 5,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "visit",
                            "weight": 16,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "james",
                            "weight": 9,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "stamps",
                            "weight": 5,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "smeared",
                            "weight": 6,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "nba",
                            "weight": 8,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "crush",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 27,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "kim",
                            "weight": 12,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "jets",
                            "weight": 13,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "jong",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "injured",
                            "weight": 7,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "troops",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "ocean",
                            "weight": 12,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "refused",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "nichols",
                            "weight": 6,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "downing",
                            "weight": 8,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "floating",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "rises",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 15,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "scoring",
                            "weight": 5,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "minister",
                            "weight": 11,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "daughter",
                            "weight": 15,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "australian",
                            "weight": 6,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "THU FEB 09 2023"
                          },
                          {
                            "id": "pentagon",
                            "weight": 11,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "union",
                            "weight": 30,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "killed",
                            "weight": 10,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "devastation",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "zealand",
                            "weight": 13,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "australian",
                            "weight": 6,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "rises",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "children",
                            "weight": 16,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "nichols",
                            "weight": 6,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "james",
                            "weight": 9,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "born",
                            "weight": 6,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "vladimir",
                            "weight": 5,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "state",
                            "weight": 14,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "pacific",
                            "weight": 10,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "impeach",
                            "weight": 7,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "crashes",
                            "weight": 12,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "korean",
                            "weight": 11,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "quebec",
                            "weight": 5,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "smeared",
                            "weight": 6,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "daycare",
                            "weight": 9,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "floating",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "cocaine",
                            "weight": 16,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "address",
                            "weight": 11,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "speech",
                            "weight": 19,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 9,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "rescue",
                            "weight": 19,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "sanctions",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "deadliest",
                            "weight": 13,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "ocean",
                            "weight": 12,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "mh17",
                            "weight": 25,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "nba",
                            "weight": 8,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "supply",
                            "weight": 5,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "refused",
                            "weight": 5,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "deaths",
                            "weight": 11,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "tons",
                            "weight": 6,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "lebron",
                            "weight": 10,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 27,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "scoring",
                            "weight": 5,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "probe",
                            "weight": 13,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "officer",
                            "weight": 5,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "montreal",
                            "weight": 8,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "charles",
                            "weight": 13,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "troops",
                            "weight": 7,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "photos",
                            "weight": 11,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "police",
                            "weight": 15,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "criticism",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "bus",
                            "weight": 18,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "king",
                            "weight": 14,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "sunak",
                            "weight": 10,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "injured",
                            "weight": 7,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "tyre",
                            "weight": 5,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "republicans",
                            "weight": 11,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "downing",
                            "weight": 8,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "downed",
                            "weight": 6,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "lawmakers",
                            "weight": 9,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesian",
                            "weight": 6,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "joe",
                            "weight": 14,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "stamps",
                            "weight": 5,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "minister",
                            "weight": 11,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "missile",
                            "weight": 20,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "trafficking",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "surprise",
                            "weight": 5,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "congress",
                            "weight": 8,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "crush",
                            "weight": 7,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "source": "mh17",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "mh17",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "speech",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "union",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "speech",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "joe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "joe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "state",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "state",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "china",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "ocean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "pacific",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "pacific",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "children",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "crashes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "crashes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "address",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "address",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deadliest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deadliest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "speech",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lebron",
                            "target": "james",
                            "action": "remove-edge"
                          },
                          {
                            "source": "james",
                            "target": "nba",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lebron",
                            "target": "nba",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "pentagon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "pentagon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "pentagon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "republicans",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "republicans",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "deaths",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deaths",
                            "action": "remove-edge"
                          },
                          {
                            "source": "state",
                            "target": "address",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "tons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pacific",
                            "target": "tons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "tons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "zealand",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "ocean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "speech",
                            "target": "smeared",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "smeared",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "smeared",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "smeared",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "probe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "probe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "daycare",
                            "action": "remove-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "daycare",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "montreal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "daycare",
                            "target": "montreal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "king",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "king",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "hope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "king",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "deadliest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "deadliest",
                            "target": "deaths",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korean",
                            "target": "impeach",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lawmakers",
                            "target": "impeach",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korean",
                            "target": "lawmakers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "balloon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "pacific",
                            "action": "remove-edge"
                          },
                          {
                            "source": "impeach",
                            "target": "crush",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "crush",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "impeach",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korean",
                            "target": "minister",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korean",
                            "target": "crush",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lawmakers",
                            "target": "crush",
                            "action": "remove-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "troops",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kim",
                            "target": "troops",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "lawmakers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "montreal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "daughter",
                            "target": "korean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kim",
                            "target": "korean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "montreal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "visit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "visit",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "quebec",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "quebec",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "daycare",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "devastation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "devastation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "supply",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "supply",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deaths",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "refused",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pentagon",
                            "target": "refused",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cocaine",
                            "target": "floating",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pacific",
                            "target": "floating",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aid",
                            "target": "sanctions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "sanctions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ocean",
                            "target": "floating",
                            "action": "remove-edge"
                          },
                          {
                            "source": "charles",
                            "target": "stamps",
                            "action": "remove-edge"
                          },
                          {
                            "source": "king",
                            "target": "stamps",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "union",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rescue",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "australian",
                            "target": "indonesian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "australian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "indonesian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "born",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rubble",
                            "target": "born",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "downed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "downed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "downed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "injured",
                            "action": "remove-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "injured",
                            "action": "remove-edge"
                          },
                          {
                            "source": "children",
                            "target": "injured",
                            "action": "remove-edge"
                          },
                          {
                            "source": "visit",
                            "target": "surprise",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "surprise",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "tons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korean",
                            "target": "troops",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jets",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "crashes",
                            "target": "quebec",
                            "action": "remove-edge"
                          },
                          {
                            "source": "james",
                            "target": "scoring",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nba",
                            "target": "scoring",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "supply",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "sunak",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "sunak",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nichols",
                            "target": "officer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nichols",
                            "target": "tyre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "officer",
                            "target": "tyre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deadliest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "refused",
                            "action": "remove-edge"
                          },
                          {
                            "source": "photos",
                            "target": "nichols",
                            "action": "remove-edge"
                          },
                          {
                            "source": "photos",
                            "target": "tyre",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "vladimir",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "vladimir",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "trafficking",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mh17",
                            "target": "downing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "probe",
                            "target": "downing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "criticism",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "criticism",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "criticism",
                            "action": "remove-edge"
                          },
                          {
                            "id": "death",
                            "weight": 17,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 34,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "jong",
                            "weight": 16,
                            "cluster": 4,
                            "action": "update-node"
                          },
                          {
                            "id": "hope",
                            "weight": 9,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "daughter",
                            "weight": 10,
                            "cluster": 4,
                            "action": "update-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 29,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "visit",
                            "weight": 10,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 28,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "jets",
                            "weight": 11,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 22,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 27,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquakes",
                            "weight": 8,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "spy",
                            "weight": 24,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 27,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 17,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 12,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 37,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "kim",
                            "weight": 15,
                            "cluster": 4,
                            "action": "update-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 16,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "biden",
                            "weight": 22,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 14,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 16,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 36,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "jong",
                            "target": "parade",
                            "action": "add-edge"
                          },
                          {
                            "source": "kim",
                            "target": "parade",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "jong",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "kim",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "restaurant",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "restaurant",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "frees",
                            "action": "add-edge"
                          },
                          {
                            "source": "frees",
                            "target": "sends",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "sends",
                            "action": "add-edge"
                          },
                          {
                            "source": "frees",
                            "target": "prisoners",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "prisoners",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "political",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoners",
                            "target": "political",
                            "action": "add-edge"
                          },
                          {
                            "source": "frees",
                            "target": "political",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "eu",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "parade",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "restaurant",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "information",
                            "target": "beijing",
                            "action": "add-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "beijing",
                            "action": "add-edge"
                          },
                          {
                            "source": "information",
                            "target": "warfare",
                            "action": "add-edge"
                          },
                          {
                            "source": "beijing",
                            "target": "claims",
                            "action": "add-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "claims",
                            "action": "add-edge"
                          },
                          {
                            "source": "information",
                            "target": "claims",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "moldova",
                            "target": "intercepted",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "intercepted",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "moldova",
                            "action": "add-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "burt",
                            "action": "add-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "composer",
                            "action": "add-edge"
                          },
                          {
                            "source": "burt",
                            "target": "composer",
                            "action": "add-edge"
                          },
                          {
                            "source": "frees",
                            "target": "opponents",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "opponents",
                            "action": "add-edge"
                          },
                          {
                            "source": "sends",
                            "target": "opponents",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "summit",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "zelenskyy",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "summit",
                            "action": "add-edge"
                          },
                          {
                            "source": "jong",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "kim",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "parade",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "killing",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "killing",
                            "action": "add-edge"
                          },
                          {
                            "source": "killing",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "restaurant",
                            "target": "killing",
                            "action": "add-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "burt",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloons",
                            "target": "beijing",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloons",
                            "target": "claims",
                            "action": "add-edge"
                          },
                          {
                            "source": "information",
                            "target": "balloons",
                            "action": "add-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "balloons",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "destroy",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "destroy",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelenskyy",
                            "action": "add-edge"
                          },
                          {
                            "source": "destroy",
                            "target": "moldova",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "moldova",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "couples",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "sex",
                            "action": "add-edge"
                          },
                          {
                            "source": "sex",
                            "target": "couples",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "blessings",
                            "action": "add-edge"
                          },
                          {
                            "source": "couples",
                            "target": "blessings",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "intercepted",
                            "action": "add-edge"
                          },
                          {
                            "source": "destroy",
                            "target": "intercepted",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "parade",
                            "action": "add-edge"
                          },
                          {
                            "source": "australia",
                            "target": "cameras",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "australia",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "cameras",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "surveillance",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "surveillance",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "tour",
                            "action": "add-edge"
                          },
                          {
                            "source": "summit",
                            "target": "tour",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "visit",
                            "action": "add-edge"
                          },
                          {
                            "source": "visit",
                            "target": "summit",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "visit",
                            "action": "add-edge"
                          },
                          {
                            "source": "visit",
                            "target": "tour",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "tour",
                            "action": "add-edge"
                          },
                          {
                            "source": "aid",
                            "target": "convoy",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "convoy",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "erdogan",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "erdogan",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "communications",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "communications",
                            "action": "add-edge"
                          },
                          {
                            "source": "dead",
                            "target": "apartment",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "apartment",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "sex",
                            "target": "blessings",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "european",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "european",
                            "action": "add-edge"
                          },
                          {
                            "source": "parade",
                            "target": "daughter",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "xi",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "xi",
                            "action": "add-edge"
                          },
                          {
                            "source": "security",
                            "target": "cameras",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "security",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "communications",
                            "action": "add-edge"
                          },
                          {
                            "source": "hope",
                            "target": "families",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "families",
                            "action": "add-edge"
                          },
                          {
                            "source": "spy",
                            "target": "surveillance",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "brussels",
                            "action": "add-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "brussels",
                            "action": "add-edge"
                          },
                          {
                            "source": "dead",
                            "target": "bacharach",
                            "action": "add-edge"
                          },
                          {
                            "source": "dead",
                            "target": "burt",
                            "action": "add-edge"
                          },
                          {
                            "id": "xi",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 16,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "erdogan",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "communications",
                            "weight": 7,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "brussels",
                            "weight": 10,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "blessings",
                            "weight": 6,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "balloons",
                            "weight": 7,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "opponents",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 23,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "church",
                            "weight": 12,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "european",
                            "weight": 8,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "claims",
                            "weight": 7,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "frees",
                            "weight": 11,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "nicaragua",
                            "weight": 13,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "summit",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "composer",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "eu",
                            "weight": 22,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "security",
                            "weight": 14,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "sex",
                            "weight": 8,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "sends",
                            "weight": 8,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "intercepted",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "tour",
                            "weight": 5,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "apartment",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "beijing",
                            "weight": 7,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "dead",
                            "weight": 17,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "killing",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "dies",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 18,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "political",
                            "weight": 8,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "cameras",
                            "weight": 10,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "restaurant",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "moldova",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "surveillance",
                            "weight": 13,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "destroy",
                            "weight": 8,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "zelenskyy",
                            "weight": 19,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "couples",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "burt",
                            "weight": 12,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "warfare",
                            "weight": 8,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "convoy",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "australia",
                            "weight": 11,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 11,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "families",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "bacharach",
                            "weight": 12,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 9,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "parade",
                            "weight": 14,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "information",
                            "weight": 9,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "collapses",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "prisoners",
                            "weight": 11,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "FRI FEB 10 2023"
                          },
                          {
                            "id": "balloon",
                            "weight": 27,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 27,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "zelenskyy",
                            "weight": 19,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 29,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "surveillance",
                            "weight": 13,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "xi",
                            "weight": 5,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "jong",
                            "weight": 16,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "opponents",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "erdogan",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "parade",
                            "weight": 14,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "sex",
                            "weight": 8,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "intercepted",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "couples",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "sends",
                            "weight": 8,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 18,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "eu",
                            "weight": 22,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "communications",
                            "weight": 7,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "nicaragua",
                            "weight": 13,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "warfare",
                            "weight": 8,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 16,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "burt",
                            "weight": 12,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "killing",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "frees",
                            "weight": 11,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "visit",
                            "weight": 10,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "earthquakes",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "information",
                            "weight": 9,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "destroy",
                            "weight": 8,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "bacharach",
                            "weight": 12,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "dies",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 14,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 16,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "hope",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "security",
                            "weight": 14,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "apartment",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "spy",
                            "weight": 24,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "convoy",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "tour",
                            "weight": 5,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "restaurant",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 16,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "balloons",
                            "weight": 7,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "dead",
                            "weight": 17,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "daughter",
                            "weight": 10,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "political",
                            "weight": 8,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "brussels",
                            "weight": 10,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "prisoners",
                            "weight": 11,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "families",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "claims",
                            "weight": 7,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "cameras",
                            "weight": 10,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "composer",
                            "weight": 6,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "beijing",
                            "weight": 7,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 9,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "european",
                            "weight": 8,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "kim",
                            "weight": 15,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "summit",
                            "weight": 7,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "death",
                            "weight": 17,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "australia",
                            "weight": 11,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "blessings",
                            "weight": 6,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "source": "syria",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "balloon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "spy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "spy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jong",
                            "target": "kim",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jong",
                            "target": "parade",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kim",
                            "target": "parade",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "jong",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "kim",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "restaurant",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "restaurant",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jong",
                            "target": "daughter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kim",
                            "target": "daughter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "frees",
                            "action": "remove-edge"
                          },
                          {
                            "source": "frees",
                            "target": "sends",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "sends",
                            "action": "remove-edge"
                          },
                          {
                            "source": "frees",
                            "target": "prisoners",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "prisoners",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "political",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoners",
                            "target": "political",
                            "action": "remove-edge"
                          },
                          {
                            "source": "frees",
                            "target": "political",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "eu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "parade",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "restaurant",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "information",
                            "target": "beijing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "beijing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "information",
                            "target": "warfare",
                            "action": "remove-edge"
                          },
                          {
                            "source": "beijing",
                            "target": "claims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "claims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "information",
                            "target": "claims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "china",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "spy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moldova",
                            "target": "intercepted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "intercepted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "burt",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "composer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "burt",
                            "target": "composer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "frees",
                            "target": "opponents",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nicaragua",
                            "target": "opponents",
                            "action": "remove-edge"
                          },
                          {
                            "source": "sends",
                            "target": "opponents",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "jets",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "summit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "zelenskyy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "summit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jong",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kim",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "parade",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "killing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "killing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killing",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "restaurant",
                            "target": "killing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bacharach",
                            "target": "dies",
                            "action": "remove-edge"
                          },
                          {
                            "source": "burt",
                            "target": "dies",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloons",
                            "target": "beijing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloons",
                            "target": "claims",
                            "action": "remove-edge"
                          },
                          {
                            "source": "information",
                            "target": "balloons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warfare",
                            "target": "balloons",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "destroy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "destroy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelenskyy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "destroy",
                            "target": "moldova",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "moldova",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "couples",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "sex",
                            "action": "remove-edge"
                          },
                          {
                            "source": "sex",
                            "target": "couples",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "blessings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "couples",
                            "target": "blessings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "intercepted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "destroy",
                            "target": "intercepted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "parade",
                            "action": "remove-edge"
                          },
                          {
                            "source": "australia",
                            "target": "cameras",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "australia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "cameras",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "surveillance",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "surveillance",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "tour",
                            "action": "remove-edge"
                          },
                          {
                            "source": "summit",
                            "target": "tour",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "visit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "visit",
                            "target": "summit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "visit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "visit",
                            "target": "tour",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "tour",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aid",
                            "target": "convoy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "convoy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "erdogan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "erdogan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "communications",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "communications",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dead",
                            "target": "apartment",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "apartment",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "sex",
                            "target": "blessings",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "european",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelenskyy",
                            "target": "european",
                            "action": "remove-edge"
                          },
                          {
                            "source": "parade",
                            "target": "daughter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "biden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "xi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "xi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "twitter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "twitter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "earthquakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "earthquakes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "security",
                            "target": "cameras",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "security",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "communications",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hope",
                            "target": "families",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "families",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "hope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spy",
                            "target": "surveillance",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nuclear",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "brussels",
                            "action": "remove-edge"
                          },
                          {
                            "source": "zelensky",
                            "target": "brussels",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dead",
                            "target": "bacharach",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dead",
                            "target": "burt",
                            "action": "remove-edge"
                          },
                          {
                            "id": "rubble",
                            "weight": 14,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 17,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 29,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 14,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "biden",
                            "weight": 19,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "collapses",
                            "weight": 9,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 13,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 20,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "moldova",
                            "weight": 13,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 32,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 28,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 32,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 34,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "jets",
                            "weight": 12,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "church",
                            "weight": 9,
                            "cluster": 8,
                            "action": "update-node"
                          },
                          {
                            "source": "alaska",
                            "target": "altitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "high",
                            "target": "alaska",
                            "action": "add-edge"
                          },
                          {
                            "source": "high",
                            "target": "altitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "shoots",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "altitude",
                            "action": "add-edge"
                          },
                          {
                            "source": "high",
                            "target": "shoots",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "subpoenaed",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "trump",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "subpoenaed",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "poland",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "poland",
                            "action": "add-edge"
                          },
                          {
                            "source": "fbi",
                            "target": "classified",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "classified",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "fbi",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "attacks",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "attacks",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "ethiopia",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "social",
                            "action": "add-edge"
                          },
                          {
                            "source": "social",
                            "target": "ethiopia",
                            "action": "add-edge"
                          },
                          {
                            "source": "imf",
                            "target": "bailout",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bailout",
                            "action": "add-edge"
                          },
                          {
                            "source": "imf",
                            "target": "pakistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescues",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rescues",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "moldovan",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "resigns",
                            "action": "add-edge"
                          },
                          {
                            "source": "moldovan",
                            "target": "resigns",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "resigns",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "object",
                            "target": "flying",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "flying",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "object",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "moldova",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aftermath",
                            "action": "add-edge"
                          },
                          {
                            "source": "rescues",
                            "target": "aftermath",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "rescues",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "aftermath",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "aftermath",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescues",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescues",
                            "action": "add-edge"
                          },
                          {
                            "source": "ethiopia",
                            "target": "tensions",
                            "action": "add-edge"
                          },
                          {
                            "source": "social",
                            "target": "tensions",
                            "action": "add-edge"
                          },
                          {
                            "source": "church",
                            "target": "tensions",
                            "action": "add-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "troops",
                            "action": "add-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "wounding",
                            "action": "add-edge"
                          },
                          {
                            "source": "troops",
                            "target": "wounding",
                            "action": "add-edge"
                          },
                          {
                            "source": "moldovan",
                            "target": "collapses",
                            "action": "add-edge"
                          },
                          {
                            "source": "building",
                            "target": "flagged",
                            "action": "add-edge"
                          },
                          {
                            "source": "building",
                            "target": "policing",
                            "action": "add-edge"
                          },
                          {
                            "source": "policing",
                            "target": "flagged",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "poland",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "counsel",
                            "action": "add-edge"
                          },
                          {
                            "source": "subpoenaed",
                            "target": "counsel",
                            "action": "add-edge"
                          },
                          {
                            "source": "imf",
                            "target": "delays",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "delays",
                            "action": "add-edge"
                          },
                          {
                            "source": "bailout",
                            "target": "delays",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "jets",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "macron",
                            "target": "legion",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "legion",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "macron",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "brazil",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "lula",
                            "action": "add-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "lula",
                            "action": "add-edge"
                          },
                          {
                            "source": "subpoenaed",
                            "target": "probing",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "probing",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "probing",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "police",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "building",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "policing",
                            "action": "add-edge"
                          },
                          {
                            "source": "jets",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "wounding",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "flagged",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "troops",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "counsel",
                            "action": "add-edge"
                          },
                          {
                            "source": "drone",
                            "target": "strike",
                            "action": "add-edge"
                          },
                          {
                            "source": "drone",
                            "target": "yemen",
                            "action": "add-edge"
                          },
                          {
                            "source": "strike",
                            "target": "yemen",
                            "action": "add-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "cannabis",
                            "action": "add-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "district",
                            "action": "add-edge"
                          },
                          {
                            "source": "district",
                            "target": "cannabis",
                            "action": "add-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "red",
                            "action": "add-edge"
                          },
                          {
                            "source": "cannabis",
                            "target": "red",
                            "action": "add-edge"
                          },
                          {
                            "source": "strike",
                            "target": "campaign",
                            "action": "add-edge"
                          },
                          {
                            "source": "campaign",
                            "target": "yemen",
                            "action": "add-edge"
                          },
                          {
                            "source": "drone",
                            "target": "campaign",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "ramming",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "ramming",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "ramming",
                            "action": "add-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "object",
                            "action": "add-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "shot",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "object",
                            "action": "add-edge"
                          },
                          {
                            "source": "weighs",
                            "target": "legion",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "weighs",
                            "action": "add-edge"
                          },
                          {
                            "source": "macron",
                            "target": "french",
                            "action": "add-edge"
                          },
                          {
                            "source": "french",
                            "target": "weighs",
                            "action": "add-edge"
                          },
                          {
                            "source": "macron",
                            "target": "weighs",
                            "action": "add-edge"
                          },
                          {
                            "source": "object",
                            "target": "pentagon",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "pentagon",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "french",
                            "action": "add-edge"
                          },
                          {
                            "source": "french",
                            "target": "legion",
                            "action": "add-edge"
                          },
                          {
                            "source": "fighter",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "romania",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "romania",
                            "action": "add-edge"
                          },
                          {
                            "source": "jerusalem",
                            "target": "car",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "car",
                            "action": "add-edge"
                          },
                          {
                            "source": "jerusalem",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "poland",
                            "action": "add-edge"
                          },
                          {
                            "source": "classified",
                            "target": "probe",
                            "action": "add-edge"
                          },
                          {
                            "source": "pence",
                            "target": "probe",
                            "action": "add-edge"
                          },
                          {
                            "source": "fbi",
                            "target": "probe",
                            "action": "add-edge"
                          },
                          {
                            "id": "delays",
                            "weight": 6,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "subpoenaed",
                            "weight": 10,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "aftermath",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "lula",
                            "weight": 11,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "minister",
                            "weight": 13,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "yemen",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "pentagon",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "probing",
                            "weight": 5,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "alaska",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "social",
                            "weight": 9,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "wounding",
                            "weight": 5,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "amsterdam",
                            "weight": 11,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "rises",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "object",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bailout",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "cannabis",
                            "weight": 7,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "fbi",
                            "weight": 10,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 9,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "classified",
                            "weight": 9,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "drone",
                            "weight": 7,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "ethiopia",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "romania",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "high",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "probe",
                            "weight": 6,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 25,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "ramming",
                            "weight": 8,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 8,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "strike",
                            "weight": 6,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "brazil",
                            "weight": 12,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "french",
                            "weight": 7,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "flying",
                            "weight": 8,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "shoots",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "resigns",
                            "weight": 11,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "tensions",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "attacks",
                            "weight": 13,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 8,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "red",
                            "weight": 5,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "building",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "rescues",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 10,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "altitude",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "shot",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "counsel",
                            "weight": 5,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "weighs",
                            "weight": 5,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "troops",
                            "weight": 7,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "campaign",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "anniversary",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "policing",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "poland",
                            "weight": 9,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "moldovan",
                            "weight": 12,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 8,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "macron",
                            "weight": 12,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "imf",
                            "weight": 12,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "jerusalem",
                            "weight": 13,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "legion",
                            "weight": 5,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "flagged",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "killed",
                            "weight": 13,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "car",
                            "weight": 7,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "police",
                            "weight": 11,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "pence",
                            "weight": 13,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "trump",
                            "weight": 12,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "district",
                            "weight": 7,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "SAT FEB 11 2023"
                          },
                          {
                            "id": "drone",
                            "weight": 7,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "rescues",
                            "weight": 11,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "collapses",
                            "weight": 9,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "classified",
                            "weight": 9,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "bailout",
                            "weight": 7,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "church",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "imf",
                            "weight": 12,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 8,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 13,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "amsterdam",
                            "weight": 11,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "wounding",
                            "weight": 5,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "pentagon",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "flying",
                            "weight": 8,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "probe",
                            "weight": 6,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "aftermath",
                            "weight": 7,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "macron",
                            "weight": 12,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "french",
                            "weight": 7,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "troops",
                            "weight": 7,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "jerusalem",
                            "weight": 13,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "probing",
                            "weight": 5,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "subpoenaed",
                            "weight": 10,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "pence",
                            "weight": 13,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "brazil",
                            "weight": 12,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "killed",
                            "weight": 13,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "moldovan",
                            "weight": 12,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "altitude",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 8,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "counsel",
                            "weight": 5,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "legion",
                            "weight": 5,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "shoots",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "tensions",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "red",
                            "weight": 5,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "poland",
                            "weight": 9,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "strike",
                            "weight": 6,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "jets",
                            "weight": 12,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "flagged",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "biden",
                            "weight": 19,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "fbi",
                            "weight": 10,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "ramming",
                            "weight": 8,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "weighs",
                            "weight": 5,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "police",
                            "weight": 11,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "romania",
                            "weight": 7,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "minister",
                            "weight": 13,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "district",
                            "weight": 7,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "high",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "delays",
                            "weight": 6,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "yemen",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "campaign",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "alaska",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "attacks",
                            "weight": 13,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "building",
                            "weight": 8,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "cannabis",
                            "weight": 7,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "policing",
                            "weight": 5,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "moldova",
                            "weight": 13,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 9,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "car",
                            "weight": 7,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "social",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "ethiopia",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "trump",
                            "weight": 12,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "lula",
                            "weight": 11,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "source": "alaska",
                            "target": "altitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "high",
                            "target": "alaska",
                            "action": "remove-edge"
                          },
                          {
                            "source": "high",
                            "target": "altitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "shoots",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "altitude",
                            "action": "remove-edge"
                          },
                          {
                            "source": "high",
                            "target": "shoots",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "subpoenaed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "trump",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "subpoenaed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "poland",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "poland",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fbi",
                            "target": "classified",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "classified",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "fbi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "attacks",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "attacks",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "ethiopia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "social",
                            "action": "remove-edge"
                          },
                          {
                            "source": "social",
                            "target": "ethiopia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "imf",
                            "target": "bailout",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bailout",
                            "action": "remove-edge"
                          },
                          {
                            "source": "imf",
                            "target": "pakistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "aid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescues",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rescues",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "moldovan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "resigns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moldovan",
                            "target": "resigns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "minister",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "resigns",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "source": "object",
                            "target": "flying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "flying",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "object",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "moldova",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "moldova",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aftermath",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rescues",
                            "target": "aftermath",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rescues",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "aftermath",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aftermath",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "rescues",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescues",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ethiopia",
                            "target": "tensions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "social",
                            "target": "tensions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "church",
                            "target": "tensions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "troops",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "wounding",
                            "action": "remove-edge"
                          },
                          {
                            "source": "troops",
                            "target": "wounding",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moldovan",
                            "target": "collapses",
                            "action": "remove-edge"
                          },
                          {
                            "source": "building",
                            "target": "flagged",
                            "action": "remove-edge"
                          },
                          {
                            "source": "building",
                            "target": "policing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "policing",
                            "target": "flagged",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "poland",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "counsel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "subpoenaed",
                            "target": "counsel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "imf",
                            "target": "delays",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "delays",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bailout",
                            "target": "delays",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jets",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "jets",
                            "action": "remove-edge"
                          },
                          {
                            "source": "macron",
                            "target": "legion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "legion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "macron",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "brazil",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "lula",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "lula",
                            "action": "remove-edge"
                          },
                          {
                            "source": "subpoenaed",
                            "target": "probing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "probing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "probing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "police",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "building",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "policing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jets",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "toll",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "wounding",
                            "action": "remove-edge"
                          },
                          {
                            "source": "quake",
                            "target": "flagged",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "troops",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "counsel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drone",
                            "target": "strike",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drone",
                            "target": "yemen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "strike",
                            "target": "yemen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "cannabis",
                            "action": "remove-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "district",
                            "action": "remove-edge"
                          },
                          {
                            "source": "district",
                            "target": "cannabis",
                            "action": "remove-edge"
                          },
                          {
                            "source": "amsterdam",
                            "target": "red",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cannabis",
                            "target": "red",
                            "action": "remove-edge"
                          },
                          {
                            "source": "strike",
                            "target": "campaign",
                            "action": "remove-edge"
                          },
                          {
                            "source": "campaign",
                            "target": "yemen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drone",
                            "target": "campaign",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "ramming",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "ramming",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "ramming",
                            "action": "remove-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "object",
                            "action": "remove-edge"
                          },
                          {
                            "source": "alaska",
                            "target": "shot",
                            "action": "remove-edge"
                          },
                          {
                            "source": "weighs",
                            "target": "legion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "weighs",
                            "action": "remove-edge"
                          },
                          {
                            "source": "macron",
                            "target": "french",
                            "action": "remove-edge"
                          },
                          {
                            "source": "french",
                            "target": "weighs",
                            "action": "remove-edge"
                          },
                          {
                            "source": "macron",
                            "target": "weighs",
                            "action": "remove-edge"
                          },
                          {
                            "source": "object",
                            "target": "pentagon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "pentagon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "french",
                            "action": "remove-edge"
                          },
                          {
                            "source": "french",
                            "target": "legion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fighter",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "romania",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "romania",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jerusalem",
                            "target": "car",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "car",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jerusalem",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "poland",
                            "action": "remove-edge"
                          },
                          {
                            "source": "classified",
                            "target": "probe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pence",
                            "target": "probe",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fbi",
                            "target": "probe",
                            "action": "remove-edge"
                          },
                          {
                            "id": "rubble",
                            "weight": 13,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "shot",
                            "weight": 16,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 5,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 32,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 15,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "object",
                            "weight": 9,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 9,
                            "cluster": 4,
                            "action": "update-node"
                          },
                          {
                            "id": "rises",
                            "weight": 4,
                            "cluster": 9,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 13,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "russian",
                            "weight": 9,
                            "cluster": 8,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 19,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 16,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 30,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "resigns",
                            "weight": 7,
                            "cluster": 7,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 29,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "anniversary",
                            "weight": 11,
                            "cluster": 11,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 13,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 14,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "source": "mayor",
                            "target": "staffer",
                            "action": "add-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "toronto",
                            "action": "add-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "staffer",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "islamic",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "revolution",
                            "action": "add-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "islamic",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "islamic",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "islamic",
                            "target": "anniversary",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "shot",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "trudeau",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "trudeau",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "object",
                            "action": "add-edge"
                          },
                          {
                            "source": "trudeau",
                            "target": "object",
                            "action": "add-edge"
                          },
                          {
                            "source": "anniversary",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "accused",
                            "target": "blasphemy",
                            "action": "add-edge"
                          },
                          {
                            "source": "accused",
                            "target": "lynches",
                            "action": "add-edge"
                          },
                          {
                            "source": "blasphemy",
                            "target": "lynches",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "unidentified",
                            "action": "add-edge"
                          },
                          {
                            "source": "trudeau",
                            "target": "unidentified",
                            "action": "add-edge"
                          },
                          {
                            "source": "accused",
                            "target": "mob",
                            "action": "add-edge"
                          },
                          {
                            "source": "accused",
                            "target": "pakistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "mob",
                            "action": "add-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "resigns",
                            "action": "add-edge"
                          },
                          {
                            "source": "staffer",
                            "target": "resigns",
                            "action": "add-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "resigns",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "argentina",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "argentina",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "women",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "wagner",
                            "action": "add-edge"
                          },
                          {
                            "source": "war",
                            "target": "wagner",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "blacklists",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "balloon",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "blacklists",
                            "action": "add-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "lynches",
                            "action": "add-edge"
                          },
                          {
                            "source": "lynches",
                            "target": "mob",
                            "action": "add-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "blasphemy",
                            "action": "add-edge"
                          },
                          {
                            "source": "blasphemy",
                            "target": "mob",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "add-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "birth",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "birth",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "birth",
                            "action": "add-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "communist",
                            "action": "add-edge"
                          },
                          {
                            "source": "germany",
                            "target": "communist",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "germany",
                            "action": "add-edge"
                          },
                          {
                            "source": "object",
                            "target": "unidentified",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "survivors",
                            "action": "add-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "affair",
                            "action": "add-edge"
                          },
                          {
                            "source": "staffer",
                            "target": "affair",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "years",
                            "action": "add-edge"
                          },
                          {
                            "source": "wagner",
                            "target": "years",
                            "action": "add-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "entities",
                            "action": "add-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "entities",
                            "action": "add-edge"
                          },
                          {
                            "source": "blacklists",
                            "target": "entities",
                            "action": "add-edge"
                          },
                          {
                            "source": "child",
                            "target": "bloodshed",
                            "action": "add-edge"
                          },
                          {
                            "source": "child",
                            "target": "palestinian",
                            "action": "add-edge"
                          },
                          {
                            "source": "child",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "palestinian",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "child",
                            "target": "israeli",
                            "action": "add-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "rises",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "finnish",
                            "target": "nato",
                            "action": "add-edge"
                          },
                          {
                            "source": "finnish",
                            "target": "sweden",
                            "action": "add-edge"
                          },
                          {
                            "source": "nato",
                            "target": "sweden",
                            "action": "add-edge"
                          },
                          {
                            "source": "finland",
                            "target": "finnish",
                            "action": "add-edge"
                          },
                          {
                            "source": "finland",
                            "target": "sweden",
                            "action": "add-edge"
                          },
                          {
                            "source": "finland",
                            "target": "nato",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "unidentified",
                            "action": "add-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "tory",
                            "action": "add-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "tory",
                            "action": "add-edge"
                          },
                          {
                            "source": "leader",
                            "target": "communist",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "leader",
                            "action": "add-edge"
                          },
                          {
                            "source": "germany",
                            "target": "leader",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "pressure",
                            "action": "add-edge"
                          },
                          {
                            "source": "pressure",
                            "target": "spacecraft",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "spacecraft",
                            "action": "add-edge"
                          },
                          {
                            "source": "apple",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "apple",
                            "action": "add-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "charles",
                            "target": "emblem",
                            "action": "add-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "emblem",
                            "action": "add-edge"
                          },
                          {
                            "source": "apple",
                            "target": "emblem",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "northern",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "northern",
                            "action": "add-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "affair",
                            "action": "add-edge"
                          },
                          {
                            "source": "rapper",
                            "target": "african",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "african",
                            "action": "add-edge"
                          },
                          {
                            "source": "shot",
                            "target": "rapper",
                            "action": "add-edge"
                          },
                          {
                            "source": "resigns",
                            "target": "affair",
                            "action": "add-edge"
                          },
                          {
                            "id": "nato",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "apple",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "northern",
                            "weight": 4,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "sweden",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "blacklists",
                            "weight": 8,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "birth",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "communist",
                            "weight": 6,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "wagner",
                            "weight": 8,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "finland",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "unidentified",
                            "weight": 8,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "leader",
                            "weight": 6,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "trudeau",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "staffer",
                            "weight": 11,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "lynches",
                            "weight": 6,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "african",
                            "weight": 6,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "blasphemy",
                            "weight": 8,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "accused",
                            "weight": 10,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "spacecraft",
                            "weight": 4,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "bloodshed",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "entities",
                            "weight": 5,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "emblem",
                            "weight": 4,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 16,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "coronation",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "mayor",
                            "weight": 14,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "rapper",
                            "weight": 6,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "dies",
                            "weight": 12,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "years",
                            "weight": 5,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "palestinian",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 15,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "rescue",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "revolution",
                            "weight": 15,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "mob",
                            "weight": 6,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "tory",
                            "weight": 5,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "germany",
                            "weight": 7,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "affair",
                            "weight": 6,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "toronto",
                            "weight": 12,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "protests",
                            "weight": 9,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "child",
                            "weight": 7,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "argentina",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "women",
                            "weight": 9,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 11,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "iran",
                            "weight": 16,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "death",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "finnish",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "charles",
                            "weight": 5,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "canada",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "islamic",
                            "weight": 12,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "pressure",
                            "weight": 5,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "action": "change-day",
                            "new_day": "SUN FEB 12 2023"
                          },
                          {
                            "id": "argentina",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "balloon",
                            "weight": 11,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "israeli",
                            "weight": 5,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "women",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "emblem",
                            "weight": 4,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "birth",
                            "weight": 7,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "rises",
                            "weight": 4,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "sweden",
                            "weight": 4,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "lynches",
                            "weight": 6,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "wagner",
                            "weight": 8,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "entities",
                            "weight": 5,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "rapper",
                            "weight": 6,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 13,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "accused",
                            "weight": 10,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "toronto",
                            "weight": 12,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "nato",
                            "weight": 4,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "african",
                            "weight": 6,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "dies",
                            "weight": 12,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "death",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "coronation",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "blacklists",
                            "weight": 8,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "palestinian",
                            "weight": 5,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "staffer",
                            "weight": 11,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "finnish",
                            "weight": 4,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "survivors",
                            "weight": 16,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "northern",
                            "weight": 4,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "charles",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "blasphemy",
                            "weight": 8,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "chinese",
                            "weight": 15,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "mayor",
                            "weight": 14,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "revolution",
                            "weight": 15,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "mob",
                            "weight": 6,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "affair",
                            "weight": 6,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "tory",
                            "weight": 5,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "protests",
                            "weight": 9,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "finland",
                            "weight": 4,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "child",
                            "weight": 7,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "islamic",
                            "weight": 12,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 16,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "anniversary",
                            "weight": 11,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "apple",
                            "weight": 5,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "pressure",
                            "weight": 5,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "resigns",
                            "weight": 7,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "leader",
                            "weight": 6,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "bloodshed",
                            "weight": 5,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "spacecraft",
                            "weight": 4,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "years",
                            "weight": 5,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "pakistan",
                            "weight": 9,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "communist",
                            "weight": 6,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "source": "mayor",
                            "target": "staffer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "toronto",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "staffer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "islamic",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "revolution",
                            "action": "remove-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "islamic",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "islamic",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "revolution",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "islamic",
                            "target": "anniversary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "source": "anniversary",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "accused",
                            "target": "blasphemy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "accused",
                            "target": "lynches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "blasphemy",
                            "target": "lynches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trudeau",
                            "target": "unidentified",
                            "action": "remove-edge"
                          },
                          {
                            "source": "accused",
                            "target": "mob",
                            "action": "remove-edge"
                          },
                          {
                            "source": "accused",
                            "target": "pakistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "mob",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "resigns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "staffer",
                            "target": "resigns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "resigns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "argentina",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "argentina",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "women",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "wagner",
                            "action": "remove-edge"
                          },
                          {
                            "source": "war",
                            "target": "wagner",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "blacklists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "balloon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "blacklists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "aid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "lynches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lynches",
                            "target": "mob",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pakistan",
                            "target": "blasphemy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "blasphemy",
                            "target": "mob",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toll",
                            "target": "death",
                            "action": "remove-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "birth",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "birth",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "birth",
                            "action": "remove-edge"
                          },
                          {
                            "source": "syria",
                            "target": "rescue",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dies",
                            "target": "communist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "germany",
                            "target": "communist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dies",
                            "target": "germany",
                            "action": "remove-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "survivors",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "affair",
                            "action": "remove-edge"
                          },
                          {
                            "source": "staffer",
                            "target": "affair",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "years",
                            "action": "remove-edge"
                          },
                          {
                            "source": "wagner",
                            "target": "years",
                            "action": "remove-edge"
                          },
                          {
                            "source": "balloon",
                            "target": "entities",
                            "action": "remove-edge"
                          },
                          {
                            "source": "chinese",
                            "target": "entities",
                            "action": "remove-edge"
                          },
                          {
                            "source": "blacklists",
                            "target": "entities",
                            "action": "remove-edge"
                          },
                          {
                            "source": "child",
                            "target": "bloodshed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "child",
                            "target": "palestinian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "child",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "palestinian",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "child",
                            "target": "israeli",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israeli",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bloodshed",
                            "target": "rises",
                            "action": "remove-edge"
                          },
                          {
                            "source": "finnish",
                            "target": "nato",
                            "action": "remove-edge"
                          },
                          {
                            "source": "finnish",
                            "target": "sweden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nato",
                            "target": "sweden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "finland",
                            "target": "finnish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "finland",
                            "target": "sweden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "finland",
                            "target": "nato",
                            "action": "remove-edge"
                          },
                          {
                            "source": "mayor",
                            "target": "tory",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "tory",
                            "action": "remove-edge"
                          },
                          {
                            "source": "leader",
                            "target": "communist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dies",
                            "target": "leader",
                            "action": "remove-edge"
                          },
                          {
                            "source": "germany",
                            "target": "leader",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "pressure",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pressure",
                            "target": "spacecraft",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "spacecraft",
                            "action": "remove-edge"
                          },
                          {
                            "source": "apple",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "apple",
                            "action": "remove-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "charles",
                            "target": "emblem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "coronation",
                            "target": "emblem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "apple",
                            "target": "emblem",
                            "action": "remove-edge"
                          },
                          {
                            "source": "canada",
                            "target": "northern",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shot",
                            "target": "northern",
                            "action": "remove-edge"
                          },
                          {
                            "source": "toronto",
                            "target": "affair",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rapper",
                            "target": "african",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shot",
                            "target": "african",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shot",
                            "target": "rapper",
                            "action": "remove-edge"
                          },
                          {
                            "source": "resigns",
                            "target": "affair",
                            "action": "remove-edge"
                          },
                          {
                            "id": "rescue",
                            "weight": 10,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "earthquake",
                            "weight": 31,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 19,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "shot",
                            "weight": 16,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "toll",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 10,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "aid",
                            "weight": 12,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "syria",
                            "weight": 23,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "quake",
                            "weight": 15,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "germany",
                            "weight": 5,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "turkey",
                            "weight": 33,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "canada",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 22,
                            "cluster": 6,
                            "action": "update-node"
                          },
                          {
                            "id": "trudeau",
                            "weight": 11,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "object",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "unidentified",
                            "weight": 14,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "source": "building",
                            "target": "contractors",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "building",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "contractors",
                            "action": "add-edge"
                          },
                          {
                            "source": "cyclone",
                            "target": "gabrielle",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "cyclone",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "gabrielle",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "shell",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "shell",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "grinding",
                            "action": "add-edge"
                          },
                          {
                            "source": "grinding",
                            "target": "shell",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "grinding",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "continues",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "continues",
                            "action": "add-edge"
                          },
                          {
                            "source": "shell",
                            "target": "continues",
                            "action": "add-edge"
                          },
                          {
                            "source": "grinding",
                            "target": "continues",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "quake",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "contractors",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "building",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "shoots",
                            "action": "add-edge"
                          },
                          {
                            "source": "object",
                            "target": "shoots",
                            "action": "add-edge"
                          },
                          {
                            "source": "canada",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "object",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "cyclone",
                            "target": "cancels",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "cancels",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "refugees",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "refugees",
                            "action": "add-edge"
                          },
                          {
                            "source": "building",
                            "target": "arrests",
                            "action": "add-edge"
                          },
                          {
                            "source": "contractors",
                            "target": "arrests",
                            "action": "add-edge"
                          },
                          {
                            "source": "spain",
                            "target": "healthcare",
                            "action": "add-edge"
                          },
                          {
                            "source": "thousands",
                            "target": "healthcare",
                            "action": "add-edge"
                          },
                          {
                            "source": "thousands",
                            "target": "spain",
                            "action": "add-edge"
                          },
                          {
                            "source": "bishop",
                            "target": "nicaraguan",
                            "action": "add-edge"
                          },
                          {
                            "source": "bishop",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaraguan",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "source": "bishop",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "sentenced",
                            "action": "add-edge"
                          },
                          {
                            "source": "cyclone",
                            "target": "deluge",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "deluge",
                            "action": "add-edge"
                          },
                          {
                            "source": "nicaraguan",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "cancels",
                            "target": "deluge",
                            "action": "add-edge"
                          },
                          {
                            "source": "diplomacy",
                            "target": "greek",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "diplomacy",
                            "action": "add-edge"
                          },
                          {
                            "source": "minister",
                            "target": "greek",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "diplomacy",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "minister",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "greek",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "tragedy",
                            "action": "add-edge"
                          },
                          {
                            "source": "refugees",
                            "target": "tragedy",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "tragedy",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "arrests",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "raisi",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "visit",
                            "action": "add-edge"
                          },
                          {
                            "source": "raisi",
                            "target": "visit",
                            "action": "add-edge"
                          },
                          {
                            "source": "contractors",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "turkey",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "drills",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "sea",
                            "action": "add-edge"
                          },
                          {
                            "source": "drills",
                            "target": "sea",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "lake",
                            "target": "huron",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "huron",
                            "action": "add-edge"
                          },
                          {
                            "source": "shoots",
                            "target": "lake",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "contractors",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "germany",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "visa",
                            "action": "add-edge"
                          },
                          {
                            "source": "visa",
                            "target": "germany",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "victims",
                            "action": "add-edge"
                          },
                          {
                            "source": "victims",
                            "target": "germany",
                            "action": "add-edge"
                          },
                          {
                            "source": "victims",
                            "target": "visa",
                            "action": "add-edge"
                          },
                          {
                            "source": "spain",
                            "target": "madrid",
                            "action": "add-edge"
                          },
                          {
                            "source": "thousands",
                            "target": "madrid",
                            "action": "add-edge"
                          },
                          {
                            "source": "madrid",
                            "target": "healthcare",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "delay",
                            "action": "add-edge"
                          },
                          {
                            "source": "delay",
                            "target": "overhaul",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "overhaul",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "netanyahu",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "overhaul",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "delay",
                            "action": "add-edge"
                          },
                          {
                            "source": "building",
                            "target": "deaths",
                            "action": "add-edge"
                          },
                          {
                            "source": "earthquake",
                            "target": "rescue",
                            "action": "add-edge"
                          },
                          {
                            "source": "cyclone",
                            "target": "island",
                            "action": "add-edge"
                          },
                          {
                            "source": "gabrielle",
                            "target": "island",
                            "action": "add-edge"
                          },
                          {
                            "source": "zealand",
                            "target": "island",
                            "action": "add-edge"
                          },
                          {
                            "source": "quake",
                            "target": "aid",
                            "action": "add-edge"
                          },
                          {
                            "source": "toll",
                            "target": "contractors",
                            "action": "add-edge"
                          },
                          {
                            "source": "airspace",
                            "target": "faa",
                            "action": "add-edge"
                          },
                          {
                            "source": "airspace",
                            "target": "montana",
                            "action": "add-edge"
                          },
                          {
                            "source": "montana",
                            "target": "faa",
                            "action": "add-edge"
                          },
                          {
                            "source": "montana",
                            "target": "anomaly",
                            "action": "add-edge"
                          },
                          {
                            "source": "anomaly",
                            "target": "radar",
                            "action": "add-edge"
                          },
                          {
                            "source": "montana",
                            "target": "radar",
                            "action": "add-edge"
                          },
                          {
                            "id": "gabrielle",
                            "weight": 10,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "tragedy",
                            "weight": 4,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "drills",
                            "weight": 4,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "overhaul",
                            "weight": 4,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "island",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "delay",
                            "weight": 4,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "grinding",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "visit",
                            "weight": 4,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "raisi",
                            "weight": 6,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "minister",
                            "weight": 9,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "deluge",
                            "weight": 4,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "anomaly",
                            "weight": 4,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "montana",
                            "weight": 9,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "madrid",
                            "weight": 6,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "israel",
                            "weight": 11,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "sea",
                            "weight": 4,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "radar",
                            "weight": 4,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "china",
                            "weight": 13,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "huron",
                            "weight": 6,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "netanyahu",
                            "weight": 6,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "nicaraguan",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "spain",
                            "weight": 7,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "shoots",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "lake",
                            "weight": 8,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "visa",
                            "weight": 5,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "shell",
                            "weight": 7,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "faa",
                            "weight": 4,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "healthcare",
                            "weight": 5,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "sentenced",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "cyclone",
                            "weight": 14,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "continues",
                            "weight": 6,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "pope",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "building",
                            "weight": 15,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "airspace",
                            "weight": 13,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "greek",
                            "weight": 4,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "refugees",
                            "weight": 6,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "victims",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "zealand",
                            "weight": 15,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "bishop",
                            "weight": 4,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "arrests",
                            "weight": 8,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "diplomacy",
                            "weight": 4,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "jet",
                            "weight": 8,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "deaths",
                            "weight": 7,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "thousands",
                            "weight": 8,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "cancels",
                            "weight": 5,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "contractors",
                            "weight": 14,
                            "cluster": 3,
                            "action": "add-node"
                          }
                        ]