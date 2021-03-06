import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
import NavBar from "./components/navbar";
import PostDetails from "./pages/postDetails";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "./actions/posts.actions";
// import { getUsers } from "./actions/users.actions";
// import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.loginStatus);

  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  // const users = useSelector((state) => state.users);

  // useEffect(() => {
  //   axios
  //     .get("https://api.tawwr.com/posts")
  //     .then((posts) => dispatch(getPosts(posts.data.data)));
  // }, [posts]);

  // const getUsersA = async () => {
  //   try {
  //     const users = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     dispatch(getUsers(users.data));
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   getUsersA();
  // }, []);

  return (
    <div >
      
       <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        {loggedIn && <Route path="/post/:id" element={<PostDetails />} /> }
        {/* <Route path="/post/:id" element={<PostDetails />} /> */}
        <Route path="/login" element={<Login/>}/> 
      </Routes>
      {/* <Routes>
        <Route path="/" element={loggedIn ? <Home/> : <Login />}/> 
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes> */}
      
    </div>
  );
}

export default App;
