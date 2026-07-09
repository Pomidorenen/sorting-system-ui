import { host } from "./common";
import { GetAll,IRemoveById,IResponce, IRestrictions } from "#types/api/common";
import { IOrders, OrdersNew, IOrdersNew, OrdersItemNew,IOrderItem } from "#types/api/oreders";

class OrdersApi{
    private route = "/api/order/";

    public async addNew(data:OrdersNew):Promise<IOrdersNew>{
        return (await host.post(this.route + "new", data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<IOrders>>{
         var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id: number):Promise<IOrders>{
        return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
        return (await host.get(this.route,{data})).data;
    }
    public async addItem(data:OrdersItemNew):Promise<Omit<IOrderItem,"partType"|"orderItemParts">>{
        return (await host.post(this.route + "item",data)).data;
    }
    public async removeItem(data:IRemoveById):Promise<IOrderItem> {
        return (await host.delete(this.route + "item/remove",{data})).data;
    }
}



export default new OrdersApi();