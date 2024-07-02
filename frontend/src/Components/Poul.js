import React from 'react';
import Layout from '../Layout';
import card2 from './newpoul.jpg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Poultry() {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Card style={{ maxWidth: 900, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardMedia
            component="img"
            image={card2}
            alt="Poultry"
            style={{ width: '100%', height: 'auto' }}
          />
          <CardContent>
            <Typography variant="h4" component="div" style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
              Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '20px', textAlign: 'justify' }}>
              Poultry refers to domestic birds raised for their meat and eggs. Common types include chickens (broilers and layers), ducks, turkeys, and geese. Poultry farming is pivotal in the global food industry, providing essential protein sources worldwide.
            </Typography>

            <Typography variant="h5" component="div" style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Importance of Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Food Production:</strong> Poultry farming is crucial for meat and egg production, serving as primary sources of poultry products globally.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Economic Contribution:</strong> Poultry farming significantly contributes to the agricultural economy, providing employment and driving related industries.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Nutritional Value:</strong> Poultry products are rich in high-quality protein, essential vitamins (B vitamins), minerals (iron, zinc), and healthy fats.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Diversification of Agriculture:</strong> Poultry farming complements other agriculture sectors, utilizing resources efficiently and integrating into mixed farming systems.
            </Typography>

            <Typography variant="h5" component="div" style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Types of Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Broiler Production:</strong> Focuses on raising chickens for meat under controlled environments to optimize growth and meat quality.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Layer Production:</strong> Involves raising chickens primarily for egg production, emphasizing egg quality, nutrition, and disease prevention.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Duck Farming:</strong> Ducks are raised for both meat and eggs, requiring specific housing and nutritional management distinct from chickens.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Turkey and Goose Farming:</strong> Less common but significant in certain regions for their meat production.
            </Typography>

            <Typography variant="h5" component="div" style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Benefits of Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>High Feed Conversion Efficiency:</strong> Poultry convert feed into protein more efficiently compared to larger livestock animals.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Rapid Turnover:</strong> Short production cycles allow for quicker turnover and faster returns on investment.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Versatility:</strong> Adaptable to various scales, from small backyard flocks to large commercial operations.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Egg Production:</strong> Eggs are affordable, accessible sources of high-quality protein, vitamins, and minerals.
            </Typography>

            <Typography variant="h5" component="div" style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Challenges in Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Disease Management:</strong> Susceptibility to diseases necessitates stringent biosecurity measures and vaccination protocols.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Feed Costs:</strong> Fluctuations in feed costs impact profitability for farmers.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Environmental Impact:</strong> Large-scale farming can pose challenges in waste management and water pollution.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Market Volatility:</strong> Prices are subject to consumer demand, production costs, and global trade dynamics.
            </Typography>

            <Typography variant="h5" component="div" style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Innovations in Poultry Farming
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Genetic Selection:</strong> Breeding programs enhance traits such as growth, feed efficiency, disease resistance, and egg production.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Technology Adoption:</strong> Automation and digital technologies monitor health, feeding systems, and environmental control.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Nutritional Advances:</strong> Balanced diets and supplements optimize poultry health and performance.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Sustainable Practices:</strong> Implementing practices to reduce environmental impact, including waste management and energy efficiency.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '20px', textAlign: 'justify' }}>
            Poultry farming is a dynamic sector within agriculture, providing essential food products, economic opportunities, and nutritional benefits to global populations. As the demand for protein-rich foods continues to grow, poultry farming remains integral to ensuring food security and sustainable agricultural practices worldwide.
            </Typography>
          
            </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default Poultry;
