import { useGlobalContext } from "@/pages/context/AnimeData";
import React from "react";
import Loading from "../Loading";

export default function AnimeList() {
  const {animeList, loading } = useGlobalContext();
  if (loading === true) return <Loading />;

  return (
    <div className="">
      {animeList.map((data,index) => {
        return (
          <div key={index} >
            <img src={data.images.jpg.large_image_url} alt={data.images.jpg.large_image_url} />
          <h1>{data.title}</h1>
          <p>Rating : {data.rating}</p>
          <p>Score : {data.score === null ? "No Score" : `${data.score} / 10 `  } </p>
          <p>Year : {data.year === null ? "No Year" : data.year }</p>
          <p>Duration : {data.duration === "Unknown" ? "No Duration" : data.duration }</p>
        </div>
        )
      })}

    </div>
  );
}
