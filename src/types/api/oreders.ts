import { ICustomer } from "./customer"
import { IPartType } from "./part-types";
import { IParts } from "./parts";


enum OrderStatus {
    'pending'='pending', 
    'in_production' = 'in_production', 
    'sorting' =  'sorting', 
    'completed' = 'completed', 
    'canceled' = 'canceled'
}
interface IOrders{
    "order_id": number;
    "order_number": string;
    "customer_id": number;
    "priority": number;
    "status": OrderStatus;
    "notes":string;
    "created_at": string;
    "fullPrice": number;
    "completedPercentage": number;
    "customer":Pick<ICustomer,"customer_id"|"company_name">;
    "orderItems":IOrderItem;
}

interface IOrderItemPart{
    order_item_id:number; 
    order_item_part_id:number;
    part_id:number;
}
interface IOrderItemWithPart extends IOrderItemPart{
    part:Omit<IParts,"part_id"|"serial_number"|"batch_number">
}

interface IOrderItem{
    "order_item_id": number;
    "order_id": number;
    "part_type_id": number;
    "required_quantity":number;
    "price": string;
    "partType":Omit<IPartType,"type_code">
    "orderItemParts":Array<IOrderItemWithPart>
}

type OrdersNew = Pick<IOrders,"customer_id"|"notes"|"priority">

export type {
    IOrders,
    IOrderItem,
    IOrderItemWithPart,
    OrdersNew,
    OrderStatus,
    
}