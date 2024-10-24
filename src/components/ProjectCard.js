"use client";

import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdSend } from "react-icons/md";
import {
  useSteps,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Heading,
  Button,
  Text,
  Flex,
  IconButton,
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useContext , useState } from "react";
import { UserContext } from "@/Context/UserContext";
import projects_info from "@/Asset/projects_info";

const steps = [1, 2, 3, 4];

export default function ProjectCard(project) {




  const { handleMenu, pinProject, unPinProject, pinnedProject, dltProject, deleteProject } =
    useContext(UserContext);

  const isPinned = pinnedProject.includes(project);

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Card my="5%">
      <CardHeader>
        <Flex justifyContent="space-between">
          <Flex gap="" alignItems="center">
            <Box>
              <Heading size="sm">{project.name}</Heading>
            </Box>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              fontWeight="bold"
              fontSize="30px"
              icon={<PiDotsThreeVerticalBold />}
              onClick={() => handleMenu(project)}
            />
            <MenuList>
              {isPinned ? (
                <MenuItem onClick={() => unPinProject(project)}>
                  UnPin Project
                </MenuItem>
              ) : (
                <MenuItem onClick={() => pinProject(project)}>
                  Pin Project
                </MenuItem>
              )}

             
                <MenuItem onClick={() => dltProject(project.id)}>
                  Delete Project
                </MenuItem>

            </MenuList>
          </Menu>
        </Flex>
        <Text>Web</Text>
      </CardHeader>
      <CardBody mb="-25px">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          mt="-30px"
          mb="10px"
        >
          <Stepper size="xs" index={activeStep} flexBasis="70%">
            {steps.map((step, index) => (
              <Step
                key={index}
                onClick={() => setActiveStep(index + 1)}
                display="flex"
                alignItems="center"
              >
                <StepIndicator
                  sx={{
                    "[data-status=complete] &": {
                      background: "#5875B7",
                      border: "none",
                    },
                    "[data-status=active] &": {
                      background: "#DADBD6",
                      border: "none",
                    },
                    "[data-status=incomplete] &": {
                      background: "#DADBD6",
                      border: "none",
                    },
                    marginRight: "0px",
                    marginLeft: "-5px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <StepStatus complete="" incomplete="" active="" />
                </StepIndicator>
                {index < steps.length - 1 && (
                  <StepSeparator
                    sx={{
                      background: "#DADBD6",
                      width: "100%",
                      height: "2px",
                      marginLeft: "0px",
                      marginRight: "0px",
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </Step>
            ))}
          </Stepper>
          <Text>
            {activeStep}/{steps.length} Done
          </Text>
        </Flex>

        <Flex direction="column" gap="6px" alignItems="flex-start" mt="5px">
          <Button fontSize="13px" color="#5875B7" w="fit-content">
            {project.category}
          </Button>
          <Button fontSize="13px" color="#5875B7" w="fit-content">
            Next milestone: {project.next_milestone}
          </Button>
        </Flex>
      </CardBody>
      <CardFooter top="-40px">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Heading size="sm">Follow up with manager</Heading>
          <Flex
            bg="#5875B7"
            alignItems="center"
            justifyContent="center"
            rounded="md"
            w="30px"
            h="30px"
            color="white"
            p="2px"
            cursor="pointer"
          >
            <MdSend />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}
