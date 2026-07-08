import { type IAddress } from "./address"

interface IWarehouse{
    "warehouse_id": number;
    "name": string;
    "address_id": number;
    "created_at": string;
    "address": IAddress
}

type WarehouseNew = {"name":string;"address_id":number};

export type{
    IWarehouse,
    WarehouseNew
}