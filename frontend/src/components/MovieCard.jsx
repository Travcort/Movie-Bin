import starSVG from '/star.svg';

const MovieCard = ({ Title, Year, Runtime, Rated, Director, Genre, Poster, IMDB, RottenTomatoes, Metacritic, Plot }) => {
    return (
        <div className="bg-[rgb(var(--card-bg-colour))] text-[rgb(var(--card-text-colour))] grid rounded-3xl max-w-[360px] shadow-sm m-auto flex-col">
            <img
                src={Poster}
                width="360"
                height="200"
                className="rounded-t-3xl justify-center h-80 grid object-contain"
                alt={Title}
                /> 
            <div className="group p-5 grid z-10">
                <a href={Poster} className="group-hover:text-cyan-700 font-bold md:text-2xl line-clamp-2">
                    {Title}
                </a>
                <div className="flex group justify-between">
                    <div className="font-black flex flex-col">
                        <span className="text-red-500">Year</span>
                        <span className="pt-2 font-semibold">
                            {Year}
                        </span>
                    </div>
                    <div className="font-black flex flex-col">
                        <span className="text-red-500">Runtime</span>
                        <span className="pt-2 font-semibold">
                            {Runtime}
                        </span>
                    </div>
                    <div className="font-black flex flex-col">
                        <span className="text-red-500">Rated</span>
                        <span className="pt-2 font-semibold">
                            {Rated}
                        </span>
                    </div>
                    <div className="font-black flex flex-col">
                        <span className="text-red-500 ">Director</span>
                        <span className="pt-2 font-semibold">
                            {Director}
                        </span>
                    </div>
                </div>
                <span className=" pt-2 font-semibold">
                    {Genre}
                </span>
                <div className="h-20">
                    <span className="line-clamp-3 py-2 h-20 leading-6 text-sm font-light leading-relaxed">
                        {Plot}
                    </span>
                </div>
                <div className=" grid-cols-2 flex group justify-between">
                    <div className="font-black flex flex-col">
                        <span className="text-yellow-500 text-xl"><img src={starSVG} alt='Star' /></span>
                        <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                            {IMDB}
                        </span>
                    </div>
                    <div className="font-black flex flex-col">
                        <span className="text-yellow-500 text-xl">🍅</span>
                        <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                            {RottenTomatoes}
                        </span>
                    </div>
                    <div className="font-black flex flex-col">
                        <span className="text-yellow-500 text-xl">Metacritic</span>
                        <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                            {Metacritic}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;