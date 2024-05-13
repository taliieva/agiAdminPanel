import {
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  const [formData, setFormData] = useState({
    email: '',
    password: '',
});
const navigate = useNavigate();
const [passwordError, setPasswordError] = useState('');
const [emailError, setEmailError] = useState('');

useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        // const userId = localStorage.getItem('userId');
        navigate(`/`);
    }
}, [navigate]);


const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
        const isPasswordValid = /^(?=.*[A-Z]).{8,}$/.test(value);
        setPasswordError(
            isPasswordValid
                ? ''
                : 'Password must contain at least one uppercase letter and be at least 8 characters long.'
        );
    }
  setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError || emailError) {
        console.error('Validation failed:', passwordError || emailError);
        return;
    }

    try {
        const response = await fetch('https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            localStorage.setItem('accessToken', JSON.stringify(data.token));
            // localStorage.setItem('userId', JSON.stringify(data.userId));

            console.log('Login successful');


            navigate(`/blogs`);
        } else if (response.status === 409) {
            console.error('Login failed. Username or email already exists.');
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};







  return (
    <VStack
      justifyContent="center"
      alignItems={"center"}
      w="100%"
      height="100vh"
      bgImage="/assets/schedule-bg-pattern.png"
      bgSize="cover"
      bgColor="#554bb9"
    >
      <VStack
        w="30%"
        height="80%"
        bg="transparent"
        border="1px solid white"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        color="white"
        borderRadius="50px"
        padding="40px"
        gap="50px"
      >
        <Heading fontSize={"30px"}>Login</Heading>
        <form style={{width:"100%"}}  onSubmit={handleSubmit}>
        <VStack w="100%" alignItems={"flex-start"} gap="20px">
          <FormControl w="100%">
            <Text mb="10px">Email</Text>
            <Input
              type="text"
              w="100%"
              p="10px"
              name = 'email'
              fontSize="16px"
              _focus={{ outline: "none " }}
              onChange={handleChange}
              value={formData.email}
            />
          </FormControl>
          <FormControl w="100%">
            <Text mb="10px">Password</Text>
            <InputGroup>
              <Input
               onChange={handleChange}
                type={showPassword ? "text" : "password"}
                w="100%"
                p="10px"
                name="password"
                fontSize="16px"
                value={formData.password}
                _focus={{ outline: "none " }}
              />
              <InputRightElement>
                <IconButton
                  padding="15px"
                  bg="transparent"
                  border="none"
                  variant="gray"
                  backgroundColor="transparent"
                  outline="none"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            w="100%"
            padding="15px"
            bg="white"
            fontWeight="700"
            fontSize="18px"
            border="none"
            cursor="pointer"
            color="#554bb9"
            type="submit"
          >
            Login
          </Button>
          
        </VStack>
        </form>
      </VStack>
    </VStack>
  );
};

export default Login;
