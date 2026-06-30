namespace Input {
    interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
        value?: string;
        setValue: React.Dispatch<string>;
        type?:string
    }
    interface IInputFormProps extends IInputProps{
        title?: string;
        placeholder?: string;
    }
}