
import "@styles/template.css";
import { useState } from "react";
import {ModalDetailInfo, ModalOrderInfo, ModalScanInfo } from "@components/Modal";
import { InputSearch } from "@components/Input";

function TemplatePage({children}:{children?:React.ReactNode}){
    const [searchValue, setSearchValue] = useState<string>("");
    return (
    <section className="template-page">
        <nav className="template-navbar">
            <h1 className="template-navbar__logo">Sorting-system</h1>
            <InputSearch className="template-navbar__search" setValue={setSearchValue} value={searchValue}/>
            <div className="template-navbar__buttons">
                <ModalDetailInfo/>
                <ModalOrderInfo/>
                <ModalScanInfo/>
            </div>
        </nav>
        <section className="template-page-content">
            {children}
        </section>
    </section>);
}

export default TemplatePage;