import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BackButton } from '../components/BackButton/BackButton';
import { getDetailsMovies } from '../components/api/api';
import { MovieCard } from '../components/MovieCard/MovieCard';


export default function MovieView() {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();



    useEffect(() => {
        getDetailsMovies(movieId).then(data => {
            setMovie(data);
        });
    }, [movieId]);



    return (
        <>
            <BackButton />
            {movie && <MovieCard movie={movie} />}
            <hr />

            <ul>
                <li>
                    <Link state={location.state} to="cast"
                        style={{ color: "rgb(255, 121, 62)", paddingLeft: "10px", fontSize: "16px", fontWeight: "bold" }}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link state={location.state} to="reviews"
                        style={{ color: "rgb(255, 121, 62)", paddingLeft: "10px", fontSize: "16px", fontWeight: "bold" }}>
                        Review
                    </Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}