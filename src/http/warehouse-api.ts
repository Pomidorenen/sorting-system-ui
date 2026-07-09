import { host } from "./common";
import { type IResponce, type GetAll, IRemoveById,IRestrictions } from "#types/api/common";
import { IWarehouse, WarehouseNew } from "#types/api/warehouse";

class WarehouseApi {
    private route:string = "/api/warehouse/";
    public async addNew(data:WarehouseNew):Promise<Omit<IWarehouse,"address">>{
        return (await host.post(this.route + "new", data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<IWarehouse>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<IWarehouse>{
         return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
         return (await host.delete(this.route + "delete",{data})).data;
    } 
}


export default new WarehouseApi();