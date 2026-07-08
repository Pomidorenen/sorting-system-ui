import { IUser } from "./user";

interface IShift{
    "shift_id": number;
    "employee_id": number;
    "start_datetime": string;
    "end_datetime":string;
    "created_at":string;
    "employee":Pick<IUser,"first_name"|"last_name"|"middle_name">
}

type ShiftGetByEmployee = Omit<IShift,"employee">;
type ShiftNew =  Omit<IShift,"employee"|"created_at"|"shift_id">;
type ShiftChange = Omit<ShiftNew,"employee_id">|{id:number};
export type {
    IShift,
    ShiftGetByEmployee,
    ShiftNew,
    ShiftChange
}