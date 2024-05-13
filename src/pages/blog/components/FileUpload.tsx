import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
const FileUpload = () => {
  const props: UploadProps = {
    name: "file",
    action: "http://localhost:3000/blogs",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <FormControl>
      <FormLabel>Image</FormLabel>
      <Upload {...props} beforeUpload={() => false}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </FormControl>
  );
};

export default FileUpload;
