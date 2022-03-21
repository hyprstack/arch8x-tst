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

function encodeBuffer(data: dataObj): Buffer {
  let res = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "bigint") {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigInt64BE(value, 0);
      res[key] = buf;
    } else {
      res[key] = value;
    }
  }

  return Buffer.from(JSON.stringify(res));
}

const sample: dataObj = {
  symbol: "$",
  price: BigInt(9007199254099),
  quantity: BigInt(9007199254099),
  side: side.buy,
  type: type.market,
};

const res: Buffer = encodeBuffer(sample);

console.log(res);
console.log(DecodeBuffer(res));
