import { host } from "./common";
import { GetAll,IRemoveById,IResponce,IRestrictions } from "#types/api/common";
import { ILogScan,LogScanNew } from "#types/api/log-scans";
class LogScanApi{
    private route = "/api/logger-scans/";

    public async addNew(data:LogScanNew):Promise<Omit<ILogScan,"part"|"employee">>{
        return (await host.post(this.route + "new",data)).data;
    }

    public async getAll({limit = 20, offset = 0}:IRestrictions):Promise<GetAll<ILogScan>>{
        var data = {limit,offset};
        return (await host.get(this.route,{data})).data;
    }
    public async getOne(id:number):Promise<ILogScan>{
        return (await host.get(this.route + id)).data;
    }

    public async remove(data:IRemoveById):Promise<IResponce>{
        return (await host.delete(this.route + "remove",{data})).data;
    }
    public async clear():Promise<IResponce>{
        return (await host.delete(this.route + "clear")).data;
    }
}


export default new LogScanApi();