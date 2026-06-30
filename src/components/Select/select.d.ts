namespace Select {
    interface IOption{
        name: string;
        value: string;
    }
    interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement>{
        title?: string;
        options: Array<IOption>;
    }
}