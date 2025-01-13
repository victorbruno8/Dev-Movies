import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeople } from "../../services/getData"
import { Background, Info, Poster, Container } from "./styles"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularPeople, setPopularPeople] = useState()

    const navigate = useNavigate()


    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ]).then(([movie, topMovies, topSeries, popularSeries, popularPeople]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setPopularPeople(popularPeople)
            })
            .catch((error) => console.log(error))
            

        }

        getAllData()
       
       
    }, [])





    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>

                    { showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}

                    <Container>

                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <div>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Detalhes</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o trailer</Button>
                            </div>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Poster>

                    </Container>
                </Background>


            )}


            {topMovies && <Slider info={topMovies} title="Top Filmes" />}

            {topSeries && <Slider info={topSeries} title="Top Séries" />}

            {popularSeries && <Slider info={popularSeries} title="Séries Populares" />}

            {popularPeople && <Slider info={popularPeople} title="Artistas Populares" />}

                
        </>
    )
}

export default Home