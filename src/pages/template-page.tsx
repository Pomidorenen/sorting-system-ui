
import "@styles/template.css";
import { Sidebar } from "@components/Sidebar";
import OrderIcon from "@icons/order-icon.svg";
import DetailIcon from "@icons/detail-icon.svg";

const SidebarItems = [{
    title: "Детали",
    image: DetailIcon,
    link:"/"
},{
    title:"Заказы",
    image: OrderIcon,
    link:"/orders"
}];


function TemplatePage({children}:{children?:React.ReactNode}){
    return (
    <section className="template-page">
        <Sidebar items={SidebarItems}/>  
        <section className="template-page-content">
            {children}
        </section>
    </section>);
}

export default TemplatePage;