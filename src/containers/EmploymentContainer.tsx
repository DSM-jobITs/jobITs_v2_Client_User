import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {baseURL} from '../const';
import { withRouter } from 'react-router-dom';
import Employment from '../components/employment/Employment';

const EmploymentContainer = ({history}: any) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let token: any = localStorage.getItem("token");
      if(token){
        token = token.replace(/["]+/g, '');
      }
      const config = {
        headers : { Authorization: "Bearer "+token} 
      }
      await axios.get(baseURL+'/recruit/basic',config).then((res)=>{
        setPosts(res.data.data.list);
        setLoading(false);
      }).catch((err)=>{
        // alert("로그인 후 이용할 수 있습니다.");
        // history.push("/login");
      })
    }
    fetchData();
  },[]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp: any) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const post = {
    postsPerPage: postsPerPage,
    totalPosts: posts.length,
    paginate: setCurrentPage,
  }

  const postsContainer = {
    posts: currentPosts(posts),
    loading: loading
  }

  return (
    <Employment 
      setPosts={setPosts}
      searchResult={posts.length}
      postsContainer={postsContainer}
      post={post}
    />
  );
};

export default withRouter(EmploymentContainer);