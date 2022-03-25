#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */
const DecodeBuffer = require("./question6");
enum side {
  buy,
  sell,
}

enum type {
  limit,
  market,
}

type dataObj = {
  symbol: string;
  price: bigint;
  quantity: bigint;
  side: side;
  type: type;
};

// Given there is no description on the format of the output or input to the method, I decided to produce and consume an object and sequentially iterate through it using the Object.entries
// method which ensures order of properties.
function encodeBuffer(data: dataObj): Buffer {
  let res = Buffer.alloc(22);

  for (const [key, value] of Object.entries(data)) {
    let _val = value;

    switch (key) {
      case "symbol":
        if (typeof _val === "string") {
          res.write(_val.slice(0, 3), 0);
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

const sample: dataObj = {
  symbol: "BTC",
  price: BigInt(90071993),
  quantity: BigInt(90991992),
  side: side.buy,
  type: type.market,
};

const res: Buffer = encodeBuffer(sample);

console.log(res.toString("utf-8", 4, 12));
console.log(DecodeBuffer(res));
