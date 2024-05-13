import React, { useEffect, useState } from "react";
import Header from "../../components/Header.tsx";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import Navbar from "../../components/Navbar.tsx";
import { useBlogs } from "../../hooks/useBlogs.tsx";
import Pagination from "../../components/Pagination.tsx";
import CustomTable from "./components/CustomTable.tsx";
import BlogModal from "./components/NewBlogModal.tsx";
const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(5);
  const accessToken = localStorage.getItem("accessToken");
  const parsedAccessToken = accessToken ? JSON.parse(accessToken) : null;
  const { blogs, fetchBlogs } = useBlogs();
  useEffect(() => {
    fetchBlogs();
  }, []);
  const lastPointIndex = currentPage * blogsPerPage;
  const firstPointIndex = lastPointIndex - blogsPerPage;
  const currentBlogs = blogs.slice(firstPointIndex, lastPointIndex);
  const blogHeader = [
    "id",
    "title",
    "content",
    "image",
    "author",
    "created date",
    "Actions",
  ];
  // const deleteBlog = (id) => {
  //   if (window.confirm("Are you sure you want to delete this blog?")) {
  //     fetch(`https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Blog/id=${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(
          `https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Blog/`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${parsedAccessToken}`,
            },
            body: '{"id":' + id + "}",
          }
        );
        if (!response.ok) {
          throw new Error(`Error deleting item: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <HStack gap={0} w="100%">
        <Navbar />
        <Box
          w="100%"
          bg="black"
          color="white"
          height="100vh"
          mt="70px"
          p="30px"
        >
          <HStack mb="20px" justifyContent="space-between" w={"100%"}>
            <Heading>Blogs</Heading>

            <BlogModal />
          </HStack>
          <CustomTable
            column={blogHeader}
            row={currentBlogs}
            deleteFunction={handleDeleteItem}
          />
          <Pagination
            totalPages={blogs.length}
            blogsPerPage={blogsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </HStack>
    </>
  );
};

export default BlogPage;
