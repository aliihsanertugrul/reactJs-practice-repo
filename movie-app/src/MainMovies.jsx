import React, { useEffect, useState } from 'react'
import "./movies.css";
import axios from 'axios';
import MovieCards from './MovieCArds.jsx';


let API_KEY="&api_key=dc64f959550f3b39b0633777c83849c3"
let BASE_URL="https://api.themoviedb.org/3";
let url=BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY
let filmCategories=["Popular","Theatre","Kids","Drama","Comedie"]

const MainMovies = () => {
    const [movieData, setMovieData] = useState([])
    const [search, setSearch] = useState("")
    const [url_set, setUrl] = useState(url)

    useEffect(() => {
        const getMovieData = async() => {
            const resp=await axios.get(url_set)
            const data=resp.data.results;
            setMovieData(data);
        }



        getMovieData()
    }, [url_set])


    const getMovieTypes = (movieType) => {
        if(movieType==="Popular"){
            url=BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY
        }else if(movieType==="Theatre"){
            url=BASE_URL+"/discover/movie?primary_release_date.gte=2023-09-15&primary_release_date.lte=2023-10-22"+API_KEY;
        }else if(movieType==="Kids"){
            url=BASE_URL+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_KEY;
        }
        else if(movieType==="Drama"){
            url=BASE_URL+"/discover/movie?with_genres=18&primary_release_year=2023"+API_KEY;
        }else if(movieType==="Comedie"){
            url=BASE_URL+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_KEY;
        }else{
            setUrl(url)
        }
    }

    const filteredMovies=!search ? movieData : movieData.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
    // console.log(filteredMovies)
    





  return (
    <>
    <div className='header'>
        <div className="logo">
            ERTUGRUL
        </div>
        <nav className='nav-cat'>
            <ul>
                {filmCategories.map((item,index)=>
                <li key={index}><a href="#" name={item} onClick={(e)=>getMovieTypes(e.target.name)}>{item}</a> </li>)}
            </ul>
        </nav>

        <form>
            <div className="search-btn">
                <input type="text" placeholder='Enter the movie name' className='inputText' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>

        </form>

    </div>

    <div className='container'>
        {
            (filteredMovies.length===0) ? <p className='notfound'>404 | NOT FOUND</p> :
            filteredMovies.map((item,index)=>(
                <MovieCards key={index} {...item}/>
            ))
        }
    </div>




    </>


  )
}

export default MainMovies