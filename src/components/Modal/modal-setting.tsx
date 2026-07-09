import styles from "./modal.module.css";
import { Dispatch, useEffect, useState, } from "react";
import { IconSettings } from "@tabler/icons-react";
import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { useThemeStore } from '@storages/ThemStorage';
import { UserApi } from "@http/index";
import { IUser } from "#types/api/user";
import { Select } from "@components/Select";
import { ThemeName } from "@utils/const";
import { useFontStore } from "@storages/FontStorage";
import { InputColor, InputRange } from "@components/Input";


const optionsTheme:Array<{
        value:ThemeName,
        name:string}> = 
        [{
           value:"white",
           name:"Белый" 
        },
        {
           value:"black",
           name:"Черный" 
        },
        {
            value:"blue",
            name:"Голубой",    
        },
        {
            value:"cactus",
            name:"Кактус"
        },
        {
            value:"zheltuha",
            name:"Желтый"
        },
        {
            value:"sunset",
            name:"Закат"
        },
        {
            value:"ocean",
            name:"Океан"
        },
        {
           value:"forest",
           name:"Лес" 
        }
       ]; 
const onChangeColorHandler = (dispatch:Dispatch<string>)=>(e:React.ChangeEvent<HTMLInputElement>)=>{dispatch(e.target.value)};
function ModalSetting(){
    const { setTheme,setCustomTheme,customThemeVars, resetCustomTheme } = useThemeStore();
    const { setSize, currentSize } = useFontStore();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [ curUser, setCurUser] = useState<IUser>();
    const [ loading, setLoading] = useState<boolean>(true);
    const [backgroundColor, setBackgroundColor] = useState<string>(customThemeVars !== null?customThemeVars["--background-color"]:"#FFF");
    const [fontColor, setFontColor] = useState<string>(customThemeVars !== null?customThemeVars["--text-color"]:"#4f73ae");
    const [buttonColor, setButtonColor] = useState<string>(customThemeVars !== null?customThemeVars["--button-color"]:"#0b1c36");
    const onClickCustomThem = ()=>{
        setCustomTheme({
                '--background-color': backgroundColor,
                '--second-background-color': 'color-mix(in srgb, var(--background-color), rgb(40, 40, 40) 35%)',
                '--text-color': fontColor,
                '--button-color': buttonColor,
                '--button-text-color': 'color-mix(in srgb, var(--button-color), rgb(0, 0, 0) 35%) ',
                '--hover-color': 'color-mix(in srgb, var(--button-color), var(--text-color) 35%)',
                '--input-color': 'color-mix(in srgb, var(--background-color), rgb(208, 208, 208) 35%)',
        });
        setTheme("custom");
    }
    useEffect(()=>{
        setLoading(true);
        UserApi.whoMe().then((data)=>{
            setLoading(false);
            setCurUser(data);
        });
    },[isOpen]);
    return  <>
                <Button onClick={()=>setOpen(true)}>
                    <IconSettings/>
                </Button>
                <Modal isOpen={isOpen} onClose={()=>setOpen(false)} title="Настройки" iconTitle={<IconSettings/>}>
                    <div className={styles["modal-setting"]}>
                        <h3>Текущий пользователь</h3>
                        {!loading && <div className={styles["modal-setting__user-info"]}>
                                <span>
                                    Фамилия:
                                </span>
                                <span>
                                    {curUser?.last_name} 
                                </span>
                                <span>
                                    Имя:
                                </span>
                                <span>
                                    {curUser?.first_name} 
                                </span>
                                <span>
                                    Отчество:
                                </span>
                                <span>
                                    {curUser?.middle_name} 
                                </span>
                        </div>}
                        <Select title="Темы" defaultValue="white" options={optionsTheme} onChange={(e)=>{
                            setTheme(e.target.value as ThemeName);
                        }}/>
                    <InputRange title={"Размер шрифта:X" + currentSize} min={0.7} max={1.5} step={0.1} value={currentSize} onChange={(e)=>{setSize(+e.target.value)}}/>
                    <div className={styles["modal-setting__colors"]}>
                        <h5>
                            Собственая тема:
                        </h5>
                        <div className={styles["modal-setting__colors-container"]}>
                                <InputColor onChange={onChangeColorHandler(setBackgroundColor)} title="Фон" value={backgroundColor}/>
                                <InputColor onChange={onChangeColorHandler(setFontColor)}  title="Текст" value={fontColor}/>
                                <InputColor onChange={onChangeColorHandler(setButtonColor)} title="Кнопок" value={buttonColor}/>
                        </div>
                        <Button onClick={onClickCustomThem}>Применить</Button>
                        <Button onClick={()=>resetCustomTheme()}>Отменить</Button>
                    </div>
                </div>
            </Modal>
        </>
}

export default ModalSetting;