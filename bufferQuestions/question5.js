#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */
var DecodeBuffer = require("./question6");
var side;
(function (side) {
    side[side["buy"] = 0] = "buy";
    side[side["sell"] = 1] = "sell";
})(side || (side = {}));
var type;
(function (type) {
    type[type["limit"] = 0] = "limit";
    type[type["market"] = 1] = "market";
})(type || (type = {}));
function encodeBuffer(data) {
    var res = {};
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === "bigint") {
            var buf = Buffer.allocUnsafe(8);
            buf.writeBigInt64BE(value, 0);
            res[key] = buf;
        }
        else {
            res[key] = value;
        }
    }
    return Buffer.from(JSON.stringify(res));
}
var sample = {
    symbol: "$",
    price: BigInt(9007199254099),
    quantity: BigInt(9007199254099),
    side: side.buy,
    type: type.market
};
var res = encodeBuffer(sample);
console.log(res);
console.log(DecodeBuffer(res));
