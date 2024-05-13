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
import { Link } from "react-router-dom";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
        <Heading fontSize={"30px"}>Sign Up</Heading>
        <VStack w="100%" alignItems={"flex-start"} gap="20px">
          <FormControl w="100%">
            <Text mb="10px">Username</Text>
            <Input
              type="text"
              w="100%"
              p="10px"
              fontSize="16px"
              _focus={{ outline: "none " }}
            />
          </FormControl>
          <FormControl w="100%">
            <Text mb="10px">Email</Text>
            <Input
              type="text"
              w="100%"
              p="10px"
              fontSize="16px"
              _focus={{ outline: "none " }}
            />
          </FormControl>
          <FormControl w="100%">
            <Text mb="10px">Password</Text>
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
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleTogglePassword}
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
          >
            <Link to="/" style={{ color: "#554bb9", textDecoration: "none" }}>
              Sign up
            </Link>
          </Button>
          <Text alignSelf="center" fontSize="16px">
            Already have an account?
          </Text>
          <Text
            alignSelf="center"
            textDecoration="underline"
            fontSize="18px"
            fontWeight={600}
            fontStyle="italic"
          >
            <Link to="/" style={{ color: "white" }}>
              Login
            </Link>
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SignUp;
