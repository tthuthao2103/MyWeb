export class Account{
  constructor(
    public _id:any=null,
    public AccountId: string="",
    public Email: string="",
    public password: string="",
    public AccountName: string="",
    public SDT: number,
    public Gender: string="",
    public Birthday: Date,
    public Address: string="",
    public OrderId: string="",
    public Image: string="",
  )
  {}
}
