export declare class JSONL {
    static stringify(array: object[]): string;
    static parse<T>(jsonl: string): Array<T>;
}
