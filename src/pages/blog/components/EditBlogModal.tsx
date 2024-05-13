import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import FileUpload from "./FileUpload.tsx";
import { Input, Modal } from "antd";
import { useBlogs } from "../../../hooks/useBlogs.tsx";
import axios from "axios";
const EditBlogModal = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { blogs, fetchBlogs } = useBlogs();
  useEffect(() => {
    fetchBlogs();
  }, []);
  useEffect(() => {
    setFormData({
      title: blogs[id]?.title || "",
      content: blogs[id]?.content || "",
      author: blogs[id]?.author || "",
      createdDate: blogs[id]?.createdDate || "",
    });
  }, [blogs, id]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    axios
      .put(
        `https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Blog/${id}`,
        formData
      )
      .then((response) => {
        console.log("Blog updated successfully:", response.data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Button
        padding="5px 10px"
        bg="#ffab00"
        border="1px solid #ffab00"
        color="white"
        fontWeight={"600"}
        cursor="pointer"
        borderRadius="5px"
        onClick={showModal}
      >
        Edit
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
            name="title"
            value={blogs[id]?.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Input
            placeholder="Content"
            name="content"
            value={blogs[id]?.content}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input
            placeholder="Author"
            name="author"
            value={blogs[id]?.author}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Created date</FormLabel>
          <Input
            placeholder="Created Date"
            name="createdDate"
            value={blogs[id]?.createdDate}
            onChange={handleChange}
          />
        </FormControl>
        <FileUpload />
        {/* <FormControl>
          <FormLabel>Image</FormLabel>
          <Input placeholder="Image" name="image" value={blogs[id]?.imageUrl}/>
        </FormControl> */}
      </Modal>
    </>
  );
};

export default EditBlogModal;
