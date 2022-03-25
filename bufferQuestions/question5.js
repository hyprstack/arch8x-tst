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
// Given there is no description on the format of the output or input to the method, I decided to produce and consume an object and sequentially iterate through it using the Object.entries
// method which ensures order of properties.
function encodeBuffer(data) {
    var res = Buffer.alloc(22);
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var _val = value;
        switch (key) {
            case "symbol":
                if (typeof _val === "string") {
                    res.write(_val, 0);
                }
                break;
            case "price":
                if (typeof _val === "bigint") {
                    res.write(_val.toString(), 4);
                }
                break;
            case "quantity":
                if (typeof _val === "bigint") {
                    res.write(_val.toString(), 12);
                }
                break;
            case "side":
                if (typeof _val === "number") {
                    res.write(_val.toString(), 20);
                }
                break;
            case "type":
                if (typeof _val === "number") {
                    res.write(_val.toString(), 21);
                }
                break;
            default:
                break;
        }
    }
    return res;
}
var sample = {
    symbol: "BTC",
    price: BigInt(90071993),
    quantity: BigInt(90991992),
    side: side.buy,
    type: type.market
};
var res = encodeBuffer(sample);
console.log(res.toString("utf-8", 4, 12));
console.log(DecodeBuffer(res));
