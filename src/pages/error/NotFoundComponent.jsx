import React from "react";
import { Heading, Center, } from "@chakra-ui/react"

export default function NotFoundComponenet() {
    return (
        <Center bg="red.400" h='100vh' color="white">
            <Heading>404 Not Found</Heading>
        </Center>
    )
}