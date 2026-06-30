import "@styles/details.css";
import { Sidebar } from "@components/Sidebar";
import OrderIcon from "@icons/order-icon.svg";
import DetailIcon from "@icons/detail-icon.svg";


const SidebarItems = [{
  title: "Детали",
  image: DetailIcon
},{
  title:"Заказы",
  image: OrderIcon
}];

function MainPage(){
    return (
    <section className="details-page">
        <Sidebar items={SidebarItems}/>  
        <section className="details-page-content">
          main
        </section>
    </section>);
}

export default MainPage;