import React from 'react';
import EmploymentItems from '../employmentItems/EmploymentItems';

const Posts = ({posts, loading}: any) => {
  return (
    <>
      { loading && 
        <div> loading... </div>
      }
        {posts.map((post: {id:any;userId:any;title:any;body:any;})=>(
          <EmploymentItems
            key={post.id}
            name={post.title}
            introduce={post.body}
            skills={post.userId}
            deadline={post.id}
          />
        ))}
    </>
  );
};

export default Posts;