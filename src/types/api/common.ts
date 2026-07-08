interface GetAll<T> {
    count:number;
    rows:Array<T>;
}

interface IRemoveById{
    id:number
}

interface IResponce{
    message: string;
}
export type {
    GetAll,
    IRemoveById,
    IResponce
}