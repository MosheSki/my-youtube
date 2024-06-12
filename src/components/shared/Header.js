import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/redux/appSlice";
import {
  LOGO_URL,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../../utils/redux/searchSlice";
import { videoResults } from "../../utils/redux/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery); //CORS Error
    const json = await data.json();

    setSuggestions(json[1]);

    //Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const getSuggestionResults = async (suggestion) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + suggestion);
    const json = await data.json();

    dispatch(videoResults(json.items));
  };

  const handleSuggestionClick = (suggestion) => {
    getSuggestionResults(suggestion);
    setSearchQuery("");
  };

  onscroll = () => {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <MenuIcon
          className="cursor-pointer mr-5 "
          onClick={() => toggleMenuHandler()}
          style={{ fontSize: 30 }}
        />
        <a href="/">
          <img className="h-7" alt="logo" src={LOGO_URL} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="relative flex">
          <input
            className="px-3 w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="border  border-gray-500 p-2 w-16 rounded-r-full bg-gray-200 hover:bg-gray-400">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && !isScrolled && (
          <div className="absolute w-[36%] bg-white rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  to={"/results?search_query=" + suggestion}
                >
                  <li
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="py-3 px-5 hover:bg-gray-100 shadow-sm cursor-pointer"
                  >
                    {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <AccountCircleIcon
          className="cursor-pointer"
          style={{ fontSize: 36 }}
        />
      </div>
    </div>
  );
};

export default Header;
