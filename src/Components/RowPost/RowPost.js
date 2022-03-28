import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Youtube from 'react-youtube'
import axios from "../../axios";
import { imageUrl,API_KEY } from "../../Constants/Constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch((err) => {
        //alert('Network Error')
      });
  },[]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };
  const handleMovie =(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
          if(res.data.results.length!=0){
              setUrlId(res.data.results[0])
          }else{
              console.log('Not available');
          }
      })
  }
  return (
    <div className="row">
      <h2 className="row-title">{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
     { urlId && <Youtube videoId={urlId.key} opts={opts}/> }
    </div>
  );
}

export default RowPost;
