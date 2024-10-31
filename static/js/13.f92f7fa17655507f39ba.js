webpackJsonp([13],{

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1934)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1530),
  /* template */
  __webpack_require__(2346),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3592d125",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2023)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1531),
  /* template */
  __webpack_require__(2435),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-628b2a0e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


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

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  null,
  /* template */
  __webpack_require__(1135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foot"
  }, [_vm._v("\n\t© 2022   南京强点信息技术有限公司"), _c('span', {
    staticClass: "sptr"
  }, [_vm._v("|")]), _c('Icon', {
    attrs: {
      "type": "md-call",
      "size": "14"
    }
  }), _vm._v(" 025-66045495"), _c('span', {
    staticClass: "sptr"
  }, [_vm._v("|")]), _vm._v("工信部备案号：苏ICP备17021267号\n")], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1186:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlh0gAyAKIAAP///8zMzJmZmWZmZjMzMwAAAAAAAAAAACH5BAEHAAAALAAAAADSADIAAAP/CLrcG0EMQukU0OnNu/9gKI5kaZbRVK0slZ1wLM90XUdtnmN27//AoAanK7YGwqRyyRwan7lAc0qtwgTQLEvgCwy4oxXYNviavAPpKTIesWMqrZyAtFHaILFNUlGHK3UlcX4hgyZxc3M1WAR8URCQECtpkTEBkySMd2eYIpeAgomidDOfjYgrplqBh3ohqgQnW5G0lQqztbQNmqNzeCViqH2jMLAiiIQivHIKy1kMsL1yySOIbbxoZdosZVtnXpO5tcsvnr0A0c8L0tJr3gtxrAyuAIih7EfUHMJa9cQK3UThSadDXogWbeJtoMeLBD4j+gqtcJPKg7SBcyLuQziv/8KvWx4XNFTGTZvJkyhPdmpVgWKfDvy0YJTzkUO6Maow5AoHAZnGBixoIDthr4EqQkc7sJs5TYQOnKliZqnpgJ6liiwpOEj6AKsGZ76MJqLaIOaYhlKhkO24qZRXErrEvoQGCeZSuXIMfi0yxp4ElCVRpTkY0u3cYylTTkp8kocCgjTxNrUoht7KqoUBjCTcVgZXEGAfBn2Mj+lkDyowuMrJgeFEp5mvHv4gWl3oyNAEvpLCWvNboJk354ld7PdGQOKSKwcXMu1UyavguhqNrhZPXnpbE3c3266FHwofmmbm8o4A7OdvQ/zTWbYLzqSqL5+fIXxp6P3Kn3qqm30jGv+fUWZBbYBgIh5+6pjjUUzZmLSYST8t9JoMQ4F2nnPSfHEeAAfmJop0HqXniFYaWHXCMoyl6OBlIEAmGlsXIQgFiO0VhVl7MGDYS4QO8LIWaBP6c5eHc2Rnk1UKlbgdUQRawGOPQV7hlY5GjJeFkRv0BhAgiQV20hr0hclkSzNgI9J9ROKmYHuTtONJXYs4Vk2UJwapXhbJuPgUjf+RVuA5x4CimUm7QOhAknM2SR1I0iRzZw4o0HOUiCJOQml6/tVhYzPGmZmoou8xQGUOBj3KTaTB0bnOkvqBsalv3aFj4gejJkKNqTpQU2uf+qUBqYQ4ohrqq54C992nBIRJn3b/UKShghkOFJAIJ08gIQ5PtZA0F7HGCUlioGQmoSOWnIYlLF96GgHut9zGKqu7x7mg7HzMGkEuh7ZSe8cjbg53rLexMFBsmveKCuq/ZTWL2ljc3RENOl0++GWL9LQb6qGCSnTwt8YWgeWuAev7HypKsRpCsRYnu8HAC3Op4svvyJjxLqM8maUesBg5K7IGh9vquiHLsDOs9ooIcrA/O5Pd0BTH9ipsCLfMcQxMH51IwR2wZtZWtpgwsHAjgN2B2LKYDDCoWGcthp5fzFvOBq+qMlgmTNM8c8O8wr1x2mqHGEyHN29nNYw/rroxj7iaa9gdRTHXC1kVJvwhPKoGjvYrQE3a3LTDqRn118snRfiJkSPmV27bniQuEwlWr73E21b8AHvsa6jOIu245667SFSivvvvwOd+ISJlbBj88cjHkAAAOw=="

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/login-bg.4c975e3.jpg";

/***/ }),

/***/ 1228:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			g: $
		};
	},

	created() {
		this.test();
	},

	methods: {
		test() {
			$.Req.service('/msite/tenantShopsQuery', { tenantId: 201704151442544 }, ret => {
				console.log(ret);
			});
		}
	}
});

/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrcode_vue__ = __webpack_require__(1123);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MyFooter: __WEBPACK_IMPORTED_MODULE_0__components_footer___default.a, QrcodeVue: __WEBPACK_IMPORTED_MODULE_1_qrcode_vue__["a" /* default */] },

  data() {
    return {
      g: window.$,
      bgUrl: null,
      msg: null,
      submitLoading: false,
      userForm: {
        phoneNo: "",
        password: ""
      },
      tenantListDlg: false,
      tenantList: [],
      shopListDlg: false,
      shopList: [],
      loginShortcutsDlg: false,
      bgFromCookie: false,
      bglistDlg: false,
      loginMarginTop: 0,
      headWidth: 930,
      selectedLoginRet: null,
      loginAuthcodeDlg: null,
      loginAuthcode: null,
      authcodeBtnDisabled: null,
      authcodeLabel: "获取验证码",
      lastSendSmsTime: null,

      // wx-login
      wxLodingShow: false,
      qrcodeWxUrl: null,
      qrcodeMaxSeconds: 180,
      qrcodeSecondsCount: null,
      wxTimer: null,
      socket: null,
      isWxLogin: false,
      socketId: null
    };
  },

  created() {},
  watch: {
    // wx-login
    wxLodingShow(newVal) {
      if (!newVal) {
        this.deleteSocket();
      }
    }
  },
  mounted() {},
  methods: {
    // wx-login
    rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    deleteSocket() {
      clearInterval(this.wxTimer);
      this.socket.disconnect(); // 断开连接
      this.socketId = null;
      this.socket = null;
    },

    createSocket(callback) {
      if (this.socket && this.socket.disconnect) {
        this.socket.disconnect();
      }
      // 初始化io对象
      let socket = io($.Conf.CHECKIN_SOCKET_ADDR, {
        autoConnect: false
      });
      this.socket = socket;
      this.socketId = $.Util.md5(`${Date.now}${this.rand(1000, 9999)}`);
      socket.connect(); // 创建连接
      // 当socket连接后发送登录请求
      socket.emit("login", this.socketId);
      // 当服务端推送来消息时触发
      socket.on("new_msg", msg => {
        if (msg) {
          this.loginWithWeixin({ weixinId: msg });
        }
      });
      // 多少人在线
      socket.on("update_online_count", msg => {
        // console.log(msg);
      });
      if (callback) {
        callback();
      }
    },

    wxLogin() {
      this.createSocket(() => {
        this.qrcodeSecondsCount = this.qrcodeMaxSeconds;
        let isInProdEnv = location.href.indexOf("web.jzongguan") !== -1;
        let appId = isInProdEnv ? $.Conf.WX_APP_ID_PUB : $.Conf.WX_APP_ID_TEST;
        let appWxUrl = "/wx-login-for-pc"; // 跳转员工端操作
        let redirectUrl = encodeURIComponent(`${$.Conf.APP_API_HOST}/#${appWxUrl}?socketId=${this.socketId}`);
        this.qrcodeWxUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=jzg#wechat_redirect`;
        clearInterval(this.wxTimer);
        this.wxTimer = setInterval(() => {
          if (this.qrcodeSecondsCount <= 0) {
            this.deleteSocket();
            return;
          }
          this.qrcodeSecondsCount--;
        }, 1000);
        // console.log(this.qrcodeWxUrl);
        this.wxLodingShow = true;
      });
    },

    loginWithWeixin(args) {
      this.submitLoading = true;
      $.Req.service($.SvName.LOGIN_WITH_WX, args, ret => {
        if (ret && ret.wxApiConf) {
          this.setWxConf(ret.wxApiConf);
        }
        // 扫码成功
        if (ret && ret.user) {
          this.userForm.phoneNo = ret.user.phoneNo;
          this.userForm.password = ret.pwd;
          // 是微信扫码登录的，login密码不加密
          this.isWxLogin = true;
          this.guideUserHome(ret);
        }
        this.submitLoading = false;
        this.wxLodingShow = false;
      }, true, err => {
        this.submitLoading = false;
        this.wxLodingShow = false;
        alert(err);
      });
    },

    setClientVersion() {
      $.Req.service($.SvName.SYS_PARAM_VALUE_QUERY, { paramType: 2 }, ret => {
        $.data.clientVersion = ret.value;
      });
    },

    onClickSubmitBtn() {
      if ($.Util.cookie.get($.Conf.Keys.LOGIN_FLAG)) {
        $.Dlg.error("您在本浏览器已有登录，请退出一个账号，或者关闭浏览器后再试。");

        // 备注：重新设置一次，防止浏览器异常关闭，不能自动清除临时cookie
        $.Util.cookie.delete($.Conf.Keys.LOGIN_FLAG);
        $.Util.cookie.set($.Conf.Keys.LOGIN_FLAG, true); // 设置登录标识
        return;
      }

      let valid = false;
      let msg = null;
      if (!this.userForm.phoneNo) {
        msg = "请输入登录手机号";
      } else if (!$.Util.validatePhoneNo(this.userForm.phoneNo)) {
        msg = "手机号格式错误";
      } else if (!this.userForm.password) {
        msg = "请输入登录密码";
      } else if (this.userForm.password.length < 6) {
        msg = "登录密码不能少于6位";
      } else {
        valid = true;
      }

      if (valid) {
        this.login();
      } else {
        this.msg = msg;
        $.Msg.error($.Lang.SUBMIT_ERR);
      }
    },

    login(encTid, encSid) {
      // wx-login
      let password = this.isWxLogin ? this.userForm.password : $.Util.md5(this.userForm.password);

      let args = {
        phoneNo: this.userForm.phoneNo,
        password: password,
        clientType: 1
      };
      if (encTid) args["encTid"] = encTid;
      if (encSid) args["encSid"] = encSid;
      this.submitLoading = true;

      $.Req.service($.SvName.LOGIN, args, (ret, a) => {
        this.submitLoading = false;
        this.guideUserHome(ret);
      }, true, err => {
        this.submitLoading = false;
        $.Dlg.error(err);
      });
    },

    guideUserHome(loginRet) {
      const homeType = loginRet.userHome;
      switch (homeType) {
        case 1:
          // 租户创建人的租户首页
          this.storeLoginInfo(loginRet);
          this.$router.push("/tenant");
          break;
        case 2:
          // 门店员工的首页
          if (loginRet.user && loginRet.user.needPcAuthcode) {
            this.navToLoginAuthcode(loginRet);
          } else {
            this.storeLoginInfo(loginRet);
            this.$router.push("/shop-home");
          }
          break;
        case 3:
          // 门店会员的首页
          $.Dlg.warning($.Lang.NO_STAFF_CLIENT);
          break;
        case 4:
          // 门店列表页面（待用户候选）
          this.showShopList(loginRet.shopList, loginRet.user);
          break;
        case 5:
          // 多租户列表页面（待用户候选）
          this.showTenantList(loginRet.tenantList);
          break;
        case 6:
          // 门店过期
          let shop = loginRet.shopList[0];
          $.Dlg.warning($.Lang.SHOP_EXPIRED.format(shop.shopName));
          break;
      }
    },

    navToLoginAuthcode(loginRet) {
      this.selectedLoginRet = loginRet;
      this.loginAuthcodeDlg = true;
    },

    storeLoginInfo(loginRet) {
      $.Util.cookie.set($.Conf.Keys.LOGIN_FLAG, true); // 设置登录标识

      $.data.user = loginRet.user;
      if (loginRet.tenantList && loginRet.tenantList[0]) {
        $.data.tenant = loginRet.tenantList[0];
      }
      if (loginRet.shopList && loginRet.shopList[0]) {
        $.data.shop = loginRet.shopList[0];
      }

      // 优惠券
      this.isOpenShopCouponQuery();
    },

    // 优惠券
    isOpenShopCouponQuery() {
      $.Req.service($.SvName.ACTIVITY_COUPON_QUERY, {}, ret => {
        if (ret.couponList && ret.couponList.length) {
          $.Util.cookie.set("jzg.is_open_coupon", 1);
        } else {
          $.Util.cookie.set("jzg.is_open_coupon", 0);
        }
      });
    },

    showTenantList(tenantList) {
      this.tenantList = tenantList;
      this.tenantListDlg = true;
    },

    showShopList(shopList, user) {
      this.shopList = [];
      if (user.isTenantOwner) {
        for (let s of shopList) {
          if (!s.forbiddenInChain) this.shopList.push(s);
        }
      } else {
        this.shopList = shopList;
      }
      $.data.shopList = this.shopList;
      this.shopListDlg = true;
    },

    setBgToCookie(imgFile) {
      $.Util.cookie.set($.Conf.CookieKeys.LOGIN_BG, imgFile, 365);
      this.bgUrl = $.Conf.IMG_LIB_URL + "/pc_login_bg/" + imgFile;
      location.reload();
    },

    onClickSmsAuthcodeBtn() {
      let nowTime = new Date().getTime();
      if (this.lastSendSmsTime && nowTime - this.lastSendSmsTime < 3000) {
        $.Msg.info($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSendSmsTime = nowTime;

      let args = {
        phoneNo: this.userForm.phoneNo,
        custName: this.selectedLoginRet.user.uname,
        authcodeType: 7,
        encTid: this.selectedLoginRet.shopList[0].encTid,
        encSid: this.selectedLoginRet.shopList[0].encSid
      };

      $.Req.service($.SvName.SMS_AUTHCODE_SEND, args, ret => {
        if (ret.sendStatus === 0) {
          $.Msg.info($.Lang.AUTHCODE_SENT);
        } else {
          $.Dlg.error($.Lang.AUTHCODE_SEND_ERR);
        }
      });

      let count = 60;
      let resend = setInterval(() => {
        count--;
        if (count > 0) {
          this.authcodeBtnDisabled = true;
          this.authcodeLabel = count + "秒后可重新获取";
        } else {
          clearInterval(resend);
          this.authcodeBtnDisabled = false;
          this.authcodeLabel = "获取验证码";
        }
      }, 1000);
    },

    checkLogonAuthcode() {
      if (!this.loginAuthcode) {
        $.Msg.error("请输入短信验证码");
        return;
      }

      let args = {
        phoneNo: this.userForm.phoneNo,
        uid: this.selectedLoginRet.user.uid,
        authcode: parseInt(this.loginAuthcode),
        encSid: this.selectedLoginRet.shopList[0].encSid
      };
      $.Req.service($.SvName.STAFF_LOGIN_AUTHCODE_CHECK, args, ret => {
        this.storeLoginInfo(this.selectedLoginRet);
        this.$router.push("/shop-home");
      }, true);
    }
  }
});

/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MyFooter: __WEBPACK_IMPORTED_MODULE_0__components_footer___default.a },

  data() {
    const validatePasswdCheck = (rule, value, callback) => {
      if (value !== this.userForm.password) {
        callback(new Error($.Lang.PASSWD_CONFIRM_ERR));
      } else {
        callback();
      }
    };

    return {
      authcodeLabel: "获取验证码",
      lastSendSmsTime: null,
      authcodeBtnDisabled: false,
      userForm: {
        phoneNo: "",
        smsAuthcode: "",
        password: "",
        passwordCheck: ""
      },
      requiredFields: ["phoneNo", "password", "passwordCheck"],
      userFormRule: {
        password: [{ min: 6, message: "密码太短，请至少设置6位密码", trigger: "blur" }],
        smsAuthcode: [{
          type: "number",
          min: 1000,
          max: 999999999,
          message: "验证码格式不正确",
          trigger: "blur"
        }],
        passwordCheck: [{ validator: validatePasswdCheck, trigger: "blur" }]
      }
    };
  },

  created: function () {
    if (this.requiredFields) {
      $.Util.addRequiredFieldsRules(this.userFormRule, this.requiredFields);
    }
  },

  methods: {
    onClickSubmitBtn() {
      this.$refs.userForm.validate(valid => {
        if (!$.Util.validatePhoneNo(this.userForm.phoneNo)) {
          $.Msg.error("手机号格式不正确");
          return;
        }
        if (!this.userForm.smsAuthcode) {
          $.Msg.error($.Lang.AUTHCODE_MISSING);
          return;
        }
        if (!$.Util.isInteger(this.userForm.smsAuthcode)) {
          $.Msg.error("验证码格式不正确");
          return;
        }

        if (valid) {
          const args = {
            phoneNo: this.userForm.phoneNo,
            password: $.Util.md5(this.userForm.password),
            smsAuthcode: this.userForm.smsAuthcode
          };
          $.Req.service($.SvName.USER_PWD_REG, args, ret => {
            $.Msg.success($.Lang.OPT_SUCCESS);
            this.$router.push("/user-login");
          });
        } else {
          $.Msg.error($.Lang.SUBMIT_ERR);
        }
      });
    },

    checkUserPhone(callback) {
      this.$refs.userForm.validateField("phoneNo", err => {
        if (err) return;

        const args = { phoneNo: this.userForm.phoneNo };
        $.Req.service($.SvName.USER_CHECK, args, ret => {
          const userStatus = ret.status;
          let errMsg = null;
          if (userStatus === $.Dict.UserStatus.NOT_FOUND) {
            errMsg = $.Lang.USER_NOT_FOUND;
          } else if (userStatus === $.Dict.UserStatus.FROZEN) {
            errMsg = $.Lang.USER_FROZEN;
          } else if (userStatus === $.Dict.UserStatus.INVALID) {
            errMsg = $.Lang.USER_INVALID;
          }
          if (errMsg) $.Dlg.error(errMsg);else callback();
        });
      });
    },

    onClickSmsAuthcodeBtn() {
      let nowTime = new Date().getTime();
      if (this.lastSendSmsTime && nowTime - this.lastSendSmsTime < 3000) {
        $.Msg.info($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSendSmsTime = nowTime;

      this.checkUserPhone(() => {
        let args = {
          phoneNo: this.userForm.phoneNo,
          authcodeType: 2
        };
        $.Req.service($.SvName.SMS_AUTHCODE_SEND, args, ret => {
          if (ret.sendStatus === 0) {
            $.Msg.info($.Lang.AUTHCODE_SENT);
          } else {
            $.Dlg.error($.Lang.AUTHCODE_SEND_ERR);
          }
        });

        let count = 60;
        let resend = setInterval(() => {
          count--;
          if (count > 0) {
            this.authcodeBtnDisabled = true;
            this.authcodeLabel = count + "秒后可重新获取";
          } else {
            clearInterval(resend);
            this.authcodeBtnDisabled = false;
            this.authcodeLabel = "获取验证码";
          }
        }, 1000);
      });
    }
  }
});

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".test[data-v-2f4cd5f0]{margin:200px;border:1px solid red;background:#f2f7c9;padding:50px}", ""]);

// exports


/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(877);
exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".weixin-row[data-v-3592d125]{display:flex;justify-content:space-between}.weixin-row .weixin-a[data-v-3592d125]{display:flex;align-items:center}.weixin-row .weixin-a i[data-v-3592d125]{margin-right:3px}.wx-qrcode[data-v-3592d125]{display:flex;flex-direction:column;align-items:center;padding:20px 0}.wx-qrcode .ivu-icon[data-v-3592d125]{font-size:20px;color:#fff}.wx-qrcode .notice[data-v-3592d125]{margin-top:20px}.wx-qrcode .wx-sec[data-v-3592d125]{font-size:16px}.wx-qrcode .wx-refresh[data-v-3592d125]{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.wx-qrcode .hide[data-v-3592d125]{display:none}.wx-expire[data-v-3592d125] canvas{filter:blur(3px)}.login[data-v-3592d125]{width:100%;height:100%;position:fixed;background:url(" + escape(__webpack_require__(1206)) + ") no-repeat;background-size:cover}.login .adzone[data-v-3592d125]{padding-right:100px}.login .adzone img[data-v-3592d125]{max-height:430px;border-radius:2px}.login .hd[data-v-3592d125]{margin-top:40px}.login .hd .inner[data-v-3592d125]{margin:0 75px}.login .hd .inner .logo[data-v-3592d125]{vertical-align:middle;height:30px}.login .hd .inner .spt[data-v-3592d125]{padding:0 7px}.login .hd .r a[data-v-3592d125]{color:hsla(0,0%,100%,.8);font-size:15px}.login .hd .r a[data-v-3592d125]:first-child{margin-right:30px}.login .hd .r a[data-v-3592d125]:hover{color:#fff}.login .cont-box[data-v-3592d125]{width:370px}.login table.bd[data-v-3592d125]{position:fixed;top:27%;right:19%}.login table.bd td[data-v-3592d125]{vertical-align:middle}.login .login-box[data-v-3592d125]{position:relative;padding-bottom:38px;width:370px;border:1px solid #eee;background:#fff;border-radius:10px;box-shadow:5px 5px 10px #1e66b7,-5px -5px 10px #1e66b7}.login .login-box[data-v-3592d125]:after{display:inline-block;content:\"\";height:100%;width:430px;position:absolute;top:-30px;left:-30px;z-index:-1;background:#2b76d8;border-radius:10px;box-shadow:5px 5px 10px #065fd0,-5px -5px 10px #065fd0}.login .login-box .input-hd[data-v-3592d125]{font-size:20px;text-align:center;font-weight:400;padding:47px 0 45px}.login .login-box .cont[data-v-3592d125]{padding:0 38px}.login .login-box .item[data-v-3592d125]{margin-bottom:15px;padding:4px 0;border:1px solid #e5e5e5;border-radius:5px}.login .login-box .item[data-v-3592d125]:first-child{margin-bottom:25px}.login .login-box .item i[data-v-3592d125]{font-size:20px;margin-right:15px;margin-left:15px;color:#656565;vertical-align:-2px}.login .login-box .item[data-v-3592d125]:hover{border-color:#cfcfcf}.login .login-box .item:hover i[data-v-3592d125]{color:#0077e8}.login .login-box .item .icon-password[data-v-3592d125]{font-size:14px;color:#656565}.login .login-box .item input[data-v-3592d125]{border:0;outline:none;padding:0;width:200px;font-size:14px;height:32px;background:none}.login .login-box .item[data-v-3592d125] ::-moz-placeholder{font-size:14px;color:#aaa}.login .login-box .item[data-v-3592d125] ::-webkit-input-placeholder{font-size:14px;color:#aaa}.login .login-box .item[data-v-3592d125] :-ms-input-placeholder{font-size:14px;color:#aaa}.login .login-box .submit[data-v-3592d125]{display:block;width:100%;margin:20px auto 0;height:43px;letter-spacing:2px;background:#0077e8;border-radius:5px;box-shadow:0 5px 5px #b1c3d7;font-size:15px}.login .login-box .fitem[data-v-3592d125]{padding:3px 0}.login .login-box .more[data-v-3592d125]{margin:15px 0;text-align:right;font-size:14px}.login .login-box .more a[data-v-3592d125]{color:#999}.login .login-box .more .spt[data-v-3592d125]{padding:0 15px;color:#ccc}.login .login-box .msg[data-v-3592d125]{line-height:60px;height:60px;color:#ff4500;text-align:center;font-size:13px}.login .login-box .msg i[data-v-3592d125]{font-size:16px}.banner[data-v-3592d125],.m-regist[data-v-3592d125]{display:none}.sel-tenant li[data-v-3592d125]{display:inline-block;width:200px;padding:10px;margin:10px;border-radius:2px;border:1px solid #ddd;cursor:pointer;text-align:center}.sel-tenant li .logo[data-v-3592d125]{width:180px;height:180px;border:0}.sel-tenant li .tit[data-v-3592d125]{margin-top:5px;font-size:14px;font-weight:800;line-height:25px;height:25px;overflow:hidden}.sel-tenant li[data-v-3592d125]:hover{border-color:#3bb4f2}.sel-shop li[data-v-3592d125]{display:inline-block;width:180px;padding:10px 5px;margin:10px;border-radius:2px;border:1px solid #ddd;cursor:pointer;text-align:center}.sel-shop li .logo[data-v-3592d125]{width:150px;height:150px;border:0}.sel-shop li .tit[data-v-3592d125]{margin-top:5px;font-size:14px;font-weight:800;line-height:25px;height:25px;overflow:hidden}.sel-shop li[data-v-3592d125]:hover{border-color:#3bb4f2}.login-foot[data-v-3592d125]{position:fixed;bottom:0;padding:10px 0 35px;width:100%;text-align:center}.login-foot .foot[data-v-3592d125]{margin:0;color:hsla(0,0%,100%,.8)}.login-foot .pc-foot[data-v-3592d125]{display:block}.login-foot .m-foot[data-v-3592d125]{display:none}.login-foot .m-foot a[data-v-3592d125]{color:#999}.bglist li[data-v-3592d125]{display:inline-block;margin:5px;cursor:pointer}.bglist img[data-v-3592d125]{width:310px;height:200px;display:block;border-radius:3px}@media screen and (max-width:1000px){.login[data-v-3592d125]{background:#fff;padding-bottom:60px;position:relative;overflow-y:scroll}.login .hd[data-v-3592d125]{position:absolute;top:0;margin-top:20px}.login .hd .r[data-v-3592d125]{display:none}.login .hd .inner[data-v-3592d125]{margin:0 30px}.login .hd .inner .logo[data-v-3592d125]{height:40px;margin:10px}.login table.bd[data-v-3592d125]{position:relative;top:0;right:0;width:100%}.login .login-box[data-v-3592d125]{position:relative;padding-bottom:0;width:auto;border:none;border-radius:0;box-shadow:none}.login .login-box[data-v-3592d125]:after{display:none}.login .login-box .input-hd[data-v-3592d125]{font-size:38px;text-align:center;font-weight:400;color:#0077e8;padding:0 0 50px}.login .login-box .cont[data-v-3592d125]{padding:0 65px}.login .login-box .item[data-v-3592d125]{margin-bottom:15px;padding-bottom:25px;border:none;border-bottom:1px solid #e5e5e5;border-radius:0}.login .login-box .item[data-v-3592d125]:first-child{margin-bottom:50px}.login .login-box .item i[data-v-3592d125]{font-size:40px;margin-right:15px;margin-left:4px;color:#0077e8;vertical-align:-1px}.login .login-box .item .icon-password[data-v-3592d125]{font-size:26px;color:#656565}.login .login-box .item input[data-v-3592d125]{border:0;outline:none;padding:0;width:200px;font-size:30px;background:none}.login .login-box .item[data-v-3592d125] ::-moz-placeholder{font-size:30px;color:#aaa}.login .login-box .item[data-v-3592d125] ::-webkit-input-placeholder{font-size:30px;color:#aaa}.login .login-box .item[data-v-3592d125] :-ms-input-placeholder{font-size:30px;color:#aaa}.login .login-box .submit[data-v-3592d125]{display:block;width:100%;margin:50px auto 0;height:90px;letter-spacing:2px;background:#0077e8;border-radius:15px;box-shadow:0 5px 5px #b1c3d7;font-size:28px}.login .login-box .fitem[data-v-3592d125]{padding:3px 0}.login .login-box .more[data-v-3592d125]{margin:30px 0;text-align:right;font-size:28px}.login .login-box .more a[data-v-3592d125]{color:#999}.login .login-box .more .spt[data-v-3592d125]{padding:0 15px;color:#ccc}.login .login-box .msg[data-v-3592d125]{line-height:50px;height:50px;color:#ff4500;text-align:center;margin-top:30px;font-size:28px}.login .login-box .msg i[data-v-3592d125]{font-size:32px}.login .cont-box[data-v-3592d125]{width:auto}.login .login-foot[data-v-3592d125]{padding:10px 0 30px;width:100%;text-align:center}.login .login-foot .pc-foot[data-v-3592d125]{display:none}.login .login-foot .m-foot[data-v-3592d125]{display:block;margin:0 40px;font-size:27px;color:#999;line-height:2}.banner[data-v-3592d125]{display:block;width:100%}.m-regist[data-v-3592d125]{display:block;margin-top:15px;text-align:center}.m-regist span[data-v-3592d125]{color:#0077e8}.m-regist a[data-v-3592d125]{font-size:25px}.weixin-row .weixin-a[data-v-3592d125]{margin-left:20px;transform:scale(2.2)}}@media screen and (min-width:1024px) and (max-width:1365px){.login[data-v-3592d125]{background:url(" + escape(__webpack_require__(1206)) + ") no-repeat;background-size:100% 100%}.login .cont-box[data-v-3592d125]{width:300px}.login table.bd[data-v-3592d125]{right:8%}.login .login-box[data-v-3592d125]{width:300px;padding-bottom:8px}.login .login-box[data-v-3592d125]:after{width:360px}.login .login-box .item input[data-v-3592d125]{width:150px}}@media screen and (min-width:1360px) and (max-width:1439px){.login .cont-box[data-v-3592d125]{width:310px}.login table.bd[data-v-3592d125]{right:13%}.login .login-box[data-v-3592d125]{width:310px;padding-bottom:0}.login .login-box[data-v-3592d125]:after{width:370px}.login .login-box .item input[data-v-3592d125]{width:130px}.login .login-box .input-hd[data-v-3592d125]{padding:30px 0 35px}}@media screen and (min-width:1440px){.login table.bd[data-v-3592d125]{right:15%}}", ""]);

// exports


/***/ }),

/***/ 1722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".user[data-v-628b2a0e]{padding:100px 0 0}.user .user-box[data-v-628b2a0e]{box-shadow:2px 2px 8px #ddd;background:#fcfcfc;border-radius:2px;border:1px solid #ddd;width:550px;margin:0 auto 30px}.user .user-box .hd[data-v-628b2a0e]{height:150px;line-height:150px;text-align:center;color:#444}.user .user-box .hd img[data-v-628b2a0e]{vertical-align:middle}.user .user-box .cont[data-v-628b2a0e]{margin:0 auto 45px;width:300px}.user .user-box .cont .fitem[data-v-628b2a0e]{margin:0 0 22px}.user .user-box .cont .input-icon[data-v-628b2a0e]{padding:0 5px}.user .user-box .cont .more[data-v-628b2a0e]{margin-top:15px;text-align:center}.user .user-box .cont .more a[data-v-628b2a0e]{font-size:13px}.user .user-box .cont .more .spt[data-v-628b2a0e]{font-style:normal;padding:0 12px;color:#ddd}.user .user-box .cont .submit[data-v-628b2a0e]{width:100%;margin:0}.user-reg[data-v-628b2a0e]{padding-top:50px}", ""]);

// exports


/***/ }),

/***/ 1923:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("48937878", content, true, {});

/***/ }),

/***/ 1934:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1633);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("72681a65", content, true, {});

/***/ }),

/***/ 2023:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1722);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4dd0b878", content, true, {});

/***/ }),

/***/ 2169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/m-login-bg.fea356c.png";

/***/ }),

/***/ 2335:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test"
  }, [_vm._v("\n\tTest\n")])
},staticRenderFns: []}

/***/ }),

/***/ 2346:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('img', {
    staticClass: "banner",
    attrs: {
      "src": __webpack_require__(2169)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "inner"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.loginShortcutsDlg = true
      }
    }
  }, [_vm._v("创建桌面图标")])])])]), _vm._v(" "), _c('table', {
    staticClass: "bd"
  }, [_c('tr', [_c('td', {
    staticClass: "cont-box"
  }, [_c('div', {
    staticClass: "login-box"
  }, [_c('div', {
    staticClass: "input-hd"
  }, [_vm._v("\n            用户登录 / SIGN IN\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('i', {
    staticClass: "iconfont icon-shouji"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.userForm.phoneNo),
      expression: "userForm.phoneNo",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号",
      "onkeyup": "this.value=this.value.replace(/[^0-9-]+/,'');"
    },
    domProps: {
      "value": (_vm.userForm.phoneNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.userForm, "phoneNo", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('i', {
    staticClass: "iconfont icon-tubiaosvg-"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.userForm.password),
      expression: "userForm.password",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码"
    },
    domProps: {
      "value": (_vm.userForm.password)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onClickSubmitBtn.apply(null, arguments)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.userForm, "password", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weixin-row more"
  }, [_c('a', {
    staticClass: "weixin-a",
    attrs: {
      "title": "使用微信扫码登录"
    },
    on: {
      "click": _vm.wxLogin
    }
  }, [_c('i', {
    staticClass: "iconfont icon-qrcode"
  }), _vm._v("\n                扫码登录\n              ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/user-pwd-set"
    }
  }, [_vm._v("密码设置")])], 1), _vm._v(" "), _c('i-button', {
    staticClass: "submit",
    attrs: {
      "type": "primary",
      "loading": _vm.submitLoading
    },
    on: {
      "click": function($event) {
        return _vm.onClickSubmitBtn()
      }
    }
  }, [_vm._v("登录")])], 1), _vm._v(" "), _c('div', {
    staticClass: "msg"
  }, [(_vm.msg) ? [_c('i', {
    staticClass: "iconfont icon-alert1"
  }), _vm._v(" " + _vm._s(_vm.msg))] : _vm._e()], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "login-foot"
  }, [_c('my-footer', {
    staticClass: "pc-foot"
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "closable": false,
      "width": "800",
      "styles": {
        top: '0'
      },
      "title": "请选择一个商户登录",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.tenantListDlg),
      callback: function($$v) {
        _vm.tenantListDlg = $$v
      },
      expression: "tenantListDlg"
    }
  }, [_c('ul', {
    staticClass: "sel-tenant"
  }, _vm._l((_vm.tenantList), function(t) {
    return _c('li', {
      attrs: {
        "title": t.tenantName
      },
      on: {
        "click": function($event) {
          return _vm.login(t.encTid, null)
        }
      }
    }, [_c('img', {
      staticClass: "logo",
      attrs: {
        "src": _vm.g.Util.getImgUrl(t.logoPathname, 200, null, 'EEEEEE', t.encTid)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "tit"
    }, [_vm._v(_vm._s(t.tenantName))])])
  }), 0)]), _vm._v(" "), _c('modal', {
    attrs: {
      "closable": false,
      "width": "840",
      "styles": {
        top: '0'
      },
      "title": "请选择一个门店登录",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.shopListDlg),
      callback: function($$v) {
        _vm.shopListDlg = $$v
      },
      expression: "shopListDlg"
    }
  }, [_c('ul', {
    staticClass: "sel-shop"
  }, _vm._l((_vm.shopList), function(s) {
    return (s.userType === 1) ? _c('li', {
      attrs: {
        "title": s.shopName
      },
      on: {
        "click": function($event) {
          return _vm.login(s.encTid, s.encSid)
        }
      }
    }, [_c('img', {
      staticClass: "logo",
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.logoPathname, 200, 200, 'DDDDDD', s.encTid)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "tit"
    }, [_vm._v(_vm._s(s.shopName))])]) : _vm._e()
  }), 0)]), _vm._v(" "), _c('modal', {
    attrs: {
      "width": "700",
      "title": "如何创建桌面快捷方式"
    },
    model: {
      value: (_vm.loginShortcutsDlg),
      callback: function($$v) {
        _vm.loginShortcutsDlg = $$v
      },
      expression: "loginShortcutsDlg"
    }
  }, [_c('div', {
    staticClass: "big"
  }, [_vm._v("\n      可在电脑桌面创建健总管快捷图标，以后登录健总管，可直接在桌面双击快捷图标。具体步骤如下：\n      "), _c('ol', {
    staticClass: "p10"
  }, [_c('li', [_vm._v("在电脑桌面右键“新建 》 快捷方式”")]), _vm._v(" "), _c('li', [_vm._v("在“对象的位置”中填写：https://web.jzongguan.com")]), _vm._v(" "), _c('li', [_vm._v("快捷方式的名称填写：健总管")])]), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_c('b', [_vm._v("备注：")]), _vm._v(" 需要将我们推荐的浏览器作为默认浏览器，例如： 360极速浏览器，谷歌浏览器、猎豹浏览器等\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "center mt20 p10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.loginShortcutsDlg = false
      }
    }
  }, [_vm._v("知道了")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "width": "1000",
      "styles": {
        top: '10px'
      },
      "title": "请选择一个登录背景图",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.bglistDlg),
      callback: function($$v) {
        _vm.bglistDlg = $$v
      },
      expression: "bglistDlg"
    }
  }, [(_vm.bglistDlg) ? _c('ul', {
    staticClass: "bglist"
  }, _vm._l((_vm.bgImgFiles), function(f) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.setBgToCookie(f)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Conf.IMG_LIB_URL + '/pc_login_bg/' + f
      }
    })])
  }), 0) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticStyle: {
      "width": "200px"
    },
    on: {
      "click": function($event) {
        _vm.bglistDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "登录验证码校验",
      "width": "400"
    },
    model: {
      value: (_vm.loginAuthcodeDlg),
      callback: function($$v) {
        _vm.loginAuthcodeDlg = $$v
      },
      expression: "loginAuthcodeDlg"
    }
  }, [_c('div', {
    staticClass: "center p10"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "短信验证码"
    },
    on: {
      "on-enter": _vm.checkLogonAuthcode
    },
    model: {
      value: (_vm.loginAuthcode),
      callback: function($$v) {
        _vm.loginAuthcode = _vm._n($$v)
      },
      expression: "loginAuthcode"
    }
  }), _vm._v("  \n      "), _c('i-button', {
    attrs: {
      "disabled": _vm.authcodeBtnDisabled
    },
    on: {
      "click": function($event) {
        return _vm.onClickSmsAuthcodeBtn()
      }
    }
  }, [_vm._v(_vm._s(_vm.authcodeLabel))])], 1), _vm._v(" "), _c('div', {
    staticClass: "center form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.checkLogonAuthcode
    }
  }, [_vm._v("确定")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "footer-hide": "",
      "title": "微信扫码登录健总管",
      "width": "300",
      "mask-closable": false
    },
    model: {
      value: (_vm.wxLodingShow),
      callback: function($$v) {
        _vm.wxLodingShow = $$v
      },
      expression: "wxLodingShow"
    }
  }, [_c('div', {
    staticClass: "wx-qrcode",
    class: {
      'wx-expire': _vm.qrcodeSecondsCount == 0
    }
  }, [_c('div', [(_vm.qrcodeWxUrl) ? _c('qrcode-vue', {
    attrs: {
      "value": _vm.qrcodeWxUrl,
      "size": 200,
      "level": "H"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "wx-refresh",
    class: {
      'hide': _vm.qrcodeSecondsCount !== 0
    }
  }, [_c('a', {
    on: {
      "click": _vm.wxLogin
    }
  }, [_c('i', {
    staticClass: "ivu-icon ivu-icon-refresh"
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "center notice"
  }, [(_vm.qrcodeSecondsCount > 0) ? [_vm._v("\n          请使用微信扫一扫，还有\n          "), _c('b', [_c('span', {
    staticClass: "red wx-sec"
  }, [_vm._v(_vm._s(_vm.qrcodeSecondsCount))])]), _vm._v("\n          秒过期\n        ")] : [_c('span', {
    staticClass: "red"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 已过期，请刷新")])]], 2)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "l"
  }, [_c('a', {
    attrs: {
      "href": "http://www.jzongguan.com",
      "target": "_blank",
      "title": "去【健总管】网站首页"
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": "http://jzongguan.com/img/logo.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-foot"
  }, [_vm._v("\n      © 2022   南京强点信息技术有限公司  "), _c('br'), _c('a', {
    attrs: {
      "href": "tel:025-66045495"
    }
  }, [_vm._v("025-66045495")]), _vm._v("  "), _c('span', {
    staticClass: "sptr"
  }, [_vm._v("|")]), _vm._v("  工信部备案号：苏ICP备17021267号\n    ")])
}]}

/***/ }),

/***/ 2435:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user user-reg"
  }, [_c('div', {
    staticClass: "user-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('i-form', {
    ref: "userForm",
    attrs: {
      "model": _vm.userForm,
      "rules": _vm.userFormRule,
      "block": ""
    }
  }, [_c('form-item', {
    staticClass: "fitem",
    attrs: {
      "prop": "phoneNo"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "size": "large",
      "placeholder": "手机号"
    },
    model: {
      value: (_vm.userForm.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "phoneNo", _vm._n($$v))
      },
      expression: "userForm.phoneNo"
    }
  }, [_c('icon', {
    staticClass: "input-icon",
    attrs: {
      "slot": "prepend",
      "type": "ios-person",
      "size": "20"
    },
    slot: "prepend"
  })], 1)], 1), _vm._v(" "), _c('form-item', {
    staticClass: "fitem",
    attrs: {
      "prop": "smsAuthcode"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "size": "large",
      "placeholder": "手机验证码"
    },
    model: {
      value: (_vm.userForm.smsAuthcode),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "smsAuthcode", _vm._n($$v))
      },
      expression: "userForm.smsAuthcode"
    }
  }, [_c('i-button', {
    attrs: {
      "slot": "append",
      "disabled": _vm.authcodeBtnDisabled
    },
    on: {
      "click": function($event) {
        return _vm.onClickSmsAuthcodeBtn()
      }
    },
    slot: "append"
  }, [_vm._v(_vm._s(_vm.authcodeLabel))])], 1)], 1), _vm._v(" "), _c('form-item', {
    staticClass: "fitem",
    attrs: {
      "prop": "password"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "password",
      "size": "large",
      "placeholder": "设置密码（至少6位）"
    },
    model: {
      value: (_vm.userForm.password),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "password", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.password"
    }
  }, [_c('icon', {
    staticClass: "input-icon",
    attrs: {
      "slot": "prepend",
      "type": "ios-lock-outline",
      "size": "18"
    },
    slot: "prepend"
  })], 1)], 1), _vm._v(" "), _c('form-item', {
    staticClass: "fitem",
    attrs: {
      "prop": "passwordCheck"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "password",
      "size": "large",
      "placeholder": "密码确认"
    },
    on: {
      "on-enter": _vm.onClickSubmitBtn
    },
    model: {
      value: (_vm.userForm.passwordCheck),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "passwordCheck", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.passwordCheck"
    }
  }, [_c('icon', {
    staticClass: "input-icon",
    attrs: {
      "slot": "prepend",
      "type": "ios-lock-outline",
      "size": "18"
    },
    slot: "prepend"
  })], 1)], 1), _vm._v(" "), _c('form-item', [_c('i-button', {
    staticClass: "submit",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": _vm.onClickSubmitBtn
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "more"
  }, [_c('router-link', {
    attrs: {
      "to": "/user-login"
    }
  }, [_vm._v("用户登录")]), _vm._v(" "), _c('i', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/tenant-reg"
    }
  }, [_vm._v("商户注册")])], 1)], 1)]), _vm._v(" "), _c('my-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('a', {
    attrs: {
      "href": "http://www.jzongguan.com",
      "target": "_blank",
      "title": "去【健总管】网站首页"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(1186)
    }
  })])])
}]}

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1923)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1228),
  /* template */
  __webpack_require__(2335),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2f4cd5f0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});