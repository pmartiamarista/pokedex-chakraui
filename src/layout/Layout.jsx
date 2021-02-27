import { Suspense } from "react";
import { Flex, Box, Progress, } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import Header from "components/layout/Header";

import Routes from "routes";

export default function Layout() {

  return (
    <Flex direction="column" align="stretch" wrap>
      <Header />
      <Box alignContent="center" justifyContent="center" p={2}>
        <Switch>
          <Suspense fallback={<Progress size="md" isIndeterminate />}>
            {Routes.map(({ link, exact, component }, index) => (
              <Route {...{ key: index, exact, path: link, component }} />
            ))}
          </Suspense>
        </Switch>
      </Box>
    </Flex>
  );
}
