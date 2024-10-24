"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Button,
  ListItem,
  List,
} from "@chakra-ui/react";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";
import variables from "../app/Variable.module.scss";
import Link from "next/link";
import Ongoing from "./ongoing/page";
import Completed from "./completed/page";
import Cancelled from "./cancelled/page";
import Draft from "./draft/page";
import MainFooter from "@/components/MainFooter";
import projects_info from "@/Asset/projects_info";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const projectNumber = (project_cat) => {
    return projects_info
      .filter((item) => item.category === project_cat)
      .length.toString()
      .padStart(2, "0");
  };
  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Completed />;
      case 1:
        return <Ongoing />;
      case 2:
        return <Draft />;
      case 3:
        return <Cancelled />;
      default:
        return <Completed />;
    }
  };
  const links = [
    { label: "Completed" },
    { label: "Ongoing" },
    { label: "Draft" },
    { label: "Cancelled" },
  ];

  return (
    <Box
      px="20px"
      mt={{ base: "25%", md: "15%", lg: "60px" }}
      w="100%"
      h="100%"
      marginBottom={{ base: "2%", md: "7%", lg: "7%" }}
    >
      <Flex
        direction="column"
        gap="20px"
        alignItems={{ base: "center", md: "center", lg: "flex-start" }}
        justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
      >
        <Heading> Welcome Back, Haseena! </Heading>{" "}
        <Text className={variables.TextClr}>
          You have accomplished a lot today.Let us handle the rest.{" "}
        </Text>{" "}
      </Flex>{" "}
      <Flex
        display={{ base: "flex", md: "flex", lg: "flex" }}
        flexWrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}
        alignItems="flex-start"
        gap={{ base: "20px", md: "30px", lg: "90px" }}
        justifyContent="space-between"
        my="40px"
        marginBottom="60px"
        w={{ base: "100%", md: "90%", lg: "70%" }}
      >
        <Box gap="40px">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="15px"
          >
            <Icon viewBox="50 50" fontSize="35px" color="#3DAF7C">
              <AiFillFolderOpen />
            </Icon>{" "}
            <Box>
              <Text fontWeight="bold" fontSize="18px">
                {" "}
                {projectNumber("Completed")}{" "}
              </Text>{" "}
              <Text className={variables.TextClr} fontSize="12px">
                Completed{" "}
              </Text>{" "}
            </Box>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box gap="40px">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="15px"
          >
            <Icon viewBox="50 50" fontSize="35px" color="#5875B7">
              <AiFillFolderOpen />
            </Icon>{" "}
            <Box>
              <Text fontWeight="bold" fontSize="18px">
                {" "}
                {projectNumber("Ongoing")}{" "}
              </Text>{" "}
              <Text className={variables.TextClr} fontSize="12px">
                Ongoing{" "}
              </Text>{" "}
            </Box>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box gap="40px">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="15px"
          >
            <Icon viewBox="50 50" fontSize="35px" color="#DE9654">
              <AiFillFolderOpen />
            </Icon>{" "}
            <Box>
              <Text fontWeight="bold" fontSize="18px">
                {" "}
                {projectNumber("Draft")}{" "}
              </Text>{" "}
              <Text className={variables.TextClr} fontSize="12px">
                Drafts{" "}
              </Text>{" "}
            </Box>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box gap="40px">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="15px"
          >
            <Icon viewBox="50 50" fontSize="35px" color="#F26666">
              <AiFillFolderOpen />
            </Icon>{" "}
            <Box>
              <Text fontWeight="bold" fontSize="18px">
                {" "}
                {projectNumber("Cancelled")}{" "}
              </Text>{" "}
              <Text className={variables.TextClr} fontSize="12px">
                Cancelled{" "}
              </Text>{" "}
            </Box>{" "}
          </Flex>{" "}
        </Box>{" "}
      </Flex>{" "}
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        gap="25px"
        alignItems={{ base: "center", md: "flex-start" }}
        w="100%"
        justifyContent="space-between"
      >
        <Flex direction="row" className={variables.TextClr}>
          <List display="flex">
            {" "}
            {links.map((link, index) => (
              <ListItem
                key={link.label}
                px={{ base: "8px", md: "15px", lg: "20px" }}
                pb="2px"
                borderBottom={
                  activeIndex === index ? "2px solid blue" : "2px solid gray"
                }
                color={activeIndex === index ? "blue" : "inherit"}
                onClick={() => handleClick(index)}
                cursor="pointer"
              >
                {" "}
                {link.label}{" "}
              </ListItem>
            ))}{" "}
          </List>{" "}
        </Flex>{" "}
        <Button
          leftIcon={<FaCirclePlus />}
          colorScheme="blue"
          variant="solid"
        >
          Create a project{" "}
        </Button>{" "}
      </Flex>{" "}
      {renderContent()} <MainFooter />
    </Box>
  );
}
