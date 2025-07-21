require('dotenv').config();
const express = require('express');
const app = express();
const sequelize  = require('./config/db'); 

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/stores', require('./routes/storeRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));

// Health check
app.get('/', (req, res) => {  
  
  res.send('✅ API is working');
});

// Sync DB & start server
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Tables synced');
app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error('❌ Error syncing tables:', err);     
}
);
