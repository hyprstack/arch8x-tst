#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */
function decodeBuffer(data) {
    var parsed = JSON.parse(data.toString("utf8"));
    var res = {};
    for (var _i = 0, _a = Object.entries(parsed); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === "price" || key === "quantity") {
            var buf = Buffer.from(JSON.stringify(value));
            res[key] = buf.readBigUInt64BE(0);
        }
        else {
            res[key] = value;
        }
    }
    return res;
}
module.exports = decodeBuffer;
