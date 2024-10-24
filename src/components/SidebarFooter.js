"use client";

import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineStarOutline } from "react-icons/md";
import variables from "../app/Variable.module.scss";
const SidebarFooter = () => {
  return (
    <Box
      className={variables.sidebarFooter}
      pos={{ lg: "fixed" }}
      mt={{ base: "0%", lg: "80%" }}
      left="0"
      zIndex={{ lg: "1" }}
      bottom="0px"
      py="10px"
    
w={{lg:"23%" , md:"100%", base:"100%"}}
    >
      <Box px="10px">
        <Flex
          direction="row"
          alignItems="center"
          gap="10px"
          justifyContent="flex-start"
        >
          <Icon justifyContent="center" alignContent="center" fontSize="23px">
            <MdOutlineStarOutline />
          </Icon>{" "}
          <Text cursor="pointer"> Account Settings </Text>{" "}
        </Flex>{" "}
      </Box>{" "}
      <Box p="10px">
        <Flex
          direction="row"
          alignItems="center"
          gap="10px"
          justifyContent="flex-start"
        >
          <Icon justifyContent="center" alignContent="center" fontSize="23px">
            <MdOutlineStarOutline />
          </Icon>{" "}
          <Text cursor="pointer"> Logout </Text>{" "}
        </Flex>{" "}
      </Box>{" "}
    </Box>
  );
};

export default SidebarFooter;
