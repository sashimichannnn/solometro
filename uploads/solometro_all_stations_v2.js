// ============================================================
// solometro — 全駅データ v2（東京メトロ全9路線）
// ソース：東京メトロ公式PDF（各路線段差・隙間状況）
//         スムーズメトロ（乗換動線）
// PDF取得日：
//   銀座線・丸ノ内線・千代田線・日比谷線・南北線：2025年11月
//   有楽町線・副都心線：2026年1月
//   半蔵門線：2026年3月
//   東西線：2026年4月（最新）
// ============================================================
//
// 【凡例】
// canBoardIndependently: true  = 塗りつぶしマスあり（目安値クリアの乗降口が存在）
// canBoardIndependently: false = 全マス空白（目安値を満たす乗降口なし）
// vehicleVariation: true       = 一部の号車のみクリア（車両により変動）
// vehicleVariation: false      = 全号車クリア（南北線など新しい路線）
// recommendStaffCall: true     = 乗車前に係員確認を推奨
// ============================================================

const SOLOMETRO_STATIONS = [

// ============================================================
// 銀座線（G）全19駅 ／ PDF：2025年11月版（6両編成）
// ============================================================
  { id:"G01", stationName:"渋谷", lines:["銀座線","半蔵門線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"半蔵門線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" },
      { from:"銀座線", to:"副都心線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" },
      { from:"半蔵門線", to:"副都心線", canTransferByEV:true, note:"〈半蔵門線〉2号車付近EV経由" }
    ]
  },
  { id:"G02", stationName:"表参道", lines:["銀座線","千代田線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"4号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"銀座線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"G03", stationName:"外苑前", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G04", stationName:"青山一丁目", lines:["銀座線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。全方面で確認済み。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線（渋谷方面）", to:"半蔵門線", canTransferByEV:false, note:"係員対応必要" },
      { from:"銀座線（浅草方面）", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"G05", stationName:"赤坂見附", lines:["銀座線","丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車・4号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"G06", stationName:"溜池山王", lines:["銀座線","南北線"],
    surfaceToHomeEV:true,
    note:"国会議事堂前駅連絡（丸ノ内線・千代田線）",
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"南北線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" },
      { from:"銀座線", to:"丸ノ内線", canTransferByEV:false, note:"段差昇降機・スロープ利用。係員対応必要。" },
      { from:"銀座線", to:"千代田線", canTransferByEV:false, note:"段差昇降機利用。係員対応必要。" }
    ]
  },
  { id:"G07", stationName:"虎ノ門", lines:["銀座線"],
    surfaceToHomeEV:true,
    note:"虎ノ門ヒルズ駅連絡（日比谷線）",
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線（渋谷方面）", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"銀座線（浅草方面）", to:"日比谷線", canTransferByEV:true, note:"地上経由で乗換可能" }
    ]
  },
  { id:"G08", stationName:"新橋", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"5号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G09", stationName:"銀座", lines:["銀座線","丸ノ内線","日比谷線"],
    surfaceToHomeEV:true,
    note:"銀座一丁目駅連絡（有楽町線）",
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"丸ノ内線", canTransferByEV:false, note:"移動不可。他の経路を検討してください。" },
      { from:"銀座線", to:"日比谷線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" },
      { from:"銀座線", to:"有楽町線（銀座一丁目）", canTransferByEV:false, note:"段差昇降機利用。係員対応必要。" }
    ]
  },
  { id:"G10", stationName:"京橋", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G11", stationName:"日本橋", lines:["銀座線","東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車・6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"東西線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" }
    ]
  },
  { id:"G12", stationName:"三越前", lines:["銀座線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"6号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"半蔵門線", canTransferByEV:true, note:"〈銀座線〉6号車付近EV経由" }
    ]
  },
  { id:"G13", stationName:"神田", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G14", stationName:"末広町", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"3号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G15", stationName:"上野広小路", lines:["銀座線"],
    surfaceToHomeEV:true,
    note:"仲御徒町駅連絡（日比谷線）",
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。車両により変動。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"日比谷線（仲御徒町）", canTransferByEV:false, note:"段差昇降機・車いす対応エスカレーター利用。係員対応必要。" }
    ]
  },
  { id:"G16", stationName:"上野", lines:["銀座線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員へのスロープ手配が必要です。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[
      { from:"銀座線", to:"日比谷線", canTransferByEV:true, note:"〈日比谷線〉5号車付近EV経由" }
    ]
  },
  { id:"G17", stationName:"稲荷町", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G18", stationName:"田原町", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"G19", stationName:"浅草", lines:["銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"銀座線", canBoardIndependently:true,
        details:"5号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },

// ============================================================
// 丸ノ内線（M）全28駅（支線含む）／ PDF：2025年11月版（6両編成）
// ============================================================
  { id:"M01", stationName:"荻窪", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M02", stationName:"南阿佐ケ谷", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M03", stationName:"新高円寺", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M04", stationName:"東高円寺", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M05", stationName:"新中野", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Mb03", stationName:"方南町", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり（支線）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Mb04", stationName:"中野富士見町", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車・5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Mb05", stationName:"中野新橋", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M06", stationName:"中野坂上", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M07", stationName:"西新宿", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M08", stationName:"新宿", lines:["丸ノ内線","都営新宿線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M09", stationName:"新宿三丁目", lines:["丸ノ内線","副都心線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M10", stationName:"新宿御苑前", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M11", stationName:"四谷三丁目", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"3号車・5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M12", stationName:"四ツ谷", lines:["丸ノ内線","南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M13", stationName:"赤坂見附", lines:["丸ノ内線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"銀座線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M14", stationName:"国会議事堂前", lines:["丸ノ内線","千代田線"],
    surfaceToHomeEV:true,
    note:"溜池山王駅連絡（銀座線・南北線）",
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M15", stationName:"霞ケ関", lines:["丸ノ内線","日比谷線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車・5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M16", stationName:"銀座", lines:["丸ノ内線","銀座線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"銀座線", canTransferByEV:false, note:"移動不可。他の経路を検討してください。" },
      { from:"丸ノ内線", to:"日比谷線", canTransferByEV:false, note:"係員対応必要" }
    ]
  },
  { id:"M17", stationName:"東京", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車・4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M18", stationName:"大手町", lines:["丸ノ内線","東西線","千代田線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M19", stationName:"淡路町", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M20", stationName:"御茶ノ水", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M21", stationName:"本郷三丁目", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"3号車・4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M22", stationName:"後楽園", lines:["丸ノ内線","南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"M23", stationName:"茗荷谷", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M24", stationName:"新大塚", lines:["丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"M25", stationName:"池袋", lines:["丸ノ内線","有楽町線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"【PDF確認】5号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値マークあり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】8号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"丸ノ内線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"丸ノ内線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },

// ============================================================
// 日比谷線（H）全22駅 ／ PDF：2025年11月版（7両編成）
// ============================================================
  { id:"H01", stationName:"中目黒", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H02", stationName:"恵比寿", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H03", stationName:"広尾", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H04", stationName:"六本木", lines:["日比谷線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車・7号車付近に目安値クリアの乗降口あり。地下深いためEV乗り継ぎあり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"H05", stationName:"神谷町", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H06", stationName:"虎ノ門ヒルズ", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"4号車付近に目安値クリアの乗降口あり。新駅のため設備良好。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H07", stationName:"霞ケ関", lines:["日比谷線","丸ノ内線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"日比谷線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"H08", stationName:"日比谷", lines:["日比谷線","千代田線"],
    surfaceToHomeEV:true,
    note:"有楽町駅連絡（有楽町線）地上部経由",
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"日比谷線", to:"有楽町線（有楽町）", canTransferByEV:true, note:"地上部経由で乗換可能" }
    ]
  },
  { id:"H09", stationName:"銀座", lines:["日比谷線","銀座線","丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車・4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"銀座線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" },
      { from:"日比谷線", to:"丸ノ内線", canTransferByEV:false, note:"係員対応必要" }
    ]
  },
  { id:"H10", stationName:"東銀座", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H11", stationName:"築地", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H12", stationName:"八丁堀", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H13", stationName:"茅場町", lines:["日比谷線","東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"H14", stationName:"人形町", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H15", stationName:"小伝馬町", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H16", stationName:"秋葉原", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H17", stationName:"仲御徒町", lines:["日比谷線"],
    surfaceToHomeEV:true,
    note:"上野広小路駅連絡（銀座線）",
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"銀座線（上野広小路）", canTransferByEV:false, note:"段差昇降機・車いす対応エスカレーター利用。係員対応必要。" }
    ]
  },
  { id:"H18", stationName:"上野", lines:["日比谷線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"銀座線", canTransferByEV:true, note:"〈日比谷線〉5号車付近EV経由" }
    ]
  },
  { id:"H19", stationName:"入谷", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・7号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H20", stationName:"三ノ輪", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"7号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H21", stationName:"南千住", lines:["日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"H22", stationName:"北千住", lines:["日比谷線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"日比谷線", canBoardIndependently:true,
        details:"1号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"日比谷線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },

// ============================================================
// 東西線（T）全23駅 ／ PDF：2026年4月版（最新・10両編成）
// ============================================================
  { id:"T01", stationName:"中野", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T02", stationName:"落合", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。10号車付近にも確認済み。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T03", stationName:"高田馬場", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】7号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T04", stationName:"早稲田", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】4号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T05", stationName:"神楽坂", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T06", stationName:"飯田橋", lines:["東西線","有楽町線","南北線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} },
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} },
      { line:"南北線", canBoardIndependently:true,
        details:"全箇所目安値クリア。ホームドアあり。単独乗降可能。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"東西線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"東西線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"東西線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"T07", stationName:"九段下", lines:["東西線","半蔵門線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】2号車・3号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"東西線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"東西線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"T08", stationName:"竹橋", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T09", stationName:"大手町", lines:["東西線","丸ノ内線","千代田線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】5号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"東西線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"東西線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"東西線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"T10", stationName:"日本橋", lines:["東西線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"東西線", to:"銀座線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" }
    ]
  },
  { id:"T11", stationName:"茅場町", lines:["東西線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"東西線", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"T12", stationName:"門前仲町", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】1号車・2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T13", stationName:"木場", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T14", stationName:"東陽町", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】2号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T15", stationName:"南砂町", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T16", stationName:"西葛西", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】5号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T17", stationName:"葛西", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】7号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"T18", stationName:"浦安", lines:["東西線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"東西線", canBoardIndependently:true,
        details:"【PDF確認】3号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },

// ============================================================
// 千代田線（C）全20駅（23区内）／ PDF：2025年11月版（10両編成）
// ============================================================
  { id:"C01", stationName:"代々木上原", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C02", stationName:"代々木公園", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C03", stationName:"明治神宮前", lines:["千代田線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】3号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C04", stationName:"表参道", lines:["千代田線","銀座線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"銀座線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"千代田線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C05", stationName:"乃木坂", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C06", stationName:"赤坂", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C07", stationName:"国会議事堂前", lines:["千代田線","丸ノ内線"],
    surfaceToHomeEV:true,
    note:"溜池山王駅連絡（銀座線・南北線）",
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C08", stationName:"霞ケ関", lines:["千代田線","丸ノ内線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"千代田線", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C09", stationName:"日比谷", lines:["千代田線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C10", stationName:"二重橋前", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C11", stationName:"大手町", lines:["千代田線","丸ノ内線","東西線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"千代田線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"千代田線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"C12", stationName:"新御茶ノ水", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C13", stationName:"湯島", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C14", stationName:"根津", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C15", stationName:"千駄木", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C16", stationName:"西日暮里", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C17", stationName:"町屋", lines:["千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"C18", stationName:"北千住", lines:["千代田線","日比谷線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"千代田線", canBoardIndependently:true,
        details:"【PDF確認】7号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"千代田線", to:"日比谷線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },

// ============================================================
// 有楽町線（Y）全24駅 ／ PDF：2026年1月版（10両編成）
// ============================================================
  { id:"Y01", stationName:"和光市", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"Y02", stationName:"地下鉄成増", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"Y03", stationName:"地下鉄赤塚", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"Y04", stationName:"平和台", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y05", stationName:"氷川台", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】和光市方面7号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y06", stationName:"小竹向原", lines:["有楽町線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】新木場方面9号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】9号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y07", stationName:"千川", lines:["有楽町線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。車両により変動あり。",
        boardingRisk:{vehicleVariation:true,unstaffedRisk:true,recommendStaffCall:true} },
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y08", stationName:"要町", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y09", stationName:"池袋", lines:["有楽町線","丸ノ内線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"丸ノ内線", canBoardIndependently:true,
        details:"【PDF確認】5号車・6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】8号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"有楽町線", to:"副都心線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y10", stationName:"東池袋", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】和光市方面8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y11", stationName:"護国寺", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】1号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y12", stationName:"江戸川橋", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"Y13", stationName:"飯田橋", lines:["有楽町線","東西線","南北線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} },
      { line:"東西線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} },
      { line:"南北線", canBoardIndependently:true,
        details:"全箇所目安値クリア。ホームドアあり。単独乗降可能。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"有楽町線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"有楽町線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y14", stationName:"市ケ谷", lines:["有楽町線","南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"南北線", canBoardIndependently:true,
        details:"全箇所目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y15", stationName:"麴町", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】和光市方面10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y16", stationName:"永田町", lines:["有楽町線","半蔵門線","南北線"],
    surfaceToHomeEV:true,
    note:"赤坂見附駅連絡（銀座線・丸ノ内線）",
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} },
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} },
      { line:"南北線", canBoardIndependently:true,
        details:"全箇所目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"有楽町線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y17", stationName:"桜田門", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"Y18", stationName:"有楽町", lines:["有楽町線"],
    surfaceToHomeEV:true,
    note:"日比谷駅連絡（日比谷線・千代田線）地上部経由ルート推奨",
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】2号車・9号車付近に目安値クリアの乗降口あり。駅構内乗換は階段昇降機のみのため地上部経由ルートを推奨。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"日比谷線（日比谷）", canTransferByEV:true, note:"地上部経由で乗換可能" },
      { from:"有楽町線", to:"千代田線（日比谷）", canTransferByEV:true, note:"地上部経由で乗換可能" }
    ]
  },
  { id:"Y19", stationName:"銀座一丁目", lines:["有楽町線"],
    surfaceToHomeEV:true,
    note:"銀座駅連絡（銀座線・丸ノ内線・日比谷線）",
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】2号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"銀座線（銀座）", canTransferByEV:false, note:"段差昇降機利用。係員対応必要。" }
    ]
  },
  { id:"Y20", stationName:"新富町", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】新木場方面5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y21", stationName:"月島", lines:["有楽町線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"有楽町線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Y22", stationName:"豊洲", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】2号車・8号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y23", stationName:"辰巳", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】3号車・8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Y24", stationName:"新木場", lines:["有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"有楽町線", canBoardIndependently:true,
        details:"【PDF確認】和光市方面4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },

// ============================================================
// 半蔵門線（Z）全14駅 ／ PDF：2026年3月版（10両編成）
// ============================================================
  { id:"Z01", stationName:"渋谷", lines:["半蔵門線","銀座線","副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり（押上・渋谷方面共に）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"副都心線", canTransferByEV:true, note:"〈半蔵門線〉2号車付近EV経由" }
    ]
  },
  { id:"Z02", stationName:"表参道", lines:["半蔵門線","銀座線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"銀座線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z03", stationName:"青山一丁目", lines:["半蔵門線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車・7号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"銀座線（渋谷方面）", canTransferByEV:false, note:"係員対応必要" },
      { from:"半蔵門線", to:"銀座線（浅草方面）", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z04", stationName:"永田町", lines:["半蔵門線","有楽町線","南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"南北線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z05", stationName:"半蔵門", lines:["半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Z06", stationName:"九段下", lines:["半蔵門線","東西線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】1号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z07", stationName:"神保町", lines:["半蔵門線","都営三田線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"都営三田線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z08", stationName:"大手町", lines:["半蔵門線","丸ノ内線","東西線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車・5号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"半蔵門線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z09", stationName:"三越前", lines:["半蔵門線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"銀座線", canTransferByEV:true, note:"〈銀座線〉6号車付近EV経由" }
    ]
  },
  { id:"Z10", stationName:"水天宮前", lines:["半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Z11", stationName:"清澄白河", lines:["半蔵門線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z12", stationName:"住吉", lines:["半蔵門線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車・6号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"半蔵門線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"Z13", stationName:"錦糸町", lines:["半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"Z14", stationName:"押上", lines:["半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"半蔵門線", canBoardIndependently:true,
        details:"【PDF確認】3号車・4号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },

// ============================================================
// 南北線（N）全19駅 ／ PDF：2025年11月版（8両編成）
// 注：南北線はほぼ全駅でほぼ全乗降口が目安値クリア
//     ホームドアあり・最新設備のため vehicleVariation: false
// ============================================================
  { id:"N01", stationName:"目黒", lines:["南北線","都営三田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。単独乗降可能。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"都営三田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N02", stationName:"白金台", lines:["南北線","都営三田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"都営三田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N03", stationName:"白金高輪", lines:["南北線","都営三田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"都営三田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N04", stationName:"麻布十番", lines:["南北線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N05", stationName:"六本木一丁目", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N06", stationName:"溜池山王", lines:["南北線","銀座線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"銀座線", canTransferByEV:true, note:"改札を出る必要あり。係員にお声がけください。" }
    ]
  },
  { id:"N07", stationName:"永田町", lines:["南北線","有楽町線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"南北線", to:"半蔵門線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N08", stationName:"四ツ谷", lines:["南北線","丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N09", stationName:"市ケ谷", lines:["南北線","有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N10", stationName:"飯田橋", lines:["南北線","東西線","有楽町線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"東西線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"南北線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"南北線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N11", stationName:"後楽園", lines:["南北線","丸ノ内線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"南北線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"N12", stationName:"東大前", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】全乗降口で目安値クリア。ホームドアあり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N13", stationName:"本駒込", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N14", stationName:"駒込", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N15", stationName:"西ケ原", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N16", stationName:"王子", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】2号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N17", stationName:"王子神谷", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】3号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N18", stationName:"志茂", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"N19", stationName:"赤羽岩淵", lines:["南北線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"南北線", canBoardIndependently:true,
        details:"【PDF確認】6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },

// ============================================================
// 副都心線（F）全16駅 ／ PDF：2026年1月版（10両編成）
// ============================================================
  { id:"F01", stationName:"和光市", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:false,
        details:"【PDF確認】全乗降口で目安値を満たす箇所なし。係員対応が必要。",
        boardingRisk:{vehicleVariation:false,recommendStaffCall:true} }
    ],
    transferRoutes:[]
  },
  { id:"F02", stationName:"地下鉄成増", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F03", stationName:"地下鉄赤塚", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】6号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F04", stationName:"平和台", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F05", stationName:"氷川台", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】7号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F06", stationName:"小竹向原", lines:["副都心線","有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】9号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F07", stationName:"千川", lines:["副都心線","有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F08", stationName:"要町", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】4号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F09", stationName:"池袋", lines:["副都心線","丸ノ内線","有楽町線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】8号車・9号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"副都心線", to:"有楽町線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F10", stationName:"雑司が谷", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】1号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F11", stationName:"西早稲田", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】1号車・10号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F12", stationName:"東新宿", lines:["副都心線","都営大江戸線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】6号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"都営大江戸線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F13", stationName:"新宿三丁目", lines:["副都心線","丸ノ内線","都営新宿線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】5号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"丸ノ内線", canTransferByEV:true, note:"エレベーターのみ" },
      { from:"副都心線", to:"都営新宿線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F14", stationName:"北参道", lines:["副都心線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】8号車付近に目安値クリアの乗降口あり。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[]
  },
  { id:"F15", stationName:"明治神宮前", lines:["副都心線","千代田線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】9号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"千代田線", canTransferByEV:true, note:"エレベーターのみ" }
    ]
  },
  { id:"F16", stationName:"渋谷", lines:["副都心線","銀座線","半蔵門線"],
    surfaceToHomeEV:true,
    accessibilityByLine:[
      { line:"副都心線", canBoardIndependently:true,
        details:"【PDF確認】3号車・9号車付近に目安値クリアの乗降口あり（両方向）。",
        boardingRisk:{vehicleVariation:true,recommendStaffCall:false} }
    ],
    transferRoutes:[
      { from:"副都心線", to:"半蔵門線", canTransferByEV:true, note:"〈半蔵門線〉2号車付近EV経由" }
    ]
  },

]; // SOLOMETRO_STATIONS 終わり

// ============================================================
// データ統計
// ============================================================
// 銀座線：19駅　丸ノ内線：25駅（支線含む）
// 日比谷線：22駅　東西線：18駅（23区内）
// 千代田線：18駅（23区内）　有楽町線：24駅
// 半蔵門線：14駅　南北線：19駅
// 副都心線：16駅
// 合計：175駅
//
// 全PDFデータ反映済み（各路線の号車情報含む）
// データバージョン：v2（2026年5月22日）
// ============================================================

console.log(`solometro データ読み込み完了: ${SOLOMETRO_STATIONS.length}駅（全PDFデータ反映版）`);
