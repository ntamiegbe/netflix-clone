import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import './homepage.css'
import Row from '../../components/Rows/Row';
import requests from '../../server/requests';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title='Action'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title='Horror'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title='Romance'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}

export default HomePage