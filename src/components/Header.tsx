import React from 'react'
import { Box, Heading} from '@chakra-ui/react'
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import bgImg from '../assets/Rectangle.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <Box backgroundColor="#292929" paddingLeft='90px' paddingRight='90px' color="#fff" h={{sm:'67px',md:"100px"}} display='flex' alignItems='center' justifyContent='space-between'>
        <Box border="1px solid #FFFFFF" p={{sm:'10px',md:'12px'}}>MyTextApp</Box>
        <ColorModeSwitcher />
    </Box>
    <Box position='relative' w='100vw' h='50vh'
    _before={{content:'""',
     position:'absolute',
     top:0,
     left:0,
     width:'100%',
     height:'100%',
     backgroundImage:`url(${bgImg})`,
     backgroundRepeat:'no-repeat',
     backgroundSize:'cover',
     backgroundPosition:'center center',
     filter:'brightness(60%)',
     }}>
    <Heading 
    size={['sm','md','lg']} 
    position='absolute'
    width= '273px'
    height= '72px'
    fontSize='28px'
    lineHeight='36px'
    textAlign= 'center'
    color='white'
    sx={{
      '@media screen and (min-width: 0em) and (max-width: 29.9375em)':{
      width: '273px',
      left:'20px',
      top: '150px',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '28px',
      lineHeight: '36px',
      textAlign: 'center',
      letterSpacing: '-0.05em'
      },
      '@media screen and (min-width: 30em) and (max-width: 47.9375em)':{
      width: '273px',
      left:'180px',
      top: '80px',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '50px',
      lineHeight: '56px',
      textAlign: 'center',
      letterSpacing: '-0.05em'
      },
      '@media (min-width:768px)': {
        width:'273px',
        top: '200px',
        left:'186px',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize:'50px',
        textAlign: 'center',
      },
      '@media (min-width:1024px)': {
        width: '490px',
        height: '282px',
        left: '230px',
        top: '220px',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize:'72px',
        lineHeight:'94px',
        textAlign: 'center',
        letterSpacing:'-0.05em'
      },
      '@media (min-width:1200px)': {
        fontSize:'50px' ,
        lineHeight:'60px', 
        letterSpacing:'-0.05em', 
        fontWeight:'700', 
        fontStyle:'normal', 
        color:'white',
        width:'250px',
        height:'282px',
        top:'15px', 
        left:'77px',
        fontFamily:'Dm sans',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
    }}
    >
    Watch something incredible.
      </Heading>
    </Box>
    </>
  )
}

export default Header