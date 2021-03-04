import useFetch from "./useFetch";

const Books = () => {
  
  let {books} = useFetch("http://localhost:8000/books")
  
  return ( 
    <div>
      {books && <div>
        {books.map(book => (
          <h2>
            {book.title}
          </h2>
        ))}
      </div>}
    </div>
   );
}
 
export default Books;