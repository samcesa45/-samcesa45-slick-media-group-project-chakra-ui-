import React,{useEffect, useState} from 'react'
import {
  ChakraProvider,
  Box,
  theme,
  SimpleGrid,
} from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import Header from "./components/Header"
import Search from "./components/Search"
import Movie from "./components/Movie"
import { movieService } from './services/movie'
import { MovieProps,SearchProps } from './types/types'




export const App = () => {
   const [movies, setmovies] = useState<SearchProps[]>([])
   const [input, setInput] = useState('batman')
   const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  useEffect(()=>{
    movieService.getAllMovies(input)
    .then(returnedMovie => {
      console.log(returnedMovie)
           setmovies(returnedMovie.data.Search)
    })
    .catch(err => console.error(err)
      )
  },[input])

const filteredInput = movies && movies.filter((movie:SearchProps) => {
  if(input){
     return movie.Title.toLowerCase().includes(input.toLowerCase()) 
  
  }

   return []
})
 
  return (
  <ChakraProvider theme={theme}>
    <Box>
        <Header/>
    </Box>
    <Container maxW='1200px'>
      <Box paddingTop="10" paddingBottom='10'>
      <Search input={input} handleInputChange={handleInputChange}/>
      </Box>
      <Box>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
        { filteredInput?.map((movie:MovieProps) =>(
            <Movie key={movie.imdbID} movie={movie}/>
        ))}
        </SimpleGrid>
      </Box>
    </Container>
  </ChakraProvider>
)

}