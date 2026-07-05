namespace Table{
    interface ITableHeader{
        text:String;
    }
    interface ITableProps extends React.HTMLAttributes<HTMLTableElement>{
        header:Array<ITableHeader>;
        body:Array<Array<React.ReactElement | string>>;
    }
    interface ITableCustomProps<T> extends React.HTMLAttributes<HTMLTableElement>{
        items:Array<T>;
    }
    interface ITableOrderItem{
        priorety:number;
        nameCompany:string;
        notes:string;
        compound:Array<string>;
        price: number;
        status: number;
    }
    interface ITableDetailItem{
        status: number;
        date: number;
        serialNumber: string;
        partia: string;
        typeDetail: string;
        recovery: string;
        camera: string;
    }
    type ITableOrderProps = ITableCustomProps<ITableOrderItem>
    type ITableDetailProps = ITableCustomProps<ITableDetailItem>
}