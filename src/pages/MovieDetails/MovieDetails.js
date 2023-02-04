import { useParams } from 'react-router-dom'
import './movieDetails.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

const MovieDetails = () => {

    const [movies, setMovie] = useState('')
    const [genres, setGenres] = useState([])

    const { id } = useParams()

    const baseImageUrl = 'https://image.tmdb.org/t/p/original/'
    const baseUrl = 'https://api.themoviedb.org/3/'
    const API_KEY = '3a7231adb9c185338dd837061b2e2175'


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${baseUrl}movie/${id}?api_key=${API_KEY}&language=en-US`)
            setMovie(request.data)
            setGenres(request.data.genres)
            console.log(request.data);
            // console.log(genres);
            return request
        }
        fetchData()
    }, [])


    return (
        <>
            <Navbar />
            <div className="movieDetails">
                <h1>{movies.title}</h1>
                <h3>{movies.tagline}</h3>
                <p>{movies.overview}</p>
                <img src={`${baseImageUrl}${movies.backdrop_path || movies.poster_path}`} alt="Movie Logo" className='movieDetails__image' />
                <p>
                    {genres.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}
                            {index < genres.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </p>
            </div>
        </>
    )
}

export default MovieDetails