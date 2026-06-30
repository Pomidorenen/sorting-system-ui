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
      <section>
        <Select options={templateOptions}/>
        <Select options={templateOptions}/>
        <Select options={templateOptions}/>
      </section>
    </TemplatePage>);
}

export default DetailPage;