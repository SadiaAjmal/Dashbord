"use client";

import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdCalculate } from "react-icons/md";
import variables from "../app/Variable.module.scss";
const MainFooter = () => {
  return (
    <Flex
      gap={{ base: "10px", md: "50px" }}
      w="100%"
      direction={{ base: "column", md: "row", lg: "row" }}
      alignItems="start"
      justifyContent="flex-start"
      className={`${variables.mainWidth}`}
      bg="white"
      pos="fixed"
      fontWeight="bold"
      zIndex="2"
      bottom="0px"
      p="20px"
    >
      <Flex
        gap="10px"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Icon justifyContent="center" alignContent="center" fontSize="23px">
          <IoDocumentTextSharp />
        </Icon>{" "}
        <Text> Explore Documentation </Text>{" "}
      </Flex>{" "}
      <Flex
        direction="row"
        alignItems="center"
        gap="10px"
        justifyContent="flex-start"
      >
        <Icon justifyContent="center" alignContent="center" fontSize="23px">
          <MdCalculate />
        </Icon>{" "}
        <Text> Cost Calculator </Text>{" "}
      </Flex>{" "}
      <Flex
        direction="row"
        alignItems="center"
        gap="10px"
        justifyContent="flex-start"
      >
        <Icon justifyContent="center" alignContent="center" fontSize="23px">
          <MdCalculate />
        </Icon>{" "}
        <Text> Billing Calculator </Text>{" "}
      </Flex>{" "}
    </Flex>
  );
};

export default MainFooter;
