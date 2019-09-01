"use strict";
exports.__esModule = true;
var default_1 = /** @class */ (function () {
    function default_1() {
        var _this = this;
        this.events = {};
        this.on = function (event, action) {
            if (typeof _this.events[event] === 'undefined')
                _this.events[event] = [];
            _this.events[event].push(action);
        };
        this.off = function (event) {
            delete _this.events[event];
        };
        this.emit = function (event, data) {
            if (typeof _this.events[event] === 'undefined')
                return;
            _this.events[event].forEach(function (func) { return func(data); });
        };
    }
    return default_1;
}());
exports["default"] = default_1;
