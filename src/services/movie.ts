import axios from "axios";

const getAllMovies = async (input:string) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${input}&apikey=${process.env.REACT_APP_API_KEY}`)
    return response
    

}


export const movieService = {
    getAllMovies
}