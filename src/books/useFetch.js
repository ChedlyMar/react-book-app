import { useEffect, useState } from "react";

const useFetch = (url) => {
  
  const [books, setBooks]= useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then( data => {
        setBooks(data);
      })
    });
  
  return {books};
}
 
export default useFetch;