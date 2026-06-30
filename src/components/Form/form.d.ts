namespace Form{
    interface IFormLoginProps{
        onClick:React.MouseEventHandler<HTMLButtonElement>;
        login: string;
        setLogin: React.Dispatch<string>;
        password: string;
        setPassword: React.Dispatch<string>;
    }
}