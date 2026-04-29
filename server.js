// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // User authentication routes
const productRoutes = require('./routes/products'); // Products API
const orderRoutes = require('./routes/orders'); // Orders management
const chatRoutes = require('./routes/chat'); // Chat messaging system
const profileRoutes = require('./routes/profile'); // User profiles
const feedRoutes = require('./routes/feed'); // Social feed endpoints
const paymentRoutes = require('./routes/payment'); // Pix payment integration

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/imperflora', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
