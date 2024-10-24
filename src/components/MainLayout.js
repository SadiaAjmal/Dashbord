"use client";

import { Box, Flex, Overflow, Show, Spacer } from "@chakra-ui/react";
import variables from "../app/Variable.module.scss";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <Flex w="100%" h="100%" overflow="hidden">
      <Show above="lg">
        <Box className={variables.sidebar} py="20px" px="10px" h="100vh">
          <SideBar />
        </Box>{" "}
      </Show>
      <Show below="lg">
        <Navbar />
      </Show>
      <Box className={variables.mainWidth} flex="1" overflowY="auto" h="100vh">
        <main p="10px"> {children} </main>{" "}
      </Box>{" "}
    </Flex>
  );
};

export default MainLayout;
