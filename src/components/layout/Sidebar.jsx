import { Link as RouteLink, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  VStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";

export default function Sidebar({ onClose, isOpen, Routes }) {
  const { pathname } = useLocation();

  return (
    <Drawer {...{ isOpen, onClose }} placement="right">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center">Menú</DrawerHeader>
          <Divider orientation="horizontal" />
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={1}
              align="stretch"
            >
              {Routes.map(({ label, icon, link }, i) => (
                <Button
                  {...{
                    key: i,
                    as: RouteLink,
                    to: pathname === link ? "#" : link,
                    "aria-label": `${label}`,
                    size: "lg",
                    colorScheme: "red",
                    variant: "ghost",
                    borderRadius: 5,
                    justifyContent: "left",
                    iconSpacing: 8,
                    leftIcon: icon,
                    isActive: pathname === link,
                  }}
                >
                  {label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
