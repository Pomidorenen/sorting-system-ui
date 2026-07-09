import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { TableOrders } from "@components/Table";
import { InputDate } from "@components/Input";
import { useEffect, useState } from "react";
import { OrdesrApi } from "@/http";

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

function OrderPage(){
    const [data,setDate] = useState<Array<Table.ITableOrderItem>>([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
      OrdesrApi.getAll({limit:100,offset:0}).then(data=>{
          const list:Array<Table.ITableOrderItem> = new Array(data.rows.length);
          console.log(data)
          for(var i = 0; i<data.rows.length;i++){
            var element = data.rows[i];
            list[i] = {
              compound:(element.orderItems.length != 0?element.orderItems.map(el=>el.partType.name):[]),
              status:element.status,
              nameCompany:element.customer.company_name,
              notes:element.notes,
              price:element.fullPrice,
              priorety:element.priority  
            };
          }
          setLoading(false)
          setDate(list);
      })
    },[]);
    return (<TemplatePage>
                <section className="sort-container">
                <Select title="Приоритет" options={templateOptions}/>
                <Select title="Название организации" options={templateOptions}/>
                <Select title="Срок выполнения" options={templateOptions}/>
                <InputDate title="Срок выполнения"/>
            <Button>
              <IconSearch/>
            </Button>
            <Button>
              <IconX/>
            </Button>
          </section>
           {!loading && <TableOrders items={data}/>} 
    </TemplatePage>);
}


export default OrderPage;