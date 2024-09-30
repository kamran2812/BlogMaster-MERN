# BlogMaster-MERN

## Description
BlogMaster-MERN is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to register, log in, and create blog posts. Users can categorize posts and search for them by title, providing a seamless blogging experience.

 **Note:** The **master** branch is the main branch of this repository, containing the project structure, including the **client** and **server** folders.

## Features
- User Authentication: Users can register and log in to access their accounts.
- Blog Management: Create, edit, and delete blog posts.
- Categories: Sort blog posts by categories.
- Search Functionality: Search for blog posts by title.
- Responsive Design: The application is fully responsive and user-friendly.

## Installation

### Prerequisites
- Node.js
- MongoDB
- Git

### Cloning the Repository
```
git clone https://github.com/kamran2812/BlogMaster-MERN.git
cd BlogMaster-MERN
```

### Environment Variables
Create a file named `config.env` in the root of the server folder and add the following configuration:
```
# Server configuration
PORT=8000

# Database configuration
DATABASE=mongodb+srv://kamran:kamranabbas@cluster0.ixivxwy.mongodb.net/?retryWrites=true&w=majority
SECRET=tfnjnjjmmjmhjngbfbfbfffbfbfyhyhyujujujtttyhyhyhyhyhyjujujuju

# Uncomment the following line if you want to use local MongoDB
# DATABASE='mongodb://127.0.0.1:27017/blog'
```

### Running the Application

#### Server
1. Navigate to the server folder:
```
cd server
```
2. Install dependencies:
```
npm install
```
3. Start the server:
```
npm start
```

#### Client
1. Navigate to the client folder:
```
cd client
```
2. Install dependencies:
```
npm install
```
3. Start the client:
```
npm start
```

## Folder Structure
```
BlogMaster-MERN/
├── client/         # React front-end application
├── server/         # Node.js back-end application
├── config.env      # Configuration file for environment variables
└── .gitignore      # Files and directories to be ignored by Git
```

## Technologies Used
- Front-End: React.js, HTML, CSS, JavaScript
- Back-End: Node.js, Express.js
- Database: MongoDB
- Version Control: Git

## License
This project is licensed under the MIT License.
