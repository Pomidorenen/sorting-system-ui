import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { TableOrders } from "@components/Table";
import { useEffect, useReducer } from "react";
import { OrdesrApi } from "@/http";
import { useLogStore } from "@storages/LogStorage";

const allOption = {name:"все",value:"all"};
const statusOptions:Array<Select.IOption> = [
  allOption,
  {
    name:"Отменен",
    value:"canceled"
  },
  {
    name:"В ожидании",
    value:"pending"
  },
   {
    name:"В производстве",
    value:"in_production"
  },
   {
    name:"На сортировке",
    value:"sorting"
  },
   {
    name:"Завершён",
    value:"completed"
  }
];

type Action =
  | { type: 'SET_INITIAL_DATA'; payload: { list: Array<Table.ITableOrderItem>; options: Select.IOption[] } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PRIORITY'; payload: string }
  | { type: 'SET_COMPANY_NAME'; payload: string }
  | { type: 'SET_STATUS'; payload: string }
  | { type: 'RESET_FILTERS' }
  | { type: 'APPLY_SORT'; payload: Array<Table.ITableOrderItem> };
  
interface State {
  data: Array<Table.ITableOrderItem>;
  sortData: Array<Table.ITableOrderItem>;
  loading: boolean;
  optionsNameCompany: Select.IOption[];
  priority: string; 
  companyName: string;
  status: string;
}

const initialState: State = {
  data: [],
  sortData: [],
  loading: true,
  optionsNameCompany: [],
  priority: 'all',
  companyName: 'all',
  status: 'all',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return {
        ...state,
        data: action.payload.list,
        sortData: action.payload.list, 
        loading: false,
        optionsNameCompany: action.payload.options,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PRIORITY':
      return { ...state, priority: action.payload };
    case 'SET_COMPANY_NAME':
      return { ...state, companyName: action.payload };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'RESET_FILTERS':
      return {
        ...state,
        priority: 'all',
        companyName: 'all',
        status: 'all',
        sortData: state.data, 
      };
    case 'APPLY_SORT':
      return { ...state, sortData: action.payload };
    default:
      return state;
  }
};

function OrderPage(){
    const {error} = useLogStore();
    const [state, dispatch] = useReducer(reducer, initialState);
       useEffect(()=>{
        OrdesrApi.getAll({limit:100,offset:0}).then(data=>{
            const list:Array<Table.ITableOrderItem> = new Array(data.rows.length);
            const setCompanyName = new Set();
            for(var i = 0; i<data.rows.length;i++){
              var element = data.rows[i];
              list[i] = {
                compound:(element.orderItems.length != 0?element.orderItems.map(el=>el.partType.name):[]),
                status:element.status,
                nameCompany:element.customer.company_name,
                notes:element.notes,
                price:element.fullPrice,
                priority:element.priority  
                
              };
              setCompanyName.add(element.customer.company_name);
            }
            dispatch({type:"SET_INITIAL_DATA",payload:{
                list,
                options: [allOption, ...Array.from(setCompanyName).map((el)=>({name:String(el),value:String(el)}))],
            }})
      }).catch((e)=>{
        error("Not conection 'order table'");
      })
    },[]);
    
    const sortHandler = () =>{
      const filtered = state.data.filter((item) => {
          const priorityMatch = state.priority === 'all' || String(item.priority) === state.priority;
          const companyMatch = state.companyName === 'all' || item.nameCompany === state.companyName;
          const statusMatch = state.status === 'all' || item.status === state.status;
          return priorityMatch && companyMatch && statusMatch;
      });
      console.log(filtered)
      dispatch({ type: 'APPLY_SORT', payload: filtered });
    };
    const resetHandler = () =>{
      dispatch({type:"RESET_FILTERS"});
    };
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: 'SET_PRIORITY', payload: e.target.value });
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: 'SET_COMPANY_NAME', payload: e.target.value });
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: 'SET_STATUS', payload: e.target.value });
    };
 
    return (<TemplatePage>
                <section className="sort-container">
                <Select title="Приоритет" value={state.priority} onChange={handlePriorityChange}  options={[allOption,...new Array(5).fill(0).map((_,i)=>({name:String(i+1),value:String(i+1)}))]}/>
                <Select title="Название организации" value={state.companyName} onChange={handleCompanyChange} options={state.optionsNameCompany}/>
                <Select title="Статус" value={state.status} onChange={handleStatusChange} options={statusOptions}/>
            <Button onClick={sortHandler}>
              <IconSearch/>
            </Button>
            <Button onClick={resetHandler}>
              <IconX/>
            </Button>
          </section>
           {(!state.loading && state.sortData.length != 0) && <TableOrders items={state.sortData}/>} 
    </TemplatePage>);
}


export default OrderPage;