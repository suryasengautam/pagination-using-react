import  React,{useState,useEffect} from 'react'
import axios from "axios"
import Posts from './components/Posts';
import Pagination from './components/Pagination';


import './App.css';

function App() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
    setLoading(false)
    
    }
    fetchPosts()
  
  },[])
  console.log(posts);
  //get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost -postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
  //paginate 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (

    <div className="container mt-5">
      <h1 className='text-primary mb-3'> my blog</h1>
      <Posts posts = {currentPosts} loading= {loading}/>
      <Pagination  postsPerPage={postsPerPage} totalPosts = {posts.length} paginate = {paginate}></Pagination>
   
    </div>
  );
}

export default App;
