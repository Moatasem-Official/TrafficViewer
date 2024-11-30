const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trafficDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Rating Schema
const ratingSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    comment: String,
    timestamp: { type: Date, default: Date.now }
});

const Rating = mongoose.model('Rating', ratingSchema);

// Routes
app.post('/api/ratings', async (req, res) => {
    try {
        const { value, comment } = req.body;
        const rating = new Rating({ value, comment });
        await rating.save();
        res.status(201).json(rating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/ratings', async (req, res) => {
    try {
        const ratings = await Rating.find().sort({ timestamp: -1 });
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
