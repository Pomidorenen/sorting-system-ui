import { host } from "./common";
import { GetAll,IRemoveById,IResponce,IRestrictions } from "#types/api/common";
import { IShift,ShiftGetByEmployee,ShiftNew,ShiftChange} from "#types/api/shift";

class ShiftApi{
    private route = "/api/shift/";

    public async addNew(data:ShiftNew):Promise<IShift>{
        return (await host.post(this.route + "new",data)).data;
    }

    public async getAll({limit = 20, offset = 0}:IRestrictions):Promise<GetAll<IShift>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<IShift>{
        return (await host.get(this.route + id)).data;
    }
    public async getByEmployee(id:number):Promise<Array<ShiftGetByEmployee>>{
        return (await host.get(this.route + "employee/"+ id)).data;
    }
    public async changeShift(data:ShiftChange):Promise<IResponce>{
        return (await host.put(this.route + "change",data)).data;
    }
    public async remove(data:IRemoveById):Promise<IResponce>{
        return (await host.delete(this.route + "remove",{data})).data;
    }
}


export default new ShiftApi();