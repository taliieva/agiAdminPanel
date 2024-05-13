import React, { useEffect, useState } from "react";
import Header from "../../components/Header.tsx";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import Navbar from "../../components/Navbar.tsx";
import CustomTable from "../blog/components/CustomTable.tsx";
import Pagination from "../../components/Pagination.tsx";
import EventModal from "./component/NewEventModal.tsx";
import { useEvent } from "../../hooks/useEvent.tsx";
import EventTable from "./component/EventTable.tsx";

const EventPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { events, fetchEvents } = useEvent();
  console.log(events)
  useEffect(() => {
    fetchEvents();
  },[])
  const lastPointIndex = currentPage * blogsPerPage;
  const firstPointIndex = lastPointIndex - blogsPerPage;
  const currentEvents = events?.slice(firstPointIndex, lastPointIndex);
  const eventHeader = [
    "id",
    "title",
    "description",
    "location",
    "author",
    "start date",
    "end date",
    "image",
    "form link",
    "actions"
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const deleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      fetch(`https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Event/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
            <Heading>Events</Heading>
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
              Create a new event
            </Button>
            <EventModal
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
            />
          </HStack>
          <EventTable
            column={eventHeader}
            row={currentEvents}
            deleteFunction={deleteEvent}
          />
          <Pagination
            totalPages={events.length}
            blogsPerPage={blogsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </HStack>
    </>
  );
};

export default EventPage;
