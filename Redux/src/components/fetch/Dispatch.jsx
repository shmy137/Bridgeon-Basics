import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./createAsyncThunk.js";
import { useEffect} from "react";

function Users() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>...loading</p>;
  
  if (error) return <h2>Error : {error}</h2>;

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default Users