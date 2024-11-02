import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBox from '../components/SearchBox';
import Missing from '../components/Misssing';

const SearchPage = () => {

    const [ searchData, setSearchData ] = useState('');
    const [ movieData, setMovieData ] = useState(null);

    const funnyMessages = [
        "That’s not even on our radar. Impressive.",
        "Congratulations! You’ve successfully found… absolutely nothing.",
        "Are you sure you didn't just dream that one up?",
        "You might be too ahead of your time with that one.",
        "Sorry, that title must be classified information.",
        "It’s out there somewhere… just not here."
    ]

    const randomMessage =  () => {
        const randomNumber = Math.floor(Math.random() * 7);
        return funnyMessages[randomNumber];
    }

    const errorMessage = randomMessage();

    const searchMovie = async (query) => {
        // Catering for spaces
        const formattedQuery = query.replace(/\s+/g, "+");

        const response = await fetch(`/api/${formattedQuery}`);
        const data = await response.json();
        setMovieData(data.data);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovie(searchData);
        setSearchData('');
    }

    useEffect(() => {
        searchMovie('shawshank');
    }, []);

    return (
        <div className='bg-white dark:bg-black'>
            <SearchBox value={searchData} onChange={(e) => setSearchData(e.target.value)} onClick={handleSearch} />
            {
                movieData && 
                movieData.Response === "True"
                ? (<MovieCard Title={movieData.Title} Year={movieData.Year} Runtime={movieData.Runtime} Rated={movieData.Rated}
                Director={movieData.Director} Genre={movieData.Genre} Plot={movieData.Plot} Poster={movieData.Poster} 
                IMDB={movieData.imdbRating} RottenTomatoes={movieData.Ratings[1]?.Value || "N/A"} Metacritic={movieData.Metascore} />)
                : (<Missing error={errorMessage} />)
            }
        </div>
    );
}

export default SearchPage;