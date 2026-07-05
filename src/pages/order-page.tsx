import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { TableOrders } from "@components/Table";

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

const templateData:Array<Table.ITableOrderItem> = [
    {
        compound:["Доска20x20","Саморез80x20","Гвоздь20x2"],
        status:75,
        nameCompany:"ООО 'Павлик'",
        notes:"Текст заметки",
        price:25000,
        priorety:5
    },
    {
        compound:["Доска20x20","Саморез80x20","Гвоздь20x2"],
        status:25,
        nameCompany:"ООО 'Павлик'",
        notes:"Текст заметки",
        price:25000,
        priorety:5
    },
        {
        compound:["Доска20x20","Саморез80x20","Гвоздь20x2"],
        status:55,
        nameCompany:"ООО 'Павлик'",
        notes:"Текст заметки",
        price:15000,
        priorety:5
    }
];
function OrderPage(){

    return (<TemplatePage>
                <section className="sort-container">
                <Select title="Приоритет" options={templateOptions}/>
                <Select title="Название организации" options={templateOptions}/>
                <Select title="Срок выполнения" options={templateOptions}/>
                <input type="date"/>
            <Button>
              <IconSearch/>
            </Button>
            <Button>
              <IconX/>
            </Button>
          </section>
            <TableOrders items={templateData}/>
    </TemplatePage>);
}


export default OrderPage;