import { Suspense, useReducer, useMemo, useEffect, useRef } from "react";
import { Flex, Box, Progress } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";

import Routes from "routes";

const reducerLayout = (state, action) => {
  switch (action.type) {
    case "DRAWER":
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    default:
      console.log(`Acción no encontrada ${action.type}`);
      return { ...state };
  }
};

export default function Layout() {
  const MainPanel = useRef();

  const [state, localDispatch] = useReducer(reducerLayout, {
    isDrawerOpen: false,
  });
  const [memoState, memoDispatch] = useMemo(() => [state, localDispatch], [
    state,
  ]);

  useEffect(() => {
    window.addEventListener("resize", () => {});
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [MainPanel]);

  const openCloseDrawer = () => memoDispatch({ type: "DRAWER" });

  return (
    <>
      <Flex direction="column" align="stretch" wrap>
        <Header
          {...{ isDrawerOpen: memoState.isDrawerOpen, openCloseDrawer }}
        />
        <Box
          alignContent="center"
          justifyContent="center"
          p={2}
          ref={MainPanel}
        >
          <Switch>
            <Suspense fallback={<Progress size="md" isIndeterminate />}>
              {Routes.map(({ link, exact, component }, index) => (
                <Route {...{ key: index, exact, path: link, component }} />
              ))}
            </Suspense>
          </Switch>
        </Box>
      </Flex>
      <Sidebar
        {...{ Routes, isDrawerOpen: memoState.isDrawerOpen, openCloseDrawer }}
      />
    </>
  );
}
