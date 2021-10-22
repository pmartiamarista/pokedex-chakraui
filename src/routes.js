import React, { lazy } from "react";
import { Icon } from "@chakra-ui/react";
import { MdList } from "react-icons/md";

const List = lazy(() => import("./pages/list/List"));

const ROUTES = [
  {
    exact: true,
    link: "/",
    component: List,
    label: "List",
    icon: <Icon as={MdList} />,
  },
];

export default ROUTES;
