import { useParams } from 'react-router-dom'
import './movieDetails.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies'

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
            // console.log(request.data);
            return request
        }
        fetchData()
    }, [])


    return (
        <div className="movieDetails">
            <Navbar />
            <div className="movieDetails__body">
                <h1 className='movieDetails__title'>{movies?.name || movies?.title || movies?.original_name}</h1>
                <h3 className='movieDetails__tagline'>{movies.tagline}</h3>
                <p className='movieDetails__overview'>{movies.overview}</p>
                <img src={`${baseImageUrl}${movies.backdrop_path || movies.poster_path}`} alt="Movie Logo" className='movieDetails__image' />
                <p className='movieDetails__genres'>Genre: {''}
                    {genres.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}
                            {index < genres.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </p>
            </div>
            <SimilarMovies />
        </div>
    )
}

export default MovieDetails