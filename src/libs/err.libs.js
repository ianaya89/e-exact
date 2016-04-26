class Err { 
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

const e422 = (message) => {
  return new Err(422 , message);
}

const e401 = (message) => {
  return new Err(401 , message);
}

export { e422, e401 };