import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { DollarSign , HomeIcon  , ShoppingBasket , ShoppingCart} from "lucide-react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Payments",
      url: "/payments",
      icon: DollarSign,
    },
    {
      title: "Products",
      url: "/products",
      icon: ShoppingBasket
    },
    {
      title: "Carts",
      url: "/carts",
      icon: ShoppingCart
    }
  ];
  return (
    <div className="w-full flex">
      <div className="w-fit">
        <AppSidebar items={items} />
      </div>
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
