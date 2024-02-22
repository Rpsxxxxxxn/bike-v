export default class SingleValidator {
  static isNullOrEmpty(value: string | null): boolean {
    return value === "" || value === null;
  }

  static isNullOrZero(value: number | null): boolean {
    return value === 0 || value === null;
  }

  static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  static isNumber(value: any): boolean {
    return !isNaN(value);
  }

  static isDate(value: any): boolean {
    return value instanceof Date;
  }

  static isEmail(value: string): boolean {
    return value.includes("@") && value.includes(".");
  }

  static isPassword(value: string): boolean {
    return value.length >= 8;
  }

  static isSame(value1: string, value2: string): boolean {
    return value1 === value2;
  }

  // 日付が未来の日付かどうかを判定する
  static isFutureDate(value: Date): boolean {
    const now = new Date();
    return value > now;
  }

  // 日付が間にあるかどうかを判定する
  static isBetweenDate(value: Date, start: Date, end: Date): boolean {
    return value >= start && value <= end;
  }

  // 文字列が指定した文字数以内かどうかを判定する
  static isLengthUnder(value: string, length: number): boolean {
    return value.length <= length;
  }

  // 文字列が指定した文字数以上かどうかを判定する
  static isLengthOver(value: string, length: number): boolean {
    return value.length >= length;
  }
}