"use client";
import { useContext } from "react";
import { UserContext } from "@/Context/UserContext";
import { Box, Text, Flex, Icon, Select, Collapse } from "@chakra-ui/react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const LaunchPad = () => {
  const { isLaunchPadOpen, toggleLaunchPad  } = useContext(UserContext);
  return (
    <>
      <Box my="10px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box bg="transparent" py="10px" borderRadius="md">
            <Flex
              cursor="pointer"
              direction="row"
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Box onClick={toggleLaunchPad}>
                <Icon
                  justifyContent="center"
                  color="#444442"
                  alignContent="center"
                  fontSize="25px"
                >
                  {isLaunchPadOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </Icon>{" "}
              </Box>{" "}
              <Text fontWeight="bold" color="#444442">
                LAUNCHPAD{" "}
              </Text>{" "}
            </Flex>{" "}
          </Box>{" "}
        </Flex>  

      <Collapse in={isLaunchPadOpen}>

        <Box pl="10px">
          <Box bg="transparent" px="10px">
            <Flex
              direction="row"
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon
                justifyContent="center"
                alignContent="center"
                fontSize="20px"
              >
                <FaShoppingCart />
              </Icon>{" "}
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Online Shoping Store"
              >
                <option value="option1"> Option 1 </option>{" "}
                <option value="option2"> Option 2 </option>{" "}
                <option value="option3"> Option 3 </option>{" "}
              </Select>{" "}
            </Flex>{" "}
          </Box>{" "}
          <Box bg="transparent" p="10px">
            <Flex
              direction="row"
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon
                justifyContent="center"
                alignContent="center"
                fontSize="20px"
              >
                <IoMdBus />
              </Icon>{" "}
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Transport System"
              >
                <option value="option1"> Option 1 </option>{" "}
                <option value="option2"> Option 2 </option>{" "}
                <option value="option3"> Option 3 </option>{" "}
              </Select>{" "}
            </Flex>{" "}
          </Box>{" "}
          <Box bg="transparent" px="10px">
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="10px"
            >
              <Icon
                justifyContent="center"
                alignContent="center"
                fontSize="20px"
              >
                <IoHomeOutline />
              </Icon>{" "}
              <Select
                cursor="pointer"
                variant="unstyled"
                placeholder="Real Estate Business"
              >
                <option value="option1"> Option 1 </option>{" "}
                <option value="option2"> Option 2 </option>{" "}
                <option value="option3"> Option 3 </option>{" "}
              </Select>{" "}
            </Flex>{" "}
          </Box>{" "}
        </Box>
</Collapse>


        <Flex
          alignItems="center"
          justifyContent="center"
          my="10px"
          cursor="pointer"
        >
          <Text color="#5B75B0" fontWeight="semibold">
            See All{" "}
          </Text>{" "}
        </Flex>{" "}
      </Box>{" "}
    </>
  );
};

export default LaunchPad;
