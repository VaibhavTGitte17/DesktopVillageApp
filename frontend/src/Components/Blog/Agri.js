import React from 'react';
import Layout from '../Layout';
import farmImage from './agri.jpg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Agriculture() {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Card style={{ maxWidth: 900, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardMedia
            component="img"
            image={farmImage}
            alt="Agriculture"
            style={{ width: '100%', height: 'auto' }}
          />
          <CardContent>
            <Typography variant="h4" component="div" style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
              Agriculture
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '20px', textAlign: 'justify' }}>
              Agriculture refers to the practice of cultivating soil, growing crops, and raising animals for food, fiber, medicinal plants, and other products used to sustain and enhance human life. It encompasses a wide range of activities, techniques, and sciences involved in the production of food and goods from the natural resources of the Earth.
            </Typography>

            {/* Importance of Agriculture */}
            <Typography variant="h5" component="div" style={{ marginTop: '30px', fontWeight: 'bold' }}>
              Importance of Agriculture
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Food Security:</strong> Agriculture is fundamental to ensuring global food security. It provides the majority of the world's food supply, including grains, vegetables, fruits, and animal products.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Economic Importance:</strong> Agriculture is a significant contributor to the global economy. It provides employment to a large portion of the world's population, particularly in developing countries. It also drives related industries such as food processing, transportation, and distribution.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Environmental Impact:</strong> Agriculture plays a crucial role in environmental sustainability. Sustainable agricultural practices promote soil health, conserve water resources, and reduce pollution. Conversely, unsustainable practices can lead to soil degradation, water scarcity, and biodiversity loss.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Cultural and Social Aspects:</strong> Agriculture is intertwined with cultural practices and traditions around the world. It shapes rural communities, traditions, and identities.
            </Typography>

            {/* Types of Agriculture */}
            <Typography variant="h5" component="div" style={{ marginTop: '30px', fontWeight: 'bold' }}>
              Types of Agriculture
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Subsistence Agriculture:</strong> Farmers grow crops and raise livestock primarily to meet the needs of their families or communities, with little surplus for sale.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Commercial Agriculture:</strong> Production is aimed at generating profit through the sale of agricultural products in the market.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Organic Agriculture:</strong> Focuses on sustainable practices, avoiding synthetic chemicals and promoting biodiversity and soil health.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Intensive Agriculture:</strong> Involves high-input farming practices to maximize yield per unit of land, often using fertilizers, pesticides, and modern machinery.
            </Typography>

            {/* Challenges in Agriculture */}
            <Typography variant="h5" component="div" style={{ marginTop: '30px', fontWeight: 'bold' }}>
              Challenges in Agriculture
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Climate Change:</strong> Changing weather patterns, extreme events like droughts and floods, and rising temperatures pose significant challenges to agriculture.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Food Security:</strong> Meeting the growing global demand for food amidst population growth and changing dietary preferences.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Resource Scarcity:</strong> Water scarcity, land degradation, and depletion of natural resources like fertile soil and biodiversity.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Technological Adaptation:</strong> Integrating new technologies like precision farming, genetic engineering, and digital agriculture to enhance productivity while minimizing environmental impact.
            </Typography>

            {/* Innovations in Agriculture */}
            <Typography variant="h5" component="div" style={{ marginTop: '30px', fontWeight: 'bold' }}>
              Innovations in Agriculture
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Precision Agriculture:</strong> Uses technology to optimize inputs such as water, fertilizer, and pesticides based on real-time data and analytics.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Genetic Engineering:</strong> Develops crops with improved traits such as disease resistance, drought tolerance, and higher nutritional value.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Vertical Farming:</strong> Utilizes controlled environments like indoor facilities and hydroponic systems to grow crops vertically, maximizing space and resource efficiency.
            </Typography>
            <Typography variant="body1" color="text.secondary" style={{ marginTop: '10px', textAlign: 'justify' }}>
              <strong>Agroforestry:</strong> Integrates trees and shrubs with crops or livestock to improve soil fertility, conserve water, and diversify income sources.
            </Typography>

            <Typography variant="body1" color="text.secondary" style={{ marginTop: '20px', textAlign: 'justify' }}>
              Agriculture is not only vital for ensuring food security and economic stability but also for sustainable development and environmental stewardship. As global challenges evolve, innovations in agriculture continue to play a crucial role in meeting the needs of current and future generations while preserving the planet's natural resources.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default Agriculture;
