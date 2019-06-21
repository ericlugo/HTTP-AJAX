import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.section`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 1rem;
  margin: 0.5rem;
`;

const Friend = (props) => {
  const data = props.data;
  return (
    <FriendCard
      onClick={() => {
        return props.handleUpdateRequest(data);
      }}
    >
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>ID #: {data.id}</p>
      <p>Email Address: {data.email}</p>
    </FriendCard>
  );
};

export default Friend;
