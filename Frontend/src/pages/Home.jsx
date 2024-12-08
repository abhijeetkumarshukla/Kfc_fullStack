import { Box, Text } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import { MdLocationOn } from "react-icons/md";
 
import PauseOnHover from "../components/slider/Slider1";
 

 

const Home = () => {
  return (
    <Box>     
      <Navbar/>
      <Box gap={'3'}  display={'flex'} justifyContent={'center'} bgColor={'black'} p={'17px'} color={'white'}>
      <Box    fontSize={'1.3rem'}  >   <MdLocationOn  style={{color:"#E4002B"}} /> </Box>
      <Text fontSize={'15px'} fontWeight={'400'}>Select a store to start your order.</Text>
        </Box>


    {/* Slider 1 */}
    <PauseOnHover/>

    </Box>
  )
}

export default Home
