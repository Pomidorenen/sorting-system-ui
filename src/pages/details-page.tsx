import "@styles/details.css";
import { useState } from "react";
import { InputSearch } from "@/components/Input";
import TemplatePage from "./template-page";
import { Select } from "@components/Select";


const templateOptions:Array<Select.IOption> = [
  {
    name:"Все",
    value:"All"
  },
  {
    name:"Другой вариант",
    value:"Other"
  }
]

function DetailPage(){
    const [searchValue, setSearchValue] = useState<string>("");
    return (
    <TemplatePage>
      <InputSearch setValue={setSearchValue} value={searchValue}/>
      <section className="sort-container">
        <Select title="Тип детали" options={templateOptions}/>
        <Select title="Партия" options={templateOptions}/>
        <Select title="Статус" options={templateOptions}/>
        <Select title="Заказ" options={templateOptions}/>
        <Select title="Склад" options={templateOptions}/>
      </section>
    </TemplatePage>);
}

export default DetailPage;