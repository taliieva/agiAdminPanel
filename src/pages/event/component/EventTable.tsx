import { Button, HStack, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const EventTable = ({ column, row, deleteFunction }) => {
  const truncateDescription = (description, maxLength) => {
    if (description?.length > maxLength) {
      return description?.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };
  const truncateUrl = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    } else {
      return content;
    }
  };
  const truncateTitle = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  return (
    <Table variant="simple" w="70%" height="90%" overflow="scroll">
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
        {row.map((event, index) => (
          <tr key={index} style={{ height: "30px !important" }}>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "5px 10px",
              }}
            >
              {event.id}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {truncateTitle(event.title, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {truncateDescription(event.content, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {truncateTitle(event.location, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {event.author}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {event.startDate}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {event.endDate}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {truncateUrl(event.imageUrl, 50)}
            </td>
            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              {truncateUrl(event.googleFormLink, 50)}
            </td>

            <td
              style={{
                border: "1px solid #4e4b4b",
                padding: "10px",
              }}
            >
              <HStack alignItems="flex-start">
                <Button
                  padding="5px 10px"
                  bg="#ffab00"
                  border="1px solid #ffab00"
                  color="white"
                  fontWeight={"600"}
                  cursor="pointer"
                  borderRadius="5px"
                >
                  <Link
                    to={`/events/edit/${event.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </Button>
                <Button
                  padding="5px 10px"
                  bg="#fc424a"
                  border="1px solid #fc424a"
                  borderRadius="5px"
                  color="white"
                  fontWeight={"600"}
                  cursor="pointer"
                  onClick={() => {
                    deleteFunction(event.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  padding="5px 10px"
                  bg="#00d25b"
                  border="1px solid #00d25b"
                  color="white"
                  fontWeight={"600"}
                  cursor="pointer"
                  borderRadius="5px"
                >
                  View
                </Button>
              </HStack>
            </td>
          </tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EventTable;
