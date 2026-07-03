import "@styles/details.css";
import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { ProgresbarRing } from "@/components/Progresbar";
import { Button } from "@/components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";

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
    return (
    <TemplatePage>
      <section className="sort-container">
        <Select title="Тип детали" options={templateOptions}/>
        <Select title="Партия" options={templateOptions}/>
        <Select title="Статус" options={templateOptions}/>
        <Select title="Заказ" options={templateOptions}/>
        <Select title="Склад" options={templateOptions}/>
        <Button>
          <IconSearch/>
        </Button>
        <Button >
          <IconX/>
        </Button>
      </section>
      <ProgresbarRing size={400} value={10} maxValue={10}/>
    </TemplatePage>);
}

export default DetailPage;