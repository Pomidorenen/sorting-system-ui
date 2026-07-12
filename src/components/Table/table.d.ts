
namespace Table{
    enum OrderStatus {
        'pending'='pending', 
        'in_production' = 'in_production', 
        'sorting' =  'sorting', 
        'completed' = 'completed', 
        'canceled' = 'canceled'
    }   
    interface ITableHeader{
        text:String;
        sort?:()=>void;
        sortDirection?: 'asc' | 'desc' | null; 
    }
    interface ITableProps extends React.HTMLAttributes<HTMLTableElement>{
        header:Array<ITableHeader>;
        body:Array<React.ReactElement | string>;
    }
    interface ITableCustomProps<T> extends React.HTMLAttributes<HTMLTableElement>{
        items:Array<T>;
    }
    interface ITableOrderItem{
        priority:number;
        nameCompany:string;
        notes:string;
        compound:Array<string>;
        price: number;
        status: OrderStatus;
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