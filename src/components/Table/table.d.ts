namespace Table{
    interface ITableHeader{
        text:String;
    }
    interface ITableProps extends React.HTMLAttributes<HTMLTableElement>{
        header:Array<ITableHeader>;
        body:Array<Array<React.ReactElement | string>>;
    }
}