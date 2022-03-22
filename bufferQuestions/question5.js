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
        var _val = value;
        // It was not specified if an error should be thrown if symbol is greater than length 3
        if (key === "symbol" && typeof _val === "string") {
            _val = _val.slice(0, 3);
        }
        // if (typeof _val === "bigint") {
        //   const buf = Buffer.alloc(8);
        //   buf.writeBigInt64BE(_val, 0);
        //   res[key] = buf;
        // } else {
        //   res[key] = _val;
        // }
        res[key] = _val;
    }
    return Buffer.from(JSON.stringify(res));
}
var sample = {
    symbol: "BTC",
    price: BigInt(90071993),
    quantity: BigInt(90071992),
    side: side.buy,
    type: type.market
};
var res = encodeBuffer(sample);
console.log(res.length);
console.log(DecodeBuffer(res));
