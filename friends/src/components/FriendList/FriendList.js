import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const List = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  margin: 1rem auto
  max-width: 800px;
  padding: .5rem;
`;

const FriendList = (props) => {
  return (
    <List>
      {props.data.map((friend) => (
        <Friend key={friend.id} data={friend} handleUpdateRequest={props.handleUpdateRequest} />
      ))}
    </List>
  );
};

export default FriendList;
