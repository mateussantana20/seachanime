import { useState, useCallback, useEffect } from 'react';
import { FaSearch, FaSpinner, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, List, ButtonClear, PageAction, Loading } from './styles';

function Main() {

  const [seachAnime, setSeachAnime] = useState('')
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null)
  const [page, setPage] = useState(1)
  const [loadingPageAnimes, setLoadingPageAnimes] = useState(false)

  // Buscar
  useEffect(() => {
    const animeStorage = localStorage.getItem('animes');
    const animeStorageSeach = localStorage.getItem('seachAnime');
    if(animeStorage && animeStorageSeach) {
      setAnimes(JSON.parse(animeStorage))
      setSeachAnime(JSON.parse(animeStorageSeach))
    }
  }, [])

  // Salvar Alterações
  useEffect(() => {
    localStorage.setItem('animes', JSON.stringify(animes));
    localStorage.setItem('seachAnime', JSON.stringify(seachAnime));

  }, [animes, seachAnime])

  const handleSubmit =  useCallback((event) => {
    event.preventDefault()

    async function submit () {
      setLoading(true)
      setAlert(null);
      try {
        if(seachAnime.length < 3) {
          throw new Error('Você digitou menos de 2 caracteres')
        }
        const api = await fetch(`https://api.jikan.moe/v3/search/anime?q=${seachAnime}&limit=6`)
        const data = await api.json()
    
        setAnimes(data.results)
      } catch(error) {
        setAlert(true)
      } finally {
        setLoading(false)
      }
    }

    submit();
  }, [seachAnime, animes]);

  function handleInputChange (event) {
    setSeachAnime(event.target.value);
    setAlert(null)
  }

  const handleClear = useCallback(() => {
    setAnimes([])
    setSeachAnime('')
  }, [])

  function handlePage (action) {
    async function loadAnime () {
      setLoadingPageAnimes(true);
      setPage(action === 'back' ? page - 1 : page + 1)
      const api = await fetch(`https://api.jikan.moe/v3/search/anime?q=${seachAnime}&page=${page}&limit=6`)
      const data = await api.json()
      setAnimes(data.results)
      setLoadingPageAnimes(false);
    } 
    loadAnime()
  }


  if(loadingPageAnimes) {
    return (
      <Loading>
        <h1>Carregando.....</h1>
      </Loading>
    )
  } else {
    return (
      <Container>
        <h1>
          <img src="https://cdn.myanimelist.net/images/mal-logo-xsmall.png?v=1634263200" alt="Myanimelist" />
        </h1>

        <Form error={alert} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Buscar anime" 
            value={seachAnime}
            onChange={handleInputChange}
            />
        
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14}/>
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          { animes.length > 0 && (
              <ButtonClear onClick={handleClear}>
                Limpar lista
              </ButtonClear>
          )}
          {
            animes.map(anime => (
              <li key={anime.mal_id}>
                  <span>{anime.title}</span>
                  <img src={anime.image_url} alt={anime.title} />
              
                <Link to={`/anime/${encodeURIComponent(anime.mal_id)}`}>
                  <FaBars size={24} /> 
                </Link>
              </li>
            ))
          }
        </List>
        { animes.length > 0 && (
          <PageAction>
            <button type="button" 
              disabled={page < 2}
              onClick={() => handlePage('back')}>Back</button>
             <button type="button" onClick={() => handlePage('next')}>Next</button>
          </PageAction>
        )}
      </Container>
    );
  }
}

export default Main;
