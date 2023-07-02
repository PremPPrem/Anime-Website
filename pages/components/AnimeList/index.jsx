import { AnimeDataContext } from "@/pages/context/AnimeData";
import React, { useContext } from "react";
import Loading from "../Loading";
import Link from "next/link";

export default function Index() {
  const { animeList, loading } = useContext(AnimeDataContext);
  if (loading === true) return <Loading />;

  return (
    <div className="">
      {animeList.length == 0 ? (
        <h1 className="text-[3rem] text-center text-amber-500 font-extrabold sm:text-[2rem] my-[2rem]">
          Search results not found!
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-[1rem]  sm:grid-cols-1 md:grid-cols-2 ">
          {animeList.map((data, index) => {
            return (
              <div
                key={index}
                className=" w-full flex items-center justify-center  "
              >
                <Link href={`/components/AnimeList/${data.mal_id}`}>
                  <div className="m-[1.2rem] bg-black rounded-[15px] w-[250px] h-[750px] shadow-md hover:shadow-amber-500 hover:shadow-2xl">
                    <img
                      src={data.images.jpg.large_image_url}
                      alt={data.images.jpg.large_image_url}
                      className="w-[250px] h-[350px] mb-[1rem] rounded-t-[15px]"
                    />
                    <h1 className="text-[1.5rem] font-extrabold pb-[15px] text-amber-500 pl-[5px]">
                      {data.title}
                    </h1>
                    <p className="text-[#aaa] pb-[10px] pl-[5px]">
                      <span className="font-bold text-amber-500/70">
                        Rating :
                      </span>{" "}
                      {data.score === null ? "No Rating" : `${data.rating}`}
                    </p>
                    <p className="text-[#aaa] pb-[10px] pl-[5px]">
                      <span className="font-bold text-amber-500/70">
                        Score :
                      </span>{" "}
                      {data.score === null ? "No Score" : `${data.score} / 10 `}{" "}
                    </p>
                    <p className="text-[#aaa] pb-[10px] pl-[5px]">
                      <span className="font-bold text-amber-500/70">
                        Year :
                      </span>{" "}
                      {data.year === null ? "No Year" : data.year}
                    </p>
                    <p className="text-[#aaa] pb-[10px] pl-[5px]">
                      <span className="font-bold text-amber-500/70">
                        {" "}
                        Duration :
                      </span>{" "}
                      {data.duration === "Unknown"
                        ? "No Duration"
                        : data.duration}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
