import { host } from "./common";
import { type IResponce, type GetAll, IRemoveById } from "#types/api/common";
import { IWarehouse, WarehouseNew } from "#types/api/warehouse";

class WarehouseApi {
    private route:string = "/api/warehouse/";
    public async addNew(data:WarehouseNew):Promise<Omit<IWarehouse,"address">>{
        return (await host.post(this.route, data)).data;
    }
    public async getAll():Promise<GetAll<IWarehouse>>{
        return (await host.get(this.route)).data;
    }
    public async getOne(id:number):Promise<IWarehouse>{
         return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
         return (await host.delete(this.route + "delete",{data})).data;
    } 
}


export default new WarehouseApi();