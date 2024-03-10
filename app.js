require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);


const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('FootballHero Backend is Running!');
});

// Start the server
const port = process.env.PORT || 3001; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.get('/test-supabase', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('id'); // Assuming you have a 'users' table

        if (error) {
            return res.status(500).json(error);
        }

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
