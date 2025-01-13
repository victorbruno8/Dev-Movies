
import { useEffect, useState } from "react"
import { getTopMovies } from "../../services/getData"
import Grid from "../../components/Grid"



const Movies = () =>{

    const [movies,setMovies] = useState()
  
    
    useEffect(()=>{

        async function getAllData(){

            Promise.all([

                getTopMovies()

            ]).then(([movies]) =>{

                setMovies(movies)
            })

        }
        getAllData()

        

    },[])

    return (

        <>
            {movies && <Grid infoSeries={false} info={movies}/>} 
        </>

    )
}

export default Movies
