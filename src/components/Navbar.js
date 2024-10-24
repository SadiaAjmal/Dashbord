"use client";
import { useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";

import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SideBar from "./SideBar";
import variables from "../app/Variable.module.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        bg="white"
        pos="fixed"
        zIndex="4"
        top="0px"
        p="20px"
        boxShadow="lg"
      >
        <Box>
          <img
            src="https://mudirr.com/landing/logo_black.svg"
            alt="Mudirr Logo"
          />
        </Box>

        <Box
          cursor="pointer"
          fontWeight="bold"
          p="5px"
          bg="gray.50"
          transition="all slow ease-in-out"
          borderRadius="50%"
          boxShadow="md"
          transitionDelay="0.5s"
          onClick={menu}
        >
          <Icon justifyContent="center" alignContent="center" fontSize="23px">
            {toggle ? <IoClose /> : <IoIosMenu />}
          </Icon>
        </Box>
      </Flex>{" "}
      <Box
        className={variables.sidebar}
        top={{ base: "3%", md: "3%" }}
        left={toggle ? "0%" : "-100%"}
        transition="left 0.3s ease"
        w={{ base: "80%", md: "50%" }}
        pos="absolute"
        bg="#f5f6fa"
        h="100%"
        pr="2px"
        zIndex="3"
      >
        <SideBar />
      </Box>
    </>
  );
};
export default Navbar;
