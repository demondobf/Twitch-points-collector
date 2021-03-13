export default class Logger {
  static readonly commonStyles = `
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 15px;
  `;

  static readonly happyStyles = `
    color: #fff;
    background-color: #7070B8;
  `;

  static readonly sadStyles = `
    color: #fff;
    background-color: #D4184B;
  `;

  static log(message: string) {
    console.log(`%c${message}`, `${this.commonStyles} ${this.happyStyles}`);
  }

  static error(message: string) {
    console.log(`%c${message}`, `${this.commonStyles} ${this.sadStyles}`);
  }
}
