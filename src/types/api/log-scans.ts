import { IParts } from "./parts"
import { IUser } from "./user"
import { ICamera} from "./camera"

enum TypeRecovery {
    "CLEAR" = "CLEAR","RECOVERY" = "RECOVERY"
}

interface ILogScan{
    "logging_scans_id": number,
    "is_recovery": boolean,
    "type_scan": TypeRecovery,
    "created_at": string,
    "part_id": number,
    "user_id": number,
    "camera_id":number
    "employee":Pick<IUser,"first_name"|"last_name"|"middle_name">,
    "part":Pick<IParts,"serial_number"|"batch_number"|"manufacture_date">
    "camera":Omit<ICamera,"camera_id"|"created_at">
}

type LogScanNew = Pick<ILogScan,"is_recovery"|"part_id"|"camera_id">;

export type{
    TypeRecovery,
    ILogScan,
    LogScanNew
}