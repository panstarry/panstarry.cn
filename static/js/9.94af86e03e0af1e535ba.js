webpackJsonp([9],{

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1117)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1115),
  /* template */
  __webpack_require__(1118),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30ba68e5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		title: {
			type: String,
			required: false
		},
		menuList: {
			type: Array,
			default() {
				return [];
			}
		}
	},

	data() {
		return {};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-sub-tit[data-v-30ba68e5]{display:inline-block}.-sub-tit .-icon[data-v-30ba68e5]{font-weight:400;padding:0 7px;color:#aaa}.-sub-tit .-name[data-v-30ba68e5]{color:#e20;padding-left:25px}.back[data-v-30ba68e5]{display:inline-block;color:gray}.back[data-v-30ba68e5]:hover{color:red}", ""]);

// exports


/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("0b308ec4", content, true, {});

/***/ }),

/***/ 1118:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-header"
  }, [_c('ul', {
    staticClass: "menus"
  }, [_vm._m(0), _vm._v(" "), (_vm.title) ? _c('li', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.title) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-r"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.menuList), function(m, index) {
    return _c('li', {
      class: {
        'on': m.active
      }
    }, [_c('a', {
      key: index,
      on: {
        "click": function($event) {
          return _vm.$router.push('/' + m.path)
        }
      }
    }, [_vm._v(_vm._s(m.name))])])
  }), _vm._v(" "), _c('li', [_vm._t("default")], 2)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "back",
    attrs: {
      "href": "javascript: history.go(-1);",
      "title": "返回"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-arrow-l-1"
  })])])
}]}

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * qrcode.vue v1.7.0
 * A Vue component to generate QRCode.
 * © 2017-2019 @scopewu(https://github.com/scopewu)
 * MIT License.
 */
var mode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3
};

function QR8bitByte(data) {
  this.mode = mode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype = {
  getLength: function (buffer) {
    return this.data.length;
  },
  write: function (buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
};
var _8BitByte = QR8bitByte;

var ErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
};

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4		
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7		
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10		
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], // 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;
  var list = new Array();

  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case ErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

    case ErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

    case ErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

    case ErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

    default:
      return undefined;
  }
};

var RSBlock = QRRSBlock;

function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}

QRBitBuffer.prototype = {
  get: function (index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },
  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};
var BitBuffer = QRBitBuffer;

var QRMath = {
  glog: function (n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }

    return QRMath.LOG_TABLE[n];
  },
  gexp: function (n) {
    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};

for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}

for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}

for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}

var math = QRMath;

function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);

  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}

QRPolynomial.prototype = {
  get: function (index) {
    return this.num[index];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (e) {
    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= math.gexp(math.glog(this.get(i)) + math.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = math.glog(this.get(0)) - math.glog(e.get(0));
    var num = new Array(this.getLength());

    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }

    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= math.gexp(math.glog(e.get(i)) + ratio);
    } // recursive call


    return new QRPolynomial(num, 0).mod(e);
  }
};
var Polynomial = QRPolynomial;

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
var QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  getBCHTypeInfo: function (data) {
    var d = data << 10;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }

    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function (data) {
    var d = data << 12;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }

    return data << 12 | d;
  },
  getBCHDigit: function (data) {
    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },
  getPatternPosition: function (typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask: function (maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;

      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;

      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;

      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;

      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;

      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;

      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  },
  getErrorCorrectPolynomial: function (errorCorrectLength) {
    var a = new Polynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new Polynomial([1, math.gexp(i)], 0));
    }

    return a;
  },
  getLengthInBits: function (mode$1, type) {
    if (1 <= type && type < 10) {
      // 1 - 9
      switch (mode$1) {
        case mode.MODE_NUMBER:
          return 10;

        case mode.MODE_ALPHA_NUM:
          return 9;

        case mode.MODE_8BIT_BYTE:
          return 8;

        case mode.MODE_KANJI:
          return 8;

        default:
          throw new Error("mode:" + mode$1);
      }
    } else if (type < 27) {
      // 10 - 26
      switch (mode$1) {
        case mode.MODE_NUMBER:
          return 12;

        case mode.MODE_ALPHA_NUM:
          return 11;

        case mode.MODE_8BIT_BYTE:
          return 16;

        case mode.MODE_KANJI:
          return 10;

        default:
          throw new Error("mode:" + mode$1);
      }
    } else if (type < 41) {
      // 27 - 40
      switch (mode$1) {
        case mode.MODE_NUMBER:
          return 14;

        case mode.MODE_ALPHA_NUM:
          return 13;

        case mode.MODE_8BIT_BYTE:
          return 16;

        case mode.MODE_KANJI:
          return 12;

        default:
          throw new Error("mode:" + mode$1);
      }
    } else {
      throw new Error("type:" + type);
    }
  },
  getLostPoint: function (qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0; // LEVEL1

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    } // LEVEL2


    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;

        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    } // LEVEL3


    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    } // LEVEL4


    var darkCount = 0;

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
};
var util = QRUtil;

function QRCode(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
} // for client side minification


var proto = QRCode.prototype;

proto.addData = function (data) {
  var newData = new _8BitByte(data);
  this.dataList.push(newData);
  this.dataCache = null;
};

proto.isDark = function (row, col) {
  if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    throw new Error(row + "," + col);
  }

  return this.modules[row][col];
};

proto.getModuleCount = function () {
  return this.moduleCount;
};

proto.make = function () {
  // Calculate automatically typeNumber if provided is < 1
  if (this.typeNumber < 1) {
    var typeNumber = 1;

    for (typeNumber = 1; typeNumber < 40; typeNumber++) {
      var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
      var buffer = new BitBuffer();
      var totalDataCount = 0;

      for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      for (var i = 0; i < this.dataList.length; i++) {
        var data = this.dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }

      if (buffer.getLengthInBits() <= totalDataCount * 8) break;
    }

    this.typeNumber = typeNumber;
  }

  this.makeImpl(false, this.getBestMaskPattern());
};

proto.makeImpl = function (test, maskPattern) {
  this.moduleCount = this.typeNumber * 4 + 17;
  this.modules = new Array(this.moduleCount);

  for (var row = 0; row < this.moduleCount; row++) {
    this.modules[row] = new Array(this.moduleCount);

    for (var col = 0; col < this.moduleCount; col++) {
      this.modules[row][col] = null; //(col + row) % 3;
    }
  }

  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(test, maskPattern);

  if (this.typeNumber >= 7) {
    this.setupTypeNumber(test);
  }

  if (this.dataCache == null) {
    this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }

  this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function (row, col) {
  for (var r = -1; r <= 7; r++) {
    if (row + r <= -1 || this.moduleCount <= row + r) continue;

    for (var c = -1; c <= 7; c++) {
      if (col + c <= -1 || this.moduleCount <= col + c) continue;

      if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
        this.modules[row + r][col + c] = true;
      } else {
        this.modules[row + r][col + c] = false;
      }
    }
  }
};

proto.getBestMaskPattern = function () {
  var minLostPoint = 0;
  var pattern = 0;

  for (var i = 0; i < 8; i++) {
    this.makeImpl(true, i);
    var lostPoint = util.getLostPoint(this);

    if (i == 0 || minLostPoint > lostPoint) {
      minLostPoint = lostPoint;
      pattern = i;
    }
  }

  return pattern;
};

proto.createMovieClip = function (target_mc, instance_name, depth) {
  var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  var cs = 1;
  this.make();

  for (var row = 0; row < this.modules.length; row++) {
    var y = row * cs;

    for (var col = 0; col < this.modules[row].length; col++) {
      var x = col * cs;
      var dark = this.modules[row][col];

      if (dark) {
        qr_mc.beginFill(0, 100);
        qr_mc.moveTo(x, y);
        qr_mc.lineTo(x + cs, y);
        qr_mc.lineTo(x + cs, y + cs);
        qr_mc.lineTo(x, y + cs);
        qr_mc.endFill();
      }
    }
  }

  return qr_mc;
};

proto.setupTimingPattern = function () {
  for (var r = 8; r < this.moduleCount - 8; r++) {
    if (this.modules[r][6] != null) {
      continue;
    }

    this.modules[r][6] = r % 2 == 0;
  }

  for (var c = 8; c < this.moduleCount - 8; c++) {
    if (this.modules[6][c] != null) {
      continue;
    }

    this.modules[6][c] = c % 2 == 0;
  }
};

proto.setupPositionAdjustPattern = function () {
  var pos = util.getPatternPosition(this.typeNumber);

  for (var i = 0; i < pos.length; i++) {
    for (var j = 0; j < pos.length; j++) {
      var row = pos[i];
      var col = pos[j];

      if (this.modules[row][col] != null) {
        continue;
      }

      for (var r = -2; r <= 2; r++) {
        for (var c = -2; c <= 2; c++) {
          if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    }
  }
};

proto.setupTypeNumber = function (test) {
  var bits = util.getBCHTypeNumber(this.typeNumber);

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  }

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  }
};

proto.setupTypeInfo = function (test, maskPattern) {
  var data = this.errorCorrectLevel << 3 | maskPattern;
  var bits = util.getBCHTypeInfo(data); // vertical		

  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;

    if (i < 6) {
      this.modules[i][8] = mod;
    } else if (i < 8) {
      this.modules[i + 1][8] = mod;
    } else {
      this.modules[this.moduleCount - 15 + i][8] = mod;
    }
  } // horizontal


  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;

    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = mod;
    } else if (i < 9) {
      this.modules[8][15 - i - 1 + 1] = mod;
    } else {
      this.modules[8][15 - i - 1] = mod;
    }
  } // fixed module


  this.modules[this.moduleCount - 8][8] = !test;
};

proto.mapData = function (data, maskPattern) {
  var inc = -1;
  var row = this.moduleCount - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = this.moduleCount - 1; col > 0; col -= 2) {
    if (col == 6) col--;

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (this.modules[row][col - c] == null) {
          var dark = false;

          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
          }

          var mask = util.getMask(maskPattern, row, col - c);

          if (mask) {
            dark = !dark;
          }

          this.modules[row][col - c] = dark;
          bitIndex--;

          if (bitIndex == -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || this.moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new BitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  } // calc num max data.


  var totalDataCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  } // end code


  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  } // padding


  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  } // padding


  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD1, 8);
  }

  return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }

    offset += dcCount;
    var rsPoly = util.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);

    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }

  var totalCodeCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }

  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }

  return data;
};

var QRCode_1 = QRCode;

/**
 * Encode UTF16 to UTF8.
 * See: http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
 * @param str {string}
 * @returns {string}
 */

function toUTF8String(str) {
  var utf8Str = '';

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (charCode < 0x0080) {
      utf8Str += String.fromCharCode(charCode);
    } else if (charCode < 0x0800) {
      utf8Str += String.fromCharCode(0xc0 | charCode >> 6);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      utf8Str += String.fromCharCode(0xe0 | charCode >> 12);
      utf8Str += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    } else {
      // surrogate pair
      i++; // UTF-16 encodes 0x10000-0x10FFFF by
      // subtracting 0x10000 and splitting the
      // 20 bits of 0x0-0xFFFFF into two halves

      charCode = 0x10000 + ((charCode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      utf8Str += String.fromCharCode(0xf0 | charCode >> 18);
      utf8Str += String.fromCharCode(0x80 | charCode >> 12 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    }
  }

  return utf8Str;
}

function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      } // end of row, clean up or skip


      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return;
        }

        if (start === null) {
          // Just a single dark module.
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          // Otherwise finish the current line.
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }

        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
} // @vue/component


var QrcodeVue = {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 100,
      validator: function validator(s) {
        return isNaN(Number(s)) !== true;
      }
    },
    level: {
      type: String,
      default: 'L',
      validator: function validator(l) {
        return ['L', 'Q', 'M', 'H'].indexOf(l) > -1;
      }
    },
    background: {
      type: String,
      default: '#fff'
    },
    foreground: {
      type: String,
      default: '#000'
    },
    renderAs: {
      type: String,
      required: false,
      default: 'canvas',
      validator: function validator(as) {
        return ['canvas', 'svg'].indexOf(as) > -1;
      }
    }
  },
  data: function data() {
    return {
      numCells: 0,
      fgPath: ''
    };
  },
  updated: function updated() {
    this.render();
  },
  mounted: function mounted() {
    this.render();
  },
  methods: {
    render: function render() {
      var value = this.value,
          size = this.size,
          level = this.level,
          background = this.background,
          foreground = this.foreground,
          renderAs = this.renderAs;

      var _size = size >>> 0; // size to number
      // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrCode = new QRCode_1(-1, ErrorCorrectLevel[level]);
      qrCode.addData(toUTF8String(value));
      qrCode.make();
      var cells = qrCode.modules;
      var tileW = _size / cells.length;
      var tileH = _size / cells.length;
      var scale = window.devicePixelRatio || 1;

      if (renderAs === 'svg') {
        this.numCells = cells.length; // Drawing strategy: instead of a rect per module, we're going to create a
        // single path for the dark modules and layer that on top of a light rect,
        // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
        // way faster than DOM ops.
        // For level 1, 441 nodes -> 2
        // For level 40, 31329 -> 2

        this.fgPath = generatePath(cells);
      } else {
        var canvas = this.$refs['qrcode-vue'];
        var ctx = canvas.getContext('2d');
        canvas.height = canvas.width = _size * scale;
        ctx.scale(scale, scale);
        cells.forEach(function (row, rdx) {
          row.forEach(function (cell, cdx) {
            ctx.fillStyle = cell ? foreground : background;
            var w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
            var h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
            ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
          });
        });
      }
    }
  },
  render: function render(createElement) {
    var className = this.className,
        value = this.value,
        level = this.level,
        background = this.background,
        foreground = this.foreground,
        size = this.size,
        renderAs = this.renderAs,
        numCells = this.numCells,
        fgPath = this.fgPath;
    return createElement('div', {
      class: this.class || className,
      attrs: {
        value: value,
        level: level,
        background: background,
        foreground: foreground
      }
    }, [renderAs === 'svg' ? createElement('svg', {
      attrs: {
        height: size,
        width: size,
        shapeRendering: 'crispEdges',
        viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
      },
      style: {
        width: size + 'px',
        height: size + 'px'
      }
    }, [createElement('path', {
      attrs: {
        fill: background,
        d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
      }
    }), createElement('path', {
      attrs: {
        fill: foreground,
        d: fgPath
      }
    })]) : createElement('canvas', {
      attrs: {
        height: size,
        width: size
      },
      style: {
        width: size + 'px',
        height: size + 'px'
      },
      ref: 'qrcode-vue'
    }, [])]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (QrcodeVue);


/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			chargeItemEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.CHARGE_ITEM_CONF.value),
			viewChargeItemDlg: false,
			chargeItemList: [],
			chargeItem: {
				chargeItemId: null,
				chargeItemName: '',
				arAp: 0,
				unitPrice: null,
				status: 0
			},
			formRule: {},
			chargeItemDlgTitle: ''
		};
	},

	created() {
		this.queryChargeItemList();
	},

	methods: {
		initChargeItem() {
			this.chargeItem = {
				chargeItemId: null,
				chargeItemName: '',
				arAp: 0,
				unitPrice: null,
				status: 0,
				remark: null
			};
		},

		queryChargeItemList() {
			$.Req.service($.SvName.CHARGE_ITEM_QUERY, { isCommodity: false }, ret => {
				this.chargeItemList = ret.chargeItemList;
			});
		},

		addChargeItem() {
			this.initChargeItem();
			this.chargeItemDlgTitle = '添加资费项';
			this.viewChargeItemDlg = true;
		},

		editChargeItem(idx) {
			let _chargeItem = {};
			$.Util.copyAttributes(this.chargeItemList[idx], _chargeItem);
			this.chargeItem = _chargeItem;
			this.chargeItemDlgTitle = '编辑资费项';
			this.viewChargeItemDlg = true;
		},

		checkChargeItem() {
			if (!this.chargeItem.chargeItemName) {
				$.Dlg.error('请输入资费项名称');
				return false;
			}
			if (!this.chargeItem.unitPrice) {
				$.Dlg.error('请输入单价');
				return false;
			}

			return true;
		},

		onClickSubmitBtn() {
			if (!this.checkChargeItem()) return;

			let actionType = this.chargeItem.chargeItemId ? 'U' : 'I';
			let args = { actionType: actionType, 'chargeItem': this.chargeItem };
			$.Req.service($.SvName.CHARGE_ITEM_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.viewChargeItemDlg = false;
				this.queryChargeItemList();
			});
		},

		updateStatus(idx, newStatus) {
			let args = {
				chargeItemId: this.chargeItemList[idx].chargeItemId,
				status: newStatus
			};
			$.Req.service($.SvName.CHARGE_ITEM_STAUS_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.chargeItemList[idx].status = newStatus;
			});
		},

		delChargeItem(idx) {
			let ci = this.chargeItemList[idx];
			let args = { actionType: 'D', deleteId: ci.chargeItemId };
			let msg = '您确定要删除资费项【{0}】吗'.format(ci.chargeItemName);
			$.Dlg.confirm(msg, yes => {
				$.Req.service($.SvName.CHARGE_ITEM_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.chargeItemList.splice(idx, 1);
				});
			});
		}
	}
});

/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.CHARGE_EDIT.value),
			dateOptions1: {
				disabledDate(date) {
					return date && date.valueOf() > Date.now();
				},
				shortcuts: [{
					text: '今天',
					value() {
						const end = new Date();
						const start = new Date();
						return [start, end];
					}
				}, {
					text: '昨天',
					value() {
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24);
						const end = new Date(start.getTime());
						return [start, end];
					}
				}, {
					text: '最近一周',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						return [start, end];
					}
				}, {
					text: '最近一个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						return [start, end];
					}
				}, {
					text: '最近两个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
						return [start, end];
					}
				}, {
					text: '最近三个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						return [start, end];
					}
				}]
			},
			viewChargeDlg: false,
			chargeList: [],
			charge: { arAp: null, unitPrice: null },
			chargeItemList: [],
			formRule: {},
			chargeDlgTitle: '',
			totalCount: null,
			query: {
				page: null,
				createUid: null,
				dates: [null, null],
				chargeItemId: null,
				onlyProductCharge: false,
				paymentChannel: null,
				productCateId: null,
				salesId: null
			},
			staffList: [],
			chargeDate: new Date(),
			chargeTime: new Date().format('hh:mm:ss'),
			editChargeDlg: false,
			arAmountSum: null,
			apAmountSum: null,
			prdCateStatDlg: false,
			prdCateChargeStatList: null,
			prdCateStatSum: {
				quantity: 0,
				amount: 0
			},
			productCateList: [],
			optRemark: null,
			selectChargeId: null,
			chargeDelDlg: false,
			selectCharge: {
				chargeItemName: null
			},
			exportFileUrl: null,
			exportDlg: null,
			productProfit: null
		};
	},

	created() {
		this.initCharge();
		this.resetQuery();
		this.queryStaffList();
		this.queryChargeList();
		this.queryChargeItemList();
		this.queryProductCateList();
	},

	methods: {
		initCharge() {
			this.charge = {
				chargeItemId: '',
				arAp: null,
				unitPrice: null,
				unitNum: 0,
				amount: null,
				paymentChannel: null,
				remark: null,
				transTime: new Date()
			};
			this.chargeDate = new Date();
			this.chargeTime = new Date().format('hh:mm:ss');
		},

		queryProductCateList() {
			$.Req.service($.SvName.PRODUCT_CATE_QUERY, {}, ret => {
				this.productCateList = ret.productCateList;
			});
		},

		queryChargeList(isExport = null) {
			let beginDate = this.query.dates[0];
			let endDate = this.query.dates[1];
			if (!beginDate || !endDate) {
				$.Msg.error('请输入记账日期范围');
				return;
			}
			if ($.Util.calcDateDiffDays(endDate, beginDate) > 180) {
				$.Dlg.error('查询日期范围不能超过180天');
				return;
			}
			let args = {
				beginDate: beginDate,
				endDate: endDate,
				createUid: this.query.createUid,
				chargeFromList: [1, 3, 4, 5, 7, 8, 9, 10, 11],
				chargeItemId: this.query.chargeItemId,
				paymentChannel: this.query.paymentChannel,
				page: this.query.page
			};
			if (this.query.chargeItemId < 0) {
				args.chargeItemId = null;
				args.chargeFromList = [-this.query.chargeItemId];
			}
			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
				this.exportDlg = true;
			}
			if (this.query.onlyProductCharge) {
				args.chargeType = 1;
				args.productCateId = this.query.productCateId;
				args.salesId = this.query.salesId;
			}
			$.Req.service($.SvName.CHARGE_QUERY, args, ret => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
					return;
				}
				this.chargeList = ret.chargeList;
				if (this.query.page === null) {
					this.totalCount = ret.count;
					this.arAmountSum = ret.arAmountSum;
					this.apAmountSum = ret.apAmountSum;
					if (this.query.onlyProductCharge) {
						this.productProfit = ret.productProfit;
					}
				}
			}, true);
		},

		exportChargeList() {
			let beginDate = this.query.dates[0];
			let endDate = this.query.dates[1];
			if (!beginDate || !endDate) {
				$.Msg.error('请输入记账日期范围');
				return;
			}
			if ($.Util.calcDateDiffDays(endDate, beginDate) > 180) {
				$.Dlg.error('查询日期范围不能超过180天');
				return;
			}
			let args = {
				beginDate: beginDate,
				endDate: endDate,
				createUid: this.query.createUid,
				chargeFromList: [1, 3, 4, 5],
				chargeItemId: this.query.chargeItemId,
				isExport: true
			};
			if (this.query.onlyProductCharge) {
				args.chargeType = 1;
			}
			$.Req.service($.SvName.CHARGE_QUERY_EXPORT, args, ret => {}, true);
		},

		resetQuery() {
			this.page = null;
			if (!$.data.user.isShopOwner) {
				this.query.createUid = $.data.user.uid;
			}
			this.query.dates = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7), new Date()];
			this.query.chargeItemId = null;
			this.query.paymentChannel = null;
			this.query.productCateId = null;
			this.query.salesId = null;
		},

		queryChargeItemList() {
			let args = { isBaseInfo: true, status: 0 };
			$.Req.service($.SvName.CHARGE_ITEM_QUERY, args, ret => {
				this.chargeItemList = ret.chargeItemList;
			});
		},

		queryStaffList() {
			if (this.editable) {
				$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
					this.staffList = ret.staffList;
				});
			} else {
				this.staffList = [{ uid: $.data.user.uid, name: $.data.user.uname }];
			}
		},

		addCharge() {
			this.initCharge();
			this.chargeDate = new Date();
			this.chargeTime = new Date().format('hh:mm:ss');
			this.viewChargeDlg = true;
		},

		checkCharge() {
			if (this.charge.chargeFrom === 1 && !this.charge.chargeItemId) {
				$.Dlg.error('请选择资费项');
				return false;
			}
			if (!this.charge.unitNum) {
				$.Dlg.error('请输入数量');
				return false;
			}
			if ($.Util.isEmpty(this.charge.paymentChannel)) {
				$.Dlg.error('请选择支付方式');
				return false;
			}
			if (!this.chargeDate) {
				$.Dlg.error('请选择交易日期');
				return false;
			}
			if (!this.chargeTime) {
				$.Dlg.error('请选择交易时间');
				return false;
			}
			if (this.charge.remark && this.charge.remark.length > 500) {
				$.Dlg.error('备注字数不能超过500');
				return false;
			}

			return true;
		},

		handleSaveCharge(actionType = 'I') {
			if (!this.checkCharge()) return;

			this.charge.transTime = $.Util.formatDate(this.chargeDate) + ' ' + this.chargeTime + ":00";
			if (actionType === 'I') {
				if ($.Util.isEmpty(this.charge.amount)) {
					this.charge.amount = this.charge.unitNum * this.charge.unitPrice;
				}
				if (this.charge.arAp === 0) this.charge.arAmount = this.charge.amount;else if (this.charge.arAp === 1) this.charge.aPAmount = this.charge.amount;
			}
			let args = { actionType: actionType, 'charge': this.charge };
			if (actionType === 'U') {
				args.optRemark = this.optRemark;
			}

			$.Req.service($.SvName.CHARGE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				if (actionType === 'I') this.viewChargeDlg = false;else this.editChargeDlg = false;
				this.queryChargeList();
			});
		},

		calcAmount() {
			if (this.charge.paymentChannel === 99) {
				this.charge.arAmount = 0;
				return;
			}

			if (this.charge.unitPrice && this.charge.unitNum) {
				this.charge.amount = (this.charge.unitPrice * this.charge.unitNum).toFixed(2);
			} else {
				this.charge.amount = null;
			}
			if (this.charge.arAp === 0) this.charge.arAmount = this.charge.amount;else this.charge.apAmount = this.charge.amount;
		},

		changePageNo(page) {
			this.query.page = page;
			this.queryChargeList();
			window.scrollTo(0, 0);
		},

		selectChargeItem(chargeItemId) {
			for (let ci of this.chargeItemList) {
				if (ci.chargeItemId === chargeItemId) {
					this.charge.arAp = ci.arAp;
					this.charge.unitPrice = ci.unitPrice;
					this.charge.unitNum = null;
					this.charge.amount = null;
					break;
				}
			}
		},

		editCharge(charge) {
			/*if (!charge.chargeItemId) {
     $.Dlg.error('此类资费不能修改');
     return;
   }*/
			$.Req.service($.SvName.CHARGE_QUERY, { chargeId: charge.chargeId }, ret => {
				this.charge = ret.chargeList[0];
				this.chargeDate = $.Util.formatDate(this.charge.transTime);
				this.chargeTime = Date.new(this.charge.transTime).format('hh:mm:ss');
				this.optRemark = null;
				this.editChargeDlg = true;
			});
		},

		openDelChargeDlg(chargeId) {
			this.selectChargeId = chargeId;
			this.chargeDelDlg = true;
		},

		delCharge() {
			let msg = "确定要删除该账单吗？ 删除后，系统会记录日志。";
			$.Dlg.confirm(msg, yes => {
				let args = { deleteId: this.selectChargeId, actionType: 'D', optRemark: this.optRemark };
				$.Req.service($.SvName.CHARGE_SAVE, args, ret => {
					this.chargeDelDlg = false;
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryChargeList();
				});
			});
		},

		statChargeByProductCate() {
			let beginDate = this.query.dates[0];
			let endDate = this.query.dates[1];
			if (!beginDate || !endDate) {
				$.Msg.error('请输入记账日期范围');
				return;
			}
			if ($.Util.calcDateDiffDays(endDate, beginDate) > 180) {
				$.Dlg.error('查询日期范围不能超过180天');
				return;
			}
			let args = {
				beginDate: beginDate,
				endDate: endDate,
				createUid: this.query.createUid
			};
			$.Req.service($.SvName.PRODUCT_CATE_CHARGE_STAT, args, ret => {
				this.prdCateChargeStatList = ret.statList;
				let quantitySum = 0,
				    amountSum = 0;
				for (let s of ret.statList) {
					quantitySum += s.quantity;
					amountSum += s.amount;
				}
				this.prdCateStatSum.quantity = quantitySum;
				this.prdCateStatSum.amount = $.Util.round(amountSum);
				this.prdCateStatDlg = true;
			}, true);
		},

		exportCharges() {
			if (this.chargeList && this.chargeList.length) {
				this.queryChargeList(true);
			} else {
				$.Msg.warning('暂无数据');
			}
		},

		printChargeForPos(charge) {
			this.selectCharge = {};
			$.Util.copyAttributes(charge, this.selectCharge);
			//this.$forceUpdate();
			let shopName = $.data.tenant.tenantName === $.data.shop.shopName ? $.data.shop.shopName : $.data.tenant.tenantName + '<br>' + $.data.shop.shopName;
			$.Util.printForPos('chargeElemForPrint', shopName);
		},

		changePaymengChnl(val) {
			this.charge.paymentChannel = parseInt(val);
			this.calcAmount();
		}
	}
});

/***/ }),

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: $,
			optType: 0,
			updateLog: {
				data: null,
				count: null
			},
			delLog: {
				data: null,
				count: null
			}
		};
	},

	created() {
		this.queryUpdateLog();
	},

	methods: {
		queryUpdateLog(page = null) {
			this.optType = 0;
			if (!page) this.updateLog.count = null;
			let args = { page: page, optType: 0 };
			$.Req.service($.SvName.CHARGE_OPT_LOG_QUERY, args, ret => {
				for (let l of ret.logList) {
					if (l.arAp === 0) l.amount = l.arAmount;else l.amount = l.apAmount;
				}
				this.updateLog.data = ret.logList;
				if (page === null) this.updateLog.count = ret.count;
			}, true);
		},

		queryDelLog(page = null) {
			this.optType = 1;
			if (!page) this.delLog.count = null;
			let args = { page: page, optType: 1 };
			$.Req.service($.SvName.CHARGE_OPT_LOG_QUERY, args, ret => {
				for (let l of ret.logList) {
					if (l.arAp === 0) l.amount = l.arAmount;else l.amount = l.apAmount;
				}
				this.delLog.data = ret.logList;
				if (page === null) this.delLog.count = ret.count;
			}, true);
		}
	}
});

/***/ }),

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.CHARGE_ITEM_CONF.value),
			cateList: null,
			cate: { cateId: null, cateName: null, remark: null },
			dlgShow: false
		};
	},

	created() {
		this.loadData();
	},

	methods: {
		loadData() {
			$.Req.service($.SvName.PRODUCT_CATE_QUERY, {}, ret => {
				this.cateList = ret.productCateList;
			});
		},

		create() {
			this.cate.cateId = null;
			this.cate.cateName = null;
			this.cate.remark = null;
			this.dlgShow = true;
		},

		update(idx) {
			this.cate.cateId = this.cateList[idx].cateId;
			this.cate.cateName = this.cateList[idx].cateName;
			this.cate.remark = this.cateList[idx].remark;
			this.dlgShow = true;
		},

		submit() {
			if (!this.cate.cateName) {
				$.Msg.error('请输入名称');
				return;
			}
			if (this.cate.remark && this.cate.remark.length > 200) {
				$.Msg.error('备注内容不能超过200字');
				return;
			}

			let args = {
				actionType: this.cate.cateId ? 'U' : 'I',
				productCate: this.cate
			};
			$.Req.service($.SvName.PRODUCT_CATE_SAVE, args, ret => {
				this.loadData();
				this.dlgShow = false;
			}, true);
		},

		deleteCate(idx) {
			let cate = this.cateList[idx];
			let msg = "确定要删除该类别【{0}】吗？<br> （删除类别不会删除商品，但是会将该类商品的类别属性清空）".format(cate.cateName);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: cate.cateId };
				$.Req.service($.SvName.PRODUCT_CATE_SAVE, args, ret => {
					this.cateList.splice(idx, 1);
				}, true);
			});
		}
	}
});

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qrcode_vue__ = __webpack_require__(1123);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    QrcodeVue: __WEBPACK_IMPORTED_MODULE_0_qrcode_vue__["a" /* default */]
  },
  data() {
    return {
      g: $,
      chargeItemList: [],
      chooseItems: [],
      chooseItemCnt: 0,
      choosedAmount: 0,
      sumDlgView: false,
      choosedSumCount: null,
      choosedSumAmount: null,
      paymentChannel: null,
      paymentRemark: null,
      memberQuery: {
        type: 1,
        phoneNo: null,
        cardNo: null,
        passwd: null,
        member: null,
        memberCards: null,
        none: false,
        mcId: null,
        memberErr: null
      },
      query: {
        chargeItemName: null,
        memberPhone: null
      },
      member: null,
      lastSubmitTime: null,
      cateId: null,
      cateList: null,
      priceType: null, // 1-会员价，2-员工价（统一折扣）
      staffPriceDiscount: null,
      displayType: 1, // 1: 块状，2：列表
      salesList: [],
      salesId: $.data.user.staffId,
      productCardDiscountMap: {},
      printNo: new Date().getTime(),
      printTime: $.Util.formatDateTime(new Date()),
      selectMc: null,
      fuzzyProductName: null
    };
  },

  created() {
    if ($.Util.cookie.get($.Conf.CookieKeys.PRODUCT_SALE_DISPLAY_TYPE)) {
      this.displayType = parseInt($.Util.cookie.get($.Conf.CookieKeys.PRODUCT_SALE_DISPLAY_TYPE));
    }

    this.queryCateList();
    this.queryChargeItemList();
    this.queryStaffSales();
    this.queryProductCardDiscount();
  },

  watch: {
    // member(oldVal, newVal) {
    //   this.confirmChoose();
    // },
    // staffPriceDiscount(oldVal, newVal) {
    //   this.confirmChoose();
    // },
  },

  methods: {
    queryStaffSales() {
      $.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
        this.salesList = ret.staffList;
      });
    },

    queryChargeItemList() {
      let args = {
        needStock: true,
        orderByName: true,
        isBaseInfo: true,
        status: 0
      };
      if (this.query.chargeItemName) {
        args.chargeItemName = this.query.chargeItemName;
      }
      $.Req.service($.SvName.CHARGE_ITEM_QUERY, args, ret => {
        this.chargeItemList = ret.chargeItemList;
        for (let i = 0, len = this.chargeItemList.length; i < len; i++) {
          this.chargeItemList[i].oriUnitPrice = this.chargeItemList[i].unitPrice;
          this.$set(this.chooseItems, i, 0);
        }
      }, true);
    },

    queryProductByName() {
      if (this.fuzzyProductName) {
        this.cateId = null;
      }
      this.query.chargeItemName = this.fuzzyProductName;
      //this.queryChargeItemList();
    },

    queryCateList() {
      let args = { needBase: true };
      $.Req.service($.SvName.PRODUCT_CATE_QUERY, args, ret => {
        this.cateList = ret.productCateList;
      });
    },

    queryProductByCate(cateId) {
      this.cateId = cateId;
      this.query.chargeItemName = null;
    },

    altUnitNum(idx, alt) {
      let num = parseInt(this.chooseItems[idx]) + alt;
      if (num < 0) return;
      this.$set(this.chooseItems, idx, num);
    },

    confirmChoose() {
      this.paymentChannel = null;
      if (this.calcChargeSum()) {
        this.sumDlgView = true;
      }
    },

    calcChargeSum() {
      let sumCount = 0;
      let sumAmount = 0;
      let useMemberPrice = this.priceType === 1 && this.member;
      for (let i = 0, len = this.chooseItems.length; i < len; i++) {
        let num = this.chooseItems[i];
        if (num <= 0) continue;

        sumCount += num;
        if (useMemberPrice && this.chargeItemList[i].memberPrice) {
          sumAmount += num * this.chargeItemList[i].memberPrice;
        } else {
          sumAmount += num * this.chargeItemList[i].unitPrice;
        }
      }
      if (sumCount === 0) {
        $.Dlg.warning("您未选择商品哦");
        return false;
      }
      if (this.priceType === 2 && this.staffPriceDiscount) {
        sumAmount = this.staffPriceDiscount * sumAmount / 10;
      }
      this.choosedSumCount = sumCount;
      this.choosedSumAmount = $.Util.round(sumAmount);

      return true;
    },

    submit() {
      let nowTime = new Date().getTime();
      if (this.lastSubmitTime && nowTime - this.lastSubmitTime < 3000) {
        $.Msg.info($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSubmitTime = nowTime;

      if (this.paymentChannel === null || this.paymentChannel === undefined) {
        $.Msg.error("请选择支付方式");
        return;
      }
      if (this.paymentChannel === 0) {
        if (!this.memberQuery.mcId) {
          $.Msg.error("请选择会员的储值卡");
          return;
        }
      }

      let chargeList = [];
      for (let i = 0, len = this.chooseItems.length; i < len; i++) {
        let num = this.chooseItems[i];
        if (num <= 0) continue;

        let ci = this.chargeItemList[i];

        let useMprice = this.priceType === 1 && this.member && ci.memberPrice;
        let memberId = null;
        if (useMprice) memberId = this.member.memberId;else if (this.memberQuery.mcId) memberId = this.memberQuery.member.memberId;
        let charge = {
          chargeItemId: ci.chargeItemId,
          arAp: 0,
          unitPrice: useMprice ? ci.memberPrice : ci.unitPrice,
          unitNum: num,
          arAmount: useMprice ? ci.memberPrice * num : ci.unitPrice * num,
          chargeFrom: 1,
          paymentChannel: this.paymentChannel,
          refId: this.memberQuery.mcId,
          remark: this.paymentRemark,
          memberId: memberId,
          salesId: this.salesId
        };
        if (this.priceType === 2 && this.staffPriceDiscount) {
          charge.unitPrice = charge.unitPrice * this.staffPriceDiscount / 10;
          charge.arAmount = charge.arAmount * this.staffPriceDiscount / 10;
        }
        chargeList.push(charge);
      }
      if (chargeList.length === 0) return;
      let args = { chargeList: chargeList };
      if (this.paymentChannel === 0) {
        args.mcId = this.memberQuery.mcId;
      }
      $.Req.service($.SvName.CHARGE_LIST_CREATE, args, ret => {
        $.Dlg.success($.Lang.OPT_SUCCESS);
        this.sumDlgView = false;
        this.queryChargeItemList();
        if (this.paymentChannel === 0) {
          this.memberQuery.mcId = null;
          this.memberQuery.phoneNo = null;
          this.memberQuery.passwd = null;
          this.memberQuery.cardNo = null;
          this.memberQuery.member = null;
          this.memberQuery.memberCards = null;
          this.memberQuery.none = false;
        }
      }, true);
    },

    queryMemberValueCard(newQuery = true) {
      let args = {};
      if (this.memberQuery.type === 0) {
        if (!this.memberQuery.phoneNo) {
          $.Msg.error("请输入会员手机号");
          return;
        }
        if (!$.Util.validatePhoneNo(this.memberQuery.phoneNo)) {
          $.Msg.error("手机号格式不正确");
          return;
        }
        args.phoneNo = this.memberQuery.phoneNo;
        if (!newQuery && this.memberQuery.passwd) {
          args.passwd = $.Util.md5(this.memberQuery.passwd);
        }
      } else if (this.memberQuery.type === 1) {
        if (!this.memberQuery.cardNo) {
          $.Msg.error("请刷会员卡");
          return;
        }
        args.cardNo = this.memberQuery.cardNo;
      }
      $.Req.service($.SvName.MEMBER_VALUE_CARD_QUERY, args, ret => {
        if (ret.member && ret.needPassword) {
          let passwd = window.prompt("会员未授权直接使用储值卡消费，请输入会员登录密码");
          if (passwd) {
            this.memberQuery.passwd = passwd;
            this.queryMemberValueCard(false);
          }
          return;
        }
        this.memberQuery.member = ret.member;
        this.memberQuery.memberCards = ret.memberCards;
        this.memberQuery.none = !ret.member;
        if (ret.memberCards && ret.memberCards.length > 0) {
          for (let mc of ret.memberCards) {
            if (mc.status === 0) {
              this.memberQuery.mcId = mc.mcId;
              this.changeMemberCard(mc.mcId);
              break;
            }
          }
        }
      }, true);
    },

    queryAllChargeItem() {
      this.fuzzyProductName = null;
      this.query.chargeItemName = null;
      //this.queryChargeItemList();
    },

    queryMember() {
      if (!this.query.memberPhone) {
        this.member = null;
        this.memberQuery.memberErr = null;
        return;
      }

      if (!$.Util.validatePhoneNo(this.query.memberPhone)) {
        this.member = null;
        this.memberQuery.memberErr = $.Lang.PHONE_NO_ERR;
        $.Msg.error($.Lang.PHONE_NO_ERR);
        return;
      }
      $.Req.service($.SvName.MEMBER_BASE_QUERY, { phoneNo: this.query.memberPhone }, ret => {
        if (ret.member) {
          this.member = ret.member;
          this.memberQuery.phoneNo = this.query.memberPhone;
          this.memberQuery.type = 0;
          this.memberQuery.memberErr = null;
        } else {
          this.member = null;
          this.memberQuery.memberErr = $.Lang.MEMBER_PHONE_NO_NOT_EXIST;
        }
        this.confirmChoose();
      });
    },

    setDisplayType(val) {
      this.displayType = val;
      $.Util.cookie.set($.Conf.CookieKeys.PRODUCT_SALE_DISPLAY_TYPE, val, 365);
    },

    queryProductCardDiscount() {
      $.Req.service($.SvName.PRODUCT_CARD_DISCOUNT_QUERY, {}, ret => {
        this.productCardDiscountMap = {};
        for (let c of ret.pcdList) {
          let confArr = {};
          let arr = c.cardDiscountConf.split(",");
          for (let a of arr) {
            let items = a.split(":");
            let cardId = parseInt(items[0]);
            let discount = parseFloat(items[1]);
            confArr[cardId] = discount;
          }
          this.productCardDiscountMap[c.productId] = confArr;
        }
      });
    },

    changeMemberCard(mcId) {
      // find cardId
      let cardId = null;
      for (let mc of this.memberQuery.memberCards) {
        if (mcId === mc.mcId) {
          this.selectMc = mc;
          cardId = mc.cardId;
          break;
        }
      }
      for (let c of this.chargeItemList) {
        if (this.productCardDiscountMap[c.chargeItemId] && this.productCardDiscountMap[c.chargeItemId][cardId]) {
          c.unitPrice = $.Util.round(c.oriUnitPrice * this.productCardDiscountMap[c.chargeItemId][cardId] / 10);
          c.cardDiscount = this.productCardDiscountMap[c.chargeItemId][cardId];
        } else {
          c.cardDiscount = null;
          c.unitPrice = c.oriUnitPrice;
        }
      }
      this.calcChargeSum();
    },

    printProductList(id) {
      this.printNo = new Date().getTime();
      this.printTime = $.Util.formatDateTime(new Date());
      let shopName = $.data.tenant.tenantName === $.data.shop.shopName ? $.data.shop.shopName : $.data.tenant.tenantName + "<br>" + $.data.shop.shopName;
      $.Util.printForPos(id, shopName);
    }
  }
});

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { TimeSelect: __WEBPACK_IMPORTED_MODULE_0__components_sys_time_select___default.a },
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.CHARGE_ITEM_CONF.value),
      prdPurchasePricePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.PRD_PURCHASE_PRICE.value),
      viewChargeItemDlg: false,
      chargeItemList: [],
      chargeItem: {
        chargeItemId: null,
        chargeItemName: "",
        arAp: 0,
        unitPrice: null,
        memberPrice: null,
        status: 0,
        stock: 0,
        newCount: 0
      },
      formRule: {},
      chargeItemDlgTitle: "",
      query: {
        chargeItemName: null,
        chargeDates: [],
        status: 0
      },
      productChangeLogDlg: false,
      productChangeLogList: null,
      chargeList: null,
      productChangeLogPage: null,
      productChangeLogCount: null,
      chargePage: null,
      chargeCount: null,
      chargeUnitNumSum: 0,
      dateOptions1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        },
        shortcuts: [{
          text: "今天",
          value() {
            const end = new Date();
            const start = new Date();
            return [start, end];
          }
        }, {
          text: "昨天",
          value() {
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            const end = new Date(start.getTime());
            return [start, end];
          }
        }, {
          text: "最近一周",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        }, {
          text: "最近一个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        }, {
          text: "最近两个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
            return [start, end];
          }
        }, {
          text: "最近三个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }]
      },
      cateList: null,
      cateId: null,
      totalCount: null,
      isSelectAll: false,
      productCkList: new Array(30),
      productCardDiscountDlg: false,
      selectProductId: null,
      allProductList: [],
      valueCardList: null,
      valueCardDiscountConf: {},
      productCardDiscountMap: {},
      isValidProduct: false,
      exportFileUrl: null,
      exportDlg: null,
      productStockLogDlg: null,
      prdStockLogQuery: {
        beginDate: null,
        endDate: null,
        productName: null,
        cateId: null
      },
      altStockSum: null
    };
  },

  created() {
    this.queryProductList();
    this.queryCateList();
  },

  methods: {
    initChargeItem() {
      this.chargeItem = {
        chargeItemId: null,
        chargeItemName: "",
        arAp: 0,
        unitPrice: null,
        memberPrice: null,
        status: 0,
        stock: 0,
        newCount: 0,
        cateId: null,
        remark: null
      };
    },

    queryAllProductList() {
      let args = { isBaseInfo: true, status: 0, isCommodity: true };
      $.Req.service($.SvName.CHARGE_ITEM_QUERY, args, ret => {
        this.allProductList = ret.chargeItemList;
      });
    },

    queryProductList(page = null, isExport = false) {
      let args = {
        isCommodity: true,
        cateId: this.cateId,
        needPaging: true,
        page: page,
        status: this.query.status
      };

      if (isExport) {
        args.isExport = true;
        args.needPaging = false;
        this.exportFileUrl = null;
        this.exportDlg = true;
      } else {
        if (!page) this.totalCount = null;
      }

      if (this.query.chargeItemName) {
        args.chargeItemName = this.query.chargeItemName;
      }
      $.Req.service($.SvName.CHARGE_ITEM_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
          return;
        }
        for (let c of ret.chargeItemList) {
          if (c.stock <= 5) c.stockLevel = 1;else if (c.stock <= 10) c.stockLevel = 2;else if (c.stock <= 20) c.stockLevel = 3;else c.stockLevel = 0;
        }
        this.chargeItemList = ret.chargeItemList;
        if (!page) {
          this.totalCount = ret.count;
        }
        window.scrollTo(0, 0);
      }, true);
    },

    queryProductByName() {
      if (this.query.chargeItemName) {
        this.cateId = null;
      }
      this.queryProductList(null);
    },

    queryProductByCate(cateId) {
      this.cateId = cateId;
      this.query.chargeItemName = null;
      this.queryProductList(null);
    },

    addChargeItem() {
      this.initChargeItem();
      this.chargeItemDlgTitle = "添加商品";
      this.viewChargeItemDlg = true;
    },

    editChargeItem(idx) {
      let _chargeItem = {};
      $.Util.copyAttributes(this.chargeItemList[idx], _chargeItem);
      _chargeItem.newCount = null;
      this.chargeItem = _chargeItem;
      this.chargeItemDlgTitle = "编辑商品";
      this.viewChargeItemDlg = true;
    },

    checkChargeItem() {
      if (!this.chargeItem.chargeItemName) {
        $.Dlg.error("请输入商品名称");
        return false;
      }
      if (!this.chargeItem.unitPrice) {
        $.Dlg.error("请输入单价");
        return false;
      }

      return true;
    },

    onClickSubmitBtn() {
      if (!this.checkChargeItem()) return;

      let actionType = this.chargeItem.chargeItemId ? "U" : "I";
      let args = { actionType: actionType, chargeItem: this.chargeItem };
      $.Req.service($.SvName.CHARGE_ITEM_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.viewChargeItemDlg = false;
        this.queryProductList();
      });
    },

    updateStatus(idx, newStatus) {
      let args = {
        chargeItemId: this.chargeItemList[idx].chargeItemId,
        status: newStatus
      };
      $.Req.service($.SvName.CHARGE_ITEM_STAUS_UPDATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.chargeItemList[idx].status = newStatus;
      });
    },

    delChargeItem(idx) {
      let ci = this.chargeItemList[idx];
      let args = { actionType: "D", deleteId: ci.chargeItemId };
      let msg = "您确定要删除商品【{0}】吗".format(ci.chargeItemName);
      $.Dlg.confirm(msg, yes => {
        $.Req.service($.SvName.CHARGE_ITEM_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.chargeItemList.splice(idx, 1);
        });
      });
    },

    viewProductChangeLog(idx) {
      let _chargeItem = {};
      $.Util.copyAttributes(this.chargeItemList[idx], _chargeItem);
      this.chargeItem = _chargeItem;
      this.productChangeLogDlg = true;
      this.query.chargeDates = [];
      this.queryProductChangeLogList();
      this.queryProductChargeList();
    },

    queryProductChangeLogList(page = null) {
      this.productChangeLogPage = page;
      let args = {
        page: page,
        chargeItemId: this.chargeItem.chargeItemId,
        needSumAltStock: true
      };
      $.Req.service($.SvName.PRODUCT_CHANGE_LOG_QUERY, args, ret => {
        if (page === null) {
          this.productChangeLogCount = ret.count;
          this.altStockSum = ret.stockSum;
        }
        this.productChangeLogList = ret.logList;
      });
    },

    queryProductChargeList(page = null) {
      this.chargePage = page;
      let beginDate = null,
          endDate = null;
      if (this.query.chargeDates) {
        beginDate = this.query.chargeDates[0];
        endDate = this.query.chargeDates[1];
      }
      let args = {
        page: page,
        chargeItemId: this.chargeItem.chargeItemId,
        beginDate: beginDate,
        endDate: endDate,
        needUnitNumSum: true
      };
      $.Req.service($.SvName.CHARGE_QUERY, args, ret => {
        if (page === null) {
          this.chargeUnitNumSum = ret.unitNumSum;
          this.chargeCount = ret.count;
        }
        this.chargeList = ret.chargeList;
      }, true);
    },

    changeChargeDates(val) {
      this.queryProductChargeList();
    },

    queryCateList() {
      let args = { needBase: true };
      $.Req.service($.SvName.PRODUCT_CATE_QUERY, args, ret => {
        this.cateList = ret.productCateList;
      });
    },

    selectProduct(idx) {
      this.$set(this.productCkList, idx, !this.productCkList[idx]);
    },

    selectAll() {
      this.isSelectAll = !this.isSelectAll;
      for (let i = 0, len = this.productCkList.length; i < len; i++) {
        this.$set(this.productCkList, i, this.isSelectAll);
      }
    },

    updateCates(cateId) {
      let checkedPrdIdList = [];
      for (let i = 0, len = this.productCkList.length; i < len && i < this.chargeItemList.length; i++) {
        if (this.productCkList[i]) {
          checkedPrdIdList.push(this.chargeItemList[i].chargeItemId);
        }
      }
      if (checkedPrdIdList.length > 0) {
        let args = { cateId: cateId, chargeItemIdList: checkedPrdIdList };
        $.Req.service($.SvName.CATE_OF_PRODUCTS_UPDATE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.isSelectAll = true;
          this.selectAll();
          this.queryProductList();
        });
      } else {
        $.Dlg.error("请选择需要更新类别的商品。");
      }
    },

    openProductCardDiscountDlg() {
      this.queryAllProductList();
      if (!this.valueCardList) {
        this.queryValueCardList();
        this.queryProductCardDiscount();
      }
      this.productCardDiscountDlg = true;
    },

    queryValueCardList() {
      let args = {
        cardType: 3,
        needBaseInfo: true
      };
      $.Req.service($.SvName.CARD_QUERY, args, ret => {
        this.valueCardList = ret.cardList;

        for (let c of ret.cardList) {
          // init
          this.$set(this.valueCardDiscountConf, c.cardId, null);
        }
      });
    },

    selectProductForCardConf(productId) {
      if (productId === this.selectProductId) return;

      this.valueCardDiscountConf = [];
      this.selectProductId = productId;
      let conf = this.productCardDiscountMap[productId];
      if (conf) {
        let confArr = conf.split(",");
        for (let c of confArr) {
          let items = c.split(":");
          this.valueCardDiscountConf[parseInt(items[0])] = parseFloat(items[1]);
        }
      }
    },

    queryProductCardDiscount() {
      $.Req.service($.SvName.PRODUCT_CARD_DISCOUNT_QUERY, {}, ret => {
        this.productCardDiscountMap = {};
        for (let c of ret.pcdList) {
          this.productCardDiscountMap[c.productId] = c.cardDiscountConf;
        }
      });
    },

    saveProductCardDiscountConf() {
      if (!this.selectProductId) {
        $.Dlg.error("请先在左侧选择一个商品");
        return;
      }

      let confArr = [];
      for (let c of this.valueCardList) {
        let discount = this.valueCardDiscountConf[c.cardId];
        if (discount) {
          confArr.push(c.cardId + ":" + discount);
        }
      }
      let args = {
        productId: this.selectProductId,
        cardDiscountConf: confArr.join(",")
      };
      $.Req.service($.SvName.PRODUCT_CARD_DISCOUNT_SAVE, args, ret => {
        this.$set(this.productCardDiscountMap, args.productId, args.cardDiscountConf);
        $.Msg.success($.Lang.OPT_SUCCESS);
      });
    },

    queryProductByStatus() {
      this.query.status = this.isValidProduct ? 1 : 0;
      this.queryProductList();
    },

    viewProductStockLog() {
      this.queryProductStockLogList();
      this.productStockLogDlg = true;
    },

    queryProductStockLogList(page = null) {
      if (this.prdStockLogQuery.beginDate && !this.prdStockLogQuery.endDate || !this.prdStockLogQuery.beginDate && this.prdStockLogQuery.endDate) {
        $.Dlg.error("请输入有效的日期范围");
        return;
      }

      let args = {
        page: page,
        beginDate: this.prdStockLogQuery.beginDate,
        endDate: this.prdStockLogQuery.endDate,
        productName: this.prdStockLogQuery.productName,
        cateId: this.prdStockLogQuery.cateId,
        onlyStockLog: true
      };
      $.Req.service($.SvName.PRODUCT_CHANGE_LOG_QUERY, args, ret => {
        if (page === null) this.productChangeLogCount = ret.count;
        this.productChangeLogList = ret.logList;
      });
    },

    resetPrdStockLogQuery() {
      this.prdStockLogQuery.beginDate = null;
      this.prdStockLogQuery.endDate = null;
      this.prdStockLogQuery.productName = null;
      this.prdStockLogQuery.cateId = null;
    }
  }
});

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".clist[data-v-3144d0f1]{background:#ddd;padding:4px;margin-bottom:40px}.clist li[data-v-3144d0f1]{display:inline-block;width:273px;padding:0 12px;border:1px solid #ddd;height:100px;margin:5px 5px 0;background-color:#fff}.clist li.on[data-v-3144d0f1]{border-color:orange}.clist li.on .tit[data-v-3144d0f1]{color:orange}.clist li .-hd[data-v-3144d0f1]{height:45px;line-height:45px;border-bottom:1px dashed #e5e5e5;margin-bottom:10px}.clist li .-hd .tit[data-v-3144d0f1]{font-size:16px;font-weight:700;height:45px;max-width:180px;overflow:hidden}.clist li .-hd .price[data-v-3144d0f1]{color:#179b16}.prd-num-sel .l[data-v-3144d0f1]{height:40px;margin-top:2px}.prd-num-sel .l input[type=number][data-v-3144d0f1]{width:60px;height:30px;text-align:center;font-weight:700;font-size:14px;float:left;margin:0 3px}.prd-num-sel .l .opt[data-v-3144d0f1]{background:#eee;display:inline-block;height:30px;line-height:30px;width:30px;float:left;text-align:center;font-size:18px;font-weight:400;cursor:pointer}.prd-num-sel .l .opt[data-v-3144d0f1]:hover{background:#e0e0e0}.prd-num-sel .r[data-v-3144d0f1]{padding-top:3px}.prd-num-sel .price[data-v-3144d0f1]{color:#ff4500}.prd-num-sel2 input[type=number][data-v-3144d0f1]{width:60px;height:30px;text-align:center;font-weight:700;font-size:14px;float:left;margin:0 3px}.prd-num-sel2 .opt[data-v-3144d0f1]{background:#eee;display:inline-block;height:30px;line-height:30px;width:30px;float:left;text-align:center;font-size:18px;font-weight:400;cursor:pointer}.prd-num-sel2 .opt[data-v-3144d0f1]:hover{background:#e0e0e0}.-style- .sum[data-v-3144d0f1]{margin-top:30px;text-align:center;width:100%;position:fixed;left:0;bottom:10px}.-style- .sum button[data-v-3144d0f1]{width:250px;height:35px;margin-left:140px}.commodity-sel[data-v-3144d0f1]{width:100%}.commodity-sel td[data-v-3144d0f1]{font-size:13px;background:#fff}.commodity-sel .price[data-v-3144d0f1]{color:#179b16}.commodity-sel .price b[data-v-3144d0f1]{font-size:15px}.commodity-sel .price2[data-v-3144d0f1]{color:#daa520}.commodity-sel .price2 b[data-v-3144d0f1]{font-size:15px}.commodity-sel .price-sum[data-v-3144d0f1]{color:#333}.commodity-sel .price-sum b[data-v-3144d0f1]{font-size:15px}.commodity-sel .total-amt[data-v-3144d0f1]{color:#ff4500}.commodity-sel .total-amt b[data-v-3144d0f1]{font-size:20px}.price-types[data-v-3144d0f1]{padding:0;margin-bottom:15px}.price-types .input-s[data-v-3144d0f1]{display:inline-block;text-align:center;font-weight:700;font-size:13px;position:relative;top:2px}.price-types .member-name[data-v-3144d0f1]{color:#daa520;font-size:14px;font-weight:400}.commodity-sel-submit[data-v-3144d0f1]{margin-bottom:10px;text-align:center}.commodity-sel-submit .submit[data-v-3144d0f1]{width:150px}.payment-chnl-types[data-v-3144d0f1]{margin-bottom:-3px}.member-card-pay .input[data-v-3144d0f1]{width:180px}.member-card-pay .query-btn[data-v-3144d0f1]{height:32px}.member-card-pay .member-detail[data-v-3144d0f1]{border:1px dashed #ddd;margin-top:15px;background:#fff}.member-card-pay .member-detail table[data-v-3144d0f1],.member-card-pay .member-detail table td[data-v-3144d0f1],.member-card-pay .member-detail table th[data-v-3144d0f1]{border:0}.member-card-pay .member-detail td[data-v-3144d0f1]{padding:10px;line-height:1}.member-card-pay .member-detail .memb-photo[data-v-3144d0f1]{width:130px}.member-card-pay .member-detail .mname[data-v-3144d0f1]{font-size:16px;font-weight:700;margin:15px 0}.member-card-pay .member-detail .cards[data-v-3144d0f1]{vertical-align:top;padding:3px 0}.member-card-pay .member-detail .cards b[data-v-3144d0f1]{font-size:13px}.err-tips[data-v-3144d0f1]{background:#f7f764;color:red;padding:15px 0;text-align:center;margin-top:10px;line-height:0;font-size:13px;font-weight:700}.cate-list[data-v-3144d0f1]{border-bottom:1px dashed #e2e2e2;padding-bottom:15px;margin-bottom:20px}.cate-list li[data-v-3144d0f1]{display:inline-block;border-radius:1px;background:#f2f2f2;margin:3px 6px;cursor:pointer;padding:5px 12px}.cate-list li.on[data-v-3144d0f1],.cate-list li[data-v-3144d0f1]:hover{background:#ddd}.view-icons li[data-v-3144d0f1]{display:inline;padding:0 3px;cursor:pointer;color:#bbb;margin:0 1px}.view-icons li[data-v-3144d0f1]:last-child{margin-right:0}.view-icons li[data-v-3144d0f1]:hover{color:orange}.view-icons li.on[data-v-3144d0f1]{color:#222}.prd-list .prd-name[data-v-3144d0f1]{font-size:14px}.prd-list .on .prd-name[data-v-3144d0f1]{font-weight:700;color:#ff4500}.prd-sale-other[data-v-3144d0f1]{margin-top:15px}.prd-sale-other tr[data-v-3144d0f1]:hover{background:none}.prd-sale-other td[data-v-3144d0f1],.prd-sale-other th[data-v-3144d0f1]{padding:15px}.prd-sale-other td[data-v-3144d0f1]{background:#fff}.print-base[data-v-3144d0f1]{display:none}", ""]);

// exports


/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-cl- .opt[data-v-4b296a3b]{margin-bottom:15px;height:30px;line-height:30px}.-cl- .query[data-v-4b296a3b]{display:inline-block}.-cl- .query li.item[data-v-4b296a3b]{display:inline-block;margin-left:15px}.-cl- .query .course[data-v-4b296a3b]{display:inline-block;width:150px}.-cl- .query label[data-v-4b296a3b]{color:#bbb;padding-right:5px;position:relative;top:2px}.-cl- .query .uid[data-v-4b296a3b]{width:90px}.-cl- .query .date[data-v-4b296a3b]{display:inline-block;width:110px}.-cl- .query .charge-item[data-v-4b296a3b]{width:120px}.-cl- .query button[data-v-4b296a3b]{height:24px;line-height:24px;width:70px}.-cl- .card-bill-link i[data-v-4b296a3b]{position:relative;top:2px}.-cl- .sys-remark[data-v-4b296a3b]{font-style:italic;color:#888}.myform input[type=number][data-v-4b296a3b]{font-weight:700}.myform .amount[data-v-4b296a3b]{font-size:20px;padding-right:4px;color:#d82400}.input-date[data-v-4b296a3b]{display:inline-block;width:150px}.input-time[data-v-4b296a3b]{display:inline-block;width:100px}.daterange[data-v-4b296a3b]{display:inline-block;width:200px}.query-submit[data-v-4b296a3b]{text-align:left;padding:15px 0 0;line-height:0;border-top:1px dotted #ddd;margin:10px 0 0}.query-submit .primary-btn[data-v-4b296a3b]{width:200px;margin-left:5px}.query-submit button[data-v-4b296a3b]{margin-right:5px}.mytbl td[data-v-4b296a3b]{word-break:break-all}", ""]);

// exports


/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-ci- .opt[data-v-4b8f875c]{margin-bottom:15px;height:30px;line-height:30px}.stock[data-v-4b8f875c]{display:block;font-size:14px}.stock-0[data-v-4b8f875c]{color:#444}.stock-1[data-v-4b8f875c]{color:red}.stock-2[data-v-4b8f875c]{color:#e40}.stock-3[data-v-4b8f875c]{color:orange}.g-dlg[data-v-4b8f875c]{margin-top:20px}.daterange[data-v-4b8f875c]{width:200px}.none-tips[data-v-4b8f875c]{text-align:center;color:#bbb;padding:15px 0 12px;border:1px solid #eee;border-top:0;font-style:italic}.cate-list li[data-v-4b8f875c]{display:inline-block;border-radius:1px;background:#f2f2f2;margin:3px 6px;cursor:pointer;padding:5px 12px}.cate-list li[data-v-4b8f875c]:hover{background:#ddd}.cate-list li.on[data-v-4b8f875c]{background:#d5d5d5}.vcard-conf[data-v-4b8f875c]{width:100%}.vcard-conf .mytbl[data-v-4b8f875c]{max-height:450px;overflow-y:auto}.vcard-conf .mytbl input[data-v-4b8f875c]{width:80px;height:22px}.vcard-conf .mytbl .on[data-v-4b8f875c]{background:#f2f7c9;font-weight:700}.vcard-conf-submit[data-v-4b8f875c]{padding-top:20px;border-top:1px solid #ddd;margin-top:20px;margin-bottom:-20px}.vcard-conf-submit button[data-v-4b8f875c]{width:90px}.vcard-conf-tips[data-v-4b8f875c]{color:#777}.vcard-conf-tips i[data-v-4b8f875c]{color:orange}", ""]);

// exports


/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".note[data-v-4cc166db]{line-height:50px;font-size:14px;background:#fafade}.note a i[data-v-4cc166db]{padding:0 5px}", ""]);

// exports


/***/ }),

/***/ 1768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".page-tips[data-v-c6137ac6]{color:orange;padding-bottom:10px}.borderspt[data-v-c6137ac6]{border-top:2px solid #ddd}.diff[data-v-c6137ac6]{color:#ff4500}.subtit[data-v-c6137ac6]{font-size:13px;position:relative;top:2px;padding-left:5px}.subtit .spt[data-v-c6137ac6]{padding:0 15px;color:#ccc}.subtit a[data-v-c6137ac6]{font-size:13px;display:inline-block}.subtit a.on[data-v-c6137ac6]{color:#555;font-weight:700}.sys-remark[data-v-c6137ac6]{font-style:italic;color:#888}", ""]);

// exports


/***/ }),

/***/ 1925:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1624);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("45d74448", content, true, {});

/***/ }),

/***/ 1957:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1656);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("9554b408", content, true, {});

/***/ }),

/***/ 1979:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1678);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("0462384c", content, true, {});

/***/ }),

/***/ 1981:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1680);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("151589d4", content, true, {});

/***/ }),

/***/ 1985:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1684);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2695757c", content, true, {});

/***/ }),

/***/ 2069:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1768);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("252d8a34", content, true, {});

/***/ }),

/***/ 2108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1807);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2e6f3b39", content, true, {});

/***/ }),

/***/ 2337:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "product-sale"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -style-"
  }, [(_vm.chargeItemList && _vm.chargeItemList.length) ? _c('section', [(_vm.cateList && _vm.cateList.length) ? _c('div', {
    staticClass: "cate-list"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_vm._m(0), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "middle"
    }
  }, [_c('ul', [_c('li', {
    class: {
      on: _vm.cateId === null
    },
    on: {
      "click": function($event) {
        return _vm.queryProductByCate(null)
      }
    }
  }, [_vm._v("所有")]), _vm._v(" "), _c('li', {
    class: {
      on: _vm.cateId === 0
    },
    on: {
      "click": function($event) {
        return _vm.queryProductByCate(0)
      }
    }
  }, [_vm._v("未分类")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _vm._l((_vm.cateList), function(c) {
    return _c('li', {
      class: {
        on: c.cateId === _vm.cateId
      },
      on: {
        "click": function($event) {
          return _vm.queryProductByCate(c.cateId)
        }
      }
    }, [_vm._v(_vm._s(c.cateName))])
  })], 2)])])])]) : _vm._e(), _vm._v(" "), _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('i-input', {
    staticStyle: {
      "width": "265px"
    },
    attrs: {
      "type": "text",
      "placeholder": "根据商品名称模糊查询（按回车查询）",
      "icon": "ios-search"
    },
    on: {
      "on-enter": _vm.queryProductByName,
      "on-click": _vm.queryProductByName
    },
    model: {
      value: (_vm.fuzzyProductName),
      callback: function($$v) {
        _vm.fuzzyProductName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "fuzzyProductName"
    }
  }), _vm._v("\n             \n            "), _c('i-button', {
    on: {
      "click": _vm.queryAllChargeItem
    }
  }, [_vm._v("清除商品名查询")])], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('ul', {
    staticClass: "view-icons"
  }, [_c('li', {
    class: {
      on: _vm.displayType === 1
    },
    on: {
      "click": function($event) {
        return _vm.setDisplayType(1)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-apps",
      "size": "18"
    }
  })], 1), _vm._v(" "), _c('li', {
    class: {
      on: _vm.displayType === 2
    },
    on: {
      "click": function($event) {
        return _vm.setDisplayType(2)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-list"
  })])])])])])]) : _vm._e(), _vm._v(" "), (_vm.chargeItemList && _vm.chargeItemList.length && _vm.displayType === 1) ? _c('div', {
    staticClass: "clist"
  }, [_c('ul', _vm._l((_vm.chargeItemList), function(c, idx) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm.g.Util.isEmpty(_vm.cateId) || (_vm.cateId === c.cateId) || (!_vm.cateId && !c.cateId)) && (!_vm.query.chargeItemName || (c.chargeItemName && c.chargeItemName.indexOf(_vm.query.chargeItemName) >= 0))),
        expression: "(g.Util.isEmpty(cateId) || (cateId === c.cateId) || (!cateId && !c.cateId)) && (!query.chargeItemName || (c.chargeItemName && c.chargeItemName.indexOf(query.chargeItemName) >= 0))"
      }],
      key: c.chargeItemId,
      class: {
        'on': _vm.chooseItems[idx] > 0
      }
    }, [_c('div', {
      staticClass: "-hd"
    }, [_c('div', {
      staticClass: "l tit"
    }, [_vm._v(_vm._s(c.chargeItemName))]), _vm._v(" "), _c('div', {
      staticClass: "r gray"
    }, [_vm._v("单价 "), _c('span', {
      staticClass: "price"
    }, [_vm._v("￥"), _c('span', {
      staticClass: "bigger"
    }, [_vm._v(_vm._s(c.unitPrice))])])])]), _vm._v(" "), _c('div', {
      staticClass: "prd-num-sel"
    }, [_c('div', {
      staticClass: "l num"
    }, [_c('span', {
      staticClass: "opt",
      on: {
        "click": function($event) {
          return _vm.altUnitNum(idx, -1)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('input-num', {
      attrs: {
        "placeholder": "数量"
      },
      model: {
        value: (_vm.chooseItems[idx]),
        callback: function($$v) {
          _vm.$set(_vm.chooseItems, idx, _vm._n($$v))
        },
        expression: "chooseItems[idx]"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "opt",
      on: {
        "click": function($event) {
          return _vm.altUnitNum(idx, 1)
        }
      }
    }, [_vm._v("+")])], 1), _vm._v(" "), (_vm.chooseItems[idx] > 0) ? _c('div', {
      staticClass: "r"
    }, [_vm._v("合计 "), _c('span', {
      staticClass: "price"
    }, [_vm._v("￥"), _c('b', {
      staticClass: "bigger"
    }, [_vm._v(_vm._s(c.unitPrice * _vm.chooseItems[idx]))])])]) : _vm._e()])])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.chargeItemList && _vm.chargeItemList.length && _vm.displayType === 2) ? _c('section', [_c('div', {
    staticClass: "mytbl prd-list"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.chargeItemList), function(c, idx) {
    return _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.g.Util.isEmpty(_vm.cateId) || (_vm.cateId === c.cateId) || (!_vm.cateId && !c.cateId)),
        expression: "g.Util.isEmpty(cateId) || (cateId === c.cateId) || (!cateId && !c.cateId)"
      }],
      key: c.chargeItemId,
      class: {
        'on': _vm.chooseItems[idx] > 0
      }
    }, [_c('td', {
      staticClass: "prd-name"
    }, [_vm._v(_vm._s(c.chargeItemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.color))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.spec))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.stock))]), _vm._v(" "), _c('td', [_vm._v("￥"), _c('span', {
      staticClass: "big"
    }, [_vm._v(_vm._s(c.unitPrice))])]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "prd-num-sel2"
    }, [_c('span', {
      staticClass: "opt",
      on: {
        "click": function($event) {
          return _vm.altUnitNum(idx, -1)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('input-num', {
      attrs: {
        "placeholder": "数量"
      },
      model: {
        value: (_vm.chooseItems[idx]),
        callback: function($$v) {
          _vm.$set(_vm.chooseItems, idx, _vm._n($$v))
        },
        expression: "chooseItems[idx]"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "opt",
      on: {
        "click": function($event) {
          return _vm.altUnitNum(idx, 1)
        }
      }
    }, [_vm._v("+")])], 1)]), _vm._v(" "), _c('td', [(_vm.chooseItems[idx]) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("￥"), _c('b', {
      staticClass: "bigger"
    }, [_vm._v(_vm._s(c.unitPrice * _vm.chooseItems[idx]))])]) : _vm._e()])])
  })], 2)])]) : _vm._e(), _vm._v(" "), (_vm.chargeItemList && _vm.chargeItemList.length) ? _c('div', {
    staticClass: "sum"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confirmChoose
    }
  }, [_vm._v("选好了，去结算")])], 1) : _c('div', {
    staticClass: "center",
    staticStyle: {
      "margin": "20px"
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("暂无商品")])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "商品售卖结算",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.sumDlgView),
      callback: function($$v) {
        _vm.sumDlgView = $$v
      },
      expression: "sumDlgView"
    }
  }, [(_vm.sumDlgView) ? _c('section', {
    staticClass: "price-types"
  }, [_c('i-select', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "placeholder": "请选择优惠方式"
    },
    model: {
      value: (_vm.priceType),
      callback: function($$v) {
        _vm.priceType = $$v
      },
      expression: "priceType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("使用会员价")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("使用员工价")])], 1), _vm._v("  \n      "), (_vm.priceType === 1) ? _c('span', [_c('i-input', {
    staticStyle: {
      "width": "160px"
    },
    attrs: {
      "type": "text",
      "placeholder": "会员手机号（按回车查询）"
    },
    on: {
      "on-blur": _vm.queryMember,
      "on-enter": _vm.queryMember
    },
    model: {
      value: (_vm.query.memberPhone),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberPhone", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.memberPhone"
    }
  }), _vm._v(" "), (_vm.member) ? _c('span', {
    staticClass: "member-name l10"
  }, [_vm._v(_vm._s(_vm.member.name))]) : (_vm.query.memberPhone && _vm.memberQuery.memberErr) ? _c('span', {
    staticClass: "orangered l10"
  }, [_vm._v(_vm._s(_vm.memberQuery.memberErr) + "，无法使用会员价")]) : _c('span', {
    staticClass: "orange l10"
  }, [_vm._v("未输入会员手机号，将无法使用会员价")])], 1) : _vm._e(), _vm._v(" "), (_vm.priceType === 2) ? _c('span', [_c('input-num', {
    staticClass: "input-s",
    staticStyle: {
      "width": "60px"
    },
    model: {
      value: (_vm.staffPriceDiscount),
      callback: function($$v) {
        _vm.staffPriceDiscount = $$v
      },
      expression: "staffPriceDiscount"
    }
  }), _vm._v("   折\n      ")], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.sumDlgView) ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "product_sale_print"
    }
  }, [_c('div', {
    staticClass: "print-base",
    staticStyle: {
      "line-height": "1.8",
      "border-bottom": "1px solid #999",
      "padding": "10px 0",
      "margin-bottom": "10px"
    }
  }, [_c('div', [_vm._v("打印单号：" + _vm._s(_vm.printNo))]), _vm._v(" "), _c('div', [_vm._v("打印时间：" + _vm._s(_vm.printTime))]), _vm._v(" "), (_vm.priceType === 2 && _vm.staffPriceDiscount) ? _c('div', [_vm._v("商品折扣：" + _vm._s(_vm.staffPriceDiscount) + " 折")]) : _vm._e(), _vm._v(" "), (_vm.memberQuery.member) ? [(_vm.memberQuery.member.name) ? _c('div', [_vm._v("会员姓名：" + _vm._s(_vm.memberQuery.member.name))]) : _vm._e(), _vm._v(" "), (_vm.selectMc) ? _c('div', [_vm._v("消费会员卡：" + _vm._s(_vm.selectMc.cardName))]) : _vm._e(), _vm._v(" "), (_vm.selectMc) ? _c('div', [_vm._v("会员卡剩余：￥" + _vm._s(_vm.selectMc.currentAmount - _vm.choosedSumAmount))]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.paymentRemark) ? _c('div', [_vm._v("备注：" + _vm._s(_vm.paymentRemark))]) : _vm._e()], 2), _vm._v(" "), _c('table', {
    staticClass: "commodity-sel"
  }, [_c('tr', {
    staticClass: "htbl"
  }, [_c('th', [_vm._v("商品")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("单价")]), _vm._v(" "), (_vm.priceType === 1) ? _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员价")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("合计")])]), _vm._v(" "), _vm._l((_vm.chooseItems), function(num, i) {
    return (num > 0) ? _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(_vm.chargeItemList[i].chargeItemName) + "\n            "), (_vm.chargeItemList[i].color || _vm.chargeItemList[i].spec) ? _c('span', {
      staticClass: "small orange hidden"
    }, [_vm._v("\n              （\n              "), (_vm.chargeItemList[i].color) ? [_vm._v(_vm._s(_vm.chargeItemList[i].color))] : _vm._e(), _vm._v(" "), (_vm.chargeItemList[i].color && _vm.chargeItemList[i].spec) ? _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]) : _vm._e(), _vm._v(" "), (_vm.chargeItemList[i].spec) ? [_vm._v(_vm._s(_vm.chargeItemList[i].spec))] : _vm._e(), _vm._v("\n              ）\n            ")], 2) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "price"
    }, [_vm._v("￥"), _c('b', [(_vm.priceType !== 2 || !_vm.staffPriceDiscount) ? [_vm._v(_vm._s(_vm.chargeItemList[i].unitPrice))] : [_vm._v(_vm._s(_vm.g.Util.round(_vm.chargeItemList[i].unitPrice * _vm.staffPriceDiscount / 10)))], _vm._v(" "), (_vm.chargeItemList[i].cardDiscount) ? _c('div', {
      staticClass: "default-font orange p5"
    }, [_vm._v("[储值卡 " + _vm._s(_vm.chargeItemList[i].cardDiscount) + " 折]")]) : _vm._e()], 2)]), _vm._v(" "), (_vm.priceType === 1) ? _c('td', {
      staticClass: "price2"
    }, [(_vm.chargeItemList[i].memberPrice) ? _c('span', [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.chargeItemList[i].memberPrice))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(num))]), _vm._v(" "), _c('td', {
      staticClass: "price-sum"
    }, [(_vm.priceType === 1 && _vm.member && _vm.chargeItemList[i].memberPrice) ? [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.chargeItemList[i].memberPrice * num))])] : [_vm._v("￥"), _c('b', [(_vm.priceType !== 2 || !_vm.staffPriceDiscount) ? [_vm._v(_vm._s(_vm.chargeItemList[i].unitPrice * num))] : [_vm._v(_vm._s(_vm.g.Util.round(num * _vm.chargeItemList[i].unitPrice * _vm.staffPriceDiscount / 10)))]], 2)]], 2)]) : _vm._e()
  }), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": _vm.priceType === 1 ? 3 : 2,
      "align": "center"
    }
  }, [_vm._v("合计")]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.choosedSumCount))])]), _vm._v(" "), _c('td', {
    staticClass: "total-amt"
  }, [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.choosedSumAmount))])])])], 2)]) : _vm._e(), _vm._v(" "), (_vm.sumDlgView) ? _c('div', {
    staticClass: "mytbl prd-sale-other"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("支付方式 "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("*")])]), _vm._v(" "), _c('td', [_c('radio-group', {
    staticClass: "payment-chnl-types",
    model: {
      value: (_vm.paymentChannel),
      callback: function($$v) {
        _vm.paymentChannel = $$v
      },
      expression: "paymentChannel"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("储值卡")]), _vm._v(" "), _vm._l((_vm.g.data.shop.paymentChannel), function(name, key) {
    return [(+key !== 10) ? _c('radio', {
      key: key,
      attrs: {
        "label": key
      }
    }, [_vm._v(_vm._s(name))]) : _vm._e()]
  }), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 99
    }
  }, [_vm._v("赠送（不计费）")])], 2)], 1)]), _vm._v(" "), (_vm.paymentChannel === 0) ? _c('tr', {
    staticClass: "member-card-pay"
  }, [_c('th', [_vm._v("消费会员")]), _vm._v(" "), _c('td', [(!_vm.member) ? _c('radio-group', {
    model: {
      value: (_vm.memberQuery.type),
      callback: function($$v) {
        _vm.$set(_vm.memberQuery, "type", $$v)
      },
      expression: "memberQuery.type"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("会员卡号")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("会员手机号")])], 1) : _vm._e(), _vm._v(" "), (_vm.memberQuery.type === 0 || _vm.member) ? [_c('i-input', {
    staticClass: "input",
    attrs: {
      "placeholder": "请输入会员手机号",
      "disabled": _vm.member !== null
    },
    on: {
      "on-enter": function($event) {
        return _vm.queryMemberValueCard()
      }
    },
    model: {
      value: (_vm.memberQuery.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.memberQuery, "phoneNo", _vm._n($$v))
      },
      expression: "memberQuery.phoneNo"
    }
  }), _vm._v(" "), _c('i-button', {
    staticClass: "query-btn",
    on: {
      "click": _vm.queryMemberValueCard
    }
  }, [_vm._v("查询")])] : _vm._e(), _vm._v(" "), (_vm.memberQuery.type === 1 && !_vm.member) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.memberQuery.cardNo),
      expression: "memberQuery.cardNo",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "placeholder": "请刷会员卡"
    },
    domProps: {
      "value": (_vm.memberQuery.cardNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.queryMemberValueCard.apply(null, arguments)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.memberQuery, "cardNo", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.memberQuery.none) ? _c('div', {
    staticClass: "err-tips"
  }, [(_vm.memberQuery.passwd) ? [_vm._v("手机号与密码不匹配")] : [_vm._v("未查询到会员")]], 2) : _vm._e(), _vm._v(" "), (_vm.memberQuery.member) ? _c('div', {
    staticClass: "member-detail"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "memb-photo"
  }, [_c('img', {
    attrs: {
      "height": "100",
      "src": _vm.g.Util.getImgUrl(_vm.memberQuery.member.avatarPathname, 200, 200, 'ffffff')
    }
  })]), _vm._v(" "), _c('td', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "mname"
  }, [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.memberQuery.member.name))])]), _vm._v(" "), _c('radio-group', {
    attrs: {
      "vertical": ""
    },
    on: {
      "on-change": _vm.changeMemberCard
    },
    model: {
      value: (_vm.memberQuery.mcId),
      callback: function($$v) {
        _vm.$set(_vm.memberQuery, "mcId", $$v)
      },
      expression: "memberQuery.mcId"
    }
  }, _vm._l((_vm.memberQuery.memberCards), function(mc) {
    return _c('radio', {
      key: mc.mcId,
      attrs: {
        "disabled": mc.status !== 0,
        "label": mc.mcId
      }
    }, [_vm._v("\n                        " + _vm._s(mc.cardName) + "： 剩余 "), _c('b', [_vm._v(_vm._s(mc.currentAmount))]), _vm._v(" 元\n                        "), (mc.status > 0) ? _c('span', {
      staticClass: "l5 red"
    }, [_vm._v("[已" + _vm._s(_vm.g.Dict.MemberCardStatus[mc.status]) + "]")]) : _vm._e()])
  }), 1), _vm._v(" "), (!_vm.memberQuery.memberCards || _vm.memberQuery.memberCards.length === 0) ? _c('div', {
    staticClass: "center big red"
  }, [_vm._v("\n                      该会员无储值卡\n                    ")]) : _vm._e()], 1)])])]) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("商品销售")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.salesId),
      callback: function($$v) {
        _vm.salesId = $$v
      },
      expression: "salesId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.salesList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（选填）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("售卖备注")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "请输入商品售卖备注（选填）"
    },
    model: {
      value: (_vm.paymentRemark),
      callback: function($$v) {
        _vm.paymentRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "paymentRemark"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "commodity-sel-submit",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [(_vm.choosedSumCount > 0) ? _c('i-button', {
    staticClass: "submit",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.printProductList('product_sale_print')
      }
    }
  }, [_vm._v("打印小票")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.sumDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    attrs: {
      "width": "80",
      "align": "left",
      "valign": "middle"
    }
  }, [_c('b', {
    staticClass: "big"
  }, [_vm._v("商品类别：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("颜色")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("规格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("库存")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("选择数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "130"
    }
  }, [_vm._v("合计")])])
}]}

/***/ }),

/***/ 2369:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "charge-item"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -ci-"
  }, [_c('section', [(_vm.chargeItemEditable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.addChargeItem
    }
  }, [_vm._v("添加资费项")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.chargeItemList), function(c, idx) {
    return _c('tr', [_c('td', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.chargeItemName))]), _vm._v(" "), _c('td', [_c('span', {
      class: 'charge_type_' + c.arAp
    }, [_vm._v(_vm._s(_vm.g.Dict.ArApName[c.arAp]))])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(c.unitPrice))]), _vm._v(" "), _c('td', [(c.status === 0) ? _c('span', [_vm._v("正常")]) : (c.status === 1) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("停用")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.remark))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [(_vm.chargeItemEditable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editChargeItem(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), (c.status === 0) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateStatus(idx, 1)
        }
      }
    }, [_vm._v("停用")])]) : _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateStatus(idx, 0)
        }
      }
    }, [_vm._v("恢复")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delChargeItem(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "tbl-footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_vm._v("共 " + _vm._s(_vm.chargeItemList.length) + " 条记录")])])])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.chargeItemDlgTitle,
      "width": "600",
      "mask-closable": false
    },
    model: {
      value: (_vm.viewChargeItemDlg),
      callback: function($$v) {
        _vm.viewChargeItemDlg = $$v
      },
      expression: "viewChargeItemDlg"
    }
  }, [_c('i-form', {
    ref: "chargeItem",
    staticClass: "myform",
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "model": _vm.chargeItem,
      "rules": _vm.formRule,
      "label-width": 90
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "chargeItemName",
      "label": "资费项名称",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.chargeItem.chargeItemName),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "chargeItemName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.chargeItemName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "arAp",
      "label": "类型",
      "required": ""
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.chargeItem.arAp),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "arAp", $$v)
      },
      expression: "chargeItem.arAp"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("应收款")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("应付款")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitPrice",
      "label": "单价",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "unitPrice", $$v)
      },
      expression: "chargeItem.unitPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.chargeItem.remark),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dlg-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "90px",
      "text-align": "left"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.onClickSubmitBtn()
      }
    }
  }, [_vm._v("提交")])], 1)])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("资费项名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("更新时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "155"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("您需要知道的")])]), _vm._v(" "), _c('div', {
    staticClass: "bd"
  }, [_c('ol', [_c('li', [_vm._v("资费项，是指记账的资费项目，只能由指定权限的人设置；")]), _vm._v(" "), _c('li', [_vm._v("只需要设置手动记账的资费项目，"), _c('span', {
    staticClass: "red"
  }, [_vm._v("如果是商品项，请在【商品库存】页面添加")]), _vm._v("；")]), _vm._v(" "), _c('li', [_vm._v("会员卡产生的资费，系统会自动产生；因此，无需设置会员卡相关的资费项。")])])])])
}]}

/***/ }),

/***/ 2391:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "charge-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -cl-"
  }, [(_vm.editable) ? _c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [(_vm.staffList && _vm.staffList.length) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "95px"
    },
    attrs: {
      "placeholder": "选择记账人"
    },
    model: {
      value: (_vm.query.createUid),
      callback: function($$v) {
        _vm.$set(_vm.query, "createUid", _vm._n($$v))
      },
      expression: "query.createUid"
    }
  }, [(_vm.editable) ? _c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.uid,
      attrs: {
        "value": s.uid
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2)], 1) : _vm._e(), _vm._v(" "), (_vm.chargeItemList && _vm.chargeItemList.length) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "placeholder": "选择资费项",
      "filterable": ""
    },
    model: {
      value: (_vm.query.chargeItemId),
      callback: function($$v) {
        _vm.$set(_vm.query, "chargeItemId", _vm._n($$v))
      },
      expression: "query.chargeItemId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v("\\\n\t\t\t\t\t\t"), _c('OptionGroup', {
    attrs: {
      "label": "系统默认费用"
    }
  }, _vm._l(([3, 4, 5, 7, 8, 9, 10, 11]), function(i) {
    return _c('i-option', {
      key: '_' + i,
      attrs: {
        "value": -i
      }
    }, [_c('i', [_vm._v("[" + _vm._s(_vm.g.Dict.ChargeFroms[i]) + "]")])])
  }), 1), _vm._v(" "), _c('OptionGroup', {
    attrs: {
      "label": "自定义费用"
    }
  }, _vm._l((_vm.chargeItemList), function(c) {
    return _c('i-option', {
      key: c.chargeItemId,
      attrs: {
        "value": c.chargeItemId
      }
    }, [_vm._v(_vm._s(c.chargeItemName))])
  }), 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "支付方式"
    },
    model: {
      value: (_vm.query.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.query, "paymentChannel", _vm._n($$v))
      },
      expression: "query.paymentChannel"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _vm._l((_vm.g.data.shop.paymentChannel), function(name, id) {
    return _c('i-option', {
      key: id,
      attrs: {
        "value": parseInt(id)
      }
    }, [_vm._v(_vm._s(name))])
  }), _vm._v(" "), _c('i-option', {
    key: 0,
    attrs: {
      "value": 0
    }
  }, [_vm._v("储值卡")]), _vm._v(" "), _c('i-option', {
    key: 99,
    attrs: {
      "value": 99
    }
  }, [_vm._v("赠送")])], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "options": _vm.dateOptions1,
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end",
      "placeholder": "选择交易日期"
    },
    model: {
      value: (_vm.query.dates),
      callback: function($$v) {
        _vm.$set(_vm.query, "dates", $$v)
      },
      expression: "query.dates"
    }
  })], 1), _vm._v(" "), (_vm.query.onlyProductCharge) ? _c('li', {
    staticClass: "item"
  }, [(_vm.query.onlyProductCharge) ? _c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "选择商品类别"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryChargeList(null)
      }
    },
    model: {
      value: (_vm.query.productCateId),
      callback: function($$v) {
        _vm.$set(_vm.query, "productCateId", $$v)
      },
      expression: "query.productCateId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限商品类别")])]), _vm._v(" "), _vm._l((_vm.productCateList), function(c) {
    return _c('i-option', {
      key: c.cateId,
      attrs: {
        "value": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  })], 2) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.query.onlyProductCharge) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "选择销售"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryChargeList(null)
      }
    },
    model: {
      value: (_vm.query.salesId),
      callback: function($$v) {
        _vm.$set(_vm.query, "salesId", _vm._n($$v))
      },
      expression: "query.salesId"
    }
  }, [(_vm.editable) ? _c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限销售")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2)], 1) : _vm._e(), _c('li', {
    staticClass: "item"
  }, [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryChargeList(null)
      }
    },
    model: {
      value: (_vm.query.onlyProductCharge),
      callback: function($$v) {
        _vm.$set(_vm.query, "onlyProductCharge", $$v)
      },
      expression: "query.onlyProductCharge"
    }
  }, [_vm._v("只看商品账单")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "query-submit"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        return _vm.queryChargeList()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)]) : _vm._e(), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.addCharge
    }
  }, [_vm._v("记账")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportCharges
    }
  }, [_vm._v("导出账单")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.statChargeByProductCate
    }
  }, [_vm._v("商品类别账单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.totalCount && _vm.totalCount > 0) ? [_vm._v("\n\t\t\t\t\t\t合计：\n\t\t\t\t\t\t"), (_vm.arAmountSum) ? _c('span', {
    staticClass: "l10",
    staticStyle: {
      "color": "#1AAD19"
    }
  }, [_vm._v("收款 ￥"), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.arAmountSum))])]) : _vm._e(), _vm._v(" "), (_vm.apAmountSum) ? _c('span', {
    staticClass: "l15 darkred"
  }, [_vm._v("支出 ￥"), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.apAmountSum))])]) : _vm._e(), _vm._v(" "), (_vm.productProfit) ? _c('span', {
    staticClass: "l15 green"
  }, [_vm._v("利润 ￥"), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.productProfit))])]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    attrs: {
      "id": "chargeListTbl"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("资费项")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("单价")]), _vm._v(" "), (_vm.g.data.user.isShopOwner && _vm.query.onlyProductCharge) ? _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("进货价")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("交易时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("记账人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("记账时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("消费会员")]), _vm._v(" "), (_vm.query.onlyProductCharge) ? _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("销售")]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), (_vm.editable) ? _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.chargeList), function(c, idx) {
    return _c('tr', [_c('td', [(c.chargeItemName) ? [_vm._v(_vm._s(c.chargeItemName))] : _c('i', [_vm._v(_vm._s(_vm.g.Dict.ChargeFroms[c.chargeFrom]))])], 2), _vm._v(" "), _c('td', [_c('span', {
      class: 'charge_type_' + c.arAp
    }, [_vm._v(_vm._s(_vm.g.Dict.ArApName[c.arAp]))])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(c.unitPrice))]), _vm._v(" "), (_vm.g.data.user.isShopOwner && _vm.query.onlyProductCharge) ? _c('td', [(c.purchasePrice) ? [_vm._v("￥" + _vm._s(c.purchasePrice))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.unitNum))]), _vm._v(" "), _c('td', [_vm._v("￥"), (c.arAp === 0) ? [_vm._v(_vm._s(c.arAmount))] : [_vm._v(_vm._s(c.apAmount))]], 2), _vm._v(" "), _c('td', [(c.paymentChannel === 0) ? [_vm._v("储值卡")] : (c.paymentChannel === 99) ? [_vm._v("赠送")] : (c.paymentChannel) ? [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[c.paymentChannel]))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.transTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.memberName))]), _vm._v(" "), (_vm.query.onlyProductCharge) ? _c('td', [_vm._v(_vm._s(c.salesName))]) : _vm._e(), _vm._v(" "), _c('td', [(c.remark) ? [_c('pre', [_vm._v(_vm._s(c.remark))])] : _vm._e()], 2), _vm._v(" "), (_vm.editable) ? _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      attrs: {
        "title": "编辑"
      },
      on: {
        "click": function($event) {
          return _vm.editCharge(c)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-edit"
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.openDelChargeDlg(c.chargeId)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete"
    })])])])]) : _vm._e()])
  })], 2), _vm._v(" "), (_vm.totalCount && _vm.totalCount >= 1) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "current": _vm.query.page ? _vm.query.page : 1,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  })], 1) : _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "chargeElemForPrint"
    }
  }, [_c('table', [(_vm.selectCharge.memberName) ? _c('tr', [_c('th', [_vm._v("消费会员")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.memberName))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("资费名称")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.chargeItemName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("单价")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.unitPrice) + " 元")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("数量")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.unitNum))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("金额")]), _vm._v(" "), _c('td', [(_vm.selectCharge.arAp === 0) ? [_vm._v(_vm._s(_vm.selectCharge.arAmount))] : [_vm._v(_vm._s(_vm.selectCharge.apAmount))], _vm._v(" 元\n\t\t\t\t\t\t")], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("支付方式")]), _vm._v(" "), _c('td', [(_vm.selectCharge.paymentChannel === 0) ? [_vm._v("储值卡")] : (_vm.selectCharge.paymentChannel === 99) ? [_vm._v("赠送")] : (_vm.selectCharge.paymentChannel) ? [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[_vm.selectCharge.paymentChannel]))] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("交易时间")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.transTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("记账员工")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.createUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("记账时间")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.createTime))])]), _vm._v(" "), (_vm.selectCharge.remark) ? _c('tr', [_c('th', [_vm._v("备注")]), _c('td', [_vm._v(_vm._s(_vm.selectCharge.remark))])]) : _vm._e()])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "添加资费",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.viewChargeDlg),
      callback: function($$v) {
        _vm.viewChargeDlg = $$v
      },
      expression: "viewChargeDlg"
    }
  }, [(_vm.viewChargeDlg) ? _c('i-form', {
    ref: "charge",
    staticClass: "myform",
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "model": _vm.charge,
      "rules": _vm.formRule,
      "label-width": 90
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "chargeItemId",
      "label": "资费项",
      "required": ""
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.selectChargeItem
    },
    model: {
      value: (_vm.charge.chargeItemId),
      callback: function($$v) {
        _vm.$set(_vm.charge, "chargeItemId", _vm._n($$v))
      },
      expression: "charge.chargeItemId"
    }
  }, _vm._l((_vm.chargeItemList), function(c) {
    return (!c.stock) ? _c('i-option', {
      key: c.chargeItemId,
      attrs: {
        "value": c.chargeItemId
      }
    }, [_vm._v(_vm._s(c.chargeItemName))]) : _vm._e()
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "arAp",
      "label": "类型"
    }
  }, [(_vm.charge.arAp === 0) ? _c('span', {
    staticClass: "charge_type_0 big"
  }, [_c('b', [_vm._v("应收款")])]) : _vm._e(), _vm._v(" "), (_vm.charge.arAp === 1) ? _c('span', {
    staticClass: "charge_type_1 big"
  }, [_c('b', [_vm._v("应付款")])]) : _vm._e()]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitPrice",
      "label": "单价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "disabled": true,
      "title": ""
    },
    model: {
      value: (_vm.charge.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.charge, "unitPrice", $$v)
      },
      expression: "charge.unitPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitNum",
      "label": "数量",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    on: {
      "blur": _vm.calcAmount
    },
    model: {
      value: (_vm.charge.unitNum),
      callback: function($$v) {
        _vm.$set(_vm.charge, "unitNum", $$v)
      },
      expression: "charge.unitNum"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitNum",
      "label": "金额",
      "required": ""
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.charge.amount),
      expression: "charge.amount"
    }]
  }, [_c('b', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.charge.amount))]), _vm._v(" 元")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "paymentChannel",
      "label": "支付方式",
      "required": ""
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.charge.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.charge, "paymentChannel", $$v)
      },
      expression: "charge.paymentChannel"
    }
  }, _vm._l((_vm.g.data.shop.paymentChannel), function(name, key) {
    return _c('radio', {
      key: key,
      attrs: {
        "label": key
      }
    }, [_vm._v(_vm._s(name))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "chargeTime",
      "label": "交易时间"
    }
  }, [_c('Date-picker', {
    staticClass: "input-date",
    attrs: {
      "options": _vm.dateOptions1,
      "format": "yyyy-MM-dd",
      "type": "date",
      "placeholder": "交易日期"
    },
    model: {
      value: (_vm.chargeDate),
      callback: function($$v) {
        _vm.chargeDate = $$v
      },
      expression: "chargeDate"
    }
  }), _vm._v(" "), _c('TimePicker', {
    staticClass: "input-time",
    attrs: {
      "format": "HH:mm",
      "placeholder": "交易时间"
    },
    model: {
      value: (_vm.chargeTime),
      callback: function($$v) {
        _vm.chargeTime = $$v
      },
      expression: "chargeTime"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.charge.remark),
      callback: function($$v) {
        _vm.$set(_vm.charge, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "charge.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "90px",
      "text-align": "left"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSaveCharge()
      }
    }
  }, [_vm._v("提交")])], 1)])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "账单修改",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.editChargeDlg),
      callback: function($$v) {
        _vm.editChargeDlg = $$v
      },
      expression: "editChargeDlg"
    }
  }, [_c('div', {
    staticClass: "warning",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 修改账单，系统会自动记录日志，请谨慎操作\n\t\t")]), _vm._v(" "), (_vm.editChargeDlg) ? _c('i-form', {
    ref: "charge",
    staticClass: "myform",
    staticStyle: {
      "width": "550px"
    },
    attrs: {
      "model": _vm.charge,
      "label-width": 90
    }
  }, [(_vm.charge.chargeItemId) ? _c('form-item', {
    attrs: {
      "prop": "chargeItemId",
      "label": "资费项",
      "required": ""
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.charge.chargeItemId),
      callback: function($$v) {
        _vm.$set(_vm.charge, "chargeItemId", _vm._n($$v))
      },
      expression: "charge.chargeItemId"
    }
  }, _vm._l((_vm.chargeItemList), function(c) {
    return _c('i-option', {
      key: c.chargeItemId,
      attrs: {
        "value": c.chargeItemId
      }
    }, [_vm._v(_vm._s(c.chargeItemName))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "arAp",
      "label": "类型"
    }
  }, [(_vm.charge.arAp === 0) ? _c('span', {
    staticClass: "charge_type_0 big"
  }, [_c('b', [_vm._v("应收款")])]) : _vm._e(), _vm._v(" "), (_vm.charge.arAp === 1) ? _c('span', {
    staticClass: "charge_type_1 big"
  }, [_c('b', [_vm._v("应付款")])]) : _vm._e()]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitPrice",
      "label": "单价"
    }
  }, [(_vm.charge.chargeFrom === 1) ? _c('span', [_vm._v(_vm._s(_vm.charge.unitPrice) + " 元")]) : _c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    on: {
      "blur": _vm.calcAmount
    },
    model: {
      value: (_vm.charge.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.charge, "unitPrice", $$v)
      },
      expression: "charge.unitPrice"
    }
  })], 1), _vm._v(" "), (_vm.charge.chargeFrom === 1) ? _c('form-item', {
    attrs: {
      "prop": "unitNum",
      "label": "数量",
      "required": ""
    }
  }, [(_vm.charge.paymentChannel === 0) ? [_vm._v(_vm._s(_vm.charge.unitNum))] : _c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    on: {
      "blur": _vm.calcAmount
    },
    model: {
      value: (_vm.charge.unitNum),
      callback: function($$v) {
        _vm.$set(_vm.charge, "unitNum", $$v)
      },
      expression: "charge.unitNum"
    }
  })], 2) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "金额",
      "required": ""
    }
  }, [_c('b', {
    staticClass: "amount"
  }, [(_vm.charge.arAp === 0) ? [_vm._v(_vm._s(_vm.charge.arAmount))] : [_vm._v(_vm._s(_vm.charge.apAmount))]], 2), _vm._v(" 元\n\t\t\t")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "paymentChannel",
      "label": "支付方式",
      "required": ""
    }
  }, [(_vm.charge.paymentChannel === 0) ? [_vm._v("\n\t\t\t\t\t储值卡\n\t\t\t\t")] : _c('radio-group', {
    on: {
      "on-change": _vm.changePaymengChnl
    },
    model: {
      value: (_vm.charge.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.charge, "paymentChannel", $$v)
      },
      expression: "charge.paymentChannel"
    }
  }, [_vm._l((_vm.g.data.shop.paymentChannel), function(name, key) {
    return _c('radio', {
      key: key,
      attrs: {
        "label": parseInt(key)
      }
    }, [_vm._v(_vm._s(name))])
  }), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 99
    }
  }, [_vm._v("赠送（不计费）")])], 2)], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "交易时间"
    }
  }, [_c('Date-picker', {
    staticClass: "input-date",
    attrs: {
      "options": _vm.dateOptions1,
      "format": "yyyy-MM-dd",
      "type": "date",
      "placeholder": "交易日期"
    },
    model: {
      value: (_vm.chargeDate),
      callback: function($$v) {
        _vm.chargeDate = $$v
      },
      expression: "chargeDate"
    }
  }), _vm._v(" "), _c('TimePicker', {
    staticClass: "input-time",
    attrs: {
      "format": "HH:mm:ss",
      "placeholder": "交易时间"
    },
    model: {
      value: (_vm.chargeTime),
      callback: function($$v) {
        _vm.chargeTime = $$v
      },
      expression: "chargeTime"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.charge.remark),
      callback: function($$v) {
        _vm.$set(_vm.charge, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "charge.remark"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "optRemark",
      "label": "修改备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.optRemark),
      callback: function($$v) {
        _vm.optRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "optRemark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "90px",
      "text-align": "left"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSaveCharge('U')
      }
    }
  }, [_vm._v("提交")])], 1)])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "账单删除",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "cancelText": "",
      "okText": "关闭"
    },
    model: {
      value: (_vm.chargeDelDlg),
      callback: function($$v) {
        _vm.chargeDelDlg = $$v
      },
      expression: "chargeDelDlg"
    }
  }, [_c('div', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4,
      "placeholder": "请输入删除原因"
    },
    model: {
      value: (_vm.optRemark),
      callback: function($$v) {
        _vm.optRemark = $$v
      },
      expression: "optRemark"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.delCharge
    }
  }, [_vm._v("提交删除")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.chargeDelDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "根据商品类别统计",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "cancelText": "",
      "okText": "关闭"
    },
    model: {
      value: (_vm.prdCateStatDlg),
      callback: function($$v) {
        _vm.prdCateStatDlg = $$v
      },
      expression: "prdCateStatDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl prd-cate-stat"
  }, [_c('table', {
    attrs: {
      "id": "chargeList_prdCateStat"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("商品类别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("交易数量")]), _vm._v(" "), _c('th', [_vm._v("交易金额（元）")])]), _vm._v(" "), _vm._l((_vm.prdCateChargeStatList), function(s) {
    return _c('tr', [_c('td', [(s.cateName) ? [_vm._v(_vm._s(s.cateName))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无类别")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.quantity))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(s.amount))])])
  }), _vm._v(" "), _c('tr', [_c('td', [_c('b', [_vm._v("合计")])]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.prdCateStatSum.quantity))])]), _vm._v(" "), _c('td', [_c('b', [_vm._v("￥" + _vm._s(_vm.prdCateStatSum.amount))])])])], 2), _vm._v(" "), (_vm.prdCateChargeStatList && !_vm.prdCateChargeStatList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.prdCateStatDlg = false
      }
    }
  }, [_vm._v("关闭")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.g.Util.exportToExcel('chargeList_prdCateStat')
      }
    }
  }, [_vm._v("导出")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件下载",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportDlg),
      callback: function($$v) {
        _vm.exportDlg = $$v
      },
      expression: "exportDlg"
    }
  }, [_c('div', {
    staticClass: "export-xls"
  }, [(_vm.exportFileUrl) ? [(_vm.exportFileUrl) ? _c('a', {
    attrs: {
      "href": _vm.exportFileUrl,
      "target": "_blank"
    }
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e()] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("您需要知道的")])]), _vm._v(" "), _c('div', {
    staticClass: "bd"
  }, [_c('ol', [_c('li', [_vm._v("资费项是由指定权限的人设置的资费项目；")]), _vm._v(" "), _c('li', [_vm._v("本页面展示的账单费用包括：商品售卖、手工记账、转卡费、租柜费、拼团费；")]), _vm._v(" "), _c('li', [_vm._v("会员卡产生的资费，系统会自动记录，无需在此处记账。")])])])])
}]}

/***/ }),

/***/ 2393:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "product-stock"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -ci-"
  }, [(_vm.cateList && _vm.cateList.length) ? _c('section', [_c('table', [_c('tr', [_vm._m(0), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "middle"
    }
  }, [_c('ul', {
    staticClass: "cate-list"
  }, [_c('li', {
    class: {
      on: _vm.cateId === null
    },
    on: {
      "click": function($event) {
        return _vm.queryProductByCate(null)
      }
    }
  }, [_vm._v("所有")]), _vm._v(" "), _c('li', {
    class: {
      on: _vm.cateId === 0
    },
    on: {
      "click": function($event) {
        return _vm.queryProductByCate(0)
      }
    }
  }, [_vm._v("未分类")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _vm._l((_vm.cateList), function(c) {
    return _c('li', {
      class: {
        on: c.cateId === _vm.cateId
      },
      on: {
        "click": function($event) {
          return _vm.queryProductByCate(c.cateId)
        }
      }
    }, [_vm._v(_vm._s(c.cateName))])
  })], 2)])])])]) : _vm._e(), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [(_vm.editable) ? [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.addChargeItem
    }
  }, [_vm._v("添加商品")]), _vm._v(" "), _c('Dropdown', {
    attrs: {
      "placement": "bottom-start",
      "trigger": "click"
    },
    on: {
      "on-click": _vm.updateCates
    }
  }, [_c('i-button', [_vm._v("\n                批量更新商品类别 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, _vm._l((_vm.cateList), function(c) {
    return _c('DropdownItem', {
      key: c.cateId,
      attrs: {
        "name": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  }), 1)], 1), _vm._v("\n             \n            "), _c('i-button', {
    on: {
      "click": _vm.openProductCardDiscountDlg
    }
  }, [_vm._v("储值卡折扣设置")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.viewProductStockLog
    }
  }, [_vm._v("入库日志")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": function($event) {
        return _vm.queryProductList(null, true)
      }
    }
  }, [_vm._v("导出")])] : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.queryProductByStatus
    },
    model: {
      value: (_vm.isValidProduct),
      callback: function($$v) {
        _vm.isValidProduct = $$v
      },
      expression: "isValidProduct"
    }
  }, [_vm._v("查看停卖商品")]), _vm._v("  \n          "), _c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "placeholder": "根据商品名称模糊查询",
      "icon": "ios-search"
    },
    on: {
      "on-enter": _vm.queryProductByName,
      "on-click": _vm.queryProductByName
    },
    model: {
      value: (_vm.query.chargeItemName),
      callback: function($$v) {
        _vm.$set(_vm.query, "chargeItemName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.chargeItemName"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "productStockList"
    }
  }, [_c('table', {
    attrs: {
      "id": "productStockListTbl"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "ckbox not-print",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("类别")]), _vm._v(" "), _c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("颜色 / 规格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("当前库存 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("单价")]), _vm._v(" "), (_vm.prdPurchasePricePermit) ? _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("进货价")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "mmin-width": "100px"
    }
  }, [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.chargeItemList), function(r, idx) {
    return _c('tr', [_c('td', {
      staticClass: "ckbox not-print",
      on: {
        "click": function($event) {
          return _vm.selectProduct(idx)
        }
      }
    }, [(!_vm.productCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.cateName))]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewProductChangeLog(idx)
        }
      }
    }, [_vm._v(_vm._s(r.chargeItemName))])]), _vm._v(" "), _c('td', [(r.color || r.spec) ? [(r.color) ? [_vm._v(_vm._s(r.color))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("/")]), _vm._v(" "), (r.spec) ? [_vm._v(_vm._s(r.spec))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('b', {
      class: 'stock stock-' + r.stockLevel
    }, [_vm._v(_vm._s(r.stock))])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(r.unitPrice))]), _vm._v(" "), (_vm.prdPurchasePricePermit) ? _c('td', [(r.purchasePrice) ? [_vm._v("￥" + _vm._s(r.purchasePrice))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [(r.status === 0) ? [_vm._v("正常")] : _c('span', {
      staticClass: "red"
    }, [_vm._v("停卖")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.remark))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.updateTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editChargeItem(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewProductChangeLog(idx)
        }
      }
    }, [_vm._v("日志")])]), _vm._v(" "), (r.status === 0) ? _c('li', [_c('a', {
      attrs: {
        "title": "停卖"
      },
      on: {
        "click": function($event) {
          return _vm.updateStatus(idx, 1)
        }
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-remove-circle-outline",
        "size": "14"
      }
    })], 1)]) : _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateStatus(idx, 0)
        }
      }
    }, [_vm._v("恢复")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delChargeItem(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount >= 30) ? _c('div', {
    staticClass: "page-nav not-print"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductList
    }
  })], 1) : (_vm.totalCount) ? _c('div', {
    staticClass: "center gray p15"
  }, [_vm._v("查询到 "), _c('b', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 个商品")]) : _vm._e(), _vm._v(" "), (_vm.totalCount === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.chargeItemDlgTitle,
      "width": "600",
      "mask-closable": false,
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewChargeItemDlg),
      callback: function($$v) {
        _vm.viewChargeItemDlg = $$v
      },
      expression: "viewChargeItemDlg"
    }
  }, [_c('i-form', {
    ref: "chargeItem",
    staticClass: "myform",
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "model": _vm.chargeItem,
      "rules": _vm.formRule,
      "label-width": 90
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "chargeItemName",
      "label": "商品名称",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.chargeItem.chargeItemName),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "chargeItemName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.chargeItemName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cateId",
      "label": "商品类别"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.chargeItem.cateId),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "cateId", $$v)
      },
      expression: "chargeItem.cateId"
    }
  }, _vm._l((_vm.cateList), function(c) {
    return _c('i-option', {
      key: c.cateId,
      attrs: {
        "value": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "unitPrice",
      "label": "单价",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "unitPrice", $$v)
      },
      expression: "chargeItem.unitPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), (_vm.prdPurchasePricePermit) ? _c('form-item', {
    attrs: {
      "prop": "purchasePrice",
      "label": "进货价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.purchasePrice),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "purchasePrice", $$v)
      },
      expression: "chargeItem.purchasePrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "memberPrice",
      "label": "会员价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.memberPrice),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "memberPrice", $$v)
      },
      expression: "chargeItem.memberPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "color",
      "label": "颜色"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.chargeItem.color),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "color", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.color"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "color",
      "label": "规格"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.chargeItem.spec),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "spec", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.spec"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "stock",
      "label": "入库数量"
    }
  }, [(_vm.chargeItem.chargeItemId) ? [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.newCount),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "newCount", _vm._n($$v))
      },
      expression: "chargeItem.newCount"
    }
  }), _vm._v("\n          （新库存： " + _vm._s(parseInt(_vm.chargeItem.newCount ? _vm.chargeItem.newCount : 0)) + " + "), _c('b', [_vm._v(_vm._s(_vm.chargeItem.stock))]), _vm._v(" =\n          "), _c('b', {
    staticClass: "bigger orange"
  }, [_vm._v(_vm._s(parseInt(_vm.chargeItem.newCount ? _vm.chargeItem.newCount : 0) + parseInt(_vm.chargeItem.stock)))]), _vm._v("）\n        ")] : [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.chargeItem.stock),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "stock", $$v)
      },
      expression: "chargeItem.stock"
    }
  })]], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.chargeItem.remark),
      callback: function($$v) {
        _vm.$set(_vm.chargeItem, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "chargeItem.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dlg-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "90px",
      "text-align": "left"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.onClickSubmitBtn()
      }
    }
  }, [_vm._v("提交")])], 1)])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '商品日志： ' + _vm.chargeItem.chargeItemName + ' - 当前库存 ' + _vm.chargeItem.stock,
      "width": "1000",
      "styles": {
        top: '10px'
      },
      "cancel-text": ""
    },
    model: {
      value: (_vm.productChangeLogDlg),
      callback: function($$v) {
        _vm.productChangeLogDlg = $$v
      },
      expression: "productChangeLogDlg"
    }
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "商品修改日志",
      "name": "changeLog"
    }
  }, [_c('section', {
    staticClass: "g-dlg"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "r"
  }, [_vm._v("入库商品数合计："), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.altStockSum))])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("会员价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("新入库商品数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("入库后商品数")]), _vm._v(" "), _c('th', [_vm._v("备注")])]), _vm._v(" "), _vm._l((_vm.productChangeLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(l.price))]), _vm._v(" "), _c('td', [(l.memberPrice) ? [_vm._v("￥" + _vm._s(l.memberPrice))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.altStock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.stock))]), _vm._v(" "), _c('td', [_c('pre', [_vm._v(_vm._s(l.remark))])])])
  })], 2), _vm._v(" "), (_vm.productChangeLogCount && _vm.productChangeLogCount > 10) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.productChangeLogCount,
      "current": _vm.productChangeLogPage ? _vm.productChangeLogPage.page : 1,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductChangeLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.productChangeLogCount) ? _c('div', {
    staticClass: "none-tips"
  }, [_vm._v("商品更新日志从【2018-7-8】开始上线，之前的日志未记录")]) : _vm._e()])])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "商品售卖明细",
      "name": "salesLog"
    }
  }, [_c('section', {
    staticClass: "g-dlg"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('table', [_c('tr', [_c('td', [_c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "placeholder": "交易日期",
      "options": _vm.dateOptions1,
      "type": "daterange",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.query.chargeDates),
      callback: function($$v) {
        _vm.$set(_vm.query, "chargeDates", $$v)
      },
      expression: "query.chargeDates"
    }
  }), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.changeChargeDates
    }
  }, [_vm._v("查询")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_vm._v("\n              已售商品数量： "), _c('b', {
    staticClass: "orange big"
  }, [_vm._v(_vm._s(_vm.chargeUnitNumSum))])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("交易时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("记账人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("记账时间")]), _vm._v(" "), _c('th', [_vm._v("备注")])]), _vm._v(" "), _vm._l((_vm.chargeList), function(c) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.transTime))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(c.unitPrice))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.unitNum))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(c.arAmount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[c.paymentChannel]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.remark))])])
  })], 2), _vm._v(" "), (_vm.chargeCount && _vm.chargeCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.chargeCount,
      "current": _vm.chargePage ? _vm.chargePage.page : 1,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductChargeList
    }
  })], 1) : _vm._e()])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('i-button', {
    staticStyle: {
      "margin": "20px auto -15px auto",
      "width": "200px"
    },
    on: {
      "click": function($event) {
        _vm.productChangeLogDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "width": "800",
      "title": "储值卡消费折扣设置",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.productCardDiscountDlg),
      callback: function($$v) {
        _vm.productCardDiscountDlg = $$v
      },
      expression: "productCardDiscountDlg"
    }
  }, [_c('table', {
    staticClass: "vcard-conf"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "380",
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("单价")])]), _vm._v(" "), _vm._l((_vm.allProductList), function(p) {
    return _c('tr', {
      class: {
        on: p.chargeItemId === _vm.selectProductId
      },
      on: {
        "click": function($event) {
          return _vm.selectProductForCardConf(p.chargeItemId)
        }
      }
    }, [_c('td', [_vm._v(_vm._s(p.chargeItemName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.unitPrice))])])
  })], 2)])]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "mytbl",
    staticStyle: {
      "padding-left": "30px"
    }
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("会员卡名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("折扣")])]), _vm._v(" "), _vm._l((_vm.valueCardList), function(c) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.cardName))]), _vm._v(" "), _c('td', [_c('input-num', {
      model: {
        value: (_vm.valueCardDiscountConf[c.cardId]),
        callback: function($$v) {
          _vm.$set(_vm.valueCardDiscountConf, c.cardId, _vm._n($$v))
        },
        expression: "valueCardDiscountConf[c.cardId]"
      }
    })], 1)])
  })], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "vcard-conf-submit"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('div', {
    staticClass: "vcard-conf-tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v("\n              先点击选择左侧商品，然后在右侧设置储值卡的折扣（例如，9折，8.5折等）\n            ")])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveProductCardDiscountConf
    }
  }, [_vm._v("保存")])], 1)])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件下载",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportDlg),
      callback: function($$v) {
        _vm.exportDlg = $$v
      },
      expression: "exportDlg"
    }
  }, [_c('div', {
    staticClass: "export-xls"
  }, [(_vm.exportFileUrl) ? [(_vm.exportFileUrl) ? _c('a', {
    attrs: {
      "href": _vm.exportFileUrl,
      "target": "_blank"
    }
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e()] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "商品入库日志",
      "width": "1000",
      "styles": {
        top: '10px'
      },
      "cancel-text": ""
    },
    model: {
      value: (_vm.productStockLogDlg),
      callback: function($$v) {
        _vm.productStockLogDlg = $$v
      },
      expression: "productStockLogDlg"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "query-cond-inline-s"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.prdStockLogQuery.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.prdStockLogQuery, "beginDate", $$v)
      },
      expression: "prdStockLogQuery.beginDate"
    }
  }), _vm._v("\n          ~\n          "), _c('date-picker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.prdStockLogQuery.endDate),
      callback: function($$v) {
        _vm.$set(_vm.prdStockLogQuery, "endDate", $$v)
      },
      expression: "prdStockLogQuery.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "商品类别"
    },
    model: {
      value: (_vm.prdStockLogQuery.cateId),
      callback: function($$v) {
        _vm.$set(_vm.prdStockLogQuery, "cateId", $$v)
      },
      expression: "prdStockLogQuery.cateId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _vm._l((_vm.cateList), function(c) {
    return _c('i-option', {
      key: c.cateId,
      attrs: {
        "value": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "placeholder": "商品名（可模糊查询）"
    },
    model: {
      value: (_vm.prdStockLogQuery.productName),
      callback: function($$v) {
        _vm.$set(_vm.prdStockLogQuery, "productName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "prdStockLogQuery.productName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryProductStockLogList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v("\n           \n          "), _c('i-button', {
    on: {
      "click": _vm.resetPrdStockLogQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', {
    staticClass: "mt20"
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("商品类别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("商品名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("新入库商品数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("入库后商品数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_vm._v("备注")])]), _vm._v(" "), _vm._l((_vm.productChangeLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.chargeItemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.altStock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.stock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.remark))])])
  })], 2), _vm._v(" "), (_vm.productChangeLogCount && _vm.productChangeLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.productChangeLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductStockLogList
    }
  })], 1) : _vm._e()]), _vm._v(" "), (_vm.productChangeLogList && _vm.productChangeLogList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n        暂无数据\n      ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    attrs: {
      "width": "80",
      "align": "left",
      "valign": "middle"
    }
  }, [_c('b', {
    staticClass: "big"
  }, [_vm._v("商品类别：")])])
}]}

/***/ }),

/***/ 2397:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "card-bills"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -style-"
  }, [_c('section', {
    staticClass: "note"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-megaphone",
      "color": "orange",
      "size": "22"
    }
  }), _vm._v("  \n\t\t\t为优化菜单结构，本页面已迁移至： \n\t\t\t"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-stat-card-bills')
      }
    }
  }, [_vm._v("统计 "), _c('Icon', {
    attrs: {
      "type": "md-arrow-forward"
    }
  }), _vm._v(" 会员卡统计： 会员卡账单")], 1), _vm._v(" "), _c('span', {
    staticClass: "l15 gray"
  }, [_vm._v("（本页面将保留到2018-11-1）")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2481:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "product-cate"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.create()
      }
    }
  }, [_vm._v("添加商品类别")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.cateList), function(c, idx) {
    return _c('tr', [_c('td', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.remark))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.update(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteCate(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.cateList && !_vm.cateList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "商品类别设置",
      "width": "450",
      "mask-closable": false
    },
    model: {
      value: (_vm.dlgShow),
      callback: function($$v) {
        _vm.dlgShow = $$v
      },
      expression: "dlgShow"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "名称"
    },
    model: {
      value: (_vm.cate.cateName),
      callback: function($$v) {
        _vm.$set(_vm.cate, "cateName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cate.cateName"
    }
  }), _c('p'), _vm._v(" "), _c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.cate.remark),
      callback: function($$v) {
        _vm.$set(_vm.cate, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cate.remark"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v("  \n\t\t\t"), _c('i-button', {
    attrs: {
      "type": "default"
    },
    on: {
      "click": function($event) {
        _vm.dlgShow = false;
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2523:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "acc"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "acc",
      "page": "charge-opt-log"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "subtit"
  }, [_c('a', {
    class: {
      'on': _vm.optType === 0
    },
    on: {
      "click": function($event) {
        return _vm.queryUpdateLog(null)
      }
    }
  }, [_vm._v("账单修改日志")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    class: {
      'on': _vm.optType === 1
    },
    on: {
      "click": function($event) {
        return _vm.queryDelLog(null)
      }
    }
  }, [_vm._v("账单删除日志")])])]), _vm._v(" "), (_vm.optType === 0) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.updateLog.data), function(l, idx) {
    return _c('tr', {
      class: {
        'borderspt': (idx > 0 && idx % 2 === 0)
      }
    }, [_c('td', [(l.recordType === 1) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("修改后")]) : _vm._e(), (l.recordType === 0) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("修改前")]) : _vm._e()]), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.chargeItemId !== _vm.updateLog.data[idx + 1].chargeItemId)
      }
    }, [(l.chargeItemName) ? [_vm._v(_vm._s(l.chargeItemName))] : _c('i', [_vm._v(_vm._s(_vm.g.Dict.ChargeFroms[l.chargeFrom]))])], 2), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.arAp !== _vm.updateLog.data[idx + 1].arAp)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Dict.ArApName[l.arAp]) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.unitPrice !== _vm.updateLog.data[idx + 1].unitPrice)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t￥" + _vm._s(l.unitPrice) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.unitNum !== _vm.updateLog.data[idx + 1].unitNum)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.unitNum) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.amount !== _vm.updateLog.data[idx + 1].amount)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t￥" + _vm._s(l.amount) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && l.paymentChannel !== _vm.updateLog.data[idx + 1].paymentChannel)
      }
    }, [(l.paymentChannel === 0) ? [_vm._v("储值卡")] : (l.paymentChannel === 99) ? [_vm._v("赠送")] : (l.paymentChannel) ? [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[l.paymentChannel]))] : _vm._e()], 2), _vm._v(" "), _c('td', {
      class: {
        'diff': (idx % 2 === 0 && _vm.g.Util.formatDate(l.transTime) !== _vm.g.Util.formatDate(_vm.updateLog.data[idx + 1].transTime))
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.transTime) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.memberName))]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.preUpdateUname) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.preUpdateTime) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.remark))]), _vm._v(" "), (idx % 2 === 0) ? _c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s(l.optRemark))]) : _vm._e()])
  })], 2), _vm._v(" "), (_vm.updateLog.count && _vm.updateLog.count >= 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.updateLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryUpdateLog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateLog.data && _vm.updateLog.data.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("\n\t\t\t\t\t暂无数据\n        ")]) : _vm._e()]) : (_vm.optType === 1) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.delLog.data), function(l, idx) {
    return _c('tr', [_c('td', [(l.chargeItemName) ? [_vm._v(_vm._s(l.chargeItemName))] : _c('i', [_vm._v(_vm._s(_vm.g.Dict.ChargeFroms[l.chargeFrom]))])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.ArApName[l.arAp]))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(l.unitPrice))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.unitNum))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(l.amount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.preUpdateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.transTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.updateTime))]), _vm._v(" "), _c('td', [(l.memberId && !l.remark) ? _c('div', {
      staticClass: "sys-remark"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t消费会员： " + _vm._s(l.memberName) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.remark) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.optRemark))])])
  })], 2), _vm._v(" "), (_vm.delLog.count && _vm.delLog.count >= 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.delLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryDelLog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.delLog.data && _vm.delLog.data.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("\n\t\t\t\t\t暂无数据\n        ")]) : _vm._e()]) : _vm._e()])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("操作")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("资费项")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("交易时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("消费会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("修改人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("账单备注")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("修改备注")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("资费项")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("记账人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("交易时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("删除人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("删除时间")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("账单备注")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("删除备注")])])
}]}

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1985)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1229),
  /* template */
  __webpack_require__(2397),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4cc166db",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1957)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1230),
  /* template */
  __webpack_require__(2369),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4123f230",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1979)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1231),
  /* template */
  __webpack_require__(2391),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b296a3b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2108)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1232),
  /* template */
  __webpack_require__(2523),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c6137ac6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2069)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1233),
  /* template */
  __webpack_require__(2481),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7e4e700e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1925)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1234),
  /* template */
  __webpack_require__(2337),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3144d0f1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1981)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1235),
  /* template */
  __webpack_require__(2393),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b8f875c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});