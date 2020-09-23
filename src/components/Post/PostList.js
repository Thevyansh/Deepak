import {  motion } from "framer-motion";
import React from "react";
import axios from "../../api/axios";
import Post from "./Post";

const baseURL = "https://image.tmdb.org/t/p/w500/";

const PostList = () => {
  const [movies, setMovies] = React.useState([]);

  const [modal, setModal] = React.useState({
    id: '',
    show: false
  });

  const showModal = (id) => {
    setModal({
      id,
      show: true
    });
  };
  const hideModal = (id) => {
    setModal({
      id,
      show: false
    });
  };


  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("/trending/movie/week");
    console.log(res);
    setMovies(res.data.results);
  };

  return (

      <motion.ul className="post-list">
        {movies.map((movie) => (
          <Post
            key={movie.id}
            id={movie.id}
            modal={movie.id === modal.id}
            image={baseURL + movie.backdrop_path}
            title={movie.original_title || movie.original_name}
            category={movie.original_title || movie.original_name}
            description={movie.overview}
            showModal={()=>showModal(movie.id)}
            hideModal={()=>hideModal('')}
          />
        ))}
      </motion.ul>

  );
};

export default PostList;
