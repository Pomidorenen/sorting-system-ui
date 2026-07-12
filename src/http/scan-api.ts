import { host } from "./common";
import { IResponce } from "#types/api/common";
import { IScan} from "#types/api/scan";

class ScanApi {
    private route = "/api/service/";
    public async scan({image,...data}:IScan):Promise<IResponce>{
        const formData = new FormData();
        formData.append("image",image);
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, String(value));
        });
        return (await host.post(this.route + "scan",formData)).data;
    }
}

export default new ScanApi();