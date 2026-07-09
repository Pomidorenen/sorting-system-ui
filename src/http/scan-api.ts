import { host } from "./common";
import { IResponce } from "#types/api/common";
import { IScan} from "#types/api/scan";

class ScanApi {
    private route = "/api/service/";
    public async scan(data:IScan):Promise<IResponce>{
        return (await host.post(this.route + "scan",data)).data;
    }
}

export default new ScanApi();