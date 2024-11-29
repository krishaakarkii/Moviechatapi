const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http'); // Import the http module
const { Server } = require('socket.io');

const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://karkikrisha373:3w1Ry2OU6ZroJhdB@cluster0.lj6zv.mongodb.net/moviesDB?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// WebSocket Server Setup
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('User connected');

    // Handle joining a chat room
    socket.on('join', (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    // Handle receiving and broadcasting messages
    socket.on('message', (message) => {
        io.to('chatroom').emit('message', message);
        console.log(`Message received: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});



// Routes
//app.use('/auth', authRoutes);
//app.use('/movies', movieRoutes);

// Server Port
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`WebSocket server running on ws://localhost:${PORT}`);
});
