import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const ColourMode = () => {

    const [ darkMode, setDarkMode ] = useState(false);

    // Apply the dark mode class to the root element
    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button className="p-2 text-[rgb(var(--text-colour))] dark:text-[rgb(var(--text-colour))] hover:text-[rgb(var(--hover-colour))] dark:hover:text-[rgb(var(--hover-colour))] transition duration-300" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IoSunny /> : <IoMoon />}
        </button>
    );
}

export default ColourMode;