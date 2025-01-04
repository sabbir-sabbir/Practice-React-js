import {useEffect, useState} from 'react'
import './App.css'

function App() {
 const [allData, setAllData] = useState([]);

  useEffect(() => {
    getUserData()
  }, [])

  async function getUserData(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
    
      setAllData(data.slice(0, 10))

    } catch (error) {
      console.error('Error:', error)
    }
  }
  

  
  return (
    <>
    <section>
      <div className="w-full bg-gray-600 h-[500px]">
        <h1 className="text-4xl text-white text-center py-10">React Fetch API</h1>
        <div>
        {allData && allData.map((data, index)=> (
          <div>
            <h1 key={index}>You can see the title here:{data.title}</h1>
          </div>
          
        ))
        }
        </div>
       
           
      </div>

    </section>
    </>
  )
}

export default App
