NodeJs Full-stack developer question

1 - **Explain why `{ a: 1 } === { a: 1 }` is `false` in JavaScript.**

Answer: In javascript `{a: 1} === {a: 1}` is false because the objects point to different objects, despite having identical 
contents and using strict equality.

2 - **Describe the runtime difference(s) between `for await (const a  of [p1, p2, p3]) { ... }` vs `[p1, p2, p3].forEach(async (p) {  await p })`.**

Answer: The `for await(const a of [p1, p2, p3]) {...}` loop with iterate through the array and wait for each promise to resolve 
before moving to the next element in the array of promises. `[p1, p2, p3].forEach(...)` will fire off the promises, 
but not wait for any of them to resolve before moving on tot the next element in the array of promises. It behaves more
like `await Promise.all[]` in that sense;

3 - **Describe good use cases for using a JavaScript `Map` instead of  an `object`.**

Answer: `Map` like `Object` is also a data collection where the data is stored as pairs. `Map` has improved performance over
`Object`, and it also provides extra functionality. `Map` allows for `keys` to be both object and primitive values. 
`Map` also remembers the original insertion order of the keys. It comes with a set of **helper** functions too ('clear', 'get', 'set', 'delete' and 'has').
Use cases for `Map`:
 . Iterate through the keys of the collection and perform async operations on them as `Map` returns an iterable
 . Better performance in storing large sets of data
 . Preserve the order of the keys

4 - **Describe at least one way to substitute a local, unpublished  version of a JavaScript library in place of a another version that  is already published in an NPM registry.**

Answer: Assuming the use of the un-published local library was established using the `npm link` command, one would unlink it
with `npm unlink <packageName>` which would remove the local symlink (not the global one) and then run `npm install` to
install the remote published version of the library.

5 - **Write a script that will encode the following information  sequentially in a JavaScript `Buffer`. No need to include field  metadata, assume the consumer/decoder is aware of the offsets to  use and can parse enum values. Make sure to select data types that  are optimized for payload size, but can adequately express all  possible values given the length and data type: `symbol`: utf-8  string up to 4 characters, `price`: unsigned 64-bit integer,  `quantity`: unsigned 64-bit integer, `side`: enum buy | sell,  `type`: enum limit | market**

Answer: See script `bufferQuestions/question5.ts`

6 - **Write a script that will decode the `Buffer` you generated from  question 5, and return an object with fields as described in the  question.**

Answer: See script `bufferQuestions/question6.ts` - Output of this is proven when running question5.ts

7 - **Write a function that will employ a divide-and-conquer algorithm  that will sort an array of objects by their `dateHired` (native JS  `Date` object) property in descending order. All items in the array  will be an object which has a `dateHired` property which is a valid
`Date` object. You cannot use built-in array sorting methods and  3rd-party libraries, but manipulating the `dateHired` property with  built-in Node.js/ES6+ functions is allowed.**

Answer: See script `question7.js`

8 - **Write a TypeScript variable declaration for a variable `a` that  will guarantee that it is a property name or key of object `b` at  compile-time.**


Answer: 
```typescript
 const b: {
    a: any; //nothing is specified in spec
} = {
    a: "Bob"
}
```

9 - **Explain the differences between `object`s and `enum`s in  TypeScript.** 

Answer: `Enums` are enumerated global constant identifiers. `Enums` are also specific to typescript and do not exist in Javascript.
`Enums` allow a user to define an accessible list with human readable values. `Object` is the type level extension of objects in Javascript.

10 - **Write a `jest` mock of method `fetchAllRecords` that will  return a `Promise` that resolves immediately to array `[1, 2,  3]` that belongs to class `Employee`.**

Answer: See `jestMocks/question10.spec.js` - run `npm run test` in **jestMocks** dir.
