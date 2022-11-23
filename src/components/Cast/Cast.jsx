import { getCastMovies } from '../api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from '../Cast/CastItem';
import { List } from '../SharedLayout/SharedLayout.module';


export const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getCastMovies(movieId).then(data => {
            setMovieCast(data.cast);
        });
    }, [movieId]);


    return (
        <>
            {movieCast && movieCast.length ? (
                <List>
                    {movieCast.map(item => {
                        return (
                            <li key={item.id}>
                                <CastItem cast={item}></CastItem>
                            </li>
                        );
                    })}
                </List>
            ) : (
                <p>No data</p>
            )}
        </>
    );
};