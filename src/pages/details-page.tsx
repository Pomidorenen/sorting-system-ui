import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { TableDetails } from "@/components/Table";
import { InputDate } from "@components/Input";

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
const templateData:Array<Table.ITableDetailItem> = [
    {
      status:100,
      date:Date.now(),
      serialNumber:"MS-1 1234",
      partia:"П-12345678",
      typeDetail:"Балка",
      recovery:"Примерно",
      camera:"MODEL-X1-X2-34"
    },
    {
      status:30,
      date:Date.now(),
      serialNumber:"MS-1 1234",
      partia:"П-12345678",
      typeDetail:"Балка",
      recovery:"Примерно",
      camera:"MODEL-X1-X2-34"
    },
        {
      status:50,
      date:Date.now(),
      serialNumber:"MS-1 1234",
      partia:"П-12345678",
      typeDetail:"Балка",
      recovery:"Примерно",
      camera:"MODEL-X1-X2-34"
    },
];
function DetailPage(){
    return (
    <TemplatePage>
      <section className="sort-container">
        <Select title="Статус" options={templateOptions}/>
        <InputDate title="Дата сканирования"/>
        <Select title="Обьект" options={templateOptions}/>
        <Select title="Партия" options={templateOptions}/>
        <Select title="Тип детали" options={templateOptions}/>
        <Select title="Восстановление" options={templateOptions}/>
         <Select title="Камера" options={templateOptions}/>
        <Button>
        <IconSearch/>
        </Button>
        <Button>
          <IconX/>
        </Button>
      </section>
      <TableDetails  items={templateData}/>
    </TemplatePage>);
}

export default DetailPage;