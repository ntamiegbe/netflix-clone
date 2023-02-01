import './index.css'
import Hero from './components/Hero/Hero';
import Row from './components/Rows/Row';
import requests from './server/requests';

function App() {
  return (
    <div className="app">
      <Hero />
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
  );
}

export default App;
