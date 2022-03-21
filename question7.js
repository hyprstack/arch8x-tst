#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */

/*
Divide and conquer sort
 */

const hiredList = [
  { name: "Stuart", dateHired: new Date("2020-02-10").getTime() },
  { name: "Bob", dateHired: new Date("2020-03-10").getTime() },
  { name: "Nick", dateHired: new Date("2020-07-10").getTime() },
  { name: "Kim", dateHired: new Date("2020-04-10").getTime() },
  { name: "Mark", dateHired: new Date("2020-05-22").getTime() },
  { name: "John", dateHired: new Date("2020-01-10").getTime() },
  { name: "James", dateHired: new Date("2020-07-20").getTime() },
  { name: "Paul", dateHired: new Date("2020-05-10").getTime() },
];

function divvyUp(arr, left, right, prop) {
  const middle = Math.floor((right + left) / 2);
  const pivot = arr[middle];
  let lft = left;
  let rgt = right;

  while (lft <= rgt) {
    while (arr[lft][prop] > pivot[prop]) {
      lft++;
    }

    while (arr[rgt][prop] < pivot[prop]) {
      rgt--;
    }

    if (lft <= rgt) {
      [arr[lft], arr[rgt]] = [arr[rgt], arr[lft]];
      lft++;
      rgt--;
    }
  }

  return lft;
}

function sortByDate(array, left = 0, right = array.length - 1) {
  const prop = "dateHired";
  const len = array.length;

  if (len > 1) {
    const idx = divvyUp(array, left, right, prop);

    if (left < idx - 1) {
      sortByDate(array, left, idx - 1);
    }

    if (idx < right) {
      sortByDate(array, idx, right);
    }
  }

  return array;
}

// const desiredOrder = [
//   "James",
//   "Nick",
//   "Mark",
//   "Paul",
//   "Kim",
//   "Bob",
//   "Stuart",
//   "John",
// ];
console.log(sortByDate(hiredList));
