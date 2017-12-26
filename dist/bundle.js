/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CellStateEnum;
(function (CellStateEnum) {
    CellStateEnum["NEUTRAL"] = "neutral";
    CellStateEnum["YELLOW"] = "yellow";
    CellStateEnum["RED"] = "red";
})(CellStateEnum = exports.CellStateEnum || (exports.CellStateEnum = {}));
var PlayerEnum;
(function (PlayerEnum) {
    PlayerEnum["YELLOW"] = "yellow";
    PlayerEnum["RED"] = "red";
})(PlayerEnum = exports.PlayerEnum || (exports.PlayerEnum = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.isAuthorizedPlay = function (cells, col) {
        for (var i = 5; i >= 0; i--) {
            if (cells[i * 7 + col].state === model_1.CellStateEnum.NEUTRAL) {
                return true;
            }
        }
        return false;
    };
    Helper.getPlayFromCol = function (cells, col) {
        for (var i = 5; i >= 0; i--) {
            if (cells[i * 7 + col].state === model_1.CellStateEnum.NEUTRAL) {
                return i * 7 + col;
            }
        }
    };
    Helper.getColPos = function (cell) {
        return cell.id - Math.floor(cell.id / 7) * 7;
    };
    Helper.getRowPos = function (cell) {
        return Math.floor(cell.id / 7);
    };
    Helper.FourOrMoreOnRight = function (row) {
        return 7 - row >= 4;
    };
    Helper.FourOrMoreOnLeft = function (col) {
        return col >= 4;
    };
    Helper.FourOrMoreOnBottom = function (row) {
        return 6 - row >= 4;
    };
    return Helper;
}());
exports.Helper = Helper;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);
var Grid_1 = __webpack_require__(5);
ReactDOM.render(React.createElement(Grid_1.Grid, null), document.getElementById("example"));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Cell_1 = __webpack_require__(6);
var model_1 = __webpack_require__(1);
var helper_1 = __webpack_require__(2);
var victory_1 = __webpack_require__(7);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        var _this = _super.call(this, props) || this;
        _this.player = model_1.PlayerEnum.RED;
        _this.victory = new victory_1.Victory();
        var cells = [];
        for (var i = 0; i < 7 * 6; i++) {
            cells.push({
                id: i,
                state: model_1.CellStateEnum.NEUTRAL
            });
        }
        _this.state = {
            cells: cells
        };
        return _this;
    }
    Grid.prototype.onCellClick = function (cell) {
        var col = helper_1.Helper.getColPos(cell);
        if (cell.state === model_1.CellStateEnum.NEUTRAL && helper_1.Helper.isAuthorizedPlay(this.state.cells, col)) {
            this.setCellState(helper_1.Helper.getPlayFromCol(this.state.cells, col));
            if (this.victory.isThereAWinner(this.state.cells)) {
                alert("The player " + this.player + " win !");
            }
            this.nextPlayer();
        }
    };
    Grid.prototype.setCellState = function (id) {
        var cells = this.state.cells.slice();
        cells[id].state = this.player === model_1.PlayerEnum.RED ? model_1.CellStateEnum.RED : model_1.CellStateEnum.YELLOW;
        this.setState({
            cells: cells
        });
    };
    Grid.prototype.nextPlayer = function () {
        this.player = this.player === model_1.PlayerEnum.RED ? model_1.PlayerEnum.YELLOW : model_1.PlayerEnum.RED;
    };
    Grid.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "connect4-grid" }, this.state.cells.map(function (c) {
            return React.createElement(Cell_1.CellComponent, { onClick: function () {
                    _this.onCellClick(c);
                }, state: c.state, id: c.id, key: c.id.toString() }, c.id);
        })));
    };
    return Grid;
}(React.Component));
exports.Grid = Grid;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CellComponent = /** @class */ (function (_super) {
    __extends(CellComponent, _super);
    function CellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellComponent.prototype.render = function () {
        var cellClass = "connect4-cell connect4-cell-" + this.props.state;
        return (React.createElement("div", { onClick: this.props.onClick, className: cellClass }));
    };
    return CellComponent;
}(React.Component));
exports.CellComponent = CellComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var helper_1 = __webpack_require__(2);
var Victory = /** @class */ (function () {
    function Victory() {
    }
    Victory.prototype.isThereAWinner = function (cells) {
        var _this = this;
        var isWin = false;
        cells.map(function (c) {
            var row = helper_1.Helper.getRowPos(c);
            var col = helper_1.Helper.getColPos(c);
            var possibleRightRowVictory = helper_1.Helper.FourOrMoreOnRight(col);
            var possibleLeftRowVictory = helper_1.Helper.FourOrMoreOnLeft(col);
            var possibleColVictory = helper_1.Helper.FourOrMoreOnBottom(row);
            if (c.state === model_1.CellStateEnum.NEUTRAL) {
                return;
            }
            if (possibleRightRowVictory && possibleColVictory && _this.checkRightDiagVictory(cells, c)
                || possibleLeftRowVictory && possibleColVictory && _this.checkLeftDiagVictory(cells, c)
                || possibleRightRowVictory && _this.checkRowVictory(cells, c)
                || possibleColVictory && _this.checkColVictory(cells, c)) {
                isWin = true;
            }
        });
        return isWin;
    };
    Victory.prototype.checkRightDiagVictory = function (cells, cell) {
        return (cells[cell.id + 8].state === cell.state
            && cells[cell.id + 16].state === cell.state
            && cells[cell.id + 24].state === cell.state);
    };
    Victory.prototype.checkLeftDiagVictory = function (cells, cell) {
        return (cells[cell.id + 6].state === cell.state
            && cells[cell.id + 12].state === cell.state
            && cells[cell.id + 18].state === cell.state);
    };
    Victory.prototype.checkRowVictory = function (cells, cell) {
        return (cells[cell.id + 1].state === cell.state
            && cells[cell.id + 2].state === cell.state
            && cells[cell.id + 3].state === cell.state);
    };
    Victory.prototype.checkColVictory = function (cells, cell) {
        return (cells[cell.id + 7].state === cell.state
            && cells[cell.id + 14].state === cell.state
            && cells[cell.id + 21].state === cell.state);
    };
    return Victory;
}());
exports.Victory = Victory;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map