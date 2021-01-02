import { lazy } from "react";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdList } from "react-icons/md";

const Home = lazy(() => import("./pages/home/Home"));
const List = lazy(() => import("./pages/list/List"));

const ROUTES = [
  {
    exact: true,
    link: "/",
    component: Home,
    label: "Home",
    icon: <Icon as={MdHome} />,
  },
  {
    exact: true,
    link: "/list",
    component: List,
    label: "List",
    icon: <Icon as={MdList} />,
  },
];

export default ROUTES;
