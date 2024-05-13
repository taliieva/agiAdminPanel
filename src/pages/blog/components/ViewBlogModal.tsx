import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import FileUpload from "./FileUpload.tsx";
import { Input, Modal } from "antd";
import { useBlogs } from "../../../hooks/useBlogs.tsx";
const ViewBlogModal = ({id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { blogs, fetchBlogs } = useBlogs();
  useEffect(() => {
    fetchBlogs();
  },[])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        padding="5px 10px"
        bg="#00d25b"
        border="1px solid #00d25b"
        color="white"
        fontWeight={"600"}
        cursor="pointer"
        borderRadius="5px"
        onClick={showModal}
      >
        View
      </Button>
      <Modal
        title="Create new blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input placeholder="Title" name="title" value={blogs[id]?.title} disabled/>
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Input placeholder="Content" name="content" value={blogs[id]?.content} disabled/>
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input placeholder="Author" name="author" value={blogs[id]?.author} disabled/>
        </FormControl>
        <FormControl>
          <FormLabel>Created date</FormLabel>
          <Input placeholder="Created Date" name="createdDate" value={blogs[id]?.createdDate} disabled/>
        </FormControl>
        {/* <FileUpload /> */}
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input placeholder="Image" name="image" value={blogs[id]?.imageUrl} disabled/>
        </FormControl>
      </Modal>
    </>
  );
};

export default ViewBlogModal;
