import { filmSchema } from "../types/film";
import type { Film } from "../types/film";
import { z } from "zod";
import { useEffect, useState } from "react";

function useFilmsApi() {
  const [data, setData] = useState<Film[] | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        // using proxy
        const res = await fetch("/api/films");  
        if (!res.ok) throw new Error("Failed to fetch data");

        const jsonData = await res.json();

        // validate data with zod
        const films = z.array(filmSchema).parse(jsonData);

        setData(films);
      } catch (error) {
        console.log("has error", error);
      }
    }

    getData();
  }, []);

  return data;
}

export default useFilmsApi;
