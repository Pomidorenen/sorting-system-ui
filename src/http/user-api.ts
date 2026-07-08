import { host } from "./common";
import { type IResponce, type GetAll } from "#types/api/common";
import { type UserRegistration, type IUser } from "#types/api/user";

class UserApi {
    private route:string = "/api/user/";
    public async registration(data:UserRegistration):Promise<IResponce>{
        return (await host.post(this.route, data)).data;
    }
    public async getAll():Promise<GetAll<IUser>>{
        return (await host.get(this.route)).data;
    }
    public async getOne(id:number):Promise<IUser>{
         return (await host.get(this.route + id)).data;
    }
    public async whoMe():Promise<IUser>{
         return (await host.get(this.route + "me")).data;
    } 
}


export default new UserApi();