import Head from 'next/head'
import Theme from './Theme'
import { Box, Flex, Text, Image, List, ListItem, Button, Grid, Heading, PseudoBox, Icon } from '@chakra-ui/core'
import { useState, useEffect } from 'react'

export default function Home() {

  return (
    <Box>
      {/* HEADER */}
      {/* 1 */}   
      <Box h='90vh'>
        <Box mx={{md: 120, sm: 0}}>
          <Flex
            alignItems="stretch"
            flexDirection="row"
            justifyContent="space-around">
            <Box display="flex" width="100%" flexDirection="column"
              height="100vh"
              justifyContent="center">
              <Text as="h1" fontSize="5xl">Platform pendukung terciptanya Smart City di Indonesia</Text>
              <Text mt={5} fontSize='md' color="gray.500">Informasi Layanan Publik Pemerintahan dapat diakses dalam satu aplikasi e-government </Text>
              <Flex mt={10}>
                <Button leftIcon='chat' variantColor="teal" size='lg'>Hubungi</Button>
                <Button variant='ghost' size='lg'>Portofolio</Button>
              </Flex>
            </Box>
            <Box display="flex" width="100%" />
          </Flex>
        </Box>
      </Box>
      {/* 2 */}
      <Box>
        <Box mx={{md: 120, sm: 0}}>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            display="flex"
            alignItems="center">
            <Heading>Our Service</Heading>
            <Text>Diciptakan untuk Pemerintah dan Masyarakat</Text>
          </Flex>
          <Flex>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>Peta Wisata</Text>
              <Text textAlign='center' color="gray.500" mt={5}>Informasi terkait destinasi pariwisata, kuliner, hotel, dan tempat belanja</Text>
            </PseudoBox>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>Flight Information</Text>
              <Text textAlign='center'  color="gray.500" mt={5}>Informasi jadwal keberangkatan dan kedatangan pesawat.</Text>
            </PseudoBox>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>CCTV</Text>
              <Text textAlign='center' color="gray.500" mt={5}>Keramaian lalu lintas dapat dipantau secara real time lewat CCTV.</Text>
            </PseudoBox>
          </Flex>
          <Flex>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>Aspirasi</Text>
              <Text textAlign='center' color="gray.500" mt={5}>Sarana menjembatani masyarakat dan pemerintah daerah</Text>
            </PseudoBox>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>Info Harga Pangan</Text>
              <Text textAlign='center' color="gray.500" mt={5}>Informasi harga komoditas pokok terintegrasi dengan DISPERINDAG.</Text>
            </PseudoBox>
            <PseudoBox width="100%" p={50} border='1px' borderColor='gray.100' 
              _hover={{boxShadow:"0px 0px 16px 3px rgba(0,0,0,0.09)"}}
              cursor='pointer'>
              <Text textAlign='center'>Event Terkini</Text>
              <Text textAlign='center' color="gray.500" mt={5}>Manajemen data konten dengan sangat mudah.</Text>
            </PseudoBox>
          </Flex>
        </Box>
      </Box>
      {/* 3 */}
      <Box>
        <Box mx={{md: 120, sm: 0}} py={100}>
          <Flex justifyContent="space-between">
            <Image height="100px" width="100px" />
            <Flex flexDirection="column" width="50%">
              <Heading fontSize='2xl'>Smart Government</Heading>
              <Text mt={5}>Menciptakan Smart Government dengan memberikan pelayanan publik kepada masyarakat yang dapat diakses dengan cepat dan mudah. Masyarakat dapat berperan aktif dan berpartisipasi dalam tata kelola kota, sehingga pemerintah daerah dapat membuat kebijakan yang lebih baik.</Text>
              <List mt={5}>
                <ListItem><Icon name="arrow-forward"/>&nbsp;&nbsp;Data Integration</ListItem>
                <ListItem><Icon name="arrow-forward"/>&nbsp;&nbsp;Data Integration</ListItem>
                <ListItem><Icon name="arrow-forward"/>&nbsp;&nbsp;Data Integration</ListItem>
              </List>
              <Flex mt={5}>
                <Button leftIcon='chat' variantColor="teal">Hubungi Kami</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* 4 */}
      <Box>
        <Box mx={{md: 120, sm: 0}}>
          <Text textAlign="center">Our Client</Text>
          <Flex justifyContent="center" alignItems="stretch">
            <Image height="100px" width="100px" ml={5} mr={5} />
            <Image height="100px" width="100px" ml={5} mr={5} />
            <Image height="100px" width="100px" ml={5} mr={5} />
          </Flex>
        </Box>
      </Box>
      {/* FOOTER */}
      <Box>
        <Box mx={{md: 120, sm: 0}}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Flex flexDirection="column">
              <Image height="100px" width="100px" />
              <Text>Text value</Text>
            </Flex>
            <Flex flexDirection="column">
              <Text>About Us</Text>
              <Text>Support Center</Text>
              <Text>Customer Support</Text>
              <Text>About Us</Text>
              <Text>Copyright</Text>
            </Flex>
            <Flex flexDirection="column">
              <Text>Our Information</Text>
              <Text>Return Policy</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms & Conditions</Text>
              <Text>Site Map</Text>
            </Flex>
            <Flex flexDirection="column">
              <Text>Policy</Text>
              <Text>Security</Text>
              <Text>Supply Chain</Text>
            </Flex>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
