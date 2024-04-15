import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      bg="#191c24"
      color="#6c7293"
      w="15%"
      h="95vh"
      fontFamily="Inter"
    >
      <Text fontSize="12px" p="20px">Navigation</Text>
      <VStack alignItems="flex-start">
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">About</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Blog</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Contact</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Site Details</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Social Media</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Sponsor</Text>
        <Text fontSize="14px" _hover={{color:"white", bg:"#0f1015"}} p="15px 30px" w="90%" borderRadius="0 25px 25px 0">Team</Text>
      </VStack>
    </Box>
  );
};

export default Navbar;
