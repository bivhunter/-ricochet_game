"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinalScene = function () {
    function FinalScene(game, round) {
        _classCallCheck(this, FinalScene);

        this._game = game;
        this._round = round;
        this._time = 0;
        this._init();
    }

    _createClass(FinalScene, [{
        key: "_init",
        value: function _init() {
            var text = void 0;
            this._game.gameField.innerHTML = "";
            if (this._round === null) {
                text = "Victory";
            } else if (this._round === undefined) {
                text = "Game By Hunter";
            } else {
                text = "GameOver";
            }

            this._text = text;
            this._info = new Info("");
        }
    }, {
        key: "update",
        value: function update(dt) {
            var info = this._info;
            var text = this._text;

            if (this._time < 10) {
                info.enableAnimation();
                info.animate(dt, 10, text);
                this._time += dt;
            } else {
                info.disableAnimation();
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (!this._game.gameField.contains(this._info.getElem())) {
                this._game.gameField.appendChild(this._info.getElem());
            };
        }
    }]);

    return FinalScene;
}();