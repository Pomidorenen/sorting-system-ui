namespace Select {
    interface IOption{
        name: string;
        value: string;
    }
    interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
        title?: string;
        options: Array<IOption>;

    }
}