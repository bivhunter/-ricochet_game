"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PauseScene = function () {
	function PauseScene(game, round) {
		_classCallCheck(this, PauseScene);

		this._round = round;
		this._game = game;
		this._init();
	}

	_createClass(PauseScene, [{
		key: "_init",
		value: function _init() {
			var menu = new Menu({
				header: "Pause",
				menuItems: ["Resume", "Restart", "Help", "Quit"]
			});
			//console.log(menu.getElem());
			this._menu = menu;
			this._menuElem = menu.getElem();
		}
	}, {
		key: "update",
		value: function update() {
			if (this._game.checkKeyPress(38)) {
				this._menu.selectPrevious();
			}

			if (this._game.checkKeyPress(40)) {
				this._menu.selectNext();
			}

			if (this._game.checkKeyPress(27)) {
				this._game.returnScene();
			}

			if (this._game.checkKeyPress(13)) {
				console.log(this._game.round);
				switch (this._menu.getSelectedItem().classList[0]) {
					case "menu-resume":
						{
							this._game.returnScene();
						}
						break;
					case "menu-restart":
						this._game.setScene({
							scene: GameOverScene,
							round: this._game.round,
							isClear: true,
							isLoss: true
						});
						break;
					case "menu-help":
						this._game.setScene({
							scene: HelpScene,
							isClear: true
						});
						break;
					case "menu-quit":
						this._game.setScene({
							scene: FinalScene,
							isClear: true,
							round: this._round
						});
						break;
				}
			}
		}
	}, {
		key: "render",
		value: function render() {

			if (!this._game.gameField.contains(this._menuElem)) {
				this._game.gameField.appendChild(this._menuElem);
				console.log("append child");
			}
		}
	}]);

	return PauseScene;
}();