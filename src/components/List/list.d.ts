namespace List{
    interface IListItem{
        icon?: React.ReactElement;
        text: string;
    }
    interface IListProps extends React.HTMLAttributes<HTMLUListElement>{
        isIcon?:boolean;
        items: Array<IListItem>;
    }
}