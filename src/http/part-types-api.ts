import { host } from "./common";
import { GetAll,IRemoveById,IResponce,IRestrictions } from "#types/api/common";
import { IPartType, PartTypeNew } from "@/types/api/part-types";

class PartTypesApi{
    private route = "/api/part-type/";
    public async addNew(data:PartTypeNew):Promise<IPartType>{
        return (await host.post(this.route+"new",data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<IPartType>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<IPartType>{
        return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
        return (await host.get(this.route + "remove",{data})).data;
    }
}



export default new PartTypesApi();