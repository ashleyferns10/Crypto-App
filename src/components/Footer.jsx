import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import avatarSrc from "../assets/avatar.jpeg";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"40"} px={"16"} py={["16","8"]}>
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
            <VStack width={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>We are the best crypto app in India</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
                <Text>Our Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer;
