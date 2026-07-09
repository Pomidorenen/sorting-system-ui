
import "@styles/template.css";
import { IconListDetails, IconClipboard } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { InputSearch } from "@components/Input";
import { Button } from "@components/Button";
import { ModalSetting } from "@/components/Modal";

function TemplatePage({children}:{children?:React.ReactNode}){
    const [searchValue, setSearchValue] = useState<string>("");
    const navigate = useNavigate();

    return (
    <section className="template-page">
        <nav className="template-navbar">
            <h1 className="template-navbar__logo">Sorting-system</h1>
            <InputSearch className="template-navbar__search" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}/>
            <div className="template-navbar__buttons">
                <Button onClick={()=>navigate("/")}>
                    <IconListDetails/>
                </Button>
                <Button onClick={()=>navigate("/orders")}>
                    <IconClipboard/>
                </Button>
                <ModalSetting/>
            </div>
        </nav>
        <section className="template-page-content">
            {children}
        </section>
        {import.meta.env.DEV}
    </section>);
}

export default TemplatePage;