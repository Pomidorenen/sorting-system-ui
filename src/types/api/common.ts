interface GetAll<T> {
    count:number;
    rows:Array<T>;
}

interface IRemoveById{
    id:number
}

export type {
    GetAll,
    IRemoveById
}