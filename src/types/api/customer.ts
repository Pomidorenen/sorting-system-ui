import { type IAddress } from "./address"


interface ICustomer{
    "customer_id": number,
    "company_name": string,
    "inn": string,
    "ogrn": string,
    "address_id": number,
    "created_at": string,
    "address":IAddress
}

type CustomerNew = Omit<ICustomer,"customer_id"|"created_at"|"address">

export type{
    ICustomer,
    CustomerNew
}