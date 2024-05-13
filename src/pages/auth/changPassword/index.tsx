import React, { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = () => {
    console.log("object");
  };
  return (
    <VStack
      justifyContent="center"
      alignItems={"center"}
      w="100%"
      height="100vh"
      bgImage="/assets/schedule-bg-pattern.png"
      bgSize="cover"
      bgColor="#554bb9"
    >
      <VStack
        w="30%"
        height="80%"
        bg="transparent"
        border="1px solid white"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        color="white"
        borderRadius="50px"
        padding="40px"
        gap="50px"
      >
        <Heading fontSize={"30px"}>Change Password</Heading>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="100%" alignItems={"flex-start"} gap="20px">
            <FormControl w="100%">
              <Text mb="10px">New Password</Text>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  w="100%"
                  p="10px"
                  fontSize="16px"
                  _focus={{ outline: "none " }}
                />
                <InputRightElement>
                  <IconButton
                    padding="15px"
                    bg="transparent"
                    border="none"
                    variant="gray"
                    backgroundColor="transparent"
                    outline="none"
                    aria-label={
                      showPassword ? "Hide Password" : "Show Password"
                    }
                    icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={handleTogglePassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl w="100%">
              <Text mb="10px">Confirm Password</Text>
              <InputGroup>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  w="100%"
                  p="10px"
                  fontSize="16px"
                  _focus={{ outline: "none " }}
                />
                <InputRightElement>
                  <IconButton
                    padding="15px"
                    bg="transparent"
                    border="none"
                    variant="gray"
                    backgroundColor="transparent"
                    outline="none"
                    aria-label={
                      showConfirmPassword ? "Hide Password" : "Show Password"
                    }
                    icon={showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={handleToggleConfirmPassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
         
            <Button
              w="100%"
              padding="15px"
              bg="white"
              fontWeight="700"
              fontSize="18px"
              border="none"
              cursor="pointer"
              color="#554bb9"
              mt="20px"
            >
              Change Password
            </Button>
           
          </VStack>
        </form>
      </VStack>
    </VStack>
  );
};

export default ChangePassword;
