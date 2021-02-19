export class JSONL {
  public static stringify(array: object[]): string {
    return array.map((object) => JSON.stringify(object)).join("\n");
  }

  public static parse<T>(jsonl: string): Array<T> {
    return jsonl
      .split("\n")
      .filter((s) => s !== "")
      .map((str) => JSON.parse(str));
  }
}
