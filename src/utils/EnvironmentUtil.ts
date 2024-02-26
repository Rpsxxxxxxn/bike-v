export default class EnvironmentUtil {
  static isTest() {
    return process.env.NODE_ENV === 'test';
  }

  static isDevelopment() {
    return process.env.NODE_ENV === 'dev';
  }

  static isProduction() {
    return process.env.NODE_ENV === 'prod';
  }
}