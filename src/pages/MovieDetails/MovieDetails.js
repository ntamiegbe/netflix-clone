import { useParams } from 'react-router-dom'
import './movieDetails.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MovieDetails = () => {

    const [movie, setMovie] = useState('')

    const { id } = useParams()

    const baseUrl = 'https://api.themoviedb.org/3/'
    const API_KEY = '3a7231adb9c185338dd837061b2e2175'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${baseUrl}movie/${id}?api_key=${API_KEY}&language=en-US`)
            setMovie(request.data.title)
            console.log(movie);
            // console.log(request.data.title);
            return request
        }
        fetchData()
    }, [])


    return (
        <img src={movie} alt="" />
    )
}

export default MovieDetails