import { Card, Description, Img } from '../MovieCard/MovieCard.module';
import { PropTypes } from 'prop-types';

export const MovieCard = ({ movie }) => {
    const { poster_path, title, name, release_date, vote_average, overview, genres } = movie;

    return (
        <Card>
            <div>
                <Img
                    src={
                        poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
                    }
                    alt={title ? title : name}
                />
            </div>

            <Description>
                <h2>
                    {title ? title : name} ({release_date.slice(0, 4)})
                </h2>
                <p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
                <h3>Overwiew</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(item => item.name).join(', ')}</p>
            </Description>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string,
        name: PropTypes.string,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }),
};