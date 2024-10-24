"use client";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";
import variables from "../app/Variable.module.scss";
import Workspaces from "./Workspaces";
import LaunchPad from "./LaunchPad";

const Dashboard = () => {
  return (
    <Box mb="30px" p="10px" bg="#ECF0FB" borderRadius="lg">
      <div>
        <Box bg="white" p="10px" borderRadius="md" cursor="pointer">
          <Flex
            direction="row"
            alignItems="center"
            gap="10px"
            justifyContent="flex-start"
          >
            <Icon justifyContent="center" alignContent="center" fontSize="23px">
              <IoMdStar />
            </Icon>{" "}
            <Text fontWeight="bold"> Dashboard </Text>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box bg="transparent" p="10px" pl borderRadius="md">
          <Flex
            direction="row"
            alignItems="center"
            gap="10px"
            justifyContent="flex-start"
          >
            <Icon justifyContent="center" alignContent="center" fontSize="23px">
              <MdOutlineStarOutline />
            </Icon>{" "}
            <Text> Project History </Text>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box bg="transparent" px="10px" borderRadius="md">
          <Flex
            direction="row"
            alignItems="center"
            gap="10px"
            justifyContent="flex-start"
          >
            <Icon justifyContent="center" alignContent="center" fontSize="23px">
              <MdOutlineStarOutline />
            </Icon>{" "}
            <Text> Client History </Text>{" "}
          </Flex>{" "}
        </Box>{" "}
        <Box bg="transparent" p="10px" borderRadius="md">
          <Flex
            direction="row"
            alignItems="center"
            gap="10px"
            justifyContent="flex-start"
          >
            <Icon justifyContent="center" alignContent="center" fontSize="23px">
              <MdOutlineStarOutline />
            </Icon>{" "}
            <Text> Emails </Text>{" "}
          </Flex>{" "}
        </Box>{" "}
      </div>

      <hr className={variables.hr_style} />

      <Workspaces />

      <LaunchPad />
    </Box>
  );
};

export default Dashboard;
