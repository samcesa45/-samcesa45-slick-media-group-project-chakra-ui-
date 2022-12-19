import React from 'react'
import {  Card, CardBody, Heading} from '@chakra-ui/react'
import { MovieProps } from '../types/types'
type Props = {
    movie:MovieProps
}

const Movie = ({movie}: Props) => {

 
  return (
    <>
    
    <Card backgroundColor='#000000' color='white'  height='150px'>
      <CardBody textAlign='center' fontSize='24px' lineHeight='31px' fontFamily='DM Sans' display='flex' alignItems='center' justifyContent='center' fontStyle='normal' fontWeight='400'>
        <Heading size='sm'>{movie.Title}</Heading>
      </CardBody>
    </Card>
    </>

  )
}

export default Movie