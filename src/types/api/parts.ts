import { ICustomer } from "./customer";
import { IOrderItem, IOrders, OrderStatus } from "./oreders";
import { IPartType } from "./part-types";
import { IUser } from "./user";
import { IWarehouse } from "./warehouse";
enum PartStatus {
    'manufactured' = 'manufactured', 'sorted' =  'sorted'
}
interface IParts{
    "part_id": number;
    "serial_number": string;
    "batch_number": string;
    "manufacture_date": string;
    "sorted_at": string;
    "warehouse_id": number;
    "qc_inspector_id": number;
    "part_type_id": number;
    "status": PartStatus;
}

interface IPartsGetOne extends IParts {
    "partType": IPartType;
    "order": Pick<IOrders,"order_id"|"order_number">;
}
interface IPartGetAll extends IParts{
    "warehouse": IWarehouse;
    "employee":Omit<IUser,"role"|"is_active"|"created_at">;
    "partType":IPartType;
    "orderItemPart":Pick<IOrderItem,"order_item_id">|{order:Omit<IOrders,"fullPrice"|"completedPercentage"|"customer"|"orderItems">}
}
interface IPartOrderChange{
    "order_id":number
}

interface IPartOrders extends Omit<IOrders,"fullPrice"|"orderItems">{
    customer:Omit<ICustomer,"address">;
    quantity:number;
    required_quantity:number;
}
interface IPartOrderChangeResult {
    "order_id": number;
    "order_number": string;
    "customer_id": number;
    "priority": number;
    "status": OrderStatus;
    "notes": string;
    "created_at": string;
    "orderItems":Omit<IOrderItem,"partType"|"orderItemParts">;
}

interface IPartSort{
    isSorted:boolean;
    order:Omit<IOrders,"fullPrice"|"completedPercentage"|"orderItems"|"customer">|{customer:Omit<ICustomer,"address">}
}
type PartOrders = Array<IPartOrders>
type PartNew = Pick<IParts,"batch_number"|"warehouse_id"|"part_type_id">

export type {
    IParts,
    IPartsGetOne,
    IPartGetAll,
    IPartOrderChange,
    IPartOrderChangeResult,
    IPartSort,
    PartStatus,
    PartOrders,
    PartNew
}