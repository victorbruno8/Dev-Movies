import { useEffect, useState } from "react"
import { Background, Container, CLose } from "./styles"
import { getMovieVideos } from "../../services/getData"
function Modal( {movieId, setShowModal} ) {
    
    const [movie, setMovie] = useState()

    useEffect(() => {
        
        async function getMovies() {
           setMovie(await getMovieVideos(movieId))

        }

        getMovies()
    }, [])


    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
            <Container>
                <iframe src={`https://www.youtube.com/embed/${movie.key}`} title="Youtube video player" height="400px" width="100%"></iframe>
            </Container>
            
            )}  
            <CLose  onClick={() => setShowModal(false)}>X</CLose>

        </Background>
    )
}

export default Modal