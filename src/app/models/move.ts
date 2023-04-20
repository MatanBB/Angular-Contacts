export class Move {
  constructor(
    public toId:string|undefined= "",
    public to:string|undefined= "",
    public at:Date|number ,
    public amount:number
  ){}
}
