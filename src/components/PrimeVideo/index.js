// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = actionMovie.filter(
    movie => movie.categoryId === actionMovie,
  )
  const comedyMovieList = comedyMovie.filter(
    movie => movie.categoryId === comedyMovie,
  )
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img"
      />
      <div className="movie-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo
