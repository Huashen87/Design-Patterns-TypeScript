class Message {
  constructor(protected message: string) {}

  public logMessage = (): void => console.log(this.message);
}

class NamedMessage extends Message {
  constructor(message: string, private name: string) {
    super(message);
  }

  public logMessage = (): void => console.log(this.message);
  public logName = (): void => console.log(this.name);
}

class Phone {
  constructor(private name: string) {}
  public sendMessage = (message: string): NamedMessage => new NamedMessage(message, this.name);
}

class PublicPhone extends Phone {
  // 這裡會出錯
  public sendMessage = (message: string): Message => new Message(message);
}

const phone = new Phone('MobilePhone');
const message = phone.sendMessage('hello huashen');
message.logMessage();
message.logName();

const phone2 = new PublicPhone('PublicPhone');
const message2 = phone2.sendMessage('hello huashen');
message2.logMessage();

// 這裡會出錯
message2.logName();
