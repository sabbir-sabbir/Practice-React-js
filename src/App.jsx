import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { increment, decrement, incrementByAmount } from './Redux/CounterSlice'

function App() {
const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch();

  
  return (
    <>
     <section className='w-full bg-slate-200 h-[100vh] flex flex-col  items-center space-y-3 '>
      <h1 className='mt-20 font-bold text-5xl text-zinc-500 '>Counter app</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(2))}>Increment Multiply</button>
    

     </section>
    </>
  )
}

export default App
