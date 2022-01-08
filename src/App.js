import './index.css';
import React from 'react';
import { useQuery } from '@apollo/client'
import { CATEGORIES } from './schema';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Home from './components/Home';
import Clothes from './components/Clothes';
import Tech from './components/Tech';

export default function App() {

  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Router>

      <Navbar data={data} />
    
      <Container>
        <Routes>
        {/* I tried to use filter to filter the data and then map over it to get the products, but it didn't work. 
          I'm not sure why, but I'm going to leave it here for now and use router element attributes. */}
          <Route path="/" element={<Home/>} />
          <Route path="/clothes" element={<Clothes/>} />
          <Route path="/tech" element={<Tech/>} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  color: #1d1f22;
`;
