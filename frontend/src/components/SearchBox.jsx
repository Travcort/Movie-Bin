import searchDeco from '/searchdeco.svg';
import searchIcon from '/searchIcon.svg';

const SearchBox = ({ value, onChange, onClick }) => {
    return (
        <div className="flex rounded-full bg-[rgb(var(--card-bg-colour))] text-[rgb(var(--card-text-colour))] px-2 w-full max-w-[600px] m-auto mb-5">
            <button className="self-center flex p-1 cursor-pointer ">
                <img src={searchDeco} alt='Search Box' />
            </button>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full flex bg-transparent pl-2 outline-0"
                placeholder="Search a movie or series"
            />
            <button type="submit" className="relative p-2 rounded-full" onClick={onClick}>
                <img src={searchIcon} alt='Search Icon' />
            </button>
        </div>
    ); 
}

export default SearchBox;