export class User {

  constructor(
    public _id?: string,
    public name: string = '',
    public moves: Array<Object> = [],
    public coins: number = 0) {
  }

  setId?(id: string = 'r101') {
    // Implement your own set Id
    this._id = id
  }
}
