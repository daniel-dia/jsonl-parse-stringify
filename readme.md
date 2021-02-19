# JSONL parse stringify

this util simply allow you to parse and interact with JSONL same way as you interact to JSON.

## installation

```
npm install jsonl-parse-stringify --save
```

## Usage

Typescript

```ts
import JSONL from "jsonl-parse-stringify";

var parsed = JSONL.parse<MyType>(myJsonlString);
var stringified = JSONL.stringify(myArray);
```

Plain Javascript

```js
const JSONL = require("jsonl-parse-stringify");

var parsed = JSONL.parse(myJsonlString);
var stringified = JSONL.stringify(myArray);
```
