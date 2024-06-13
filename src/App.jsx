import React, {useState, useEffect} from 'react'
import './index.css'
import { CardList } from './assets/CardList/CardList'

function App() {
  const [data, setData] = useState([])
  
  const getData = async ()=>{
    const rs = await ((await fetch ('https://jsonplaceholder.typicode.com/users')).json())
    setData(rs)
  }

  useEffect(()=>{
    
    getData()

  }, []);

  return (
    <>
      <div className="body">
            <CardList data={data}/>
      </div>
    </>
  )
}

export default App

//    const rs = await rsJson.map((stay, index)=>({...stay, id : index}))

//data={data} filter={filter} setFilter={setFilter}
