import React from "react";
import {
  Button,
  FormControl,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
        <Heading fontSize={"30px"}>Forgot Password?</Heading>

        <VStack w="100%" alignItems={"flex-start"} gap="10px">
          <Text mb="20px">
            Enter the email addres associated with your account and we`ll send
            you a link to reset your password
          </Text>
          <FormControl w="100%" mb="30px">
            <Text mb="10px">Email</Text>
            <Input
              type="text"
              w="100%"
              p="10px"
              fontSize="16px"
              _focus={{ outline: "none " }}
            />
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
          >
            Send an email
          </Button>
          <Text alignSelf="center">or</Text>
          <Button
            fontWeight="700"
            fontSize="16px"
            bg={"transparent"}
            border="none"
            color="white"
            w="100%"
            padding="15px"
          >
            <Link to="/" style={{color:'white', textDecoration:"none"}}>
            <HStack>
              <Text>Go to the login page</Text>
              <ArrowForwardIcon fontSize="18px" fontWeight="700"/>
            </HStack></Link>

          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ForgotPassword;
