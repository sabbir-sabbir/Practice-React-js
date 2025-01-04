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
        <div className='w-full'>
        {allData && allData.map((data, index)=> (
          <div className=' w-full flex justify-between items-center gap-5 '>
            <div className='w-1/2' key={index}>
            <h1 className='w-[500px] h-auto bg-red-400 px-3 py-3' >You can see the title here:{data.title}</h1>
            </div>
          <div className='w-1/2'>
          <p>Here the body: {data.body}</p>
          </div>
      
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
