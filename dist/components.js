"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
	function Menu(options) {
		_classCallCheck(this, Menu);

		this._header = options.header || "";
		this._menuList = options.menuItems || [];
		this._init();
	}

	_createClass(Menu, [{
		key: "_init",
		value: function _init() {
			var menuWrapper = document.createElement("div");
			menuWrapper.classList.add("menu");

			var header = document.createElement("h1");
			header.textContent = this._header;
			header.classList.add("menu-header");

			var menuList = document.createElement("ul");

			this._menuList.forEach(function (item) {
				var listItem = document.createElement("li");
				menuList.appendChild(listItem);

				var span = document.createElement("span");
				listItem.appendChild(span);
				span.textContent = item;

				var temp = item.split(" ");
				item = temp.join("-");
				listItem.classList.add("menu-" + item.toLowerCase());
			});

			menuList.classList.add("menu-list");

			menuWrapper.appendChild(header);
			menuWrapper.appendChild(menuList);
			this._elem = menuWrapper;
			this._menuList = menuList;

			this._initMarker();

			//console.log(menuWrapper);
		}
	}, {
		key: "_initMarker",
		value: function _initMarker() {
			this.marker = document.createElement("div");
			this.marker.classList.add("menu-marker");

			var selectedItem = this._menuList.firstElementChild;
			this._selectedItem = selectedItem;
			this._select(selectedItem);
		}
	}, {
		key: "_select",
		value: function _select(elem) {
			this._selectedItem.classList.remove("menu-selected");
			elem.classList.add("menu-selected");
			elem.querySelector("span").appendChild(this.marker);
			this._selectedItem = elem;
		}
	}, {
		key: "selectNext",
		value: function selectNext() {
			if (this._selectedItem.nextElementSibling) {
				this._select(this._selectedItem.nextElementSibling);
			} else {
				this._select(this._menuList.firstElementChild);
			}
		}
	}, {
		key: "selectPrevious",
		value: function selectPrevious() {
			if (this._selectedItem.previousElementSibling) {
				this._select(this._selectedItem.previousElementSibling);
			} else {
				this._select(this._menuList.lastElementChild);
			}
		}
	}, {
		key: "getSelectedItem",
		value: function getSelectedItem() {
			return this._selectedItem;
		}
	}, {
		key: "getElem",
		value: function getElem() {
			return this._elem;
		}
	}]);

	return Menu;
}();

var Header = function () {
	function Header(options) {
		_classCallCheck(this, Header);

		this.score = options.score || 0;
		this.life = options.lifes || 0;
		this.round = options.round || 0;

		this.options = {
			Round: this.round,
			Lifes: this.life,
			Score: this.score
		};
		this._init();
	}

	_createClass(Header, [{
		key: "_init",
		value: function _init() {

			/*let header = document.createElement("div");
   header.classList.add("header");*/

			var ul = document.createElement("ul");
			ul.classList.add("header-list");
			//		header.appendChild(ul);

			for (var key in this.options) {
				var li = document.createElement("li");
				var span = document.createElement("span");
				var classStr = "header-" + key.toLowerCase();

				span.classList.add(classStr);
				span.textContent = key + ": " + this.options[key];

				if (key === "Score") {
					var block = document.createElement("div");
					block.classList.add("header-block");
					li.appendChild(block);
				}
				ul.appendChild(li);
				li.appendChild(span);
			}
			this._elem = ul;
		}
	}, {
		key: "getElem",
		value: function getElem() {
			return this._elem;
		}
	}, {
		key: "setRound",
		value: function setRound(str) {
			this._elem.querySelector(".header-round").textContent = "Round: " + str;
		}
	}, {
		key: "setLifes",
		value: function setLifes(str) {
			this._elem.querySelector(".header-lifes").textContent = "Lifes: " + str;
		}
	}, {
		key: "setScore",
		value: function setScore(str) {
			this._elem.querySelector(".header-score").textContent = "Score: " + str;
		}
	}]);

	return Header;
}();

var Round = function () {
	function Round() {
		_classCallCheck(this, Round);

		this._rounds = {
			round_Demo: ["                    ", "                    ", "                    ", "    p        p    ", "   p p      p p   ", "  p p p    p p p  ", " p p p p  p p p p ", "p p p p pp p p p p", " p p p p  p p p p ", "  p p p    p p p  ", "   p p      p p   ", "    p        p    "],
			round_: ["                    ", "                    ", "                    ", "    p        p    ", "   p p      p p   ", "  p p p    p p p  ", " p p p p  p p p p ", "p p p p pp p p p p", " p p p p  p p p p ", "  p p p    p p p  ", "   p p      p p   ", "    p        p    "],

			round_1: ["                    ", "                    ", "         p          "] /*,
                                                                                     round_4: [
                                                                                     "                    ",
                                                                                     "                    ",
                                                                                     "                    ",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb",
                                                                                     "bbbbbbbbbbbbbbbbbb"
                                                                                     ],
                                                                                     round_3: [
                                                                                     "                    ",
                                                                                     "                    ",
                                                                                     "                    ",
                                                                                     "    p        p    ",
                                                                                     "   p p      p p   ",
                                                                                     "  p p p    p p p  ",
                                                                                     " p p p p  p p p p ",
                                                                                     "p p p p pp p p p p",
                                                                                     " p p p p  p p p p ",
                                                                                     "  p p p    p p p  ",
                                                                                     "   p p      p p   ",
                                                                                     "    p        p    "
                                                                                     ]
                                                                                     */
		};
		this._activeRound = this._rounds.round_Demo;
		this._activeRoundNum = "Demo";
		console.log("round", this._activeRoundNum);
	}

	_createClass(Round, [{
		key: "getActiveRound",
		value: function getActiveRound() {
			return this._activeRound;
		}
	}, {
		key: "getFirstRound",
		value: function getFirstRound() {
			this._activeRound = this._rounds.round_1;
			this._activeRoundNum = 1;
			return this;
		}
	}, {
		key: "getDemoRound",
		value: function getDemoRound() {
			this._activeRound = this._rounds.round_Demo;
			this._activeRoundNum = "Demo";
			return this;
		}
	}, {
		key: "getActiveRoundNum",
		value: function getActiveRoundNum() {
			return this._activeRoundNum;
		}
	}, {
		key: "getNextRound",
		value: function getNextRound() {
			var round = "round_" + (this._activeRoundNum + 1);
			if (!this._rounds[round]) {
				return null;
			}
			this._activeRound = this._rounds[round];
			this._activeRoundNum++;
			return this;
		}
	}]);

	return Round;
}();

var Info = function () {
	function Info(text) {
		_classCallCheck(this, Info);

		this._text = text;
		this.time = 0;
		this.animationTime = 0;
		this.count = 0;
		this._init();
	}

	_createClass(Info, [{
		key: "_init",
		value: function _init() {
			var div = document.createElement("div");
			div.classList.add("info");
			this._elem = div;
			var message = document.createElement("p");
			message.classList.add("info-message");
			message.textContent = this._text;
			this._message = message;
			div.appendChild(message);
		}
	}, {
		key: "enableAnimation",
		value: function enableAnimation() {
			this.isAnimation = true;
		}
	}, {
		key: "disableAnimation",
		value: function disableAnimation() {
			this.isAnimation = false;
			this.time = 0;
			this.animationTime = 0;
			this.count = 0;
		}
	}, {
		key: "animate",
		value: function animate(dt, duration, text) {
			if (!this.isAnimation) {
				return;
			}

			if (this.time < duration) {
				this.time += dt;
				var period = duration / (text.length + 5);
				if (this.animationTime < period) {
					this.animationTime += dt;
				} else {
					if (this.count < text.length) {
						this.addText(text[this.count]);
						this.animationTime = 0;
						this.count++;
					}
				}
			}
		}
	}, {
		key: "getElem",
		value: function getElem() {
			return this._elem;
		}
	}, {
		key: "addText",
		value: function addText(text) {
			this._message.textContent += text;
		}
	}, {
		key: "setText",
		value: function setText(text) {
			this._message.textContent = text;
		}
	}]);

	return Info;
}();