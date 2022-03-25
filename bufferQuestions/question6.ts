#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */

function getValue(data: Buffer, offsetSrt: number, offsetEnd: number): string {
  return data.toString("utf-8", offsetSrt, offsetEnd);
}

function decodeBuffer(data: Buffer) {
  const map = new Map();
  map.set("symbol", getValue(data, 0, 3));
  map.set("price", BigInt(getValue(data, 4, 11)));
  map.set("quantity", BigInt(getValue(data, 12, 19)));
  map.set("side", parseInt(getValue(data, 20, 21)));
  map.set("type", parseInt(getValue(data, 21, 22)));

  return map;
}

module.exports = decodeBuffer;
