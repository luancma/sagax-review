import { useDispatch, useSelector } from 'react-redux'
import { State } from './store/root'
import { fetchUsers, UsersState } from './store/user'

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state : State): UsersState => state.usersState)


  const test = () => dispatch(fetchUsers())
  console.log({users})
  return (
    <div>
      <h1>testing</h1>
      <button type='button' onClick={test}>Testing</button>
    </div>
  )
}

export default App
