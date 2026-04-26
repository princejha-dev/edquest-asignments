# Chat Application (Node.js + Socket.io)

## Description

A simple real-time chat application that allows users to send messages instantly and stores them in MongoDB.

## Features

* Real-time messaging using Socket.io
* Store messages in MongoDB
* Fetch chat history via API
* Basic API testing with Mocha & Chai

## Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.io
* Mocha & Chai

## Project Structure

chatapp-nodejs/
│
├── models/
│   └── Message.js
│
├── routes/
│   └── messageRoutes.js
│
├── test/
│   └── test.js
│
├── public/
│   └── index.html
│
├── server.js
├── package.json

## Setup Instructions

```bash
1. Install dependencies
   npm install

2. Start MongoDB
   mongod

3. Run server
   npm start

4. Open index.html in browser
```

## API Endpoints

GET /api/messages
→ Fetch all messages

POST /api/messages
→ Create a new message

## Testing

Run tests using:
npx mocha

## 👨‍💻 Author  

**Prince Jha**  
- 🐙 GitHub: [@princejha-dev](https://github.com/princejha-dev)  
- 💼 LinkedIn: [princejha-dev](https://linkedin.com/in/princejha-dev)
