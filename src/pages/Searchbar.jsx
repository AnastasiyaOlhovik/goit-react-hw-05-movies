import { useEffect, useState } from 'react';
import { SearchHeader, SearchBtn, SearchForm, SearchLabel, SearchInput } from '../pages/Searchbar.module';
import { FilmList } from '../components/FilmList/FilmList';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getSearchMovies } from '../components/api/api';



export default function Searchbar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState('');
    const [searchFilmList, setSearchFilmList] = useState([]);



    const handlerInput = event => {
        setQuery(event.target.value);
    };


    const handlerSubmit = event => {
        event.preventDefault();

        if (!query.trim()) {
            Notify.failure('Empty query');
            return;
        }

        setSearchParams({ query: query });
    };


    useEffect(() => {
        if (!searchParams.get('query')) {
            return;
        }

        getSearchMovies(searchParams.get('query')).then(data => {
            setSearchFilmList(data.results);
        });
    }, [searchParams, query]);





    return (
        <>
            <SearchHeader>
                <SearchForm onSubmit={handlerSubmit}>
                    <SearchBtn type="submit">
                        <SearchLabel>Search</SearchLabel>
                    </SearchBtn>

                    <SearchInput
                        type="text"
                        name="query"
                        value={query}
                        autoComplete="off"
                        onChange={handlerInput}
                        autoFocus
                        placeholder="Search movie"
                    />

                </SearchForm>
            </SearchHeader>
            {searchFilmList?.length ? <FilmList filmList={searchFilmList} /> : <></>}
        </>
    );
}