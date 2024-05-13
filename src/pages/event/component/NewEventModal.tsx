import React from "react";
import { Input, Modal } from "antd";
import { FormControl, FormLabel } from "@chakra-ui/react";
import FileUpload from "../../blog/components/FileUpload.tsx";
const EventModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Create new event"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Title" name="title" />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input placeholder="Description" name="description" />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input placeholder="Location" name="location" />
      </FormControl>
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Input placeholder="Author" name="author" />
      </FormControl>
      <FormControl>
        <FormLabel>Start date</FormLabel>
        <Input placeholder="Start date" name="startDate" />
      </FormControl>
      <FormControl>
        <FormLabel>End date</FormLabel>
        <Input placeholder="End date" name="endDate" />
      </FormControl>
      <FileUpload />
      <FormControl>
        <FormLabel>Google form link</FormLabel>
        <Input placeholder="Google form link" name="formLink" />
      </FormControl>
    </Modal>
  );
};

export default EventModal;
