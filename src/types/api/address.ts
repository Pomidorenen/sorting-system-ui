interface IAddress{
    "address_id": number;
    "country": string;
    "region": string;
    "city": string;
    "street": string;
    "building": string;
    "postal_code": string;
}

type AddressNew = Omit<IAddress,"address_id">;

export type {
    IAddress,
    AddressNew
}