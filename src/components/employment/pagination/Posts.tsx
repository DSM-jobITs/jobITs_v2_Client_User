import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmploymentItems from '../employmentItems/EmploymentItems';
import Wait from '../employmentDetailView/Wait';

const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`

const Posts = ({posts, loading}: any) => {
  return (
    <>
      { loading && 
        <Wait />
      }
        {posts.map((post: {recruit_id:any;enterprise_name:any;
        enterprise_introduce:any;qualification_specialty:any;
        recruit_deadline:any;})=>(
          <Links to={"employment/"+post.recruit_id} key={post.recruit_id}>
            <EmploymentItems
              key={post.recruit_id}
              name={post.enterprise_name}
              introduce={post.enterprise_introduce}
              specialty={post.qualification_specialty}
              deadline={post.recruit_deadline}
            />
          </Links>
        ))}
    </>
  );
};

export default Posts;