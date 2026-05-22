// solometro - 駅データ v2（全駅・公式PDFデータ反映）
// 自動生成。編集はこのファイルのみ。
window.LS={
  "銀座線":{bg:"#FAC775",text:"#633806"},
  "丸ノ内線":{bg:"#F09595",text:"#501313"},
  "日比谷線":{bg:"#9FE1CB",text:"#04342C"},
  "東西線":{bg:"#85B7EB",text:"#042C53"},
  "千代田線":{bg:"#C0DD97",text:"#173404"},
  "有楽町線":{bg:"#FAC775",text:"#412402"},
  "半蔵門線":{bg:"#CECBF6",text:"#26215C"},
  "南北線":{bg:"#5DCAA5",text:"#04342C"},
  "副都心線":{bg:"#D3D1C7",text:"#2C2C2A"},
  "都営浅草線":{bg:"#F5C4B3",text:"#4A1B0C"},
  "都営三田線":{bg:"#B5D4F4",text:"#042C53"},
  "都営新宿線":{bg:"#C0DD97",text:"#173404"},
  "都営大江戸線":{bg:"#F4C0D1",text:"#4B1528"},
};

window.STATIONS=[
 {
  "id": 1,
  "stationName": "渋谷",
  "lines": [
   "銀座線",
   "半蔵門線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり（押上・渋谷方面共に）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・9号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "銀座線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "半蔵門線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "〈半蔵門線〉2号車付近EV経由"
   },
   {
    "from": "半蔵門線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "〈半蔵門線〉2号車付近EV経由"
   },
   {
    "from": "副都心線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "〈半蔵門線〉2号車付近EV経由"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "渋谷駅周辺のエレベーター（地上）",
   "mapQuery": "渋谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 2,
  "stationName": "表参道",
  "lines": [
   "銀座線",
   "千代田線",
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "4号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "銀座線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "表参道駅周辺のエレベーター（地上）",
   "mapQuery": "表参道駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 3,
  "stationName": "外苑前",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "外苑前駅周辺のエレベーター（地上）",
   "mapQuery": "外苑前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 4,
  "stationName": "青山一丁目",
  "lines": [
   "銀座線",
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。全方面で確認済み。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "7号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線（渋谷方面）",
    "to": "半蔵門線",
    "canTransferByEV": false,
    "note": "係員対応必要"
   },
   {
    "from": "銀座線（浅草方面）",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "銀座線（渋谷方面）",
    "canTransferByEV": false,
    "note": "係員対応必要"
   },
   {
    "from": "半蔵門線",
    "to": "銀座線（浅草方面）",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "青山一丁目駅周辺のエレベーター（地上）",
   "mapQuery": "青山一丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 5,
  "stationName": "赤坂見附",
  "lines": [
   "銀座線",
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車・4号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "4号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "赤坂見附駅周辺のエレベーター（地上）",
   "mapQuery": "赤坂見附駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 6,
  "stationName": "溜池山王",
  "lines": [
   "銀座線",
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "銀座線",
    "to": "丸ノ内線",
    "canTransferByEV": false,
    "note": "段差昇降機・スロープ利用。係員対応必要。"
   },
   {
    "from": "銀座線",
    "to": "千代田線",
    "canTransferByEV": false,
    "note": "段差昇降機利用。係員対応必要。"
   },
   {
    "from": "南北線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "溜池山王駅周辺のエレベーター（地上）",
   "mapQuery": "溜池山王駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 7,
  "stationName": "虎ノ門",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線（渋谷方面）",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "銀座線（浅草方面）",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "地上経由で乗換可能"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "虎ノ門駅周辺のエレベーター（地上）",
   "mapQuery": "虎ノ門駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 8,
  "stationName": "新橋",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "5号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新橋駅周辺のエレベーター（地上）",
   "mapQuery": "新橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 9,
  "stationName": "銀座",
  "lines": [
   "銀座線",
   "丸ノ内線",
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   },
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   },
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車・4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "4号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "丸ノ内線",
    "canTransferByEV": false,
    "note": "移動不可。他の経路を検討してください。"
   },
   {
    "from": "銀座線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "銀座線",
    "to": "有楽町線（銀座一丁目）",
    "canTransferByEV": false,
    "note": "段差昇降機利用。係員対応必要。"
   },
   {
    "from": "丸ノ内線",
    "to": "銀座線",
    "canTransferByEV": false,
    "note": "移動不可。他の経路を検討してください。"
   },
   {
    "from": "丸ノ内線",
    "to": "日比谷線",
    "canTransferByEV": false,
    "note": "係員対応必要"
   },
   {
    "from": "日比谷線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "日比谷線",
    "to": "丸ノ内線",
    "canTransferByEV": false,
    "note": "係員対応必要"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "銀座駅周辺のエレベーター（地上）",
   "mapQuery": "銀座駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 10,
  "stationName": "京橋",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "京橋駅周辺のエレベーター（地上）",
   "mapQuery": "京橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 11,
  "stationName": "日本橋",
  "lines": [
   "銀座線",
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   },
   {
    "from": "東西線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "改札を出る必要あり。係員にお声がけください。"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "日本橋駅周辺のエレベーター（地上）",
   "mapQuery": "日本橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 12,
  "stationName": "三越前",
  "lines": [
   "銀座線",
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "6号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "〈銀座線〉6号車付近EV経由"
   },
   {
    "from": "半蔵門線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "〈銀座線〉6号車付近EV経由"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "三越前駅周辺のエレベーター（地上）",
   "mapQuery": "三越前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 13,
  "stationName": "神田",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "神田駅周辺のエレベーター（地上）",
   "mapQuery": "神田駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 14,
  "stationName": "末広町",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "3号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "末広町駅周辺のエレベーター（地上）",
   "mapQuery": "末広町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 15,
  "stationName": "上野広小路",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。車両により変動。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "日比谷線（仲御徒町）",
    "canTransferByEV": false,
    "note": "段差昇降機・車いす対応エスカレーター利用。係員対応必要。"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "上野広小路駅周辺のエレベーター（地上）",
   "mapQuery": "上野広小路駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 16,
  "stationName": "上野",
  "lines": [
   "銀座線",
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員へのスロープ手配が必要です。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "銀座線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "〈日比谷線〉5号車付近EV経由"
   },
   {
    "from": "日比谷線",
    "to": "銀座線",
    "canTransferByEV": true,
    "note": "〈日比谷線〉5号車付近EV経由"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "上野駅周辺のエレベーター（地上）",
   "mapQuery": "上野駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 17,
  "stationName": "稲荷町",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "稲荷町駅周辺のエレベーター（地上）",
   "mapQuery": "稲荷町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 18,
  "stationName": "田原町",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "田原町駅周辺のエレベーター（地上）",
   "mapQuery": "田原町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 19,
  "stationName": "浅草",
  "lines": [
   "銀座線"
  ],
  "accessibilityByLine": [
   {
    "line": "銀座線",
    "canBoardIndependently": true,
    "details": "5号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "浅草駅周辺のエレベーター（地上）",
   "mapQuery": "浅草駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 20,
  "stationName": "荻窪",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "荻窪駅周辺のエレベーター（地上）",
   "mapQuery": "荻窪駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 21,
  "stationName": "南阿佐ケ谷",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "南阿佐ケ谷駅周辺のエレベーター（地上）",
   "mapQuery": "南阿佐ケ谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 22,
  "stationName": "新高円寺",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新高円寺駅周辺のエレベーター（地上）",
   "mapQuery": "新高円寺駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 23,
  "stationName": "東高円寺",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東高円寺駅周辺のエレベーター（地上）",
   "mapQuery": "東高円寺駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 24,
  "stationName": "新中野",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新中野駅周辺のエレベーター（地上）",
   "mapQuery": "新中野駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 25,
  "stationName": "方南町",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり（支線）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "方南町駅周辺のエレベーター（地上）",
   "mapQuery": "方南町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 26,
  "stationName": "中野富士見町",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車・5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "中野富士見町駅周辺のエレベーター（地上）",
   "mapQuery": "中野富士見町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 27,
  "stationName": "中野新橋",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "中野新橋駅周辺のエレベーター（地上）",
   "mapQuery": "中野新橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 28,
  "stationName": "中野坂上",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "中野坂上駅周辺のエレベーター（地上）",
   "mapQuery": "中野坂上駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 29,
  "stationName": "西新宿",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "西新宿駅周辺のエレベーター（地上）",
   "mapQuery": "西新宿駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 30,
  "stationName": "新宿",
  "lines": [
   "丸ノ内線",
   "都営新宿線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新宿駅周辺のエレベーター（地上）",
   "mapQuery": "新宿駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 31,
  "stationName": "新宿三丁目",
  "lines": [
   "丸ノ内線",
   "副都心線",
   "都営新宿線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新宿三丁目駅周辺のエレベーター（地上）",
   "mapQuery": "新宿三丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 32,
  "stationName": "新宿御苑前",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新宿御苑前駅周辺のエレベーター（地上）",
   "mapQuery": "新宿御苑前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 33,
  "stationName": "四谷三丁目",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "3号車・5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "四谷三丁目駅周辺のエレベーター（地上）",
   "mapQuery": "四谷三丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 34,
  "stationName": "四ツ谷",
  "lines": [
   "丸ノ内線",
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "四ツ谷駅周辺のエレベーター（地上）",
   "mapQuery": "四ツ谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 35,
  "stationName": "国会議事堂前",
  "lines": [
   "丸ノ内線",
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "国会議事堂前駅周辺のエレベーター（地上）",
   "mapQuery": "国会議事堂前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 36,
  "stationName": "霞ケ関",
  "lines": [
   "丸ノ内線",
   "日比谷線",
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車・5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "日比谷線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "日比谷線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "霞ケ関駅周辺のエレベーター（地上）",
   "mapQuery": "霞ケ関駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 37,
  "stationName": "東京",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車・4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "4号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東京駅周辺のエレベーター（地上）",
   "mapQuery": "東京駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 38,
  "stationName": "大手町",
  "lines": [
   "丸ノ内線",
   "東西線",
   "千代田線",
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車・9号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・5号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "丸ノ内線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "大手町駅周辺のエレベーター（地上）",
   "mapQuery": "大手町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 39,
  "stationName": "淡路町",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "淡路町駅周辺のエレベーター（地上）",
   "mapQuery": "淡路町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 40,
  "stationName": "御茶ノ水",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "御茶ノ水駅周辺のエレベーター（地上）",
   "mapQuery": "御茶ノ水駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 41,
  "stationName": "本郷三丁目",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "3号車・4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "4号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "本郷三丁目駅周辺のエレベーター（地上）",
   "mapQuery": "本郷三丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 42,
  "stationName": "後楽園",
  "lines": [
   "丸ノ内線",
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "後楽園駅周辺のエレベーター（地上）",
   "mapQuery": "後楽園駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 43,
  "stationName": "茗荷谷",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "茗荷谷駅周辺のエレベーター（地上）",
   "mapQuery": "茗荷谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 44,
  "stationName": "新大塚",
  "lines": [
   "丸ノ内線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新大塚駅周辺のエレベーター（地上）",
   "mapQuery": "新大塚駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 45,
  "stationName": "池袋",
  "lines": [
   "丸ノ内線",
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "丸ノ内線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   },
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値マークあり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】8号車・9号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "8号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "8号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "丸ノ内線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "EVのみ・約5分",
    "detail": {
     "durationMin": 5,
     "distanceM": 200,
     "summary": "丸ノ内線ホーム→中央通路西改札(EV)→オレンジロード→南通路西改札(EV)→有楽町線ホーム",
     "elevators": [
      {"id":"M1","label":"丸ノ内線ホーム⇔改札階EV","car":"6号車4番ドア付近","gate":"中央通路西改札 (改札内)"},
      {"id":"Y1","label":"有楽町線改札⇔ホームEV","car":"3号車付近に着く","gate":"南通路西改札 (改札内)"}
     ],
     "steps": [
      {"kind":"ev","floor":"B2F→B1F","text":"丸ノ内線ホームの6号車4番ドア付近のEVへ","evId":"M1","barrier":"none"},
      {"kind":"gate","floor":"B1F","text":"中央通路西改札を出る","gate":"中央通路西改札"},
      {"kind":"walk","floor":"B1F","text":"東へ少し進み右折→オレンジロード(南北通路)を南へ","distM":150,"barrier":"none"},
      {"kind":"gate","floor":"B1F","text":"南通路西改札を入場","gate":"南通路西改札"},
      {"kind":"ev","floor":"B1F→B2F","text":"有楽町線ホームへ下りるEVへ","evId":"Y1","barrier":"none"},
      {"kind":"arrive","floor":"B2F","text":"有楽町線ホーム3号車付近に到着"}
     ],
     "sources": [
      {"name":"つれてんてん","url":"https://tsure-ten.info/ikebukuro/norikae-yurakuchomarunouchi/"},
      {"name":"電車乗り場ナビ","url":"https://noriba-navi.com/ikebukuro-yurakutyo"}
     ],
     "note": "段差なし・全区間EV経路。通路は人通りが多いので時間に余裕を。"
    }
   },
   {
    "from": "丸ノ内線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "有楽町線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "EVのみ・約5分",
    "detail": {
     "durationMin": 5,
     "distanceM": 200,
     "summary": "有楽町線ホーム→南通路西改札(EV)→オレンジロード→中央通路西改札(EV)→丸ノ内線ホーム",
     "elevators": [
      {"id":"Y1","label":"有楽町線ホーム⇔改札階EV","car":"3号車付近","gate":"南通路西改札 (改札内)"},
      {"id":"M1","label":"丸ノ内線改札⇔ホームEV","car":"6号車4番ドア付近に着く","gate":"中央通路西改札 (改札内)"}
     ],
     "steps": [
      {"kind":"ev","floor":"B2F→B1F","text":"有楽町線ホーム3号車付近のEVへ","evId":"Y1","barrier":"none"},
      {"kind":"gate","floor":"B1F","text":"南通路西改札を出る","gate":"南通路西改札"},
      {"kind":"walk","floor":"B1F","text":"オレンジロード(南北通路)を北へ→中央通路へ","distM":150,"barrier":"none"},
      {"kind":"gate","floor":"B1F","text":"中央通路西改札を入場","gate":"中央通路西改札"},
      {"kind":"ev","floor":"B1F→B2F","text":"丸ノ内線ホームへ下りるEVへ","evId":"M1","barrier":"none"},
      {"kind":"arrive","floor":"B2F","text":"丸ノ内線ホーム6号車4番ドア付近に到着"}
     ],
     "sources": [
      {"name":"つれてんてん","url":"https://tsure-ten.info/ikebukuro/norikae-yurakuchomarunouchi/"},
      {"name":"電車乗り場ナビ","url":"https://noriba-navi.com/ikebukuro-marunouti"}
     ],
     "note": "段差なし・全区間EV経路。通路は人通りが多いので時間に余裕を。"
    }
   },
   {
    "from": "有楽町線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "丸ノ内線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "池袋駅周辺のエレベーター（地上）",
   "mapQuery": "池袋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 46,
  "stationName": "中目黒",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "中目黒駅周辺のエレベーター（地上）",
   "mapQuery": "中目黒駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 47,
  "stationName": "恵比寿",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "恵比寿駅周辺のエレベーター（地上）",
   "mapQuery": "恵比寿駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 48,
  "stationName": "広尾",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "広尾駅周辺のエレベーター（地上）",
   "mapQuery": "広尾駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 49,
  "stationName": "六本木",
  "lines": [
   "日比谷線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車・7号車付近に目安値クリアの乗降口あり。地下深いためEV乗り継ぎあり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "7号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "日比谷線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "六本木駅周辺のエレベーター（地上）",
   "mapQuery": "六本木駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 50,
  "stationName": "神谷町",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "神谷町駅周辺のエレベーター（地上）",
   "mapQuery": "神谷町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 51,
  "stationName": "虎ノ門ヒルズ",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "4号車付近に目安値クリアの乗降口あり。新駅のため設備良好。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "虎ノ門ヒルズ駅周辺のエレベーター（地上）",
   "mapQuery": "虎ノ門ヒルズ駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 52,
  "stationName": "日比谷",
  "lines": [
   "日比谷線",
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "日比谷線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "日比谷線",
    "to": "有楽町線（有楽町）",
    "canTransferByEV": true,
    "note": "地上部経由で乗換可能"
   },
   {
    "from": "千代田線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "日比谷駅周辺のエレベーター（地上）",
   "mapQuery": "日比谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 53,
  "stationName": "東銀座",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東銀座駅周辺のエレベーター（地上）",
   "mapQuery": "東銀座駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 54,
  "stationName": "築地",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "築地駅周辺のエレベーター（地上）",
   "mapQuery": "築地駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 55,
  "stationName": "八丁堀",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "八丁堀駅周辺のエレベーター（地上）",
   "mapQuery": "八丁堀駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 56,
  "stationName": "茅場町",
  "lines": [
   "日比谷線",
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "日比谷線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "茅場町駅周辺のエレベーター（地上）",
   "mapQuery": "茅場町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 57,
  "stationName": "人形町",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "人形町駅周辺のエレベーター（地上）",
   "mapQuery": "人形町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 58,
  "stationName": "小伝馬町",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "小伝馬町駅周辺のエレベーター（地上）",
   "mapQuery": "小伝馬町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 59,
  "stationName": "秋葉原",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "秋葉原駅周辺のエレベーター（地上）",
   "mapQuery": "秋葉原駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 60,
  "stationName": "仲御徒町",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "日比谷線",
    "to": "銀座線（上野広小路）",
    "canTransferByEV": false,
    "note": "段差昇降機・車いす対応エスカレーター利用。係員対応必要。"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "仲御徒町駅周辺のエレベーター（地上）",
   "mapQuery": "仲御徒町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 61,
  "stationName": "入谷",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・7号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "7号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "入谷駅周辺のエレベーター（地上）",
   "mapQuery": "入谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 62,
  "stationName": "三ノ輪",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "7号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "三ノ輪駅周辺のエレベーター（地上）",
   "mapQuery": "三ノ輪駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 63,
  "stationName": "南千住",
  "lines": [
   "日比谷線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "南千住駅周辺のエレベーター（地上）",
   "mapQuery": "南千住駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 64,
  "stationName": "北千住",
  "lines": [
   "日比谷線",
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "日比谷線",
    "canBoardIndependently": true,
    "details": "1号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "7号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】7号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "日比谷線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "千代田線",
    "to": "日比谷線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "北千住駅周辺のエレベーター（地上）",
   "mapQuery": "北千住駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 65,
  "stationName": "中野",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "中野駅周辺のエレベーター（地上）",
   "mapQuery": "中野駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 66,
  "stationName": "落合",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。10号車付近にも確認済み。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "落合駅周辺のエレベーター（地上）",
   "mapQuery": "落合駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 67,
  "stationName": "高田馬場",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】7号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "高田馬場駅周辺のエレベーター（地上）",
   "mapQuery": "高田馬場駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 68,
  "stationName": "早稲田",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "早稲田駅周辺のエレベーター（地上）",
   "mapQuery": "早稲田駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 69,
  "stationName": "神楽坂",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "神楽坂駅周辺のエレベーター（地上）",
   "mapQuery": "神楽坂駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 70,
  "stationName": "飯田橋",
  "lines": [
   "東西線",
   "有楽町線",
   "南北線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "全箇所目安値クリア。ホームドアあり。単独乗降可能。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "東西線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "有楽町線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "有楽町線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "有楽町線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "飯田橋駅周辺のエレベーター（地上）",
   "mapQuery": "飯田橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 71,
  "stationName": "九段下",
  "lines": [
   "東西線",
   "半蔵門線",
   "都営新宿線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・3号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "3号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "東西線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "東西線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "東西線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "九段下駅周辺のエレベーター（地上）",
   "mapQuery": "九段下駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 72,
  "stationName": "竹橋",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "竹橋駅周辺のエレベーター（地上）",
   "mapQuery": "竹橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 73,
  "stationName": "門前仲町",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "2号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "門前仲町駅周辺のエレベーター（地上）",
   "mapQuery": "門前仲町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 74,
  "stationName": "木場",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "木場駅周辺のエレベーター（地上）",
   "mapQuery": "木場駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 75,
  "stationName": "東陽町",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・9号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東陽町駅周辺のエレベーター（地上）",
   "mapQuery": "東陽町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 76,
  "stationName": "南砂町",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "南砂町駅周辺のエレベーター（地上）",
   "mapQuery": "南砂町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 77,
  "stationName": "西葛西",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "西葛西駅周辺のエレベーター（地上）",
   "mapQuery": "西葛西駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 78,
  "stationName": "葛西",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】7号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "葛西駅周辺のエレベーター（地上）",
   "mapQuery": "葛西駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 79,
  "stationName": "浦安",
  "lines": [
   "東西線"
  ],
  "accessibilityByLine": [
   {
    "line": "東西線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "浦安駅周辺のエレベーター（地上）",
   "mapQuery": "浦安駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 80,
  "stationName": "代々木上原",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "代々木上原駅周辺のエレベーター（地上）",
   "mapQuery": "代々木上原駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 81,
  "stationName": "代々木公園",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "代々木公園駅周辺のエレベーター（地上）",
   "mapQuery": "代々木公園駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 82,
  "stationName": "明治神宮前",
  "lines": [
   "千代田線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】9号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "9号車2番扉"
    ],
    "nearElevatorCar": "9号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "千代田線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "千代田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "明治神宮前駅周辺のエレベーター（地上）",
   "mapQuery": "明治神宮前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 83,
  "stationName": "乃木坂",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "乃木坂駅周辺のエレベーター（地上）",
   "mapQuery": "乃木坂駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 84,
  "stationName": "赤坂",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "赤坂駅周辺のエレベーター（地上）",
   "mapQuery": "赤坂駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 85,
  "stationName": "二重橋前",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "二重橋前駅周辺のエレベーター（地上）",
   "mapQuery": "二重橋前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 86,
  "stationName": "新御茶ノ水",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新御茶ノ水駅周辺のエレベーター（地上）",
   "mapQuery": "新御茶ノ水駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 87,
  "stationName": "湯島",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "湯島駅周辺のエレベーター（地上）",
   "mapQuery": "湯島駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 88,
  "stationName": "根津",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "根津駅周辺のエレベーター（地上）",
   "mapQuery": "根津駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 89,
  "stationName": "千駄木",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "5号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "千駄木駅周辺のエレベーター（地上）",
   "mapQuery": "千駄木駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 90,
  "stationName": "西日暮里",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "西日暮里駅周辺のエレベーター（地上）",
   "mapQuery": "西日暮里駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 91,
  "stationName": "町屋",
  "lines": [
   "千代田線"
  ],
  "accessibilityByLine": [
   {
    "line": "千代田線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "町屋駅周辺のエレベーター（地上）",
   "mapQuery": "町屋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 92,
  "stationName": "和光市",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "副都心線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "和光市駅周辺のエレベーター（地上）",
   "mapQuery": "和光市駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 93,
  "stationName": "地下鉄成増",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "地下鉄成増駅周辺のエレベーター（地上）",
   "mapQuery": "地下鉄成増駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 94,
  "stationName": "地下鉄赤塚",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "地下鉄赤塚駅周辺のエレベーター（地上）",
   "mapQuery": "地下鉄赤塚駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 95,
  "stationName": "平和台",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "平和台駅周辺のエレベーター（地上）",
   "mapQuery": "平和台駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 96,
  "stationName": "氷川台",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】和光市方面7号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】7号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "7号車2番扉"
    ],
    "nearElevatorCar": "7号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "氷川台駅周辺のエレベーター（地上）",
   "mapQuery": "氷川台駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 97,
  "stationName": "小竹向原",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】新木場方面9号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "9号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "9号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】9号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "9号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "9号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "小竹向原駅周辺のエレベーター（地上）",
   "mapQuery": "小竹向原駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 98,
  "stationName": "千川",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。車両により変動あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "unstaffedRisk": true,
     "recommendStaffCall": true
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "副都心線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "副都心線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "千川駅周辺のエレベーター（地上）",
   "mapQuery": "千川駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 99,
  "stationName": "要町",
  "lines": [
   "有楽町線",
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   },
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "要町駅周辺のエレベーター（地上）",
   "mapQuery": "要町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 100,
  "stationName": "東池袋",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】和光市方面8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "8号車2番扉"
    ],
    "nearElevatorCar": "8号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東池袋駅周辺のエレベーター（地上）",
   "mapQuery": "東池袋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 101,
  "stationName": "護国寺",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "7号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "護国寺駅周辺のエレベーター（地上）",
   "mapQuery": "護国寺駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 102,
  "stationName": "江戸川橋",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "江戸川橋駅周辺のエレベーター（地上）",
   "mapQuery": "江戸川橋駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 103,
  "stationName": "市ケ谷",
  "lines": [
   "有楽町線",
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "全箇所目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "市ケ谷駅周辺のエレベーター（地上）",
   "mapQuery": "市ケ谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 104,
  "stationName": "麴町",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】和光市方面10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "10号車2番扉"
    ],
    "nearElevatorCar": "10号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "麴町駅周辺のエレベーター（地上）",
   "mapQuery": "麴町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 105,
  "stationName": "永田町",
  "lines": [
   "有楽町線",
   "半蔵門線",
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   },
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "10号車2番扉"
    ],
    "nearElevatorCar": "10号車"
   },
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "全箇所目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "有楽町線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "南北線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "有楽町線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "南北線",
    "to": "半蔵門線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "永田町駅周辺のエレベーター（地上）",
   "mapQuery": "永田町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 106,
  "stationName": "桜田門",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": false,
    "details": "【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": true
    }
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "桜田門駅周辺のエレベーター（地上）",
   "mapQuery": "桜田門駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 107,
  "stationName": "有楽町",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・9号車付近に目安値クリアの乗降口あり。駅構内乗換は階段昇降機のみのため地上部経由ルートを推奨。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "日比谷線（日比谷）",
    "canTransferByEV": true,
    "note": "地上部経由で乗換可能"
   },
   {
    "from": "有楽町線",
    "to": "千代田線（日比谷）",
    "canTransferByEV": true,
    "note": "地上部経由で乗換可能"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "有楽町駅周辺のエレベーター（地上）",
   "mapQuery": "有楽町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 108,
  "stationName": "銀座一丁目",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "銀座線（銀座）",
    "canTransferByEV": false,
    "note": "段差昇降機利用。係員対応必要。"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "銀座一丁目駅周辺のエレベーター（地上）",
   "mapQuery": "銀座一丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 109,
  "stationName": "新富町",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】新木場方面5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新富町駅周辺のエレベーター（地上）",
   "mapQuery": "新富町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 110,
  "stationName": "月島",
  "lines": [
   "有楽町線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "有楽町線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "月島駅周辺のエレベーター（地上）",
   "mapQuery": "月島駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 111,
  "stationName": "豊洲",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車・8号車・9号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉",
     "8号車2番扉",
     "9号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "豊洲駅周辺のエレベーター（地上）",
   "mapQuery": "豊洲駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 112,
  "stationName": "辰巳",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "8号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "辰巳駅周辺のエレベーター（地上）",
   "mapQuery": "辰巳駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 113,
  "stationName": "新木場",
  "lines": [
   "有楽町線"
  ],
  "accessibilityByLine": [
   {
    "line": "有楽町線",
    "canBoardIndependently": true,
    "details": "【PDF確認】和光市方面4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "新木場駅周辺のエレベーター（地上）",
   "mapQuery": "新木場駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 114,
  "stationName": "半蔵門",
  "lines": [
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "半蔵門駅周辺のエレベーター（地上）",
   "mapQuery": "半蔵門駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 115,
  "stationName": "神保町",
  "lines": [
   "半蔵門線",
   "都営三田線",
   "都営新宿線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "半蔵門線",
    "to": "都営三田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   },
   {
    "from": "半蔵門線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "神保町駅周辺のエレベーター（地上）",
   "mapQuery": "神保町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 116,
  "stationName": "水天宮前",
  "lines": [
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "水天宮前駅周辺のエレベーター（地上）",
   "mapQuery": "水天宮前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 117,
  "stationName": "清澄白河",
  "lines": [
   "半蔵門線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "半蔵門線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "清澄白河駅周辺のエレベーター（地上）",
   "mapQuery": "清澄白河駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 118,
  "stationName": "住吉",
  "lines": [
   "半蔵門線",
   "都営新宿線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "6号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "半蔵門線",
    "to": "都営新宿線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "住吉駅周辺のエレベーター（地上）",
   "mapQuery": "住吉駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 119,
  "stationName": "錦糸町",
  "lines": [
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "4号車2番扉"
    ],
    "nearElevatorCar": "4号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "錦糸町駅周辺のエレベーター（地上）",
   "mapQuery": "錦糸町駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 120,
  "stationName": "押上",
  "lines": [
   "半蔵門線"
  ],
  "accessibilityByLine": [
   {
    "line": "半蔵門線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車・4号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉",
     "4号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "押上駅周辺のエレベーター（地上）",
   "mapQuery": "押上駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 121,
  "stationName": "目黒",
  "lines": [
   "南北線",
   "都営三田線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。単独乗降可能。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "南北線",
    "to": "都営三田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "目黒駅周辺のエレベーター（地上）",
   "mapQuery": "目黒駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 122,
  "stationName": "白金台",
  "lines": [
   "南北線",
   "都営三田線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "南北線",
    "to": "都営三田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "白金台駅周辺のエレベーター（地上）",
   "mapQuery": "白金台駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 123,
  "stationName": "白金高輪",
  "lines": [
   "南北線",
   "都営三田線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "南北線",
    "to": "都営三田線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "白金高輪駅周辺のエレベーター（地上）",
   "mapQuery": "白金高輪駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 124,
  "stationName": "麻布十番",
  "lines": [
   "南北線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [
   {
    "from": "南北線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "麻布十番駅周辺のエレベーター（地上）",
   "mapQuery": "麻布十番駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 125,
  "stationName": "六本木一丁目",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "六本木一丁目駅周辺のエレベーター（地上）",
   "mapQuery": "六本木一丁目駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 126,
  "stationName": "東大前",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    }
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東大前駅周辺のエレベーター（地上）",
   "mapQuery": "東大前駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 127,
  "stationName": "本駒込",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "本駒込駅周辺のエレベーター（地上）",
   "mapQuery": "本駒込駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 128,
  "stationName": "駒込",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "駒込駅周辺のエレベーター（地上）",
   "mapQuery": "駒込駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 129,
  "stationName": "西ケ原",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "西ケ原駅周辺のエレベーター（地上）",
   "mapQuery": "西ケ原駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 130,
  "stationName": "王子",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】2号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "2号車2番扉"
    ],
    "nearElevatorCar": "2号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "王子駅周辺のエレベーター（地上）",
   "mapQuery": "王子駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 131,
  "stationName": "王子神谷",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】3号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "3号車2番扉"
    ],
    "nearElevatorCar": "3号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "王子神谷駅周辺のエレベーター（地上）",
   "mapQuery": "王子神谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 132,
  "stationName": "志茂",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】5号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "5号車2番扉"
    ],
    "nearElevatorCar": "5号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "志茂駅周辺のエレベーター（地上）",
   "mapQuery": "志茂駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 133,
  "stationName": "赤羽岩淵",
  "lines": [
   "南北線"
  ],
  "accessibilityByLine": [
   {
    "line": "南北線",
    "canBoardIndependently": true,
    "details": "【PDF確認】6号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": false,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "赤羽岩淵駅周辺のエレベーター（地上）",
   "mapQuery": "赤羽岩淵駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 134,
  "stationName": "雑司が谷",
  "lines": [
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "雑司が谷駅周辺のエレベーター（地上）",
   "mapQuery": "雑司が谷駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 135,
  "stationName": "西早稲田",
  "lines": [
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "1号車2番扉",
     "10号車2番扉"
    ],
    "nearElevatorCar": "1号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "西早稲田駅周辺のエレベーター（地上）",
   "mapQuery": "西早稲田駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 136,
  "stationName": "東新宿",
  "lines": [
   "副都心線",
   "都営大江戸線"
  ],
  "accessibilityByLine": [
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】6号車付近に目安値クリアの乗降口あり（両方向）。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "6号車2番扉"
    ],
    "nearElevatorCar": "6号車"
   }
  ],
  "transferRoutes": [
   {
    "from": "副都心線",
    "to": "都営大江戸線",
    "canTransferByEV": true,
    "note": "エレベーターのみ"
   }
  ],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "東新宿駅周辺のエレベーター（地上）",
   "mapQuery": "東新宿駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 },
 {
  "id": 137,
  "stationName": "北参道",
  "lines": [
   "副都心線"
  ],
  "accessibilityByLine": [
   {
    "line": "副都心線",
    "canBoardIndependently": true,
    "details": "【PDF確認】8号車付近に目安値クリアの乗降口あり。",
    "boardingRisk": {
     "vehicleVariation": true,
     "recommendStaffCall": false
    },
    "safeDoors": [
     "8号車2番扉"
    ],
    "nearElevatorCar": "8号車"
   }
  ],
  "transferRoutes": [],
  "surfaceToHomeEV": true,
  "surfaceElevator": {
   "description": "北参道駅周辺のエレベーター（地上）",
   "mapQuery": "北参道駅 エレベーター"
  },
  "smoothMetroUrl": "https://www.smoothmetro.jp/",
  "hasWheelchairToilet": false
 }
];

console.log("solometro データ読み込み完了: " + window.STATIONS.length + "駅");