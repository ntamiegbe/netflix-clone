import { useEffect, useState } from 'react'
import './banner.css'
import axios from 'axios'
import requests from '../../server/requests'

const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name }</h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>Watchlist</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 180)}</h1>
      </div>
      <div className="banner--fade__bottom" />
    </header>
  )
}

export default Banner