import axios from "axios";
import { useRouter } from "next/router";
import React, {  useState } from "react";
import Youtube from "react-youtube";



export default function Detail() {
  const router = useRouter();
  const { mal_id } = router.query;
  const [anime, setAnime] = useState({});

  const play = {
    height: "390",
    width: "640",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const playSm = {
    height: "180",
    width: "300",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const playFold = {
    height: "150",
    width: "250",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  axios
    .get(`https://api.jikan.moe/v4/anime/${mal_id}`)
    .then((res) => {
      setAnime(res.data.data);

      console.log(res.data.data);
    })
    .catch((err) => console.log(err));

  // useEffect(() => {
  //   getAnime(mal_id);

  // }, []);

  return (
    <>
      <div className=" min-h-screen bg-[#101010]">
        <h1 className="text-[3rem] sm:text-[2rem]   font-extrabold text-center text-amber-500 py-[3rem] ">{anime.title}</h1>
        <div className="flex items-center justify-center pb-[3rem]">
    <Youtube
          videoId={anime.trailer?.youtube_id}
          opts={play}
          onReady={onReady}
          className=" sm:hidden"
        />
        <Youtube
          videoId={anime.trailer?.youtube_id}
          opts={playSm}
          onReady={onReady}
          className=" hidden sm:block fold:hidden"
        />
        <Youtube
          videoId={anime.trailer?.youtube_id}
          opts={playFold}
          onReady={onReady}
          className=" hidden fold:block"
        />
    </div>
     <div className="grid grid-cols-2 sm:grid-cols-1 pb-[3rem]">
      <div className="flex  justify-center sm:flex sm:items-center sm:justify-center sm:mr-[1.5rem] sm:mb-[1.5rem] md:block md:ml-[1.5rem]">
      <img src={anime.images?.jpg.large_image_url} alt={anime.mal_id} className="w-[400px] md:w-[300px] rounded-[15px]" />
      </div>
      <div>
      <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">English Title :</span> {anime.title_english === null ? "No English Title" : anime.title_english}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Japanese Title :</span> {anime.title_japanese === null ? "No English Title" : anime.title_japanese}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Rating :</span> {anime.rating === null ? "No Rating" : anime.rating}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Score :</span> {anime.score === null ? "No Score" : `${anime.score} / 10 `}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Year :</span> {anime.year === null ? "No Year" : anime.year}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Aired :</span> {anime.aired?.string === "Not available" || anime.aired?.string === null  ? "No Aired" : anime.aired?.string}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Broadcast :</span> {anime.broadcast?.string === "Unknown" || anime.broadcast?.string === null ? "No Broadcast" : anime.broadcast?.string}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Duration :</span> {anime.duration === "Unknown" ? "No Duration" : anime.duration}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Episodes :</span> {anime.episodes === null ? "No Episodes" : anime.episodes}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Season :</span> {anime.season === null ? "No Season" : anime.season}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">source :</span> {anime.source === null ? "No Source" : anime.source}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Type :</span> {anime.type === null ? "No Type" : anime.type}</p>
        <p className="text-[#aaa] pb-[10px] sm:pl-[10px]"><span className="font-bold text-amber-500/70">Synopsis :</span> {anime.synopsis === null ? "No Synopsis" : anime.synopsis}</p>
      </div>
     </div>


      </div>
    </>
  );
}
