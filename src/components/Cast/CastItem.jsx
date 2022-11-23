import { Img } from '../MovieCard/MovieCard.module';
import { PropTypes } from 'prop-types';


export const CastItem = ({ cast }) => {
    const { character, name, profile_path } = cast;



    return (
        <>
            <Img
                src={
                    profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
                }
                alt={name}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
        </>
    );
};

CastItem.propTypes = {
    cast: PropTypes.shape({
        character: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
    }),
};