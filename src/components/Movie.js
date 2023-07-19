import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div>

    <Link to={`/movie/${id}`}>
      <h2>
          <img src={coverImg} alt={title}/>
          {title}
      </h2>
    </Link>
    <p>{summary}</p>
    <ul>
      {genres.map(g=><li key={g}>{g}</li>)}
    </ul>

    </div>
  )
}

export default Movie
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}