import { Button, HStack, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import ViewBlogModal from "./ViewBlogModal.tsx";
import EditBlogModal from "./EditBlogModal.tsx";

const CustomTable = ({ column, row, deleteFunction }) => {
  const truncateContent = (content, maxLength) => {
    if (content?.length > maxLength) {
      return content.substring(0, maxLength) + "..."; // Append ellipsis
    } else {
      return content;
    }
  };
  const truncateUrl = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."; // Append ellipsis
    } else {
      return content;
    }
  };
  const truncateTitle = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."; // Append ellipsis
    } else {
      return content;
    }
  };

  return (
    <Table variant="simple" w="100%" height="90%">
      <Thead>
        <Tr border="1px solid red" height="20%">
          {column.map((header, index) => (
            <Th
              key={index}
              border="1px solid red"
              padding="10px"
              textAlign="left"
            >
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {row.map((blog, index) => (
          <tr key={index} style={{ height: "50px !important" }}>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {blog.id}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {truncateTitle(blog.title, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {truncateContent(blog.content, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {truncateUrl(blog.imageUrl, 50)}
            </td>

            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {blog.author}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              {blog.createdDate}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                height: "70px",
                padding: "10px",
              }}
            >
              <HStack alignItems="flex-start">
                <EditBlogModal id={blog.id} />
                <Button
                  padding="5px 10px"
                  bg="#fc424a"
                  border="1px solid #fc424a"
                  borderRadius="5px"
                  color="white"
                  fontWeight={"600"}
                  cursor="pointer"
                  onClick={() => {
                    deleteFunction(blog.id);
                  }}
                >
                  Delete
                </Button>
                <ViewBlogModal id={index} />
              </HStack>
            </td>
          </tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CustomTable;
