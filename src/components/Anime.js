import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Card, Button } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi';

const Anime = () => {
  const [animes, setAnime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://kitsu.io/api/edge/trending/anime')
        .then(response => {
          console.log(response.data.data);
          setAnime(response.data.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
    fetchData();
  }, []);

  return (
    <>
      {
        animes.map(anime => 
          <Col key={anime.id} lg={4} md={6}>
            <Card className="anime">
              <Card.Img variant="top" src={anime.attributes.posterImage.large} />
              <Card.Body>
                <Card.Title>{anime.attributes.titles.en_jp}</Card.Title>
                <div>Episodes: {anime.attributes.episodeCount}</div>
                <div>Polularity ranking: {anime.attributes.popularityRank}</div>
                <div>Released: {anime.attributes.startDate}</div>
                <a href="/" className="see-more"><FiSearch /></a>
              </Card.Body>
            </Card>
          </Col>
        )
      }
    </>
  )
}

export default Anime
