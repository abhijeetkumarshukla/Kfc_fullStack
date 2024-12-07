import { Box, Text } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import { MdOutlineLocationOn } from "react-icons/md"
 

 

const Home = () => {
  return (
    <Box>     
      <Navbar/>
      <Box gap={'3'}  display={'flex'} justifyContent={'center'} bgColor={'black'} p={'17px'} color={'white'}>
      <Box    fontSize={'2xl'}  > <MdOutlineLocationOn /> </Box>
      <Text fontSize={'.1xl'} fontWeight={'400'}>Select a store to start your order.</Text>
       
      </Box>
    </Box>
  )
}

export default Home
