import React, { useEffect, useState } from 'react'
import { Container, Right, Left, Info, BackButton, Loading } from './styles';
import { useParams } from "react-router";
import { FaArrowLeft } from 'react-icons/fa'

//https://api.jikan.moe/v3/anime/233

function Anime() {
  const { anime: id } = useParams();

  const [ anime, setAnime ] = useState({});
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    async function load () {
      const nomeAnime = decodeURIComponent(id);

      const api = await fetch(`https://api.jikan.moe/v3/anime/${nomeAnime}`);
      const anime = await api.json();

      setAnime(anime);
      setLoading(false);
    }

    load();
  }, [id, anime])

  if(loading) {
    return (
      <Loading>
        <h1>Carregando.....</h1>
      </Loading>
    )
  }

  return (
    <Container>
      <Left>
        <img src={anime.image_url} alt={anime.title} />
      </Left>

      <Right>
      <div className="header">
        <BackButton to="/">
            <FaArrowLeft color="#fff" size={32}/>
          </BackButton>
          <h1>{anime.title}</h1>
      </div>

        <div className="synopsis">
          <p>Synopsis</p>
          <span>{anime.synopsis}</span>
        </div>

      <Info>
        <div className="score">
          <p>Score :</p>
          <span>{anime.score}</span>
        </div>


        <div className="episodes">
          <p>Episodes :</p>
          <span>{anime.episodes === null ? 'Unknown' : anime.episodes}</span>
        </div>
      
        <div className="status">
          <p>Status:</p>
          <span>{anime.status}</span>
        </div>

        <div className="type">
          <p>Type :</p>
          <span>{anime.type}</span>
        </div>

        <div className="rank">
          <p>Rank :</p>
          <span>{anime.rank}</span>
        </div>

        <div className="rating">
          <p>Rating :</p>
          <span>{anime.rating}</span>
        </div>

        <a target="_blank" href={anime.url}>Link para o MyanimeList</a>
      </Info>

      </Right>
    </Container>
  );
}

export default Anime;
