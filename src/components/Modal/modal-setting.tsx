import { useEffect, useState, } from "react";
import { IconSettings } from "@tabler/icons-react";
import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { useThemeStore } from '@storages/ThemStorage';
import { UserApi } from "@http/index";
import { IUser } from "@/types/api/user";


function ModalSetting(){
    const { setTheme } = useThemeStore();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [ curUser, setCurUser] = useState<IUser>();
    const [ loading, setLoading] = useState<boolean>(true);
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding:"10px" }}>
                        <h1>Текущий пользователь</h1>
                        {!loading && <div>
                                {curUser?.first_name} {curUser?.last_name} {curUser?.middle_name}
                            </div>}
                        <h1>Темы</h1>
                        <Button onClick={() => setTheme('ocean')}>Океан</Button>
                        <Button onClick={() => setTheme('sunset')}>Закат</Button>
                        <Button onClick={() => setTheme('forest')}> Лес</Button>
                        <Button onClick={() => setTheme('cactus')}> Кактус</Button>
                        <Button onClick={() => setTheme('blue')}> Фиолетовый</Button>
                        <Button onClick={() => setTheme('zheltuha')}>Желтый</Button>
                </div>
            </Modal>
        </>
}

export default ModalSetting;