import axios from "axios"

const key = "347bbfcee0a845428ec17240076e6b0e"
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=> axiosCreate.get('/games?key='+key+'&genres='+id);
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}
