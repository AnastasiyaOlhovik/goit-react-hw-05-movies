import { Link, useLocation } from 'react-router-dom';
import { List } from '../SharedLayout/SharedLayout.module';
import { PropTypes } from 'prop-types';


export const FilmList = ({ filmList }) => {
    const location = useLocation();

    return (
        <>
            <List>
                {filmList.map(({ title, id, name, poster_path }) => {
                    return (
                        <li key={id} style={{ width: 230 }}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <img
                                    src={
                                        poster_path
                                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                            : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
                                    }
                                    alt={title ? title : name}
                                    width="230"
                                />
                                <p style={{ color: "rgb(255, 121, 62)", paddingLeft: "10px", fontSize: "16px", fontWeight: "bold" }}>{title ? title : name}</p>
                            </Link>
                        </li>
                    );
                })}
            </List>
        </>
    );
};

FilmList.propTypes = {
    filmList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            poster_path: PropTypes.string.isRequired,
        })
    ),
};