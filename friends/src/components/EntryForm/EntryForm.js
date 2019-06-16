import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.form`
  display: flex;
  max-width: 800px;
  margin: 1rem auto;
  justify-content: space-between;
`;
const InputField = styled.input`
  background-color: #ffffff;
  border: none;
  color: #999999;
  font-size: 1.4rem;
  padding: 0 1.4rem;
  width: 100%;
  border-left: 1px solid #e6e6e6;
`;
const SubmitButton = styled.button`
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  color: #999999;
  font-size: 1.4rem;
  padding: 0.7rem;
`;
const DeleteButton = styled.button`
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  color: #b71c1c;
  font-size: 1.4rem;
  padding: 0.7rem;
`;

const EntryForm = (props) => {
  return (
    <InputWrapper onSubmit={(e) => e.preventDefault()}>
      <InputField type='text' name='name' placeholder='full name' value={props.currentInput.name} onChange={props.handleInput} />
      <InputField type='number' name='age' placeholder='age' value={props.currentInput.age} onChange={props.handleInput} />
      <InputField type='text' name='email' placeholder='email address' value={props.currentInput.email} onChange={props.handleInput} />
      <SubmitButton type='submit' onClick={props.handleSubmit}>
        {props.update ? `Update Info` : `Add Friend`}
      </SubmitButton>
      {props.update && (
        <DeleteButton type='delete' onClick={props.handleDelete}>
          Delete Info
        </DeleteButton>
      )}
    </InputWrapper>
  );
};

export default EntryForm;
