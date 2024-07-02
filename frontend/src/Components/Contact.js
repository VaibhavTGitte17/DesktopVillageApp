import React from 'react';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card1 from './v4.jpg';
import card2 from './agri.jpg';
import card3 from './newpoul.jpg';

function Contact() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/agri');
  };

  const handlePoulClick = () =>{
    navigate('/poul')
  }

  const handleLearnClick = () =>{
    navigate('/learn')
  }




  return (
    <Layout>
      <div className="card-container">
        <Card className="card" onClick={handleCardClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300" 
              image={card2}
              alt="Agriculture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Agriculture
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, voluptas!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="card"  onClick={handlePoulClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300" 
              image={card3}
              alt="Poultry"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Poultry
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nisi.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="card"  onClick={handleLearnClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300" 
              image={card1}
              alt="E-Learning"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-Learning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Layout>
  );
}

export default Contact;
