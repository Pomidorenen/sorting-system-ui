import { host } from "./common";
import { GetAll,IRemoveById,IResponce,IRestrictions } from "#types/api/common";
import { IPartGetAll,IPartSort,PartOrders, IParts, PartNew,IPartsGetOne,IPartOrderChange,IPartOrderChangeResult } from "#types/api/parts";


class PartsApi{
    private route = "/api/part/";
    public async addNew(data:PartNew):Promise<IParts>{
        return (await host.post(this.route+"new",data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<IPartGetAll>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<IPartsGetOne>{
        return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
        return (await host.get(this.route + "remove",{data})).data;
    }
    public async changeOrder(id:number,data:IPartOrderChange):Promise<IPartOrderChangeResult>{
        return (await host.put(this.route + id + "/change-order",data)).data;
    }
    public async getAllOrders(id:number):Promise<PartOrders>{
        return (await host.get(this.route + id + "/orders")).data
    }
    public async quickSort(id:number):Promise<IPartSort>{
        return (await host.put(this.route + id + "/sort")).data;
    }
}



export default new PartsApi();