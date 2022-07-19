export type TLoginResponse = {
  token:string
  userId:string
}

export type TLoginData = {
  username:string
  password:string
}

export type TTransaction = {
  _id:string
  description:string
  amount:number
  cardNumberEndingIn:number
  date:string
  type:string
  user:string
}

export type TDispute = {

}