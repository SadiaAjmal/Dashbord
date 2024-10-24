"use client";

import { useRouter } from "next/navigation";
import { Box, Flex, Button, ButtonGroup, Select, Text, calc } from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import Pinned from "./Pinned";
import SidebarFooter from "./SidebarFooter";
import variables from "../app/Variable.module.scss";

export default function SideBar() {
  const [isActive, setIsActive] = useState("Personal");
  const router = useRouter();

  const handleClick = (btn) => {
    setIsActive(btn);
    router.push("/");
  };

  return (
    <Box bg="#f5f6fa" >
      <Box h={{ lg:"35vh"}}>
        <img
          src="https://mudirr.com/landing/logo_black.svg"
          alt="Mudirr Logo"
        />
        <Flex
          pl="3px"
          my="20px"
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          gap="10px"
        >
          <FaRegUserCircle fontSize="40px" />
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box>
              <Text
                fontSize="24px"
                fontWeight="bold"
                color="black"
                letterSpacing="0.5px"
              >
                {" "}
                Haseena Jameela{" "}
              </Text>{" "}
            </Box>{" "}
            <Box>
              <Select variant="unstyled">
                <option value="option1"> HaseenaJameel1 @email.com </option>{" "}
                <option value="option2"> Haseenajameela @email.com </option>{" "}
                <option value="option3"> Haseenajameela @email.com </option>{" "}
              </Select>{" "}
            </Box>{" "}
          </Flex>{" "}
        </Flex>{" "}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          m="1px"
          h="54px"
          mb="30px"
          p="1px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <ButtonGroup w="100%" mr="2px" ml="2px">
            <Button
              onClick={() => handleClick("Personal")}
              color={isActive === "Personal" ? "#334877" : "#ABAFB8"}
              background={isActive === "Personal" ? "#DBE1F0" : " "}
              _hover={{ color: "#334877", background: "#DBE1F0" }}
              variant="ghost"
              w="48%"
            >
              Personal{" "}
            </Button>{" "}
            <Button
              onClick={() => handleClick("Invited")}
              color={isActive === "Invited" ? "#334877" : "#ABAFB8"}
              background={isActive === "Invited" ? "#DBE1F0" : " "}
              _hover={{ color: "#334877", background: "#DBE1F0" }}
              variant="ghost"
              w="48%"
            >
              Invited{" "}
            </Button>{" "}
          </ButtonGroup>{" "}
        </Box>{" "}
      </Box>
      <Box h={{ lg: `calc(100vh - 40vh)` }} overflowY="auto">
        <Dashboard />
        <Pinned />
      </Box>

      <SidebarFooter />
    </Box>
  );
}
