import { useEffect, useState } from 'react'
import './row.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])

    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                        onClick={() => navigate(`/${movie.id}`)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row