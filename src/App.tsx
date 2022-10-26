import { useEffect, useState } from 'react';
import './App.css';
import ApiProps ,{ DataApiResponse }from '../src/types'



function App() {
  const [Data , setData] = useState<DataApiResponse>({task:[]});  
  const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
 
  useEffect(()=>{
    setLoading(true);
   const getData = async()=>{
    const data = await fetch(`https://api.chucknorris.io/jokes/random`);  //https://jsonplaceholder.typicode.com/posts?_limit=8
    const Data = await data.json();
    console.log(Data);
    setData({task:Data});
   } 
    getData()
    setLoading(false);
  },[]);

    if(isLoading) return <p> Loading ...Hello World</p>
    if(!Data.task?.length) return <p> No data</p>
  //  console.log("After Is Loading" + Data)
   return (
    <div className="contianer">
      <ul>{Data && Data.task.map((tasks:ApiProps)=>( 
        <>
        <li key ={tasks.id}>{tasks.id}</li>
        <li>{tasks.title}</li>
        <li>{tasks.userId}</li>
        <li>{tasks.body}</li>
        </>
      ))}</ul>    
    </div>
    );

}

export default App;
