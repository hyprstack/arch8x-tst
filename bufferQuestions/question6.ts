#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */

function decodeBuffer(data: Buffer) {
  const parsed = JSON.parse(data.toString("utf8"));
  let res = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (key === "price" || key === "quantity") {
      const buf = Buffer.from(JSON.stringify(value));
      res[key] = buf.readBigUInt64BE(0);
    } else {
      res[key] = value;
    }
  }

  return res;
}

module.exports = decodeBuffer;
