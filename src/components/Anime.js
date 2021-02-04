import { useState, useEffect } from 'react'
import axios from 'axios'

const Anime = () => {
  const [animes, setAnime] = useState([]);

  useEffect(() => {
    axios.get('https://kitsu.io/api/edge/anime')
      .then(response => {
        console.log(response.data.data);
        setAnime(response.data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <ul className="anime__list">
        {
          animes.map(anime => 
            <li key={anime.id} className='anime'>
              {anime.attributes.titles.en_jp}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Anime
