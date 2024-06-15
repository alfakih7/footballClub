import React from 'react';
import styled from 'styled-components';
import './App.css';
import Form from './Form';
import PlayerImage from './PlayerImage'; // Capitalize the component name

const BigDiv = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start; // Align items to the left
  align-items: center;
  padding-left: 20vw; // Move the item a bit to the right

  @media (max-width: 768px) {
    padding-left: 10vw;
  }
`;

export default function App() {
  return (
    <div className="App">
      <BigDiv>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PlayerImage />
          <Form/>
        </div>
      </BigDiv>
    </div>
  );
}