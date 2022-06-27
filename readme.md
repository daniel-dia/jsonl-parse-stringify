# JSONL parse stringify

Parse and interact with JSONL same way as you interact to JSON to parse and stringify.

## installation

```
npm install jsonl-parse-stringify --save
```

## Usage

Typescript

```ts
import JSONL from "jsonl-parse-stringify";

const parsed: MyType[] = JSONL.parse<MyType>(myJsonlString);
const stringified: string = JSONL.stringify(myArray);
```

Plain Javascript

```js
const JSONL = require("jsonl-parse-stringify");

const parsed = JSONL.parse(myJsonlString);
const stringified = JSONL.stringify(myArray);
```
