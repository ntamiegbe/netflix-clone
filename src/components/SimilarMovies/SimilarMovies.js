import { useEffect, useState } from 'react'
import './similarMovies.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SimilarMovies = () => {
  const [movies, setMovie] = useState('')

  const { id } = useParams()

  const baseImageUrl = 'https://image.tmdb.org/t/p/original/'
  const baseUrl = 'https://api.themoviedb.org/3/'
  const API_KEY = '3a7231adb9c185338dd837061b2e2175'


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}movie/${id}/similar?api_key=${API_KEY}&language=en-US`)
      setMovie(request.data)
      console.log(request.data);
      return request
    }
    fetchData()
  }, [])
  return (
    <div>SimilarMovies</div>
  )
}

export default SimilarMovies