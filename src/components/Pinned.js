"use client";
import { useContext } from "react";
import { UserContext } from "@/Context/UserContext";
import {
  Box,
  Text,
  Flex,
  Icon,
  List,
  ListItem,
  Select,
  Collapse,
} from "@chakra-ui/react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineStarOutline } from "react-icons/md";
import variables from "../app/Variable.module.scss";
import { TbPinnedOff } from "react-icons/tb";
import projects_info from "@/Asset/projects_info";

const Pinned = () => {
  const { pinnedProject, unPinProject, isPinnedOpen, togglePinned} =
    useContext(UserContext);

  return (
    <Box p="10px" mb={{ base: "2%", lg: "30%" }} color="#707066">
      <Flex alignItems="center" justifyContent="space-between">
        <Box bg="transparent" borderRadius="md" mb="10px">
          <Flex
            cursor="pointer"
            direction="row"
            alignItems="center"
            gap="10px"
            justifyContent="flex-start"
          >
            <Box onClick={togglePinned}>
              <Icon
                justifyContent="center"
                color="#444442"
                alignContent="center"
                fontSize="25px"
              >
                {isPinnedOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </Icon>{" "}
            </Box>
            <Text fontWeight="bold" color="#444442">
              PINNED PROJECTS ({pinnedProject.length}/3)
            </Text>{" "}
          </Flex>{" "}
        </Box>{" "}
      </Flex>

      <Collapse in={isPinnedOpen}>
        <Box pl="10px">
          <Box bg="transparent">
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <List>
                {" "}
                {(pinnedProject || []).map((project, i) => (
                  <ListItem key={i}>
                    <Flex
                      direction="row"
                      alignItems="center"
                      gap="10px"
                      py="5px"
                    >
                      <Icon
                        justifyContent="center"
                        alignContent="center"
                        fontSize="23px"
                      >
                        <MdOutlineStarOutline />
                      </Icon>

                      <Select
                        cursor="pointer"
                        variant="unstyled"
                        placeholder={project.name}
                      >
                        <option value="option1">
                          {" "}
                          {`Project Id: ${project.id}`}{" "}
                        </option>{" "}
                        <option value="option2">
                          {" "}
                          {`Project Status: ${project.category}`}{" "}
                        </option>{" "}
                        <option value="option3"> Option 3 </option>{" "}
                      </Select>

                      <Icon
                        justifyContent="space-between"
                        alignContent="end"
                        fontSize="23px"
                        cursor="pointer"
                      >
                        <TbPinnedOff onClick={() => unPinProject(project)} />
                      </Icon>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>{" "}
          </Box>{" "}
          <hr className={variables.hr_style} />{" "}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Pinned;