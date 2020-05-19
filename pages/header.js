import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, Button, IconButton } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 100;
      if (top !== isTop) {
        setIsTop(top)
      }
    });   
  }, [])

  return (
      <Box position='fixed' w='100%' zIndex={100}>
        <Flex
            style={ isTop ? {background: ''} : {background: 'white'} }
            w='100%' zIndex={50} as="nav" align="center" justify="space-between"
            wrap="wrap" py="1.5rem" px={120} color='black'
            {...props}>
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                SmartGov
                </Heading>
            </Flex>
            <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>
            <Box display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}>
                <MenuItems>Docs</MenuItems>
                <MenuItems>Examples</MenuItems>
                <MenuItems>Blog</MenuItems>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}>
                <IconButton
                    variant="ghost"
                    variantColor="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon='search'/>
                {/* <IconButton
                    variant="ghost"
                    variantColor="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon='search'/> */}
            </Box>
        </Flex>
      </Box>
    
  );
};

export default Header;
