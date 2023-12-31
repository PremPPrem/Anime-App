import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AnimeDataContext = createContext();

export const AnimeDataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnime = async () => {
    setLoading(true);
    try {
      const { data: res } = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}`
      );
      setAnimeList(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAnime();
  };

  useEffect(() => {
    getAnime();
  }, [search]);

  console.log(animeList);
  return (
    <AnimeDataContext.Provider
      value={{ loading, animeList, search, setSearch, handleSubmit }}
    >
      {children}
    </AnimeDataContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AnimeDataContext);
};
