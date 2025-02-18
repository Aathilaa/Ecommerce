export interface SignUp{
    name:string,
    password:string,
    email:string
}
export interface login{
    email:String,
    password:String
}
export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
  }
  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
  }  