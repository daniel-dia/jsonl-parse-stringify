"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONL = /** @class */ (function () {
    function JSONL() {
    }
    JSONL.stringify = function (array) {
        return array.map(function (object) { return JSON.stringify(object); }).join("\n");
    };
    JSONL.parse = function (jsonl) {
        return jsonl
            .split("\n")
            .filter(function (s) { return s !== ""; })
            .map(function (str) { return JSON.parse(str); });
    };
    return JSONL;
}());
exports.default = JSONL;
