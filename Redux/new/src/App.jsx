  import {useDispatch, useSelector} from 'react-redux'
  import { increment } from './components/createSlice.js'

  function App(){

    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()

    return (<>
    helo
  {count}
  <button onClick ={()=> dispatch(increment())}>++++</button>
    </>)
  }
  export default App