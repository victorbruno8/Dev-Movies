
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { Background, Container, Cover, Info, ContainerMovies } from "./styles"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import { getImages } from "../../utils/getImages"

function Detail() {


    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [credits, setMovieCredits] = useState()
    const [similar, setMovieSimilar] = useState()

    const { id } = useParams()

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)

            ]).then(([movie, videos, credits, similar]) => {
                console.log({ movie, videos, credits, similar });

                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            })
                .catch((error) => console.log(error))


        }

        getAllData()


    }, [id])




    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={credits} />
                            </div>
                        </Info>

                    </Container>

                    <ContainerMovies>
                    {movieVideos && movieVideos.map(video =>(
                               <div key={video.id}>

                                   <h4>{video.name}</h4>
                                   <iframe src={`https://www.youtube.com/embed/${video.key}`} title="Youtube Video Player" height="500px" width='100%'></iframe>


                               </div>
                         ))}
                    </ContainerMovies>

                </>
            )}
        </>
    )
}

export default Detail