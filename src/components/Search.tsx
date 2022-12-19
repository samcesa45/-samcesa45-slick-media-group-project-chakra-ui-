import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

type Props = {
  input:string,
  handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=> void
}

const Search = ({input,handleInputChange}: Props) => {
   
  return (
  <FormControl>
    <FormLabel>Search</FormLabel>
    <Input type='text' value={input} onChange={(e)=>handleInputChange(e)} borderRadius='none'/>
  </FormControl>
  )
}

export default Search