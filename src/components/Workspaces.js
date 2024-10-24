"use client";

import { useContext } from "react";
import { UserContext } from "@/Context/UserContext";
import { Box, Text, Flex, Icon, Select, Collapse } from "@chakra-ui/react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FcOpenedFolder } from "react-icons/fc";
import LaunchPad from "./LaunchPad";
import variables from "../app/Variable.module.scss";

const Workspaces = () => {
  const { isWorkspacesOpen, toggleWorkspaces} = useContext(UserContext);

  return (
    <>
      <Box my="10px">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py="10px"
          borderRadius="md"
          cursor="pointer"
        >
          <Box onClick={toggleWorkspaces}>
            <Icon
              justifyContent="center"
              color="#444442"
              alignContent="center"
              fontSize="25px"
            >
              {isWorkspacesOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </Icon>{" "}
          </Box>
          <Text fontWeight="bold" color="#444442">
            WORKSPACES
          </Text>

          <Box borderRadius="full" px="8px" bg="#DADBD6">
            <Text fontWeight="bold" fontSize="14px" color="#444442">
              Coming Soon
            </Text>
          </Box>
        </Flex>

        <Collapse in={isWorkspacesOpen}>
          <Box pl="20px">
            <Flex direction="row" alignItems="center" gap="10px">
              <Icon as={FcOpenedFolder} fontSize="20px" color="yellow" />
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Work Space Name 1"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Box>

          <Box pl="20px">
            <Flex direction="row" alignItems="center" gap="10px">
              <Icon as={FcOpenedFolder} fontSize="20px" color="yellow" />
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Work Space Name 2"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Box>

          <Box pl="20px">
            <Flex direction="row" alignItems="center" gap="10px">
              <Icon as={FcOpenedFolder} fontSize="20px" color="yellow" />
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Work Space Name 3"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Box>
        </Collapse>
        <Flex alignItems="center" justifyContent="center" my="10px">
          <Text cursor="pointer" color="#5B75B0" fontWeight="semibold">
            See All
          </Text>
        </Flex>

        <hr className={variables.hr_style} />
      </Box>
    </>
  );
};

export default Workspaces;
