// GENERATED DATA - ported from the Python `mahjong` library test suite (MIT),
// https://github.com/MahjongRepository/mahjong tests/hand_calculating/*.py
// Each case: riichi-score input + the Python test's assertions (`expect`, with the
// original assert source in `src`). `unsupported` names Python options/conditions
// riichi-score has no equivalent for. `skipped` lists what was not ported and why.

export const cases = [
 {
  "id": "fu:test_chitoitsu_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "5m",
    "5m",
    "9m",
    "9m",
    "6p",
    "1s",
    "1s",
    "2s",
    "2s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 1,
    "src": "assert len(fu_details) == 1"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 25,
     "reason": "base"
    },
    "src": "assert {'fu': 25, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert fu == 25"
   }
  ]
 },
 {
  "id": "fu:test_chitoitsu_fu#2",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "5m",
    "5m",
    "9m",
    "9m",
    "6p",
    "1s",
    "1s",
    "2s",
    "2s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 1,
    "src": "assert len(fu_details) == 1"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 25,
     "reason": "base"
    },
    "src": "assert {'fu': 25, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert fu == 25"
   }
  ]
 },
 {
  "id": "fu:test_open_hand_base#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "2s",
      "2s",
      "2s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "open_pon"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.OPEN_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_fu_based_on_win_group#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "7m",
    "8m",
    "9m",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "6p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {
   "waitType": "ryanmen"
  },
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_fu_based_on_win_group#2",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "7m",
    "8m",
    "9m",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "6p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {
   "waitType": "tanki"
  },
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_open_pinfu_adds_hand_without_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "2p",
    "2p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2s",
      "3s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "hand_without_fu"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.HAND_WITHOUT_FU} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_open_hand_without_additional_fu_2#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "2p",
    "2p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2s",
      "3s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 20,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 1,
    "src": "assert len(fu_details) == 1"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 20,
    "src": "assert fu == 20"
   }
  ]
 },
 {
  "id": "fu:test_tsumo_hand_base#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "2s",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   }
  ]
 },
 {
  "id": "fu:test_tsumo_hand_and_pinfu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "2p",
    "3p",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 1,
    "src": "assert len(fu_details) == 1"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 20,
    "src": "assert fu == 20"
   }
  ]
 },
 {
  "id": "fu:test_tsumo_hand_and_disabled_pinfu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "2p",
    "3p",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "fu_for_pinfu_tsumo (2 fu for pinfu tsumo)"
  ],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "tsumo"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.TSUMO} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_tsumo_hand_and_not_pinfu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "1p",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "tsumo"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.TSUMO} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_penchan_fu[12_wait]#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "5p",
    "5p",
    "1s",
    "2s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "penchan"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.PENCHAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_penchan_fu[89_wait]#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "5p",
    "5p",
    "3s",
    "4s",
    "5s",
    "8s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "penchan"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.PENCHAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_kanchan_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "5p",
    "5p",
    "1s",
    "2s",
    "3s",
    "5s",
    "7s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "kanchan"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.KANCHAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_valued_pair_fu[single]#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "2s",
    "3s",
    "7s",
    "8s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "valued_pair"
    },
    "src": "assert {'fu': expected_fu, 'reason': expected_reason} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_valued_pair_fu[double]#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "2s",
    "3s",
    "7s",
    "8s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 4,
     "reason": "double_valued_pair"
    },
    "src": "assert {'fu': expected_fu, 'reason': expected_reason} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_pair_wait_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1s",
    "2s",
    "3s",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "pair_wait"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.PAIR_WAIT} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_pon_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "2s",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 4,
     "reason": "closed_pon"
    },
    "src": "assert {'fu': 4, 'reason': FuCalculator.CLOSED_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_pon_fu#2",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "2s",
    "2s",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "open_pon"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.OPEN_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_terminal_pon_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "1s",
    "1s",
    "1s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 8,
     "reason": "closed_terminal_pon"
    },
    "src": "assert {'fu': 8, 'reason': FuCalculator.CLOSED_TERMINAL_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_terminal_pon_fu#2",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "1s",
    "1s",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 4,
     "reason": "open_terminal_pon"
    },
    "src": "assert {'fu': 4, 'reason': FuCalculator.OPEN_TERMINAL_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_honor_pon_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "1s",
    "7s",
    "8s",
    "1z",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 8,
     "reason": "closed_terminal_pon"
    },
    "src": "assert {'fu': 8, 'reason': FuCalculator.CLOSED_TERMINAL_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_closed_honor_pon_fu#2",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "1s",
    "6s",
    "7s",
    "8s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 4,
     "reason": "open_terminal_pon"
    },
    "src": "assert {'fu': 4, 'reason': FuCalculator.OPEN_TERMINAL_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_open_terminal_pon_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "1z",
      "1z",
      "1z"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 4,
     "reason": "open_terminal_pon"
    },
    "src": "assert {'fu': 4, 'reason': FuCalculator.OPEN_TERMINAL_PON} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_closed_kan_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2s",
      "2s",
      "2s",
      "2s"
     ]
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "Python passed a 3-tile KAN meld to FuCalculator; ported as a 4-tile kan",
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 16,
     "reason": "closed_kan"
    },
    "src": "assert {'fu': 16, 'reason': FuCalculator.CLOSED_KAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert fu == 50"
   }
  ]
 },
 {
  "id": "fu:test_open_kan_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1p",
    "1p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "2s",
      "2s",
      "2s",
      "2s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "Python passed a 3-tile KAN meld to FuCalculator; ported as a 4-tile kan",
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 8,
     "reason": "open_kan"
    },
    "src": "assert {'fu': 8, 'reason': FuCalculator.OPEN_KAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_closed_terminal_kan_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "1p",
      "1p",
      "1p",
      "1p"
     ]
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "Python passed a 3-tile KAN meld to FuCalculator; ported as a 4-tile kan",
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 30,
     "reason": "base"
    },
    "src": "assert {'fu': 30, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 32,
     "reason": "closed_terminal_kan"
    },
    "src": "assert {'fu': 32, 'reason': FuCalculator.CLOSED_TERMINAL_KAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 70,
    "src": "assert fu == 70"
   }
  ]
 },
 {
  "id": "fu:test_open_terminal_kan_fu#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2s",
    "2s",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "1p",
      "1p",
      "1p",
      "1p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "Python passed a 3-tile KAN meld to FuCalculator; ported as a 4-tile kan",
   "synthetic houtei added so the open hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 2,
    "src": "assert len(fu_details) == 2"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 16,
     "reason": "open_terminal_kan"
    },
    "src": "assert {'fu': 16, 'reason': FuCalculator.OPEN_TERMINAL_KAN} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert fu == 40"
   }
  ]
 },
 {
  "id": "fu:test_incorrect_fu_calculation_test_case_1#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "1s",
    "1s",
    "1s",
    "2s",
    "3s",
    "5s",
    "6s",
    "7s",
    "7s",
    "7s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 3,
    "src": "assert len(result.fu_details) == 3"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 20,
     "reason": "base"
    },
    "src": "assert {'fu': 20, 'reason': FuCalculator.BASE} in result.fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 8,
     "reason": "closed_terminal_pon"
    },
    "src": "assert {'fu': 8, 'reason': FuCalculator.CLOSED_TERMINAL_PON} in result.fu_details"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 2,
     "reason": "tsumo"
    },
    "src": "assert {'fu': 2, 'reason': FuCalculator.TSUMO} in result.fu_details"
   }
  ]
 },
 {
  "id": "fu:test_incorrect_fu_calculation_test_case_2#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "4m",
    "4m",
    "5p",
    "5p",
    "5p"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1m",
      "2m",
      "3m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "fu:test_calculate_fu_can_call_as_static_method#1",
  "kind": "fu",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "5m",
    "5m",
    "9m",
    "9m",
    "6p",
    "1s",
    "1s",
    "2s",
    "2s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "synthetic riichi added so the hand has a yaku (fu unaffected)"
  ],
  "expect": [
   {
    "what": "len_fu_details",
    "op": "Eq",
    "value": 1,
    "src": "assert len(fu_details) == 1"
   },
   {
    "what": "fu_detail",
    "op": "In",
    "value": {
     "fu": 25,
     "reason": "base"
    },
    "src": "assert {'fu': 25, 'reason': FuCalculator.BASE} in fu_details"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert fu == 25"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "9p",
    "9p",
    "7z",
    "7z"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "1z",
      "1z",
      "1z"
     ],
     "from": "east"
    },
    {
     "type": "run",
     "tiles": [
      "1p",
      "2p",
      "3p"
     ],
     "from": "east"
    },
    {
     "type": "run",
     "tiles": [
      "1p",
      "2p",
      "3p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "9p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2p",
    "2p",
    "4p",
    "4p",
    "4p",
    "5p",
    "6p",
    "7p",
    "9p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "4z",
      "4z",
      "4z",
      "4z"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "2p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "3s",
     "3z"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 6,
    "src": "assert result.han == 6"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6s",
    "7s",
    "8s",
    "6z",
    "6z",
    "6z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "7m",
    "8m",
    "9m",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "6p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#5",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3p",
    "4p",
    "5p",
    "5p",
    "7p",
    "8p",
    "9p",
    "6s",
    "7s",
    "8s",
    "5z",
    "5z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#6",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "6m",
    "7m",
    "8m",
    "8p",
    "8p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#7",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "4p",
    "5p",
    "6p",
    "2s",
    "3s",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#8",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1s",
    "1s",
    "1s",
    "2s",
    "3s",
    "7s",
    "8s",
    "9s",
    "1z",
    "1z"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "6s",
      "6s",
      "6s"
     ],
     "from": "north"
    }
   ],
   "winningTile": {
    "tile": "1s",
    "from": "north"
   },
   "gameState": {
    "roundWind": "south",
    "seatWind": "east",
    "doraIndicators": [
     "4z"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#9",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1p",
    "2p",
    "3p",
    "3p",
    "5s",
    "6s",
    "7s"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "6z",
      "6z",
      "6z"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "7z",
      "7z",
      "7z"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "3p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#10",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "6m",
    "1p",
    "2p",
    "3p",
    "6p",
    "7p",
    "7p",
    "8p",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#11",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "5m",
    "6m",
    "9m",
    "9m"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "7z",
      "7z",
      "7z",
      "7z"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "1m",
      "1m",
      "1m"
     ],
     "from": "east"
    },
    {
     "type": "run",
     "tiles": [
      "6m",
      "7m",
      "8m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#12",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "8m",
    "8m",
    "8m",
    "6z",
    "6z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1m",
      "2m",
      "3m"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "7m",
      "7m",
      "7m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#13",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4p",
    "4p",
    "6p",
    "7p"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "4z",
      "4z",
      "4z"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "1p",
      "1p",
      "1p"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "8p",
      "8p",
      "8p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "8p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#14",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "4m",
    "5m",
    "9p",
    "9p",
    "9p",
    "6s",
    "7s",
    "7s",
    "8s",
    "2z",
    "2z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#15",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "4m",
    "5m",
    "3s",
    "3s",
    "4s",
    "4s",
    "5s",
    "5s",
    "7s",
    "7s",
    "8s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#16",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1p",
    "2p",
    "6p",
    "6p",
    "7p",
    "7p",
    "8p",
    "8p",
    "2z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1p",
      "2p",
      "3p"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "3p",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#17",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#18",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1s",
    "1s",
    "5s",
    "6s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "7s",
      "7s",
      "7s"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "8s",
      "8s",
      "8s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#19",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1s",
    "3s",
    "7s",
    "8s",
    "9s",
    "5z",
    "5z",
    "7z",
    "7z",
    "7z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "2s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#20",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "7p",
    "7p",
    "8p",
    "8p",
    "9p",
    "2z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2p",
      "3p",
      "4p"
     ],
     "from": "south"
    },
    {
     "type": "run",
     "tiles": [
      "7p",
      "8p",
      "9p"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "9p",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#21",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "7p",
    "7p",
    "8p",
    "8p",
    "8p",
    "9p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "7z",
      "7z",
      "7z"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "4m",
      "4m",
      "4m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "8p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#22",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "5m",
    "6m",
    "7m",
    "1p",
    "2p",
    "3p",
    "3p",
    "3p",
    "4p",
    "5p",
    "5z",
    "5z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#23",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "6p",
    "7p",
    "7p",
    "7p",
    "8p",
    "8p",
    "9p",
    "5z",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "3p",
      "4p",
      "5p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "7p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   }
  ]
 },
 {
  "id": "yaku:test_hands_calculation#24",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "5p",
    "6p",
    "7p",
    "3s",
    "3s",
    "5s",
    "5s",
    "5s",
    "7z",
    "7z"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "4s",
      "4s",
      "4s",
      "4s"
     ]
    }
   ],
   "winningTile": {
    "tile": "3s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[0]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "7p",
      "8p",
      "9p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[1]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "7p",
      "9p",
      "8p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[2]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "8p",
      "7p",
      "9p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[3]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "8p",
      "9p",
      "7p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[4]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "9p",
      "7p",
      "8p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_chi_tiles_in_any_order[5]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "9s",
    "9s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "9p",
      "8p",
      "7p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   }
  ]
 },
 {
  "id": "yaku:test_is_riichi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_tsumo#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_tsumo#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "4s",
    "4s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_ippatsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": true,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_rinshan#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "2s",
    "3s"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "4s",
      "4s",
      "4s",
      "4s"
     ]
    }
   ],
   "winningTile": {
    "tile": "1s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": true,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_rinshan#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "2s",
    "3s"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "4s",
      "4s",
      "4s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "1s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": true,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chankan#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "2s",
    "3s",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": true,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_haitei#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": true,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_haitei#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "4s",
    "4s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": true,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_houtei#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": true,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_renhou#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as mangan)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_daburu_riichi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": true,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_open_riichi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "open riichi (+1 han)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_daburu_open_riichi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": true,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "open riichi (+1 han)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chitoitsu_hand#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "3m",
    "3m",
    "5m",
    "5m",
    "1p",
    "1s",
    "1s",
    "3s",
    "3s",
    "5s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert result.fu == 25"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chitoitsu_hand_and_identical_pairs#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "3m",
    "3m",
    "1p",
    "1s",
    "1s",
    "3s",
    "3s",
    "5s",
    "5s",
    "5s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Eq",
    "value": "ERR_HAND_NOT_WINNING",
    "src": "assert result.error == HandCalculator.ERR_HAND_NOT_WINNING"
   }
  ]
 },
 {
  "id": "yaku:test_is_tanyao#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2p",
    "2p",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 3,
    "src": "assert len(result.yaku) == 3"
   }
  ]
 },
 {
  "id": "yaku:test_is_tanyao#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2p",
    "2p",
    "5s",
    "6s",
    "7s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2s",
      "3s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": true,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_tanyao#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "2p",
    "2p",
    "5s",
    "6s",
    "7s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2s",
      "3s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "5p",
    "5p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5p",
    "5p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "5p",
    "5p",
    "1s",
    "1s",
    "1s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "5p",
    "5p",
    "1s",
    "2s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#5",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "5p",
    "5p",
    "1s",
    "2s",
    "3s",
    "5s",
    "7s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#6",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "4m",
    "5m",
    "6m",
    "6m",
    "7m",
    "8m",
    "1p",
    "2p",
    "3p",
    "6p",
    "7p",
    "8p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#7",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "2s",
    "3s",
    "7s",
    "8s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "north"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#8",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "1s",
    "2s",
    "3s",
    "7s",
    "8s",
    "2z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6s",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_pinfu_hand#9",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "4p",
    "5p",
    "6p",
    "9s",
    "9s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_iipeiko#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "1p",
    "2p",
    "3p",
    "4p",
    "4p",
    "1s",
    "1s",
    "2s",
    "2s",
    "3s",
    "3s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_iipeiko#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "1p",
    "2p",
    "3p",
    "4p",
    "4p",
    "1s",
    "2s",
    "3s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "3m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_ryanpeiko#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "2p",
    "2p",
    "3p",
    "4p",
    "4p",
    "1s",
    "1s",
    "2s",
    "2s",
    "3s",
    "3s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_ryanpeiko#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "2p",
    "2p",
    "3p",
    "4p",
    "4p",
    "1s",
    "2s",
    "3s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "3p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_is_sanshoku#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "3m",
    "9m",
    "9m",
    "1p",
    "2p",
    "3p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_sanshoku#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "3m",
    "9m",
    "9m",
    "1p",
    "2p",
    "3p",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_sanshoku_douko#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "2p",
    "2p",
    "2p",
    "4p",
    "5p",
    "6p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "2s",
      "2s",
      "2s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "9p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_sanshoku_douko_and_kan_in_hand#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "2p",
    "2p",
    "2p",
    "4p",
    "5p",
    "6p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "2s",
      "2s",
      "2s",
      "2s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "9p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_toitoi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "5p",
    "5p"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "1s",
      "1s",
      "1s"
     ],
     "from": "east"
    },
    {
     "type": "triplet",
     "tiles": [
      "3s",
      "3s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_toitoi#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "7p",
    "7p",
    "7p",
    "8p",
    "8p",
    "8p",
    "9p",
    "9p",
    "4z",
    "4z"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "7s",
      "7s",
      "7s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "9p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_sankantsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "4p",
    "4p"
   ],
   "openMelds": [
    {
     "type": "shouminkan",
     "tiles": [
      "1s",
      "1s",
      "1s",
      "1s"
     ],
     "from": "east"
    },
    {
     "type": "daiminkan",
     "tiles": [
      "3s",
      "3s",
      "3s",
      "3s"
     ],
     "from": "east"
    },
    {
     "type": "daiminkan",
     "tiles": [
      "6p",
      "6p",
      "6p",
      "6p"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "3m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_honroto#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "9s",
    "9s",
    "9s",
    "1z",
    "1z",
    "2z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "1s",
      "1s",
      "1s"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "2z",
    "from": "south"
   },
   "gameState": {
    "roundWind": "north",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_honroto#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "9m",
    "1p",
    "1p",
    "2z",
    "2z",
    "3z",
    "3z",
    "4z",
    "4z",
    "6z",
    "6z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert result.fu == 25"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   }
  ]
 },
 {
  "id": "yaku:test_is_sanankou#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "5p",
    "5p",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_shosangen#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "4m",
    "5m",
    "1s",
    "2s",
    "3s",
    "5z",
    "5z",
    "6z",
    "6z",
    "6z",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 3,
    "src": "assert len(result.yaku) == 3"
   }
  ]
 },
 {
  "id": "yaku:test_is_chanta#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "7m",
    "8m",
    "9m",
    "1s",
    "2s",
    "3s",
    "2z",
    "2z",
    "3z",
    "3z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3z",
    "from": "west"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "north",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chanta#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "7m",
    "8m",
    "9m",
    "2z",
    "2z",
    "3z",
    "3z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1s",
      "2s",
      "3s"
     ],
     "from": "west"
    }
   ],
   "winningTile": {
    "tile": "3z",
    "from": "west"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "north",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_junchan#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "3m",
    "7m",
    "8m",
    "9m",
    "1p",
    "2p",
    "3p",
    "9p",
    "9p",
    "7s",
    "8s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_junchan#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "3m",
    "7m",
    "8m",
    "9m",
    "1p",
    "2p",
    "3p",
    "9p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "7s",
      "8s",
      "9s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_honitsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "5m",
    "6m",
    "6m",
    "7m",
    "1z",
    "1z",
    "1z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2z",
    "from": "south"
   },
   "gameState": {
    "roundWind": "north",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_honitsu#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "5m",
    "6m",
    "6m",
    "7m",
    "1z",
    "1z",
    "1z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1m",
      "2m",
      "3m"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "2z",
    "from": "south"
   },
   "gameState": {
    "roundWind": "north",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chinitsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "6m",
    "7m",
    "7m",
    "7m",
    "8m",
    "8m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 6,
    "src": "assert result.han == 6"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chinitsu#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "7m",
    "8m",
    "9m"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "6m",
      "7m",
      "8m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_ittsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "1s",
    "2s",
    "2z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3s",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_ittsu#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "1s",
    "2s",
    "2z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "1m",
      "2m",
      "3m"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "3s",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_haku#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "5z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_hatsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "6z",
    "6z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_chun#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_east#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "from": "north"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_east#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_south#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "2z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_south#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "2z",
    "2z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "south",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_west#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "3z",
    "3z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3z",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_west#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "3z",
    "3z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "3z",
    "from": "south"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_north#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "4z",
    "4z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4z",
    "from": "west"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "north",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yaku:test_is_north#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "2m",
    "3m",
    "4m",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "4z",
    "4z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4z",
    "from": "west"
   },
   "gameState": {
    "roundWind": "north",
    "seatWind": "north",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "3s",
    "4s",
    "5z",
    "5z"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "6s",
      "7s",
      "8s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "5s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5s"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "3p",
    "3p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "2p"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "4m",
    "5m",
    "6m",
    "6m",
    "7m",
    "8m",
    "1p",
    "2p",
    "3p",
    "6p",
    "7p",
    "8p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "1m",
     "2p"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "6m",
    "7m",
    "8m",
    "3p",
    "4p",
    "5p",
    "7p",
    "1s",
    "2s",
    "3s",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "4s",
     "4s"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#5",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "6m",
    "7m",
    "8m",
    "3p",
    "4p",
    "1s",
    "2s",
    "3s",
    "3s",
    "4s",
    "5s",
    "6z",
    "6z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5z",
     "5z"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#6",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "6m",
    "7m",
    "8m",
    "4p",
    "1s",
    "2s",
    "3s",
    "4s",
    "0s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "2p",
     "2p"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_dora_in_hand#7",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3p",
    "4p",
    "5p",
    "7p",
    "1s",
    "2s",
    "3s",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "7m",
      "7m",
      "7m",
      "7m"
     ]
    }
   ],
   "winningTile": {
    "tile": "7p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "6m"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_ura_dora_in_hand#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "3p",
    "3p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [
     "2p"
    ],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 3,
    "src": "assert len(result.yaku) == 3"
   }
  ]
 },
 {
  "id": "yaku:test_ura_dora_in_hand#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "3p",
    "3p",
    "1s",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [
     "2p"
    ],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yaku:test_is_agari_and_closed_kan#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "5m",
    "2z",
    "2z",
    "2z"
   ],
   "openMelds": [
    {
     "type": "triplet",
     "tiles": [
      "1p",
      "1p",
      "1p"
     ],
     "from": "south"
    },
    {
     "type": "ankan",
     "tiles": [
      "6m",
      "6m",
      "6m",
      "6m"
     ]
    },
    {
     "type": "triplet",
     "tiles": [
      "7m",
      "7m",
      "7m"
     ],
     "from": "south"
    }
   ],
   "winningTile": {
    "tile": "4m",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "Python meld uses 6m which is not in the 14-tile hand (input is inconsistent by design); dropped"
  ],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yaku:test_kazoe_settings[limited]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "4m",
    "4m",
    "6m",
    "6m",
    "6m",
    "7m",
    "7m",
    "8m",
    "8m"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2m",
      "2m",
      "2m",
      "2m"
     ]
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "1m",
     "1m",
     "1m",
     "1m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "han",
    "op": "Eq",
    "value": 28,
    "src": "assert result.han == 28"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 32000,
    "src": "assert result.cost['main'] == expected_cost"
   }
  ]
 },
 {
  "id": "yaku:test_kazoe_settings[sanbaiman]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "4m",
    "4m",
    "6m",
    "6m",
    "6m",
    "7m",
    "7m",
    "8m",
    "8m"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2m",
      "2m",
      "2m",
      "2m"
     ]
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "1m",
     "1m",
     "1m",
     "1m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": false,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "han",
    "op": "Eq",
    "value": 28,
    "src": "assert result.han == 28"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 24000,
    "src": "assert result.cost['main'] == expected_cost"
   }
  ]
 },
 {
  "id": "yaku:test_kazoe_settings[no_limit]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "4m",
    "4m",
    "6m",
    "6m",
    "6m",
    "7m",
    "7m",
    "8m",
    "8m"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2m",
      "2m",
      "2m",
      "2m"
     ]
    }
   ],
   "winningTile": {
    "tile": "7m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "1m",
     "1m",
     "1m",
     "1m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "kazoe_limit=KAZOE_NO_LIMIT (26+ counted han = multiple yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "han",
    "op": "Eq",
    "value": 28,
    "src": "assert result.han == 28"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 64000,
    "src": "assert result.cost['main'] == expected_cost"
   }
  ]
 },
 {
  "id": "yaku:test_open_hand_without_additional_fu_scores_correctly#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "2p",
    "2p",
    "7s",
    "8s"
   ],
   "openMelds": [
    {
     "type": "run",
     "tiles": [
      "2s",
      "3s",
      "4s"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "6s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": true,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 20,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 20,
    "src": "assert result.fu == 20"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 700,
    "src": "assert result.cost['main'] == 700"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "0m",
    "5m",
    "5m",
    "9m",
    "4p",
    "0p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == 1"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 2,
    "src": "assert result.han == 2"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "0p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 3,
    "src": "assert result.han == 3"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#5",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "0m",
    "5m",
    "5m",
    "9m",
    "4p",
    "0p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 4,
    "src": "assert result.han == 4"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#6",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "0m",
    "0m",
    "5m",
    "9m",
    "4p",
    "0p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 2,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 5,
    "src": "assert result.han == 5"
   }
  ]
 },
 {
  "id": "yaku:test_aka_dora#7",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "0m",
    "0m",
    "0m",
    "9m",
    "4p",
    "0p",
    "6p",
    "3s",
    "4s",
    "0s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 3,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 6,
    "src": "assert result.han == 6"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[0]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[5]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "3z"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[9]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "3z",
     "3z"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[0]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[5]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [
     "3z"
    ],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[9]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "5m",
    "5m",
    "9m",
    "4p",
    "5p",
    "6p",
    "3s",
    "4s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [
     "3z",
     "3z"
    ],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 1,
      "pinzu": 1,
      "souzu": 1
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yaku:test_three_player_man_one_dora_indicator[1]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "9m",
    "4p",
    "5p",
    "6p",
    "7p",
    "8p",
    "9p",
    "3s",
    "4s",
    "5s",
    "1z",
    "1z",
    "1z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "west",
    "seatWind": "south",
    "doraIndicators": [
     "1m"
    ],
    "uradoraIndicators": [
     "1m",
     "1m"
    ],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 1,
    "src": "assert result.han == han"
   }
  ]
 },
 {
  "id": "yakuman:test_is_tenhou_or_chiihou[tenhou]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "south",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": true,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_tenhou_or_chiihou[chiihou]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 30,
    "src": "assert result.fu == 30"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_daisangen#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "1s",
    "2s",
    "3s",
    "5z",
    "5z",
    "5z",
    "6z",
    "6z",
    "6z",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_shosuushi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1s",
    "2s",
    "3s",
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_daisuushi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2s",
    "2s",
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_tsuisou#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "2z",
    "2z",
    "3z",
    "3z",
    "4z",
    "4z",
    "5z",
    "5z",
    "6z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 25,
    "src": "assert result.fu == 25"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_tsuisou_and_daichisei#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "2z",
    "2z",
    "3z",
    "3z",
    "4z",
    "4z",
    "5z",
    "5z",
    "6z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daichisei (local yakuman)"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(result.yaku) == 2"
   }
  ]
 },
 {
  "id": "yakuman:test_is_chinroto#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "9m",
    "9m",
    "9m",
    "9p",
    "1s",
    "1s",
    "1s",
    "2s",
    "2s",
    "2s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_kokushi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "1s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 0,
    "src": "assert result.fu == 0"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_kokushi#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 0,
    "src": "assert result.fu == 0"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_sequence]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not",
   "PORTING: tile count 17 != 14"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Eq",
    "value": "ERR_HAND_NOT_WINNING",
    "src": "assert result.error == HandCalculator.ERR_HAND_NOT_WINNING"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_four_of_a_kind]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "2m",
    "2m",
    "2m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not",
   "PORTING: tile count 18 != 14"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Eq",
    "value": "ERR_HAND_NOT_WINNING",
    "src": "assert result.error == HandCalculator.ERR_HAND_NOT_WINNING"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_pair]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "5m",
    "5m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not",
   "PORTING: tile count 16 != 14"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Eq",
    "value": "ERR_HAND_NOT_WINNING",
    "src": "assert result.error == HandCalculator.ERR_HAND_NOT_WINNING"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_with_closed_kan_is_rejected#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "5p",
      "5p",
      "5p",
      "5p"
     ]
    }
   ],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not",
   "PORTING: tile count 17 != 14"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Eq",
    "value": "ERR_HAND_NOT_WINNING",
    "src": "assert result.error == HandCalculator.ERR_HAND_NOT_WINNING"
   }
  ]
 },
 {
  "id": "yakuman:test_is_ryuisou#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2s",
    "2s",
    "3s",
    "3s",
    "4s",
    "4s",
    "6s",
    "6s",
    "8s",
    "8s",
    "8s",
    "6z",
    "6z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "6z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_suuankou#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "5p",
    "5p",
    "1s",
    "1s",
    "1s",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_suuankou#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "5p",
    "5p",
    "1s",
    "1s",
    "1s",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "han",
    "op": "NotEq",
    "value": 13,
    "src": "assert result.han != 13"
   }
  ]
 },
 {
  "id": "yakuman:test_is_suuankou#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "4p",
    "5p",
    "1s",
    "1s",
    "1s",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_suuankou#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4m",
    "4m",
    "4m",
    "5m",
    "5m",
    "5m",
    "7m",
    "7m",
    "7m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_chuuren_poutou_hand_value_single#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 40,
    "src": "assert result.fu == 40"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_chuuren_poutou_hand_value_double[0]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_chuuren_poutou_hand_value_double[1]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "9m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_chuuren_poutou_hand_value_double[2]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == 26"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_chuuren_poutou_hand_value_rejects_hand_with_melds#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1p",
    "1p",
    "1p",
    "2p",
    "4p",
    "5p",
    "6p",
    "6p",
    "7p",
    "8p"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "9p",
      "9p",
      "9p",
      "9p"
     ]
    }
   ],
   "winningTile": {
    "tile": "3p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 6,
    "src": "assert result.han == 6"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 70,
    "src": "assert result.fu == 70"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_suukantsu#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4p"
   ],
   "openMelds": [
    {
     "type": "daiminkan",
     "tiles": [
      "1s",
      "1s",
      "1s",
      "1s"
     ],
     "from": "east"
    },
    {
     "type": "daiminkan",
     "tiles": [
      "3s",
      "3s",
      "3s",
      "3s"
     ],
     "from": "east"
    },
    {
     "type": "daiminkan",
     "tiles": [
      "5p",
      "5p",
      "5p",
      "5p"
     ],
     "from": "east"
    },
    {
     "type": "daiminkan",
     "tiles": [
      "2m",
      "2m",
      "2m",
      "2m"
     ],
     "from": "east"
    }
   ],
   "winningTile": {
    "tile": "4p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 70,
    "src": "assert result.fu == 70"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_disabled_double_yakuman#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": false,
      "kokushi13Wait": false,
      "suuankouTanki": false,
      "junseiChuuren": false
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 0,
    "src": "assert result.fu == 0"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_disabled_double_yakuman#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "3m",
    "3m",
    "3m",
    "4p",
    "4p",
    "4p",
    "5p",
    "1s",
    "1s",
    "1s",
    "4s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": false,
      "kokushi13Wait": false,
      "suuankouTanki": false,
      "junseiChuuren": false
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_disabled_double_yakuman#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "2m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": false,
      "kokushi13Wait": false,
      "suuankouTanki": false,
      "junseiChuuren": false
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 50,
    "src": "assert result.fu == 50"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_disabled_double_yakuman#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2s",
    "2s",
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": false,
      "kokushi13Wait": false,
      "suuankouTanki": false,
      "junseiChuuren": false
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "fu",
    "op": "Eq",
    "value": 60,
    "src": "assert result.fu == 60"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_sextuple_yakuman#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z",
    "4z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": true,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 78,
    "src": "assert result.han == 78"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 96000,
    "src": "assert result.cost['main'] == 96000"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 96000,
    "src": "assert result.cost['additional'] == 96000"
   }
  ]
 },
 {
  "id": "yakuman:test_sextuple_yakuman#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "5z"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "1z",
      "1z",
      "1z",
      "1z"
     ]
    },
    {
     "type": "ankan",
     "tiles": [
      "2z",
      "2z",
      "2z",
      "2z"
     ]
    },
    {
     "type": "ankan",
     "tiles": [
      "3z",
      "3z",
      "3z",
      "3z"
     ]
    },
    {
     "type": "ankan",
     "tiles": [
      "4z",
      "4z",
      "4z",
      "4z"
     ]
    }
   ],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 78,
    "src": "assert result.han == 78"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 192000,
    "src": "assert result.cost['main'] == 192000"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(hand_calculation.yaku) == 1"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert hand_calculation.han == 13"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#2",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": true,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(hand_calculation.yaku) == 2"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert hand_calculation.han == 26"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#3",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "1z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(hand_calculation.yaku) == 2"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert hand_calculation.han == 26"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#4",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(hand_calculation.yaku) == 1"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert hand_calculation.han == 26"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#5",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": true,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(hand_calculation.yaku) == 2"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 39,
    "src": "assert hand_calculation.han == 39"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#6",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(hand_calculation.yaku) == 2"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 39,
    "src": "assert hand_calculation.han == 39"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#7",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as yakuman)"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 2,
    "src": "assert len(hand_calculation.yaku) == 2"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "renhou_yakuman",
    "src": "assert hand_config.yaku.renhou_yakuman in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 39,
    "src": "assert hand_calculation.han == 39"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_musou_multiple_yakuman#8",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as yakuman)",
   "open riichi (+1 han; sashikomi yakuman)"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert hand_calculation.error is None"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 3,
    "src": "assert len(hand_calculation.yaku) == 3"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "kokushi",
    "src": "assert hand_config.yaku.kokushi not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert hand_config.yaku.daburu_kokushi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "renhou_yakuman",
    "src": "assert hand_config.yaku.renhou_yakuman in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "sashikomi",
    "src": "assert hand_config.yaku.sashikomi in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "tenhou",
    "src": "assert hand_config.yaku.tenhou not in hand_calculation.yaku"
   },
   {
    "what": "yaku",
    "op": "NotIn",
    "value": "chiihou",
    "src": "assert hand_config.yaku.chiihou not in hand_calculation.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 52,
    "src": "assert hand_calculation.han == 52"
   }
  ]
 },
 {
  "id": "yakuman:test_is_renhou_yakuman#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_is_not_daisharin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2p",
    "2p",
    "3p",
    "3p",
    "4p",
    "4p",
    "5p",
    "5p",
    "6p",
    "6p",
    "7p",
    "7p",
    "8p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 11,
    "src": "assert result.han == 11"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 4,
    "src": "assert len(result.yaku) == 4"
   }
  ]
 },
 {
  "id": "yakuman:test_is_daisharin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2p",
    "2p",
    "3p",
    "3p",
    "4p",
    "4p",
    "5p",
    "5p",
    "6p",
    "6p",
    "7p",
    "7p",
    "8p"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daisharin family (local yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   },
   {
    "what": "yaku_name[0]",
    "op": "Eq",
    "value": "Daisharin",
    "src": "assert result.yaku[0].name == 'Daisharin'"
   }
  ]
 },
 {
  "id": "yakuman:test_is_not_daichikurin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2s",
    "2s",
    "3s",
    "3s",
    "4s",
    "4s",
    "5s",
    "5s",
    "6s",
    "6s",
    "7s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daisharin family (local yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 11,
    "src": "assert result.han == 11"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 4,
    "src": "assert len(result.yaku) == 4"
   }
  ]
 },
 {
  "id": "yakuman:test_is_daichikurin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2s",
    "2s",
    "3s",
    "3s",
    "4s",
    "4s",
    "5s",
    "5s",
    "6s",
    "6s",
    "7s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daisharin family (local yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   },
   {
    "what": "yaku_name[0]",
    "op": "Eq",
    "value": "Daichikurin",
    "src": "assert result.yaku[0].name == 'Daichikurin'"
   }
  ]
 },
 {
  "id": "yakuman:test_is_not_daisuurin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "3m",
    "3m",
    "4m",
    "4m",
    "5m",
    "5m",
    "6m",
    "6m",
    "7m",
    "7m",
    "8m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daisharin family (local yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 11,
    "src": "assert result.han == 11"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 4,
    "src": "assert len(result.yaku) == 4"
   }
  ]
 },
 {
  "id": "yakuman:test_is_daisuurin#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "2m",
    "3m",
    "3m",
    "4m",
    "4m",
    "5m",
    "5m",
    "6m",
    "6m",
    "7m",
    "7m",
    "8m"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "8m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "daisharin family (local yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   },
   {
    "what": "yaku_name[0]",
    "op": "Eq",
    "value": "Daisuurin",
    "src": "assert result.yaku[0].name == 'Daisuurin'"
   }
  ]
 },
 {
  "id": "yakuman:test_is_open_riichi_sashikomi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "2m",
    "3m",
    "4m",
    "4m",
    "5m",
    "6m",
    "6p",
    "6p",
    "1s",
    "2s",
    "3s",
    "4s",
    "4s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4s",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "open riichi (+1 han; sashikomi yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "len_yaku",
    "op": "Eq",
    "value": 1,
    "src": "assert len(result.yaku) == 1"
   }
  ]
 },
 {
  "id": "yakuman:test_septuple_yakuman_disabled#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z",
    "4z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as yakuman)"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 78,
    "src": "assert result.han == 78"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 192000,
    "src": "assert result.cost['main'] == 192000"
   }
  ]
 },
 {
  "id": "yakuman:test_septuple_yakuman_enabled#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z",
    "4z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": null,
  "unsupported": [
   "renhou (as yakuman)",
   "open riichi (+1 han; sashikomi yakuman)",
   "limit_to_sextuple_yakuman=False"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 91,
    "src": "assert result.han == 91"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 224000,
    "src": "assert result.cost['main'] == 224000"
   }
  ]
 },
 {
  "id": "yakuman:test_paarenchan_no_yaku_disallowed#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "6m",
    "1p",
    "2p",
    "3p",
    "6p",
    "7p",
    "7p",
    "8p",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "paarenchan"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "IsNot",
    "value": null,
    "src": "assert result.error is not None"
   }
  ]
 },
 {
  "id": "yakuman:test_paarenchan_no_yaku_allowed#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4m",
    "5m",
    "6m",
    "1p",
    "2p",
    "3p",
    "6p",
    "7p",
    "7p",
    "8p",
    "6s",
    "7s",
    "8s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "paarenchan",
   "paarenchan_needs_yaku=False"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   }
  ]
 },
 {
  "id": "yakuman:test_paarenchan[0]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1p",
    "1p",
    "1p",
    "2p",
    "2p",
    "2p",
    "7p",
    "7p",
    "4s",
    "4s",
    "4s",
    "5s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "paarenchan"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 26,
    "src": "assert result.han == expected_han"
   }
  ]
 },
 {
  "id": "yakuman:test_paarenchan[1]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1p",
    "1p",
    "1p",
    "2p",
    "2p",
    "2p",
    "7p",
    "7p",
    "4s",
    "4s",
    "4s",
    "5s",
    "5s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "paarenchan"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 65,
    "src": "assert result.han == expected_han"
   }
  ]
 },
 {
  "id": "yakuman:test_sextuple_yakuman_limit#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1z",
    "1z",
    "1z",
    "2z",
    "2z",
    "2z",
    "3z",
    "3z",
    "3z",
    "4z",
    "4z",
    "4z",
    "5z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5z",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "renhou (as yakuman)",
   "open riichi (+1 han; sashikomi yakuman)"
  ],
  "notes": [
   "player_wind=None but every non-east wind tile is in the hand; seat=south may add wind yaku/fu Python does not",
   "round_wind=None but all wind tiles are in the hand; round=east may add wind yaku/fu Python does not"
  ],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 78,
    "src": "assert result.han == 78"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_sashikomi_with_daburu_riichi_and_open_riichi#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isDoubleRiichi": true,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "open riichi (+1 han; sashikomi yakuman)"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert config.yaku.daburu_kokushi in result.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "sashikomi",
    "src": "assert config.yaku.sashikomi in result.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 39,
    "src": "assert result.han == 39"
   }
  ]
 },
 {
  "id": "yakuman:test_kokushi_with_paarenchan#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "7z",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "paarenchan"
  ],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "daburu_kokushi",
    "src": "assert config.yaku.daburu_kokushi in result.yaku"
   },
   {
    "what": "yaku",
    "op": "In",
    "value": "paarenchan",
    "src": "assert config.yaku.paarenchan in result.yaku"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 39,
    "src": "assert result.han == 39"
   }
  ]
 },
 {
  "id": "yakuman:test_suuankou_wins_over_kazoe_yakuman_with_same_cost[1]#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4p",
    "4p",
    "7p",
    "7p",
    "7p",
    "8p",
    "8p",
    "9p",
    "9p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "1p",
      "1p",
      "1p",
      "1p"
     ]
    }
   ],
   "winningTile": {
    "tile": "8p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "6p",
     "7p"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "yaku_names",
    "op": "Eq",
    "value": [
     "Suu Ankou"
    ],
    "src": "assert [yaku.name for yaku in result.yaku] == ['Suu Ankou']"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 32000,
    "src": "assert result.cost['total'] == (24000 if is_three_player else 32000)"
   }
  ]
 },
 {
  "id": "yakuman:test_suuankou_wins_over_kazoe_capped_at_sanbaiman#1",
  "kind": "hand",
  "input": {
   "closedTiles": [
    "4p",
    "4p",
    "7p",
    "7p",
    "7p",
    "8p",
    "8p",
    "9p",
    "9p",
    "9p"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "1p",
      "1p",
      "1p",
      "1p"
     ]
    }
   ],
   "winningTile": {
    "tile": "8p",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "6p",
     "7p"
    ],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isDoubleRiichi": false,
    "isIppatsu": false,
    "isHaitei": false,
    "isHoutei": false,
    "isRinshan": false,
    "isChankan": false,
    "isTenhou": false,
    "isChiihou": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": false,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [],
  "expect": [
   {
    "what": "error",
    "op": "Is",
    "value": null,
    "src": "assert result.error is None"
   },
   {
    "what": "han",
    "op": "Eq",
    "value": 13,
    "src": "assert result.han == 13"
   },
   {
    "what": "yaku_names",
    "op": "Eq",
    "value": [
     "Suu Ankou"
    ],
    "src": "assert [yaku.name for yaku in result.yaku] == ['Suu Ankou']"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 32000,
    "src": "assert result.cost['total'] == 32000"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[0]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=1, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 1,
    "src": "constructed hand must have 1 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 1000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[2]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=2, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 2,
    "src": "constructed hand must have 2 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[3]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 3900,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[4]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 7700,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[5]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=40) ported as a constructed 'ron40' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 40,
    "src": "constructed hand must have 40 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[6]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=5, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 5,
    "src": "constructed hand must have 5 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[7]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=6, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 6,
    "src": "constructed hand must have 6 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[8]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=8, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 8,
    "src": "constructed hand must have 8 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 16000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[9]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=11, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 11,
    "src": "constructed hand must have 11 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 24000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron[10]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s",
     "5m",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=13, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 13,
    "src": "constructed hand must have 13 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 32000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[0]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=1, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 1,
    "src": "constructed hand must have 1 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 1500,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[1]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=2, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 2,
    "src": "constructed hand must have 2 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 2900,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[2]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 5800,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[3]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 11600,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[4]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=5, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 5,
    "src": "constructed hand must have 5 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[5]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=6, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 6,
    "src": "constructed hand must have 6 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 18000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[6]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=8, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 8,
    "src": "constructed hand must have 8 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 24000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[7]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=11, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 11,
    "src": "constructed hand must have 11 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 36000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[8]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s",
     "5m",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=13, fu=0) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 13,
    "src": "constructed hand must have 13 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 48000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[0]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=1, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 1,
    "src": "constructed hand must have 1 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 500,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 300,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[1]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 1000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[2]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "1s",
      "1s",
      "1s",
      "1s"
     ]
    }
   ],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=60) ported as a constructed 'tsumo60' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 60,
    "src": "constructed hand must have 60 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 3900,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[3]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 3900,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[4]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=5, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 5,
    "src": "constructed hand must have 5 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 4000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[5]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=6, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 6,
    "src": "constructed hand must have 6 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 6000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 3000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[6]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=8, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 8,
    "src": "constructed hand must have 8 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 4000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[7]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=11, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 11,
    "src": "constructed hand must have 11 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 6000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[8]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s",
     "5m",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=13, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 13,
    "src": "constructed hand must have 13 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 16000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[0]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": false,
    "isIppatsu": false,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=1, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 1,
    "src": "constructed hand must have 1 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 500,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 500,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[1]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[2]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 3900,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 3900,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[3]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=5, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 5,
    "src": "constructed hand must have 5 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 4000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 4000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[4]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=6, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 6,
    "src": "constructed hand must have 6 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 6000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 6000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[5]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=8, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 8,
    "src": "constructed hand must have 8 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[6]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=11, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 11,
    "src": "constructed hand must have 11 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[7]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s",
     "8s",
     "8s",
     "8s",
     "5m",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=13, fu=0) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 13,
    "src": "constructed hand must have 13 han"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 16000,
    "src": "assert result['main'] == expected_main"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 16000,
    "src": "assert result['additional'] == expected_additional"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_with_bonus#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 2,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "honba bonus (riichi-score accepts GameState.honbaCount but seatPayments ignore it)",
   "kyoutaku (riichi deposits) - riichi-score has no input; excluded from compared totals"
  ],
  "notes": [
   "ScoresCalculator(han=3, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first",
   "honba folded into per-seat payments; riichi deposits (kyoutaku) excluded from total"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 2200,
    "src": "assert result['main'] == 2000 + main_bonus 200"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2200,
    "src": "assert result['additional'] == 2000 + additional_bonus 200"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 6600,
    "src": "assert result['total'] == 9600 - kyoutaku_bonus 3000"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_with_bonus#2",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "4m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "5m",
    "isTsumo": true
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 4,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "honba bonus (riichi-score accepts GameState.honbaCount but seatPayments ignore it)",
   "kyoutaku (riichi deposits) - riichi-score has no input; excluded from compared totals"
  ],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'tsumo30' hand; the han/fu precondition is checked first",
   "honba folded into per-seat payments; riichi deposits (kyoutaku) excluded from total"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 4300,
    "src": "assert result['main'] == 3900 + main_bonus 400"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 2400,
    "src": "assert result['additional'] == 2000 + additional_bonus 400"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 9100,
    "src": "assert result['total'] == 10100 - kyoutaku_bonus 1000"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_with_bonus#3",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "south"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "west",
    "doraIndicators": [
     "8s",
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 5,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "honba bonus (riichi-score accepts GameState.honbaCount but seatPayments ignore it)"
  ],
  "notes": [
   "ScoresCalculator(han=6, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first",
   "honba folded into per-seat payments; riichi deposits (kyoutaku) excluded from total"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 6,
    "src": "constructed hand must have 6 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 13500,
    "src": "assert result['main'] == 12000 + main_bonus 1500"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 0,
    "src": "assert result['additional'] == 0 + additional_bonus 0"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 13500,
    "src": "assert result['total'] == 13500 - kyoutaku_bonus 0"
   }
  ]
 },
 {
  "id": "scores:test_calculate_scores_with_bonus#4",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "8s"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 5,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": false,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [
   "honba bonus (riichi-score accepts GameState.honbaCount but seatPayments ignore it)"
  ],
  "notes": [
   "ScoresCalculator(han=5, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first",
   "honba folded into per-seat payments; riichi deposits (kyoutaku) excluded from total"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 5,
    "src": "constructed hand must have 5 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 13500,
    "src": "assert result['main'] == 12000 + main_bonus 1500"
   },
   {
    "what": "cost.additional",
    "op": "Eq",
    "value": 0,
    "src": "assert result['additional'] == 0 + additional_bonus 0"
   },
   {
    "what": "cost.total",
    "op": "Eq",
    "value": 13500,
    "src": "assert result['total'] == 13500 - kyoutaku_bonus 0"
   }
  ]
 },
 {
  "id": "scores:test_kiriage_mangan[0]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": true,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_kiriage_mangan[1]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "4m",
    "6m",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s",
    "9s",
    "3z",
    "3z"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2p",
      "2p",
      "2p",
      "2p"
     ]
    }
   ],
   "winningTile": {
    "tile": "5m",
    "from": "east"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "south",
    "doraIndicators": [
     "5p"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": true,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=60) ported as a constructed 'ron60' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 60,
    "src": "constructed hand must have 60 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 8000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_kiriage_mangan[2]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "1m",
    "2m",
    "3m",
    "5m",
    "6m",
    "2p",
    "3p",
    "4p",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s"
   ],
   "openMelds": [],
   "winningTile": {
    "tile": "4m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "5m"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": true,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=4, fu=30) ported as a constructed 'ron30' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 4,
    "src": "constructed hand must have 4 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 30,
    "src": "constructed hand must have 30 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 },
 {
  "id": "scores:test_kiriage_mangan[3]#1",
  "kind": "score",
  "input": {
   "closedTiles": [
    "4m",
    "6m",
    "6p",
    "7p",
    "8p",
    "9s",
    "9s",
    "9s",
    "3z",
    "3z"
   ],
   "openMelds": [
    {
     "type": "ankan",
     "tiles": [
      "2p",
      "2p",
      "2p",
      "2p"
     ]
    }
   ],
   "winningTile": {
    "tile": "5m",
    "from": "north"
   },
   "gameState": {
    "roundWind": "east",
    "seatWind": "east",
    "doraIndicators": [
     "5p"
    ],
    "uradoraIndicators": [],
    "isRiichi": true,
    "isIppatsu": true,
    "honbaCount": 0,
    "ruleset": {
     "openTanyao": false,
     "doubleWindPairFu": 4,
     "openPinfuMinimumFu": 30,
     "kiriageMangan": true,
     "kazoeYakuman": true,
     "kansaiChiitoitsu": false,
     "doubleYakuman": {
      "daisuushii": true,
      "kokushi13Wait": true,
      "suuankouTanki": true,
      "junseiChuuren": true
     },
     "akaDora": {
      "manzu": 0,
      "pinzu": 0,
      "souzu": 0
     }
    }
   }
  },
  "select": {},
  "hanCap": 78,
  "unsupported": [],
  "notes": [
   "ScoresCalculator(han=3, fu=60) ported as a constructed 'ron60' hand; the han/fu precondition is checked first"
  ],
  "expect": [
   {
    "what": "precondition_han",
    "op": "Eq",
    "value": 3,
    "src": "constructed hand must have 3 han"
   },
   {
    "what": "precondition_fu",
    "op": "Eq",
    "value": 60,
    "src": "constructed hand must have 60 fu"
   },
   {
    "what": "cost.main",
    "op": "Eq",
    "value": 12000,
    "src": "assert result['main'] == expected_main"
   }
  ]
 }
];

export const skipped = [
 {
  "id": "yaku:test_is_chitoitsu_hand",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chiitoitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chitoitsu_hand",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chiitoitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_tanyao",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.tanyao.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_tanyao",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.tanyao.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_tanyao",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.tanyao.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_iipeiko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.iipeiko.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_ryanpeiko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.ryanpeiko.is_condition_met(_hand(tiles, 1))  (assert form)"
 },
 {
  "id": "yaku:test_is_ryanpeiko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.ryanpeiko.is_condition_met(_hand(tiles, 1))  (assert form)"
 },
 {
  "id": "yaku:test_is_ryanpeiko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.ryanpeiko.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_sanshoku",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.sanshoku.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_sanshoku",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.sanshoku.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_sanshoku_douko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.sanshoku_douko.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_sanshoku_douko",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.sanshoku_douko.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_toitoi",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.toitoi.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_toitoi",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.toitoi.is_condition_met(_hand(tiles, 0))  (assert form)"
 },
 {
  "id": "yaku:test_is_sankantsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.sankantsu.is_condition_met(hand, melds)  (assert form)"
 },
 {
  "id": "yaku:test_is_honroto",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.honroto.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_honroto",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.honroto.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_sanankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.sanankou.is_condition_met(_hand(tiles), win_tile, melds, False)  (assert form)"
 },
 {
  "id": "yaku:test_is_sanankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.sanankou.is_condition_met(_hand(tiles), win_tile, melds, False)  (assert form)"
 },
 {
  "id": "yaku:test_is_sanankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.sanankou.is_condition_met(_hand(tiles), win_tile, melds, True)  (assert form)"
 },
 {
  "id": "yaku:test_is_sanankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.sanankou.is_condition_met(_hand(tiles), win_tile, [], False)  (assert form)"
 },
 {
  "id": "yaku:test_is_sanankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.sanankou.is_condition_met(_hand(tiles), win_tile, melds, False)  (assert form)"
 },
 {
  "id": "yaku:test_is_shosangen",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.shosangen.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chanta",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chantai.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chanta",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chantai.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chanta",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chantai.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_junchan",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.junchan.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_junchan",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.junchan.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_junchan",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.junchan.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_honitsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.honitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_honitsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.honitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_honitsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.honitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chinitsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chinitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chinitsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chinitsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_ittsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.ittsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_ittsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.ittsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_ittsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.ittsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_haku",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.haku.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_hatsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.hatsu.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_chun",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chun.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yaku:test_is_east",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.seat_wind_east.is_condition_met(_hand(tiles), player_wind)  (assert form)"
 },
 {
  "id": "yaku:test_is_south",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.seat_wind_south.is_condition_met(_hand(tiles), player_wind)  (assert form)"
 },
 {
  "id": "yaku:test_is_west",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.seat_wind_west.is_condition_met(_hand(tiles), player_wind)  (assert form)"
 },
 {
  "id": "yaku:test_is_north",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.seat_wind_north.is_condition_met(_hand(tiles), player_wind)  (assert form)"
 },
 {
  "id": "yaku:TestYakuBaseClass.test_str_returns_name",
  "reason": "tests the Yaku base class (str/repr/abstract instantiation); no full-hand equivalent"
 },
 {
  "id": "yaku:TestYakuBaseClass.test_repr_returns_name",
  "reason": "tests the Yaku base class (str/repr/abstract instantiation); no full-hand equivalent"
 },
 {
  "id": "yaku:TestYakuBaseClass.test_direct_instantiation_raises_type_error",
  "reason": "tests the Yaku base class (str/repr/abstract instantiation); no full-hand equivalent"
 },
 {
  "id": "yaku:TestYakuBaseClass.test_partial_subclass_raises_type_error",
  "reason": "tests the Yaku base class (str/repr/abstract instantiation); no full-hand equivalent"
 },
 {
  "id": "yakuman:test_is_daisangen",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.daisangen.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_shosuushi",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.shosuushi.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_daisuushi",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.daisuushi.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_tsuisou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.tsuisou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_tsuisou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.tsuisou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_tsuisou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.tsuisou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chinroto",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chinroto.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_kokushi",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.kokushi.is_condition_met(None, tiles)  (assert form)"
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_sequence]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.kokushi.is_condition_met(None, TilesConverter.to_34_array(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_four_of_a_kind]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.kokushi.is_condition_met(None, TilesConverter.to_34_array(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_kokushi_with_extra_tiles_is_rejected[extra_pair]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.kokushi.is_condition_met(None, TilesConverter.to_34_array(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_ryuisou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.ryuisou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_suuankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.suuankou.is_condition_met(_hand(tiles), win_tile, True)  (assert form)"
 },
 {
  "id": "yakuman:test_is_suuankou",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.suuankou.is_condition_met(_hand(tiles), win_tile, False)  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[0]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[1]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[2]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[3]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[4]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[5]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[6]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[7]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_chuuren_poutou[8]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_not_chuuren_poutou[0]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_not_chuuren_poutou[1]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_not_chuuren_poutou[2]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_not_chuuren_poutou[3]",
  "reason": "internal-helper assertions (no full-hand equivalent): assert not config.chuuren_poutou.is_condition_met(_hand(tiles))  (assert form)"
 },
 {
  "id": "yakuman:test_is_suukantsu",
  "reason": "internal-helper assertions (no full-hand equivalent): assert config.suukantsu.is_condition_met(None, melds)  (assert form)"
 },
 {
  "id": "yaku:test_is_nagashi_mangan#1",
  "reason": "no winning tile (nagashi mangan is scored without a winning hand); riichi-score requires a complete winning hand"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[1]#1",
  "reason": "1 han 110 fu non-dealer ron has no constructible legal hand (needs 3 kans -> sankantsu adds han); payment formula only"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[11]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 26 han = 2x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[12]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 39 han = 3x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[13]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 52 han = 4x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[14]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 65 han = 5x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron[15]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 78 han = 6x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[9]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 26 han = 2x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[10]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 39 han = 3x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[11]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 52 han = 4x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[12]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 65 han = 5x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_ron_by_dealer[13]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 78 han = 6x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[9]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 26 han = 2x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[10]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 39 han = 3x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[11]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 52 han = 4x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[12]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 65 han = 5x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo[13]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 78 han = 6x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[8]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 26 han = 2x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[9]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 39 han = 3x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[10]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 52 han = 4x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[11]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 65 han = 5x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "scores:test_calculate_scores_and_tsumo_by_dealer[12]#1",
  "reason": "kazoe_limit=KAZOE_NO_LIMIT with 78 han = 6x counted yakuman: riichi-score has no multi-kazoe option and no legal hand reaches this many counted han; rules difference (b), see yaku:test_kazoe_settings[no_limit]"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[1]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[2]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[3]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[4]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[6]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[7]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[8]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[10]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_dora_indicators[11]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[1]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[2]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[3]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[4]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[6]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[7]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[8]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[10]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_nuki_dora_with_ura_dora_indicators[11]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yaku:test_three_player_man_one_dora_indicator[0]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "yakuman:test_suuankou_wins_over_kazoe_yakuman_with_same_cost[0]#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "scores:test_calculate_scores_with_bonus_three_player#1",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "scores:test_calculate_scores_with_bonus_three_player#2",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "scores:test_calculate_scores_with_bonus_three_player#3",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 },
 {
  "id": "scores:test_calculate_scores_with_bonus_three_player#4",
  "reason": "three-player / nuki dora: riichi-score models 4-player riichi only"
 }
];
