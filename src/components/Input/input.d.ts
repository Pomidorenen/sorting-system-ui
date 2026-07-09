namespace Input {
    interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
        value?: string;
        type?:string
    }
    interface IInputFormProps extends IInputProps{
        title?: string;
        placeholder?: string;
    }
    interface IInputPropsRange extends IInputProps{
        title?:string;
        value:number;
        min:number;
        max:number;
        step:number;
    }
}