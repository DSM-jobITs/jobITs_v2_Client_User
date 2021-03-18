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
        {posts.map((post: {recruit_id:any;enterprise_name:any;
        enterprise_introduce:any;specialty_specialty:any;
        recruit_deadline:any;})=>(
          <Links to={"employment/"+post.recruit_id} key={post.recruit_id}>
            <EmploymentItems
              key={post.recruit_id}
              name={post.enterprise_name}
              introduce={post.enterprise_introduce}
              skills={post.specialty_specialty}
              deadline={post.recruit_deadline}
            />
          </Links>
        ))}
    </>
  );
};

export default Posts;