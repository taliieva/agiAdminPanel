import { Box } from "@chakra-ui/react";
import React from "react";
import { ReactElement } from "react";
const Pagination = ({ totalPages, blogsPerPage, setCurrentPage }) => {
  let pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPages / blogsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Box>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          style={{
            padding: "5px 10px",
            marginRight: "20px",
            marginTop: "10px",
            backgroundColor: "transparent",
            border: "2px solid #4e4b4b",
            color: "red",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </Box>
  );
};

export default Pagination;
