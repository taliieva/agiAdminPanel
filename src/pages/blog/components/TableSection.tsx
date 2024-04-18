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
    <Box
      bg="black"
      width="85%"
      height="100vh"
      color="white"
      padding="20px"
      mt="70px"
    >
      <Heading mb="20px" fontFamily="Inter">
        Blogs
      </Heading>
      <Table variant="striped" width="100%" marginBottom="1rem" color="white">
        <Thead>
          <Tr textAlign="left" h="40px">
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              id
            </Th>
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              title
            </Th>
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              content
            </Th>
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              imageUrl
            </Th>
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              author
            </Th>
            <Th
              verticalAlign="bottom"
              borderTop="1px solid #2c2e33"
              padding="0.9375rem"
            >
              created Date
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogs.map((blog, index) => (
            <Tr key={index} h="30px" borderBottom="1px solid white">
              {/* <Td>{blog?.id}</Td>
              <Td>{blog?.title}</Td>
              <Td>{blog?.content}</Td>
              <Td>{blog?.imageUrl}</Td>
              <Td>{blog?.author}</Td>
              <Td>{blog?.createdDate}</Td> */}
              <Td
                w="50px"
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
              >
                {blog.id}
              </Td>
              <Td
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
                maxH="20px"
                maxWidth="90px" 
                overflowX="auto" 
              >
                {blog.title}
              </Td>
              <Td
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
              >
                1
              </Td>
              <Td
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
              >
                1
              </Td>
              <Td
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
              >
                1
              </Td>
              <Td
                verticalAlign="top"
                borderTop="1px solid #2c2e33"
                padding="0.9375rem"
              >
                1
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableSection;
