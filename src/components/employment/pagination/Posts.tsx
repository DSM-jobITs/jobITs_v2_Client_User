import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmploymentItems from '../employmentItems/EmploymentItems';

const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`

const Posts = ({posts, loading}: any) => {
  return (
    <>
      { loading && 
        <div> loading... </div>
      }
        {posts.map((post: {entNo:any;entName:any;introduction:any;workContent:any;deadline:any;})=>(
          <Links to={"employment/"+post.entNo} key={post.entNo}>
            <EmploymentItems
              key={post.entNo}
              name={post.entName}
              introduce={post.introduction}
              skills={post.workContent}
              deadline={post.deadline}
            />
          </Links>
        ))}
    </>
  );
};

export default Posts;