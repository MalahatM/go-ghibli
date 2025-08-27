import { useEffect, useState } from "react"

interface Ghibli{

"id": string,
"title": string,
"original_title":string,
"original_title_romanised": string,
"image":string,
"description": string,
"director": string,


}
function useFilmsApi(){
    const[data,setData]=useState<Ghibli[] | null >(null)

useEffect(()=>{
    async function getData(){
        try{
            const res= await fetch("https://ghibliapi.vercel.app/films")
              if (!res.ok) throw new Error("Failed to fetch data");
           const jsonData: Ghibli[] = await res.json();
        setData(jsonData);

        }catch(error){
            console.log("has error",error)
        }

    }
    getData()

},[])

return(data)

}

export default useFilmsApi