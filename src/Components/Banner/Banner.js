import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Banner() {
    let random=Math.floor(Math.random() * 10)
    const [movie, setMovie] = useState()
    const [play, setPlay] = useState('')
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[random])
            console.log(response.data.results[0]);
        })
    },[])
    function handlebanner(id){
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            if(res.data.results.length!=0){
                console.log(res.data.results[0]);
                setPlay(res.data.results[0])
            }else{
                console.log('Not available');
            }
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0
        }
      };
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path: ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_button'>
                <button className='button' onClick={()=>handlebanner(movie.id)}>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner