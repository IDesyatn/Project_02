export class MySqlConfig {
  private name: string;

  private password: string;

  private host: string;

  private user: string;

  constructor(name: string, password: string, host: string, user: string) {
    this.name = name;
    this.password = password;
    this.host = host;
    this.user = user;
  }

  public getConfig = () => ({
    name: this.name,
    password: this.password,
    host: this.host,
    user: this.user,
  });
}
