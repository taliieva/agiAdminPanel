import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useBlogs } from "../../../hooks/useBlogs.tsx";
const TableSection = () => {
  const { blogs, fetchBlogs } = useBlogs();
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Box bg="black" width="85%" height="95vh" color="white" padding="20px">
      <Heading mb="20px" fontFamily="Inter">
        Blogs
      </Heading>
      <TableContainer w="95%">
        <Table variant="simple" width="100%" border="1px solid white">
          <Thead>
            <Tr textAlign="left" h="40px">
              <Th width="5%">id</Th>
              <Th width="20%">title</Th>
              <Th width="10%">content</Th>
              <Th width="20%">imageUrl</Th>
              <Th width="15%">author</Th>
              <Th width="10%">created Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog, index) => (
              <Tr key={index} h="30px">
                <Td width="5%">{blog?.id}</Td>
                <Td width="20%">{blog?.title}</Td>
                <Td width="10%">{blog?.content}</Td>
                <Td width="20%">{blog?.imageUrl}</Td>
                <Td width="15%">{blog?.author}</Td>
                <Td width="10%">{blog?.createdDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableSection;
