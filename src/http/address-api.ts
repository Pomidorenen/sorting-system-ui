import { host } from "./common";
import { type IResponce, type GetAll, IRemoveById } from "#types/api/common";
import { AddressNew, IAddress } from "#types/api/address";

class AddressApi {
    private route:string = "/api/address/";
    public async addNew(data:AddressNew):Promise<IAddress>{
        return (await host.post(this.route, data)).data;
    }
    public async getAll():Promise<GetAll<IAddress>>{
        return (await host.get(this.route)).data;
    }
    public async getOne(id:number):Promise<IAddress>{
         return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
         return (await host.delete(this.route + "delete",{data})).data;
    } 
}


export default new AddressApi();