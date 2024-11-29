# **Movie Chat Backend**

This project implements a backend for managing movies and a WebSocket-based chat functionality. It features role-based access control using JWT for authentication. Admin users can manage movies, while regular users can fetch movie data and join a chat room for real-time communication.

## **Features**

### **Movies API**
1. **GET /movies:**
   - Fetch all movies.
   - Open to all users (no authentication required).

2. **POST /movies:**
   - Add a new movie (Admin only).

3. **PUT /movies/:id:**
   - Update a movie (Admin only).

4. **DELETE /movies/:id:**
   - Delete a movie (Admin only).

### **Authentication**
- Uses **JWT** for secure token-based authentication.
- **Role-based Access:**
   - **Admin**: Full CRUD access to movies.
   - **Regular User**: Read-only access to movies.

### **WebSocket Chat**
- Users can join a chat room and send real-time messages.
- Messages are broadcasted to all participants in the room.

## **Tech Stack**
- **Node.js**: Backend runtime.
- **Express**: Server framework.
- **MongoDB**: Database for movie and user data.
- **Socket.IO**: Real-time WebSocket-based communication.
- **JWT**: Authentication.
- **Helmet & CORS**: Security and cross-origin support.

## **Setup Instructions**

### Prerequisites:
1. **Node.js** (v16+ recommended)
2. **MongoDB Atlas Account** or local MongoDB instance.

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-chat-backend
2. Install dependencies:
   ```bash
npm install

3. Create a server.key and server.cert in the root directory for HTTPS
   (optional, required for wss://).
   Start the server:
   ```bash
   node server.js
   The server will run at http://localhost:3001.
### Testing:
    Movies API
    Use tools like Postman to test API endpoints.
    Include JWT tokens in the Authorization header for secured endpoints.

### WebSocket Chat
    Test WebSocket functionality with tools like Postman WebSocket Client or wscat.
### Known Issues
    WebSocket Chat:
    Attempts to establish a WebSocket connection failed with errors such as socket hang up.
    Both ws:// and wss:// protocols were tested, but the issue remains unresolved.
    Debugging efforts included adding handshake logs and testing with various tools like Postman and wscat.
### Future Improvements
    Resolve WebSocket connectivity issues for a fully functional chat feature.
    Add more detailed error handling for API endpoints.
    Implement unit tests for routes and controllers
