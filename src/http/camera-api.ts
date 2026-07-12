import { host } from "./common";
import { type IResponce, type GetAll, IRemoveById,IRestrictions } from "#types/api/common";
import { ICamera, CameraNew } from "#types/api/camera";

class CameraApi {
    private route:string = "/api/camera/";
    public async addNew(data:CameraNew):Promise<IResponce>{
        return (await host.post(this.route + "new", data)).data;
    }
    public async getAll({limit = 10,offset = 0}:IRestrictions):Promise<GetAll<ICamera>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<ICamera>{
         return (await host.get(this.route + id)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
         return (await host.delete(this.route + "remove",{data})).data;
    } 
}


export default new CameraApi();