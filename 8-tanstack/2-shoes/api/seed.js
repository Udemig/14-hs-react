require('dotenv').config();
const mongoose = require('mongoose');
const Shoe = require('./models/shoe.model');
const shoes = require('./db.json').shoes;

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing shoes
        await Shoe.deleteMany({});
        console.log('Cleared existing shoes');

        // Insert shoes from db.json
        await Shoe.insertMany(shoes);
        console.log('Seeded shoes successfully');

        // Disconnect from MongoDB
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 