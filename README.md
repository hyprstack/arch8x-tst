NodeJs Full-stack developer question

1 - In javascript `{a: 1} === {a: 1}` is false because the objects point to different objects, despite having identical 
contents and using strict equality.

2 - The `for await(const a of [p1, p2, p3]) {...}` loop with iterate through the array and wait for each promise to resolve 
before moving to the next element in the array of promises. `[p1, p2, p3].forEach(...)` will fire off the promises, 
but not wait for any of them to resolve before moving on tot the next element in the array of promises. It behaves more
like `await Promise.all[]` in that sense;

3 - `Map` like `Object` is also a data collection where the data is stored as pairs. `Map` has improved performance over
`Object`, and it also provides extra functionality. `Map` allows for `keys` to be both object and primitive values. 
`Map` also remembers the original insertion order of the keys. It comes with a set of **helper** functions too ('clear', 'get', 'set', 'delete' and 'has').
Use cases for `Map`:
 . Iterate through the keys of the collection and perform async operations on them as `Map` returns an iterable
 . Better performance in storing large sets of data
 . Preserve the order of the keys

4 - Assuming the use of the un-published local library was established using the `npm link` command, one would unlink it
with `npm unlink <packageName>` which would remove the local symlink (not the global one) and then run `npm install` to
install the remote published version of the library.

5 - See script `bufferQuestions/question5.ts`

6 - See script `bufferQuestions/question6.ts`

7 - See script `question7.js`

8 - 
```typescript
 const b: {
    a: any; //nothing is specified in spec
} = {
    a: "Bob"
}
```

9 - `Enums` are enumerated global constant identifiers. `Enums` are also specific to typescript and do not exist in Javascript.
`Enums` allow a user to define an accessible list with human readable values. `Object` is the type level extension of objects in Javascript.

10 - See `jestMocks/question10.spec.js`
