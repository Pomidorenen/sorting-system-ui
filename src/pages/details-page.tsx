import "@styles/details.css";
import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { Table } from "@components/Table";

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
        <Button>
          <IconX/>
        </Button>
      </section>
       <Table header={[{text:"1".repeat(100)},{text:"title 2"},{text:"title 3"}]} body={new Array(3).fill(["1".repeat(10),"2".repeat(10),<Button>asd</Button>])}/>
    </TemplatePage>);
}

export default DetailPage;