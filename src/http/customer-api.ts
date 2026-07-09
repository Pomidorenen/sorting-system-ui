import { host } from "./common";
import { type IResponce, type GetAll, IRemoveById, IRestrictions } from "#types/api/common";
import { CustomerNew, ICustomer } from "#types/api/customer";

class CustomerApi {
    private route:string = "/api/customer/";
    public async addNew(data:CustomerNew):Promise<Omit<ICustomer,"address">>{
        return (await host.post(this.route + "new", data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<ICustomer>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<ICustomer>{
         return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
         return (await host.delete(this.route + "remove",{data})).data;
    } 
}


export default new CustomerApi();