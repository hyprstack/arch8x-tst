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
  let res = {};

  for (const [key, value] of Object.entries(data)) {
    let _val = value;

    // It was not specified if an error should be thrown if symbol is greater than length 3
    if (key === "symbol" && typeof _val === "string") {
      _val = _val.slice(0, 3);
    }

    if (typeof _val === "bigint") {
      const buf = Buffer.alloc(8);
      buf.writeBigInt64BE(_val, 0);
      res[key] = buf;
    } else {
      res[key] = _val;
    }
  }

  return Buffer.from(JSON.stringify(res));
}

const sample: dataObj = {
  symbol: "BTC",
  price: BigInt(90071993),
  quantity: BigInt(90071992),
  side: side.buy,
  type: type.market,
};

const res: Buffer = encodeBuffer(sample);

console.log(res.length);
console.log(DecodeBuffer(res));
