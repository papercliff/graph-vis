const actionsWithDays = [
                          {
                            "action": "change-day",
                            "new_day": "Thu\n1"
                          },
                          {
                            "id": "china",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "covid",
                            "weight": 23,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "spain",
                            "weight": 19,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "protests",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "letter",
                            "weight": 13,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "bombs",
                            "weight": 13,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "letter",
                            "target": "bombs",
                            "action": "add-edge"
                          },
                          {
                            "source": "spain",
                            "target": "bombs",
                            "action": "add-edge"
                          },
                          {
                            "source": "spain",
                            "target": "letter",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Fri\n2"
                          },
                          {
                            "source": "spain",
                            "target": "letter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "spain",
                            "target": "bombs",
                            "action": "remove-edge"
                          },
                          {
                            "source": "letter",
                            "target": "bombs",
                            "action": "remove-edge"
                          },
                          {
                            "id": "bombs",
                            "weight": 13,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "letter",
                            "weight": 13,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "spain",
                            "weight": 19,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 30,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "covid",
                            "weight": 23,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "protests",
                            "weight": 18,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "biden",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ukrainian",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "oil",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "killed",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "eu",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "000",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "embassies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "cap",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "eyes",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "biden",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
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
                            "source": "killed",
                            "target": "000",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "000",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "killed",
                            "action": "add-edge"
                          },
                          {
                            "source": "embassies",
                            "target": "eyes",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "embassies",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "eyes",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "oil",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "oil",
                            "target": "eu",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sat\n3"
                          },
                          {
                            "source": "covid",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "oil",
                            "target": "eu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "oil",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "eyes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "embassies",
                            "action": "remove-edge"
                          },
                          {
                            "source": "embassies",
                            "target": "eyes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "killed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "000",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "000",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "id": "eyes",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "protests",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "cap",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "embassies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "000",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "eu",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "war",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "killed",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukrainian",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "covid",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 26,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "biden",
                            "weight": 27,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "oil",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russian",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "protest",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "support",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "russian",
                            "target": "oil",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "oil",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "protest",
                            "target": "support",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "support",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "protest",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sun\n4"
                          },
                          {
                            "source": "korea",
                            "target": "protest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "support",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protest",
                            "target": "support",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "oil",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "oil",
                            "action": "remove-edge"
                          },
                          {
                            "id": "support",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "protest",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "oil",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 25,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "protests",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "covid",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "police",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "china",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "morality",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 18,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "semeru",
                            "weight": 14,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "volcano",
                            "weight": 12,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "caspian",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "seals",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "erupts",
                            "weight": 10,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "coast",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "iran",
                            "target": "morality",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "police",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "morality",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "morality",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "caspian",
                            "action": "add-edge"
                          },
                          {
                            "source": "caspian",
                            "target": "seals",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "seals",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "coast",
                            "action": "add-edge"
                          },
                          {
                            "source": "seals",
                            "target": "coast",
                            "action": "add-edge"
                          },
                          {
                            "source": "caspian",
                            "target": "coast",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "china",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "police",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "semeru",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "volcano",
                            "action": "add-edge"
                          },
                          {
                            "source": "semeru",
                            "target": "volcano",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "erupts",
                            "action": "add-edge"
                          },
                          {
                            "source": "volcano",
                            "target": "erupts",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Mon\n5"
                          },
                          {
                            "source": "volcano",
                            "target": "erupts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "erupts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "semeru",
                            "target": "volcano",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "volcano",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "semeru",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "police",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "china",
                            "action": "remove-edge"
                          },
                          {
                            "source": "caspian",
                            "target": "coast",
                            "action": "remove-edge"
                          },
                          {
                            "source": "seals",
                            "target": "coast",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "coast",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "seals",
                            "action": "remove-edge"
                          },
                          {
                            "source": "caspian",
                            "target": "seals",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "caspian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "morality",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "id": "coast",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "erupts",
                            "weight": 10,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "seals",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "caspian",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "volcano",
                            "weight": 12,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "semeru",
                            "weight": 14,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 18,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "covid",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "protests",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 25,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "police",
                            "weight": 20,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "morality",
                            "weight": 18,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "oil",
                            "weight": 23,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "cap",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bridge",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "crimea",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "russian",
                            "target": "oil",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "oil",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "oil",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "russian",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "bridge",
                            "target": "crimea",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "bridge",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "crimea",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Tue\n6"
                          },
                          {
                            "source": "putin",
                            "target": "crimea",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "bridge",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bridge",
                            "target": "crimea",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "oil",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "morality",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "police",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "morality",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "oil",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "oil",
                            "action": "remove-edge"
                          },
                          {
                            "id": "crimea",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bridge",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "cap",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "morality",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "police",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "oil",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 29,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "marriage",
                            "weight": 29,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "china",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 27,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "sex",
                            "weight": 22,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "jazeera",
                            "weight": 20,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "drone",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "jiang",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "zemin",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "dies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "al",
                            "weight": 13,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "kirstie",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "abu",
                            "weight": 10,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "id": "icc",
                            "weight": 9,
                            "cluster": 10,
                            "action": "add-node"
                          },
                          {
                            "source": "marriage",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "sex",
                            "action": "add-edge"
                          },
                          {
                            "source": "marriage",
                            "target": "sex",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "jiang",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "zemin",
                            "action": "add-edge"
                          },
                          {
                            "source": "jiang",
                            "target": "zemin",
                            "action": "add-edge"
                          },
                          {
                            "source": "al",
                            "target": "abu",
                            "action": "add-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "abu",
                            "action": "add-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "al",
                            "action": "add-edge"
                          },
                          {
                            "source": "al",
                            "target": "icc",
                            "action": "add-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "icc",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "drone",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "drone",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "kirstie",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Wed\n7"
                          },
                          {
                            "source": "dies",
                            "target": "kirstie",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "drone",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "drone",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "icc",
                            "action": "remove-edge"
                          },
                          {
                            "source": "al",
                            "target": "icc",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "al",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jazeera",
                            "target": "abu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "al",
                            "target": "abu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jiang",
                            "target": "zemin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "zemin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "jiang",
                            "action": "remove-edge"
                          },
                          {
                            "source": "marriage",
                            "target": "sex",
                            "action": "remove-edge"
                          },
                          {
                            "source": "indonesia",
                            "target": "sex",
                            "action": "remove-edge"
                          },
                          {
                            "source": "marriage",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "id": "icc",
                            "weight": 9,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "abu",
                            "weight": 10,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "kirstie",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "al",
                            "weight": 13,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "dies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "zemin",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "jiang",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "drone",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "jazeera",
                            "weight": 20,
                            "cluster": 10,
                            "action": "remove-node"
                          },
                          {
                            "id": "sex",
                            "weight": 22,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 27,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "marriage",
                            "weight": 29,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 31,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 28,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "covid",
                            "weight": 33,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "peru",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "protests",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "president",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "georgia",
                            "weight": 17,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "warnock",
                            "weight": 17,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "congress",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "execution",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "runoff",
                            "weight": 12,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "walker",
                            "weight": 12,
                            "cluster": 0,
                            "action": "add-node"
                          },
                          {
                            "id": "zero",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "dissolves",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "public",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "runoff",
                            "action": "add-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "warnock",
                            "action": "add-edge"
                          },
                          {
                            "source": "warnock",
                            "target": "runoff",
                            "action": "add-edge"
                          },
                          {
                            "source": "peru",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "president",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "peru",
                            "target": "president",
                            "action": "add-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "walker",
                            "action": "add-edge"
                          },
                          {
                            "source": "warnock",
                            "target": "walker",
                            "action": "add-edge"
                          },
                          {
                            "source": "congress",
                            "target": "dissolves",
                            "action": "add-edge"
                          },
                          {
                            "source": "peru",
                            "target": "dissolves",
                            "action": "add-edge"
                          },
                          {
                            "source": "president",
                            "target": "dissolves",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "execution",
                            "target": "public",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "execution",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "public",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "zero",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "zero",
                            "action": "add-edge"
                          },
                          {
                            "source": "execution",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Thu\n8"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "execution",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "zero",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "zero",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "public",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "execution",
                            "action": "remove-edge"
                          },
                          {
                            "source": "execution",
                            "target": "public",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "president",
                            "target": "dissolves",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peru",
                            "target": "dissolves",
                            "action": "remove-edge"
                          },
                          {
                            "source": "congress",
                            "target": "dissolves",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warnock",
                            "target": "walker",
                            "action": "remove-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "walker",
                            "action": "remove-edge"
                          },
                          {
                            "source": "president",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peru",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warnock",
                            "target": "runoff",
                            "action": "remove-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "warnock",
                            "action": "remove-edge"
                          },
                          {
                            "source": "georgia",
                            "target": "runoff",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "remove-edge"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "public",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "dissolves",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "zero",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "walker",
                            "weight": 12,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "runoff",
                            "weight": 12,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "congress",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "warnock",
                            "weight": 17,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "georgia",
                            "weight": 17,
                            "cluster": 0,
                            "action": "remove-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "covid",
                            "weight": 33,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 39,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 31,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 26,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "putin",
                            "weight": 24,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "peru",
                            "weight": 22,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "protests",
                            "weight": 20,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "president",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "execution",
                            "weight": 15,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "prisoner",
                            "weight": 33,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "iran",
                            "weight": 32,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "griner",
                            "weight": 31,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "brittney",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 26,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "harry",
                            "weight": 21,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "meghan",
                            "weight": 19,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "swap",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "netflix",
                            "weight": 17,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "viktor",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "executes",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "freed",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "prince",
                            "weight": 13,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "documentary",
                            "weight": 11,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "ousted",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "griner",
                            "target": "brittney",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "brittney",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "griner",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "meghan",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "netflix",
                            "action": "add-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "netflix",
                            "action": "add-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "griner",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "iran",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "execution",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "execution",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "executes",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "executes",
                            "action": "add-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "freed",
                            "action": "add-edge"
                          },
                          {
                            "source": "griner",
                            "target": "freed",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "documentary",
                            "action": "add-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "documentary",
                            "action": "add-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "swap",
                            "action": "add-edge"
                          },
                          {
                            "source": "griner",
                            "target": "swap",
                            "action": "add-edge"
                          },
                          {
                            "source": "griner",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "executes",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "swap",
                            "action": "add-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "viktor",
                            "action": "add-edge"
                          },
                          {
                            "source": "griner",
                            "target": "viktor",
                            "action": "add-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "netflix",
                            "target": "documentary",
                            "action": "add-edge"
                          },
                          {
                            "source": "peru",
                            "target": "ousted",
                            "action": "add-edge"
                          },
                          {
                            "source": "president",
                            "target": "ousted",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "freed",
                            "action": "add-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "prince",
                            "action": "add-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "prince",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Fri\n9"
                          },
                          {
                            "source": "putin",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "prince",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "prince",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "freed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peru",
                            "target": "president",
                            "action": "remove-edge"
                          },
                          {
                            "source": "president",
                            "target": "ousted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peru",
                            "target": "ousted",
                            "action": "remove-edge"
                          },
                          {
                            "source": "netflix",
                            "target": "documentary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "viktor",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "viktor",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "swap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "executes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "swap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "swap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "documentary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "documentary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "freed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "freed",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "executes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "executes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "execution",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "execution",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prisoner",
                            "target": "iran",
                            "action": "remove-edge"
                          },
                          {
                            "source": "meghan",
                            "target": "netflix",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "netflix",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "meghan",
                            "action": "remove-edge"
                          },
                          {
                            "id": "ousted",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "documentary",
                            "weight": 11,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "prince",
                            "weight": 13,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "freed",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "executes",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "viktor",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "netflix",
                            "weight": 17,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "execution",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "president",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "swap",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "peru",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "meghan",
                            "weight": 19,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "harry",
                            "weight": 21,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "protests",
                            "weight": 32,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 32,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 34,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "prisoner",
                            "weight": 33,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "griner",
                            "weight": 31,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "brittney",
                            "weight": 30,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russian",
                            "weight": 26,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "putin",
                            "weight": 21,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 31,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "strike",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "italy",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "saudi",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "japan",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "arabia",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "jet",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "italy",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "japan",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "italy",
                            "target": "japan",
                            "action": "add-edge"
                          },
                          {
                            "source": "italy",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "japan",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "fighter",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "strike",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "strike",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "arabia",
                            "action": "add-edge"
                          },
                          {
                            "source": "saudi",
                            "target": "arabia",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "saudi",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sat\n10"
                          },
                          {
                            "source": "china",
                            "target": "saudi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "saudi",
                            "target": "arabia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "arabia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "strike",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "strike",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "griner",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "brittney",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fighter",
                            "target": "jet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "japan",
                            "target": "jet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "italy",
                            "target": "jet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "italy",
                            "target": "japan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "japan",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "italy",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "prisoner",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brittney",
                            "target": "prisoner",
                            "action": "remove-edge"
                          },
                          {
                            "source": "griner",
                            "target": "brittney",
                            "action": "remove-edge"
                          },
                          {
                            "id": "jet",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arabia",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "japan",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "saudi",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "italy",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "strike",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "war",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "prisoner",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "brittney",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "griner",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 31,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 32,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 34,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "qatar",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "nobel",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "hostage",
                            "weight": 14,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "german",
                            "weight": 14,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "hong",
                            "weight": 14,
                            "cluster": 12,
                            "action": "add-node"
                          },
                          {
                            "id": "kong",
                            "weight": 14,
                            "cluster": 12,
                            "action": "add-node"
                          },
                          {
                            "id": "dresden",
                            "weight": 13,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "dies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "lai",
                            "weight": 13,
                            "cluster": 12,
                            "action": "add-node"
                          },
                          {
                            "id": "prize",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "corruption",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "journalist",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "peru",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fraud",
                            "weight": 10,
                            "cluster": 12,
                            "action": "add-node"
                          },
                          {
                            "source": "hong",
                            "target": "kong",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "lai",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "lai",
                            "action": "add-edge"
                          },
                          {
                            "source": "german",
                            "target": "dresden",
                            "action": "add-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "dresden",
                            "action": "add-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "german",
                            "action": "add-edge"
                          },
                          {
                            "source": "hong",
                            "target": "fraud",
                            "action": "add-edge"
                          },
                          {
                            "source": "kong",
                            "target": "fraud",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "journalist",
                            "action": "add-edge"
                          },
                          {
                            "source": "qatar",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "qatar",
                            "target": "journalist",
                            "action": "add-edge"
                          },
                          {
                            "source": "corruption",
                            "target": "peru",
                            "action": "add-edge"
                          },
                          {
                            "source": "nobel",
                            "target": "prize",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "nobel",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "prize",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sun\n11"
                          },
                          {
                            "source": "ukraine",
                            "target": "prize",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "nobel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nobel",
                            "target": "prize",
                            "action": "remove-edge"
                          },
                          {
                            "source": "corruption",
                            "target": "peru",
                            "action": "remove-edge"
                          },
                          {
                            "source": "qatar",
                            "target": "journalist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "qatar",
                            "target": "dies",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dies",
                            "target": "journalist",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "fraud",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "fraud",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "german",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hostage",
                            "target": "dresden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "german",
                            "target": "dresden",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kong",
                            "target": "lai",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "lai",
                            "action": "remove-edge"
                          },
                          {
                            "source": "hong",
                            "target": "kong",
                            "action": "remove-edge"
                          },
                          {
                            "id": "fraud",
                            "weight": 10,
                            "cluster": 12,
                            "action": "remove-node"
                          },
                          {
                            "id": "peru",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "journalist",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "corruption",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "prize",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "lai",
                            "weight": 13,
                            "cluster": 12,
                            "action": "remove-node"
                          },
                          {
                            "id": "dies",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "dresden",
                            "weight": 13,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "kong",
                            "weight": 14,
                            "cluster": 12,
                            "action": "remove-node"
                          },
                          {
                            "id": "hong",
                            "weight": 14,
                            "cluster": 12,
                            "action": "remove-node"
                          },
                          {
                            "id": "german",
                            "weight": 14,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "hostage",
                            "weight": 14,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "nobel",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "qatar",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "lockerbie",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "custody",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "suspect",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "moon",
                            "weight": 16,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "nasa",
                            "weight": 16,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "orion",
                            "weight": 16,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "id": "bombing",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "capsule",
                            "weight": 12,
                            "cluster": 9,
                            "action": "add-node"
                          },
                          {
                            "source": "custody",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "bomb",
                            "action": "add-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "custody",
                            "action": "add-edge"
                          },
                          {
                            "source": "custody",
                            "target": "suspect",
                            "action": "add-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "suspect",
                            "action": "add-edge"
                          },
                          {
                            "source": "nasa",
                            "target": "capsule",
                            "action": "add-edge"
                          },
                          {
                            "source": "orion",
                            "target": "capsule",
                            "action": "add-edge"
                          },
                          {
                            "source": "nasa",
                            "target": "orion",
                            "action": "add-edge"
                          },
                          {
                            "source": "moon",
                            "target": "nasa",
                            "action": "add-edge"
                          },
                          {
                            "source": "moon",
                            "target": "orion",
                            "action": "add-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "suspect",
                            "action": "add-edge"
                          },
                          {
                            "source": "moon",
                            "target": "capsule",
                            "action": "add-edge"
                          },
                          {
                            "source": "custody",
                            "target": "bombing",
                            "action": "add-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "bombing",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Mon\n12"
                          },
                          {
                            "source": "lockerbie",
                            "target": "bombing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "custody",
                            "target": "bombing",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moon",
                            "target": "capsule",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bomb",
                            "target": "suspect",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moon",
                            "target": "orion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "moon",
                            "target": "nasa",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nasa",
                            "target": "orion",
                            "action": "remove-edge"
                          },
                          {
                            "source": "orion",
                            "target": "capsule",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nasa",
                            "target": "capsule",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "suspect",
                            "action": "remove-edge"
                          },
                          {
                            "source": "custody",
                            "target": "suspect",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "custody",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lockerbie",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "source": "custody",
                            "target": "bomb",
                            "action": "remove-edge"
                          },
                          {
                            "id": "capsule",
                            "weight": 12,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "bombing",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "orion",
                            "weight": 16,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "nasa",
                            "weight": 16,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "moon",
                            "weight": 16,
                            "cluster": 9,
                            "action": "remove-node"
                          },
                          {
                            "id": "suspect",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bomb",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "custody",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "lockerbie",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 32,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "protests",
                            "weight": 26,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "eu",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "peru",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "execution",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "parliament",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "corruption",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "elections",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "iran",
                            "target": "execution",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "execution",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "add-edge"
                          },
                          {
                            "source": "peru",
                            "target": "elections",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "elections",
                            "action": "add-edge"
                          },
                          {
                            "source": "protests",
                            "target": "peru",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "corruption",
                            "action": "add-edge"
                          },
                          {
                            "source": "parliament",
                            "target": "corruption",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "parliament",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Tue\n13"
                          },
                          {
                            "source": "eu",
                            "target": "parliament",
                            "action": "remove-edge"
                          },
                          {
                            "source": "parliament",
                            "target": "corruption",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "corruption",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "peru",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "elections",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peru",
                            "target": "elections",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "protests",
                            "action": "remove-edge"
                          },
                          {
                            "source": "protests",
                            "target": "execution",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "execution",
                            "action": "remove-edge"
                          },
                          {
                            "id": "elections",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "corruption",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "parliament",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "execution",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "peru",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "eu",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "protests",
                            "weight": 26,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 32,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "police",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bankman",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bahamas",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fusion",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ftx",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "energy",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "breakthrough",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "military",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "brazil",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bolsonaro",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "supporters",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "founder",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fried",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bts",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "jin",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "arrested",
                            "target": "bahamas",
                            "action": "add-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "bahamas",
                            "action": "add-edge"
                          },
                          {
                            "source": "bahamas",
                            "target": "ftx",
                            "action": "add-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "ftx",
                            "action": "add-edge"
                          },
                          {
                            "source": "arrested",
                            "target": "ftx",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "bolsonaro",
                            "action": "add-edge"
                          },
                          {
                            "source": "bolsonaro",
                            "target": "supporters",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "supporters",
                            "action": "add-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "founder",
                            "action": "add-edge"
                          },
                          {
                            "source": "ftx",
                            "target": "founder",
                            "action": "add-edge"
                          },
                          {
                            "source": "energy",
                            "target": "breakthrough",
                            "action": "add-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "breakthrough",
                            "action": "add-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "energy",
                            "action": "add-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "bolsonaro",
                            "action": "add-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "supporters",
                            "action": "add-edge"
                          },
                          {
                            "source": "police",
                            "target": "brazil",
                            "action": "add-edge"
                          },
                          {
                            "source": "breakthrough",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "nuclear",
                            "action": "add-edge"
                          },
                          {
                            "source": "bahamas",
                            "target": "founder",
                            "action": "add-edge"
                          },
                          {
                            "source": "arrested",
                            "target": "founder",
                            "action": "add-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "fried",
                            "action": "add-edge"
                          },
                          {
                            "source": "ftx",
                            "target": "fried",
                            "action": "add-edge"
                          },
                          {
                            "source": "bts",
                            "target": "jin",
                            "action": "add-edge"
                          },
                          {
                            "source": "military",
                            "target": "bts",
                            "action": "add-edge"
                          },
                          {
                            "source": "military",
                            "target": "jin",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Wed\n14"
                          },
                          {
                            "source": "military",
                            "target": "jin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "military",
                            "target": "bts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bts",
                            "target": "jin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ftx",
                            "target": "fried",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "fried",
                            "action": "remove-edge"
                          },
                          {
                            "source": "arrested",
                            "target": "founder",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bahamas",
                            "target": "founder",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "breakthrough",
                            "target": "nuclear",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "brazil",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "supporters",
                            "action": "remove-edge"
                          },
                          {
                            "source": "brazil",
                            "target": "bolsonaro",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "energy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fusion",
                            "target": "breakthrough",
                            "action": "remove-edge"
                          },
                          {
                            "source": "energy",
                            "target": "breakthrough",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ftx",
                            "target": "founder",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "founder",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "supporters",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bolsonaro",
                            "target": "supporters",
                            "action": "remove-edge"
                          },
                          {
                            "source": "police",
                            "target": "bolsonaro",
                            "action": "remove-edge"
                          },
                          {
                            "source": "arrested",
                            "target": "ftx",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "ftx",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bahamas",
                            "target": "ftx",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "bahamas",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bankman",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "arrested",
                            "target": "bahamas",
                            "action": "remove-edge"
                          },
                          {
                            "id": "jin",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bts",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fried",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "founder",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "supporters",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bolsonaro",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "brazil",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "military",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "nuclear",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "breakthrough",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "energy",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ftx",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fusion",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bahamas",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bankman",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "police",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 33,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "iran",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "women",
                            "weight": 23,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "rights",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "drones",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "iran",
                            "target": "rights",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "women",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "rights",
                            "action": "add-edge"
                          },
                          {
                            "source": "kyiv",
                            "target": "drones",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "drones",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Thu\n15"
                          },
                          {
                            "source": "ukraine",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "drones",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kyiv",
                            "target": "drones",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "rights",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "women",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "rights",
                            "action": "remove-edge"
                          },
                          {
                            "id": "drones",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "rights",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "women",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 33,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "killed",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "harry",
                            "weight": 16,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "musk",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "lebanon",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "warns",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "prince",
                            "weight": 12,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "boris",
                            "weight": 12,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "prison",
                            "weight": 12,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "jet",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "william",
                            "weight": 11,
                            "cluster": 14,
                            "action": "add-node"
                          },
                          {
                            "id": "irish",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "becker",
                            "weight": 11,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "warns",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "warns",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "prince",
                            "action": "add-edge"
                          },
                          {
                            "source": "harry",
                            "target": "william",
                            "action": "add-edge"
                          },
                          {
                            "source": "prince",
                            "target": "william",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "irish",
                            "action": "add-edge"
                          },
                          {
                            "source": "lebanon",
                            "target": "irish",
                            "action": "add-edge"
                          },
                          {
                            "source": "killed",
                            "target": "lebanon",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "warns",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "boris",
                            "target": "becker",
                            "action": "add-edge"
                          },
                          {
                            "source": "prison",
                            "target": "becker",
                            "action": "add-edge"
                          },
                          {
                            "source": "boris",
                            "target": "prison",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "jet",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "twitter",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Fri\n16"
                          },
                          {
                            "source": "twitter",
                            "target": "jet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "jet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "boris",
                            "target": "prison",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prison",
                            "target": "becker",
                            "action": "remove-edge"
                          },
                          {
                            "source": "boris",
                            "target": "becker",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warns",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "lebanon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "lebanon",
                            "target": "irish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killed",
                            "target": "irish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prince",
                            "target": "william",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "william",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harry",
                            "target": "prince",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "warns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "warns",
                            "action": "remove-edge"
                          },
                          {
                            "id": "becker",
                            "weight": 11,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "irish",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "william",
                            "weight": 11,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "jet",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "prison",
                            "weight": 12,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "boris",
                            "weight": 12,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "prince",
                            "weight": 12,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "warns",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "lebanon",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "harry",
                            "weight": 16,
                            "cluster": 14,
                            "action": "remove-node"
                          },
                          {
                            "id": "killed",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 36,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 24,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "musk",
                            "weight": 15,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 13,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 10,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "aquarium",
                            "weight": 28,
                            "cluster": 17,
                            "action": "add-node"
                          },
                          {
                            "id": "berlin",
                            "weight": 25,
                            "cluster": 17,
                            "action": "add-node"
                          },
                          {
                            "id": "fish",
                            "weight": 23,
                            "cluster": 17,
                            "action": "add-node"
                          },
                          {
                            "id": "missile",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "landslide",
                            "weight": 18,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "bursts",
                            "weight": 18,
                            "cluster": 17,
                            "action": "add-node"
                          },
                          {
                            "id": "attack",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "journalists",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "launches",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "suspends",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "elon",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "campsite",
                            "weight": 11,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "malaysian",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "source": "aquarium",
                            "target": "berlin",
                            "action": "add-edge"
                          },
                          {
                            "source": "aquarium",
                            "target": "fish",
                            "action": "add-edge"
                          },
                          {
                            "source": "berlin",
                            "target": "fish",
                            "action": "add-edge"
                          },
                          {
                            "source": "aquarium",
                            "target": "bursts",
                            "action": "add-edge"
                          },
                          {
                            "source": "berlin",
                            "target": "bursts",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "fish",
                            "target": "bursts",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "journalists",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "journalists",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "launches",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "launches",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "attack",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "attack",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "attack",
                            "action": "add-edge"
                          },
                          {
                            "source": "journalists",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "launches",
                            "action": "add-edge"
                          },
                          {
                            "source": "attack",
                            "target": "launches",
                            "action": "add-edge"
                          },
                          {
                            "source": "journalists",
                            "target": "suspends",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "suspends",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "suspends",
                            "action": "add-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "campsite",
                            "action": "add-edge"
                          },
                          {
                            "source": "campsite",
                            "target": "malaysian",
                            "action": "add-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "malaysian",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sat\n17"
                          },
                          {
                            "source": "landslide",
                            "target": "malaysian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "campsite",
                            "target": "malaysian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "campsite",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "suspends",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "suspends",
                            "action": "remove-edge"
                          },
                          {
                            "source": "journalists",
                            "target": "suspends",
                            "action": "remove-edge"
                          },
                          {
                            "source": "attack",
                            "target": "launches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "launches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "journalists",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "attack",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "attack",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "attack",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "launches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "launches",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "musk",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "journalists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "journalists",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fish",
                            "target": "bursts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "berlin",
                            "target": "bursts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aquarium",
                            "target": "bursts",
                            "action": "remove-edge"
                          },
                          {
                            "source": "berlin",
                            "target": "fish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aquarium",
                            "target": "fish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "aquarium",
                            "target": "berlin",
                            "action": "remove-edge"
                          },
                          {
                            "id": "malaysian",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "campsite",
                            "weight": 11,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "elon",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "suspends",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "launches",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "journalists",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "musk",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "attack",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bursts",
                            "weight": 18,
                            "cluster": 17,
                            "action": "remove-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "missile",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fish",
                            "weight": 23,
                            "cluster": 17,
                            "action": "remove-node"
                          },
                          {
                            "id": "berlin",
                            "weight": 25,
                            "cluster": 17,
                            "action": "remove-node"
                          },
                          {
                            "id": "aquarium",
                            "weight": 28,
                            "cluster": 17,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 29,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 32,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "landslide",
                            "weight": 18,
                            "cluster": 3,
                            "action": "update-node"
                          },
                          {
                            "id": "russian",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "malaysia",
                            "weight": 16,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "id": "iran",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "actress",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "arrest",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "oscar",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "toll",
                            "weight": 10,
                            "cluster": 3,
                            "action": "add-node"
                          },
                          {
                            "source": "russian",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "rubble",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "arrest",
                            "action": "add-edge"
                          },
                          {
                            "source": "arrest",
                            "target": "oscar",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "oscar",
                            "action": "add-edge"
                          },
                          {
                            "source": "actress",
                            "target": "arrest",
                            "action": "add-edge"
                          },
                          {
                            "source": "iran",
                            "target": "actress",
                            "action": "add-edge"
                          },
                          {
                            "source": "actress",
                            "target": "oscar",
                            "action": "add-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "malaysia",
                            "action": "add-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "source": "malaysia",
                            "target": "toll",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sun\n18"
                          },
                          {
                            "source": "malaysia",
                            "target": "toll",
                            "action": "remove-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "toll",
                            "action": "remove-edge"
                          },
                          {
                            "source": "landslide",
                            "target": "malaysia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "actress",
                            "target": "oscar",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "actress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "actress",
                            "target": "arrest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "oscar",
                            "action": "remove-edge"
                          },
                          {
                            "source": "arrest",
                            "target": "oscar",
                            "action": "remove-edge"
                          },
                          {
                            "source": "iran",
                            "target": "arrest",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russian",
                            "target": "rubble",
                            "action": "remove-edge"
                          },
                          {
                            "id": "toll",
                            "weight": 10,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "oscar",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arrest",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "rubble",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "actress",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "iran",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "malaysia",
                            "weight": 16,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "landslide",
                            "weight": 18,
                            "cluster": 3,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 26,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "argentina",
                            "weight": 22,
                            "cluster": 13,
                            "action": "add-node"
                          },
                          {
                            "id": "ballistic",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "france",
                            "weight": 19,
                            "cluster": 13,
                            "action": "add-node"
                          },
                          {
                            "id": "messi",
                            "weight": 19,
                            "cluster": 13,
                            "action": "add-node"
                          },
                          {
                            "id": "final",
                            "weight": 17,
                            "cluster": 13,
                            "action": "add-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "missile",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fires",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "pope",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "resignation",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "health",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "lionel",
                            "weight": 9,
                            "cluster": 13,
                            "action": "add-node"
                          },
                          {
                            "source": "ballistic",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "ballistic",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "final",
                            "action": "add-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "france",
                            "action": "add-edge"
                          },
                          {
                            "source": "france",
                            "target": "final",
                            "action": "add-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "health",
                            "action": "add-edge"
                          },
                          {
                            "source": "resignation",
                            "target": "health",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "resignation",
                            "action": "add-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "messi",
                            "action": "add-edge"
                          },
                          {
                            "source": "france",
                            "target": "messi",
                            "action": "add-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "lionel",
                            "action": "add-edge"
                          },
                          {
                            "source": "messi",
                            "target": "lionel",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Mon\n19"
                          },
                          {
                            "source": "messi",
                            "target": "lionel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "lionel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "france",
                            "target": "messi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "messi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "resignation",
                            "action": "remove-edge"
                          },
                          {
                            "source": "resignation",
                            "target": "health",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "health",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "france",
                            "target": "final",
                            "action": "remove-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "france",
                            "action": "remove-edge"
                          },
                          {
                            "source": "argentina",
                            "target": "final",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "ballistic",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "id": "lionel",
                            "weight": 9,
                            "cluster": 13,
                            "action": "remove-node"
                          },
                          {
                            "id": "health",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "resignation",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "pope",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fires",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "missile",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "final",
                            "weight": 17,
                            "cluster": 13,
                            "action": "remove-node"
                          },
                          {
                            "id": "messi",
                            "weight": 19,
                            "cluster": 13,
                            "action": "remove-node"
                          },
                          {
                            "id": "france",
                            "weight": 19,
                            "cluster": 13,
                            "action": "remove-node"
                          },
                          {
                            "id": "ballistic",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "argentina",
                            "weight": 22,
                            "cluster": 13,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 26,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "belarus",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 29,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 25,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "musk",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "eu",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "elon",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "court",
                            "weight": 17,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "rwanda",
                            "weight": 17,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "asylum",
                            "weight": 14,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "seekers",
                            "weight": 13,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "vote",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "gas",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ceo",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "cap",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "satellite",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "spy",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "musk",
                            "action": "add-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "ukraine",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "ukraine",
                            "action": "add-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "kyiv",
                            "action": "add-edge"
                          },
                          {
                            "source": "rwanda",
                            "target": "asylum",
                            "action": "add-edge"
                          },
                          {
                            "source": "asylum",
                            "target": "seekers",
                            "action": "add-edge"
                          },
                          {
                            "source": "rwanda",
                            "target": "seekers",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "ceo",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "ceo",
                            "action": "add-edge"
                          },
                          {
                            "source": "elon",
                            "target": "ceo",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "asylum",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "rwanda",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "seekers",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "gas",
                            "target": "cap",
                            "action": "add-edge"
                          },
                          {
                            "source": "eu",
                            "target": "gas",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "satellite",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "spy",
                            "action": "add-edge"
                          },
                          {
                            "source": "satellite",
                            "target": "spy",
                            "action": "add-edge"
                          },
                          {
                            "source": "elon",
                            "target": "vote",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "vote",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "vote",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Tue\n20"
                          },
                          {
                            "source": "twitter",
                            "target": "vote",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "vote",
                            "action": "remove-edge"
                          },
                          {
                            "source": "elon",
                            "target": "vote",
                            "action": "remove-edge"
                          },
                          {
                            "source": "satellite",
                            "target": "spy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "spy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "satellite",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "gas",
                            "action": "remove-edge"
                          },
                          {
                            "source": "gas",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "eu",
                            "target": "cap",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "seekers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "rwanda",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "asylum",
                            "action": "remove-edge"
                          },
                          {
                            "source": "elon",
                            "target": "ceo",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "ceo",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "ceo",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rwanda",
                            "target": "seekers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "asylum",
                            "target": "seekers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rwanda",
                            "target": "asylum",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "kyiv",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "ukraine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "ukraine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "belarus",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "musk",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "id": "spy",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "satellite",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "cap",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ceo",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "gas",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "vote",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "seekers",
                            "weight": 13,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "asylum",
                            "weight": 14,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "rwanda",
                            "weight": 17,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "elon",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "eu",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "musk",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "kyiv",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 29,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "belarus",
                            "weight": 30,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "court",
                            "weight": 17,
                            "cluster": 4,
                            "action": "update-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "nazi",
                            "weight": 22,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "women",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "universities",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "guilty",
                            "weight": 16,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "german",
                            "weight": 12,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "weinstein",
                            "weight": 12,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "harvey",
                            "weight": 12,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "id": "rape",
                            "weight": 12,
                            "cluster": 11,
                            "action": "add-node"
                          },
                          {
                            "source": "taliban",
                            "target": "universities",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "women",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "universities",
                            "action": "add-edge"
                          },
                          {
                            "source": "harvey",
                            "target": "rape",
                            "action": "add-edge"
                          },
                          {
                            "source": "weinstein",
                            "target": "harvey",
                            "action": "add-edge"
                          },
                          {
                            "source": "weinstein",
                            "target": "rape",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "universities",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "harvey",
                            "action": "add-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "weinstein",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "rape",
                            "action": "add-edge"
                          },
                          {
                            "source": "court",
                            "target": "german",
                            "action": "add-edge"
                          },
                          {
                            "source": "nazi",
                            "target": "court",
                            "action": "add-edge"
                          },
                          {
                            "source": "nazi",
                            "target": "german",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Wed\n21"
                          },
                          {
                            "source": "nazi",
                            "target": "german",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nazi",
                            "target": "court",
                            "action": "remove-edge"
                          },
                          {
                            "source": "court",
                            "target": "german",
                            "action": "remove-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "rape",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "weinstein",
                            "action": "remove-edge"
                          },
                          {
                            "source": "guilty",
                            "target": "harvey",
                            "action": "remove-edge"
                          },
                          {
                            "source": "universities",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "weinstein",
                            "target": "rape",
                            "action": "remove-edge"
                          },
                          {
                            "source": "weinstein",
                            "target": "harvey",
                            "action": "remove-edge"
                          },
                          {
                            "source": "harvey",
                            "target": "rape",
                            "action": "remove-edge"
                          },
                          {
                            "id": "rape",
                            "weight": 12,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "harvey",
                            "weight": 12,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "weinstein",
                            "weight": 12,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "german",
                            "weight": 12,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "guilty",
                            "weight": 16,
                            "cluster": 11,
                            "action": "remove-node"
                          },
                          {
                            "id": "court",
                            "weight": 21,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "nazi",
                            "weight": 22,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 28,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "women",
                            "weight": 20,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "universities",
                            "weight": 17,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 38,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "biden",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 25,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "washington",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "tax",
                            "weight": 19,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "congress",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "trump",
                            "weight": 19,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "afghan",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "musk",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ceo",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "returns",
                            "weight": 17,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "meet",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "zelenskyy",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "israel",
                            "weight": 15,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "netanyahu",
                            "weight": 15,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "killer",
                            "weight": 15,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "ban",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "university",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "elon",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "votes",
                            "weight": 13,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "government",
                            "weight": 13,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "nepal",
                            "weight": 11,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "donald",
                            "weight": 9,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "sobhraj",
                            "weight": 9,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "source": "taliban",
                            "target": "afghan",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghan",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "ceo",
                            "action": "add-edge"
                          },
                          {
                            "source": "ceo",
                            "target": "twitter",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "twitter",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "university",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "university",
                            "action": "add-edge"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "ceo",
                            "target": "elon",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "washington",
                            "action": "add-edge"
                          },
                          {
                            "source": "washington",
                            "target": "zelensky",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "washington",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "returns",
                            "action": "add-edge"
                          },
                          {
                            "source": "returns",
                            "target": "votes",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "votes",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "ban",
                            "target": "university",
                            "action": "add-edge"
                          },
                          {
                            "source": "afghan",
                            "target": "university",
                            "action": "add-edge"
                          },
                          {
                            "source": "afghan",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "meet",
                            "action": "add-edge"
                          },
                          {
                            "source": "biden",
                            "target": "zelenskyy",
                            "action": "add-edge"
                          },
                          {
                            "source": "meet",
                            "target": "zelenskyy",
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
                            "source": "biden",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "congress",
                            "target": "zelenskyy",
                            "action": "add-edge"
                          },
                          {
                            "source": "washington",
                            "target": "congress",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "netanyahu",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "government",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "government",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "donald",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "donald",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "trump",
                            "action": "add-edge"
                          },
                          {
                            "source": "congress",
                            "target": "meet",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "nepal",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "sobhraj",
                            "action": "add-edge"
                          },
                          {
                            "source": "nepal",
                            "target": "sobhraj",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Thu\n22"
                          },
                          {
                            "source": "nepal",
                            "target": "sobhraj",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "sobhraj",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "nepal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "congress",
                            "target": "meet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "trump",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "donald",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "donald",
                            "action": "remove-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "government",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israel",
                            "target": "government",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israel",
                            "target": "netanyahu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "washington",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "congress",
                            "target": "zelenskyy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "congress",
                            "action": "remove-edge"
                          },
                          {
                            "source": "meet",
                            "target": "zelenskyy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "zelenskyy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "meet",
                            "action": "remove-edge"
                          },
                          {
                            "source": "afghan",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "afghan",
                            "target": "university",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ban",
                            "target": "university",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "votes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "returns",
                            "target": "votes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "returns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "washington",
                            "action": "remove-edge"
                          },
                          {
                            "source": "washington",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "washington",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ceo",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "twitter",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "elon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "universities",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "universities",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "university",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "university",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "twitter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ceo",
                            "target": "twitter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "musk",
                            "target": "ceo",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "women",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghan",
                            "action": "remove-edge"
                          },
                          {
                            "id": "sobhraj",
                            "weight": 9,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "donald",
                            "weight": 9,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "nepal",
                            "weight": 11,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "government",
                            "weight": 13,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "votes",
                            "weight": 13,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "elon",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "university",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ban",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "killer",
                            "weight": 15,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "twitter",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "netanyahu",
                            "weight": 15,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "israel",
                            "weight": 15,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "zelenskyy",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "meet",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "returns",
                            "weight": 17,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "universities",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ceo",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "musk",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "afghan",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "trump",
                            "weight": 19,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "congress",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "tax",
                            "weight": 19,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "washington",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "women",
                            "weight": 26,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 38,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "biden",
                            "weight": 30,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 28,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "war",
                            "weight": 25,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 19,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "warns",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "pope",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "vatican",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "demon",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "vatican",
                            "target": "demon",
                            "action": "add-edge"
                          },
                          {
                            "source": "warns",
                            "target": "demon",
                            "action": "add-edge"
                          },
                          {
                            "source": "warns",
                            "target": "vatican",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "demon",
                            "action": "add-edge"
                          },
                          {
                            "source": "warns",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "vatican",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Fri\n23"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "vatican",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warns",
                            "target": "pope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "demon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warns",
                            "target": "vatican",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warns",
                            "target": "demon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "vatican",
                            "target": "demon",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "biden",
                            "target": "zelensky",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "biden",
                            "action": "remove-edge"
                          },
                          {
                            "id": "demon",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "vatican",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "pope",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "warns",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "war",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "zelensky",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "biden",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 35,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "paris",
                            "weight": 32,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "killer",
                            "weight": 21,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "trump",
                            "weight": 19,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "dead",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "prison",
                            "weight": 16,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "nepal",
                            "weight": 16,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "serpent",
                            "weight": 16,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "report",
                            "weight": 15,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "sobhraj",
                            "weight": 13,
                            "cluster": 5,
                            "action": "add-node"
                          },
                          {
                            "id": "kurdish",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "conspiracy",
                            "weight": 11,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "ballistic",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "wounded",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fires",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "paris",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "shooting",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "nepal",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "prison",
                            "action": "add-edge"
                          },
                          {
                            "source": "prison",
                            "target": "nepal",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "wounded",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "wounded",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "kurdish",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "kurdish",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "serpent",
                            "action": "add-edge"
                          },
                          {
                            "source": "nepal",
                            "target": "serpent",
                            "action": "add-edge"
                          },
                          {
                            "source": "report",
                            "target": "conspiracy",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "conspiracy",
                            "action": "add-edge"
                          },
                          {
                            "source": "trump",
                            "target": "report",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "killer",
                            "target": "sobhraj",
                            "action": "add-edge"
                          },
                          {
                            "source": "serpent",
                            "target": "sobhraj",
                            "action": "add-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "ballistic",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "ballistic",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sat\n24"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "ballistic",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "ballistic",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ballistic",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "source": "serpent",
                            "target": "sobhraj",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "sobhraj",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "report",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trump",
                            "target": "conspiracy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "report",
                            "target": "conspiracy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "nepal",
                            "target": "serpent",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "serpent",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "kurdish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "kurdish",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "wounded",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "wounded",
                            "action": "remove-edge"
                          },
                          {
                            "source": "prison",
                            "target": "nepal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "prison",
                            "action": "remove-edge"
                          },
                          {
                            "source": "killer",
                            "target": "nepal",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "shooting",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "id": "fires",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "wounded",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ballistic",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "conspiracy",
                            "weight": 11,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "kurdish",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "sobhraj",
                            "weight": 13,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "report",
                            "weight": 15,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "serpent",
                            "weight": 16,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "nepal",
                            "weight": 16,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "prison",
                            "weight": 16,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "dead",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "trump",
                            "weight": 19,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "killer",
                            "weight": 21,
                            "cluster": 5,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 30,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "paris",
                            "weight": 32,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 29,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "kherson",
                            "weight": 25,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ngos",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "women",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ban",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "taliban",
                            "target": "ngos",
                            "action": "add-edge"
                          },
                          {
                            "source": "ngos",
                            "target": "women",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "women",
                            "action": "add-edge"
                          },
                          {
                            "source": "ngos",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "ban",
                            "action": "add-edge"
                          },
                          {
                            "source": "kherson",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "kherson",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sun\n25"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "kherson",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kherson",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ngos",
                            "target": "ban",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ngos",
                            "target": "women",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "ngos",
                            "action": "remove-edge"
                          },
                          {
                            "id": "ban",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ngos",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "kherson",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 22,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "women",
                            "weight": 17,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "christmas",
                            "weight": 33,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "pope",
                            "weight": 24,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "paris",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "dead",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "suspect",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "king",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "charles",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "bus",
                            "weight": 14,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "war",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "francis",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "river",
                            "weight": 12,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "spain",
                            "weight": 11,
                            "cluster": 7,
                            "action": "add-node"
                          },
                          {
                            "id": "pub",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "queen",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "hatred",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "shooting",
                            "target": "paris",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "suspect",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "suspect",
                            "action": "add-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghanistan",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "king",
                            "target": "charles",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "king",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "ukraine",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "river",
                            "action": "add-edge"
                          },
                          {
                            "source": "bus",
                            "target": "spain",
                            "action": "add-edge"
                          },
                          {
                            "source": "river",
                            "target": "spain",
                            "action": "add-edge"
                          },
                          {
                            "source": "paris",
                            "target": "hatred",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "hatred",
                            "action": "add-edge"
                          },
                          {
                            "source": "suspect",
                            "target": "hatred",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "pub",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "shooting",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "pub",
                            "action": "add-edge"
                          },
                          {
                            "source": "dead",
                            "target": "pub",
                            "action": "add-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "dead",
                            "action": "add-edge"
                          },
                          {
                            "source": "charles",
                            "target": "queen",
                            "action": "add-edge"
                          },
                          {
                            "source": "king",
                            "target": "queen",
                            "action": "add-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "war",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Mon\n26"
                          },
                          {
                            "source": "christmas",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "king",
                            "target": "queen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "charles",
                            "target": "queen",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "dead",
                            "action": "remove-edge"
                          },
                          {
                            "source": "dead",
                            "target": "pub",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "pub",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "shooting",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "pub",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "war",
                            "action": "remove-edge"
                          },
                          {
                            "source": "suspect",
                            "target": "hatred",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "hatred",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "hatred",
                            "action": "remove-edge"
                          },
                          {
                            "source": "river",
                            "target": "spain",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "spain",
                            "action": "remove-edge"
                          },
                          {
                            "source": "bus",
                            "target": "river",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "pope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "ukraine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "king",
                            "action": "remove-edge"
                          },
                          {
                            "source": "king",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "charles",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "francis",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "pope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "christmas",
                            "target": "francis",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "women",
                            "action": "remove-edge"
                          },
                          {
                            "source": "women",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taliban",
                            "target": "afghanistan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "suspect",
                            "action": "remove-edge"
                          },
                          {
                            "source": "paris",
                            "target": "suspect",
                            "action": "remove-edge"
                          },
                          {
                            "source": "shooting",
                            "target": "paris",
                            "action": "remove-edge"
                          },
                          {
                            "id": "hatred",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "queen",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "pub",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "spain",
                            "weight": 11,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "river",
                            "weight": 12,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "francis",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "war",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "bus",
                            "weight": 14,
                            "cluster": 7,
                            "action": "remove-node"
                          },
                          {
                            "id": "charles",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "king",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "afghanistan",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "women",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "suspect",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "dead",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "taliban",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "paris",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "shooting",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "pope",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "christmas",
                            "weight": 33,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 30,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 20,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 35,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 31,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "taiwan",
                            "weight": 30,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "covid",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "drones",
                            "weight": 23,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "drone",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ukrainian",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fires",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "korean",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "peace",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "warplanes",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "shots",
                            "weight": 15,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "rohingya",
                            "weight": 14,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "airbase",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "japan",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "snow",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "quarantine",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "refugees",
                            "weight": 12,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "summit",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 11,
                            "cluster": 16,
                            "action": "add-node"
                          },
                          {
                            "id": "ships",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "injured",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "drones",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "drones",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "fires",
                            "target": "shots",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "shots",
                            "action": "add-edge"
                          },
                          {
                            "source": "drones",
                            "target": "shots",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "drone",
                            "action": "add-edge"
                          },
                          {
                            "source": "drone",
                            "target": "ukrainian",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "ukrainian",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "taiwan",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "warplanes",
                            "action": "add-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "warplanes",
                            "action": "add-edge"
                          },
                          {
                            "source": "drone",
                            "target": "airbase",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "airbase",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "airbase",
                            "action": "add-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "ships",
                            "action": "add-edge"
                          },
                          {
                            "source": "warplanes",
                            "target": "ships",
                            "action": "add-edge"
                          },
                          {
                            "source": "refugees",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "rohingya",
                            "target": "indonesia",
                            "action": "add-edge"
                          },
                          {
                            "source": "rohingya",
                            "target": "refugees",
                            "action": "add-edge"
                          },
                          {
                            "source": "peace",
                            "target": "summit",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "peace",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "summit",
                            "action": "add-edge"
                          },
                          {
                            "source": "japan",
                            "target": "injured",
                            "action": "add-edge"
                          },
                          {
                            "source": "snow",
                            "target": "injured",
                            "action": "add-edge"
                          },
                          {
                            "source": "japan",
                            "target": "snow",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "quarantine",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "quarantine",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "ships",
                            "action": "add-edge"
                          },
                          {
                            "source": "drones",
                            "target": "korean",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "korean",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Tue\n27"
                          },
                          {
                            "source": "korea",
                            "target": "korean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drones",
                            "target": "korean",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "ships",
                            "action": "remove-edge"
                          },
                          {
                            "source": "japan",
                            "target": "snow",
                            "action": "remove-edge"
                          },
                          {
                            "source": "snow",
                            "target": "injured",
                            "action": "remove-edge"
                          },
                          {
                            "source": "japan",
                            "target": "injured",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "summit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "peace",
                            "action": "remove-edge"
                          },
                          {
                            "source": "peace",
                            "target": "summit",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rohingya",
                            "target": "refugees",
                            "action": "remove-edge"
                          },
                          {
                            "source": "rohingya",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "refugees",
                            "target": "indonesia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "warplanes",
                            "target": "ships",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "ships",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "airbase",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "airbase",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drone",
                            "target": "airbase",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "warplanes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "warplanes",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "taiwan",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "ukrainian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drone",
                            "target": "ukrainian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "drone",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drones",
                            "target": "shots",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "shots",
                            "action": "remove-edge"
                          },
                          {
                            "source": "fires",
                            "target": "shots",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "source": "korea",
                            "target": "drones",
                            "action": "remove-edge"
                          },
                          {
                            "source": "drones",
                            "target": "fires",
                            "action": "remove-edge"
                          },
                          {
                            "id": "injured",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ships",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "indonesia",
                            "weight": 11,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "summit",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "refugees",
                            "weight": 12,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "snow",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "japan",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "airbase",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "rohingya",
                            "weight": 14,
                            "cluster": 16,
                            "action": "remove-node"
                          },
                          {
                            "id": "shots",
                            "weight": 15,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "warplanes",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "peace",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "korean",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "fires",
                            "weight": 19,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukrainian",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "drone",
                            "weight": 22,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "drones",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "korea",
                            "weight": 31,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 35,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "taiwan",
                            "weight": 30,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "covid",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 26,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "quarantine",
                            "weight": 12,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "military",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "lavrov",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "compulsory",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "military",
                            "target": "compulsory",
                            "action": "add-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "compulsory",
                            "action": "add-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "military",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "lavrov",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "lavrov",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "ukraine",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Wed\n28"
                          },
                          {
                            "source": "russia",
                            "target": "ukraine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "lavrov",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "lavrov",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "quarantine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "quarantine",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "military",
                            "action": "remove-edge"
                          },
                          {
                            "source": "taiwan",
                            "target": "compulsory",
                            "action": "remove-edge"
                          },
                          {
                            "source": "military",
                            "target": "compulsory",
                            "action": "remove-edge"
                          },
                          {
                            "id": "compulsory",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "quarantine",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "lavrov",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "military",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "taiwan",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 24,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 27,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "covid",
                            "weight": 28,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "pope",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "benedict",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "francis",
                            "weight": 20,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "prayers",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "appeals",
                            "weight": 13,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "xvi",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "conviction",
                            "weight": 10,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "nazi",
                            "weight": 10,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "id": "secretary",
                            "weight": 9,
                            "cluster": 4,
                            "action": "add-node"
                          },
                          {
                            "source": "benedict",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "benedict",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "prayers",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "prayers",
                            "action": "add-edge"
                          },
                          {
                            "source": "francis",
                            "target": "prayers",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "xvi",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "xvi",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "add-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "conviction",
                            "action": "add-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "nazi",
                            "action": "add-edge"
                          },
                          {
                            "source": "conviction",
                            "target": "nazi",
                            "action": "add-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "secretary",
                            "action": "add-edge"
                          },
                          {
                            "source": "nazi",
                            "target": "secretary",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Thu\n29"
                          },
                          {
                            "source": "nazi",
                            "target": "secretary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "secretary",
                            "action": "remove-edge"
                          },
                          {
                            "source": "conviction",
                            "target": "nazi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "nazi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "appeals",
                            "target": "conviction",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "restrictions",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "xvi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "francis",
                            "target": "prayers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "prayers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "prayers",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "francis",
                            "action": "remove-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "francis",
                            "action": "remove-edge"
                          },
                          {
                            "id": "secretary",
                            "weight": 9,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "nazi",
                            "weight": 10,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "conviction",
                            "weight": 10,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "appeals",
                            "weight": 13,
                            "cluster": 4,
                            "action": "remove-node"
                          },
                          {
                            "id": "restrictions",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "prayers",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "francis",
                            "weight": 20,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "covid",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "pope",
                            "weight": 28,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "china",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "benedict",
                            "weight": 27,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "xvi",
                            "weight": 11,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 33,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "russia",
                            "weight": 29,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "netanyahu",
                            "weight": 28,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "missile",
                            "weight": 25,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "israel",
                            "weight": 22,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "russian",
                            "weight": 21,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "casino",
                            "weight": 20,
                            "cluster": 15,
                            "action": "add-node"
                          },
                          {
                            "id": "cambodia",
                            "weight": 18,
                            "cluster": 15,
                            "action": "add-node"
                          },
                          {
                            "id": "eu",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "hotel",
                            "weight": 15,
                            "cluster": 15,
                            "action": "add-node"
                          },
                          {
                            "id": "kills",
                            "weight": 14,
                            "cluster": 15,
                            "action": "add-node"
                          },
                          {
                            "id": "sworn",
                            "weight": 14,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "id": "vatican",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "barrage",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "italy",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "benjamin",
                            "weight": 10,
                            "cluster": 6,
                            "action": "add-node"
                          },
                          {
                            "source": "casino",
                            "target": "cambodia",
                            "action": "add-edge"
                          },
                          {
                            "source": "cambodia",
                            "target": "hotel",
                            "action": "add-edge"
                          },
                          {
                            "source": "casino",
                            "target": "hotel",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "barrage",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "barrage",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "missile",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "eu",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "eu",
                            "action": "add-edge"
                          },
                          {
                            "source": "cambodia",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "casino",
                            "target": "kills",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missile",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "vatican",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "vatican",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "israel",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "sworn",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "sworn",
                            "action": "add-edge"
                          },
                          {
                            "source": "israel",
                            "target": "benjamin",
                            "action": "add-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "benjamin",
                            "action": "add-edge"
                          },
                          {
                            "source": "vatican",
                            "target": "xvi",
                            "action": "add-edge"
                          },
                          {
                            "source": "china",
                            "target": "italy",
                            "action": "add-edge"
                          },
                          {
                            "source": "covid",
                            "target": "italy",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Fri\n30"
                          },
                          {
                            "source": "covid",
                            "target": "italy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "italy",
                            "action": "remove-edge"
                          },
                          {
                            "source": "vatican",
                            "target": "xvi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "xvi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "benjamin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israel",
                            "target": "benjamin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "sworn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "israel",
                            "target": "sworn",
                            "action": "remove-edge"
                          },
                          {
                            "source": "netanyahu",
                            "target": "israel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "pope",
                            "target": "vatican",
                            "action": "remove-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "vatican",
                            "action": "remove-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "pope",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "casino",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cambodia",
                            "target": "kills",
                            "action": "remove-edge"
                          },
                          {
                            "source": "covid",
                            "target": "eu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "eu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "china",
                            "target": "covid",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "russian",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "missile",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "barrage",
                            "action": "remove-edge"
                          },
                          {
                            "source": "missile",
                            "target": "barrage",
                            "action": "remove-edge"
                          },
                          {
                            "source": "casino",
                            "target": "hotel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "cambodia",
                            "target": "hotel",
                            "action": "remove-edge"
                          },
                          {
                            "source": "casino",
                            "target": "cambodia",
                            "action": "remove-edge"
                          },
                          {
                            "id": "xvi",
                            "weight": 9,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "benjamin",
                            "weight": 10,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "italy",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "barrage",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "vatican",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "sworn",
                            "weight": 14,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "kills",
                            "weight": 14,
                            "cluster": 15,
                            "action": "remove-node"
                          },
                          {
                            "id": "pope",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "hotel",
                            "weight": 15,
                            "cluster": 15,
                            "action": "remove-node"
                          },
                          {
                            "id": "eu",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "benedict",
                            "weight": 16,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "cambodia",
                            "weight": 18,
                            "cluster": 15,
                            "action": "remove-node"
                          },
                          {
                            "id": "casino",
                            "weight": 20,
                            "cluster": 15,
                            "action": "remove-node"
                          },
                          {
                            "id": "russian",
                            "weight": 21,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "israel",
                            "weight": 22,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "missile",
                            "weight": 25,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "netanyahu",
                            "weight": 28,
                            "cluster": 6,
                            "action": "remove-node"
                          },
                          {
                            "id": "covid",
                            "weight": 28,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "china",
                            "weight": 30,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 33,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "russia",
                            "weight": 29,
                            "cluster": 1,
                            "action": "update-node"
                          },
                          {
                            "id": "tate",
                            "weight": 27,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "andrew",
                            "weight": 26,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "putin",
                            "weight": 23,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "tax",
                            "weight": 18,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "trafficking",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 18,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "romania",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "returns",
                            "weight": 15,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "kyi",
                            "weight": 15,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "trump",
                            "weight": 14,
                            "cluster": 8,
                            "action": "add-node"
                          },
                          {
                            "id": "xi",
                            "weight": 14,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "myanmar",
                            "weight": 14,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "influencer",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "suu",
                            "weight": 13,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "jet",
                            "weight": 13,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "detained",
                            "weight": 12,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "plane",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "aung",
                            "weight": 10,
                            "cluster": 2,
                            "action": "add-node"
                          },
                          {
                            "id": "fighter",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "tate",
                            "target": "andrew",
                            "action": "add-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "trafficking",
                            "action": "add-edge"
                          },
                          {
                            "source": "tate",
                            "target": "trafficking",
                            "action": "add-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "romania",
                            "action": "add-edge"
                          },
                          {
                            "source": "tate",
                            "target": "romania",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "returns",
                            "action": "add-edge"
                          },
                          {
                            "source": "returns",
                            "target": "trump",
                            "action": "add-edge"
                          },
                          {
                            "source": "tax",
                            "target": "trump",
                            "action": "add-edge"
                          },
                          {
                            "source": "trafficking",
                            "target": "romania",
                            "action": "add-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "detained",
                            "action": "add-edge"
                          },
                          {
                            "source": "tate",
                            "target": "detained",
                            "action": "add-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "influencer",
                            "action": "add-edge"
                          },
                          {
                            "source": "tate",
                            "target": "influencer",
                            "action": "add-edge"
                          },
                          {
                            "source": "putin",
                            "target": "xi",
                            "action": "add-edge"
                          },
                          {
                            "source": "russia",
                            "target": "xi",
                            "action": "add-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "myanmar",
                            "action": "add-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "suu",
                            "action": "add-edge"
                          },
                          {
                            "source": "myanmar",
                            "target": "suu",
                            "action": "add-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "tate",
                            "target": "arrested",
                            "action": "add-edge"
                          },
                          {
                            "source": "trafficking",
                            "target": "detained",
                            "action": "add-edge"
                          },
                          {
                            "source": "romania",
                            "target": "detained",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "xi",
                            "action": "add-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "aung",
                            "action": "add-edge"
                          },
                          {
                            "source": "suu",
                            "target": "aung",
                            "action": "add-edge"
                          },
                          {
                            "source": "jet",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "plane",
                            "target": "fighter",
                            "action": "add-edge"
                          },
                          {
                            "source": "jet",
                            "target": "plane",
                            "action": "add-edge"
                          },
                          {
                            "action": "change-day",
                            "new_day": "Sat\n31"
                          },
                          {
                            "source": "jet",
                            "target": "plane",
                            "action": "remove-edge"
                          },
                          {
                            "source": "plane",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "jet",
                            "target": "fighter",
                            "action": "remove-edge"
                          },
                          {
                            "source": "suu",
                            "target": "aung",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "aung",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "xi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "romania",
                            "target": "detained",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trafficking",
                            "target": "detained",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "arrested",
                            "action": "remove-edge"
                          },
                          {
                            "source": "myanmar",
                            "target": "suu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "suu",
                            "action": "remove-edge"
                          },
                          {
                            "source": "kyi",
                            "target": "myanmar",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "xi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "putin",
                            "target": "xi",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "influencer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "influencer",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "detained",
                            "action": "remove-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "detained",
                            "action": "remove-edge"
                          },
                          {
                            "source": "trafficking",
                            "target": "romania",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "trump",
                            "action": "remove-edge"
                          },
                          {
                            "source": "returns",
                            "target": "trump",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tax",
                            "target": "returns",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "russia",
                            "action": "remove-edge"
                          },
                          {
                            "source": "ukraine",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "russia",
                            "target": "putin",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "romania",
                            "action": "remove-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "romania",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "trafficking",
                            "action": "remove-edge"
                          },
                          {
                            "source": "andrew",
                            "target": "trafficking",
                            "action": "remove-edge"
                          },
                          {
                            "source": "tate",
                            "target": "andrew",
                            "action": "remove-edge"
                          },
                          {
                            "id": "fighter",
                            "weight": 10,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "aung",
                            "weight": 10,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "plane",
                            "weight": 11,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "detained",
                            "weight": 12,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "jet",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "suu",
                            "weight": 13,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "influencer",
                            "weight": 13,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "myanmar",
                            "weight": 14,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "xi",
                            "weight": 14,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "trump",
                            "weight": 14,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "kyi",
                            "weight": 15,
                            "cluster": 2,
                            "action": "remove-node"
                          },
                          {
                            "id": "returns",
                            "weight": 15,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "romania",
                            "weight": 17,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "arrested",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "trafficking",
                            "weight": 18,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "tax",
                            "weight": 18,
                            "cluster": 8,
                            "action": "remove-node"
                          },
                          {
                            "id": "putin",
                            "weight": 23,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "andrew",
                            "weight": 26,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "russia",
                            "weight": 26,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "tate",
                            "weight": 27,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "ukraine",
                            "weight": 31,
                            "cluster": 1,
                            "action": "remove-node"
                          },
                          {
                            "id": "benedict",
                            "weight": 36,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "pope",
                            "weight": 36,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "xvi",
                            "weight": 28,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "dies",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "korea",
                            "weight": 22,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "missiles",
                            "weight": 19,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "barbara",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "walters",
                            "weight": 17,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "fires",
                            "weight": 16,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "resign",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "ukrainian",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "families",
                            "weight": 11,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "funeral",
                            "weight": 10,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "francis",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "id": "emeritus",
                            "weight": 9,
                            "cluster": 1,
                            "action": "add-node"
                          },
                          {
                            "source": "benedict",
                            "target": "pope",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "xvi",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "xvi",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "xvi",
                            "target": "dies",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "missiles",
                            "target": "fires",
                            "action": "add-edge"
                          },
                          {
                            "source": "korea",
                            "target": "missiles",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "resign",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "resign",
                            "action": "add-edge"
                          },
                          {
                            "source": "xvi",
                            "target": "resign",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "francis",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "emeritus",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "emeritus",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "barbara",
                            "action": "add-edge"
                          },
                          {
                            "source": "barbara",
                            "target": "walters",
                            "action": "add-edge"
                          },
                          {
                            "source": "dies",
                            "target": "walters",
                            "action": "add-edge"
                          },
                          {
                            "source": "benedict",
                            "target": "funeral",
                            "action": "add-edge"
                          },
                          {
                            "source": "pope",
                            "target": "funeral",
                            "action": "add-edge"
                          },
                          {
                            "source": "xvi",
                            "target": "emeritus",
                            "action": "add-edge"
                          },
                          {
                            "source": "ukrainian",
                            "target": "families",
                            "action": "add-edge"
                          }
                        ]