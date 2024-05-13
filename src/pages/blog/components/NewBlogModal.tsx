import React, { useState } from "react";
import { Input, Modal } from "antd";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import FileUpload from "./FileUpload.tsx";

const BlogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = { title: "", content: "", author: "" };
  const [inputData, setInputData] = useState(data);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    fetch("https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
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
        Create a new blog
      </Button>
      <Modal
        title="Create new blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Title"
            name={inputData.title}
            onChange={handleData}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Input
            placeholder="Content"
            name={inputData.content}
            onChange={handleData}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input
            placeholder="Author"
            name={inputData.author}
            onChange={handleData}
          />
        </FormControl>
        <FileUpload />
      </Modal>
    </>
  );
};

export default BlogModal;
