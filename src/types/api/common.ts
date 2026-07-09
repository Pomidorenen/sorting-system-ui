interface GetAll<T> {
    count:number;
    rows:Array<T>;
}

interface IRemoveById{
    id:number
}

interface IResponce{
    status?:number;
    message: string;
}
interface IRestrictions{
    limit?:number;
    offset?:number;
}
export type {
    GetAll,
    IRemoveById,
    IResponce,
    IRestrictions
}