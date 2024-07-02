import React from 'react';
import Layout from './Layout';
import village1 from './v2.jpg';
import './Home.css';
import './carousal.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div className="overlay-container">
          <img src={village1} alt="Nature" className="image" />
          <div className="text-content">
            <h1>Welcome Home</h1>
            <p style={{textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to="/add" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Add your village detail
              </Button>
            </Link>
            <Link to="/show" style={{ textDecoration: 'none', marginLeft: '16px' }}>
              <Button variant="contained" color="success" sx={{ mt: 2 }}>
                Show table
              </Button>
            </Link>

            <Link to="/blog" style={{ textDecoration: 'none', marginLeft: '16px' }}>
            <Button variant="contained" color="success" sx={{ mt: 2 }}>
             Go to Blog
            </Button>
          </Link>
          </div>
        </div>
      </div>

      
    </Layout>
  );
}

export default Home;
