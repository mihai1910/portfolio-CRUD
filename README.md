
# Artist Portfolio Management Application

## Overview

The Artist Portfolio Management Application is a web-based platform that allows artists to manage and showcase their work. The application supports CRUD (Create, Read, Update, Delete) operations for artist portfolios, enabling users to easily manage their artwork, including titles, descriptions, links to personal websites, and images.

## Technologies Used

- **Frontend:** React.js
- **Backend:** NestJS
- **Database:** MySQL
- **File Uploads:** Multer for handling file uploads
- **Styling:** CSS for basic styling (customize as needed)

## Features

- **User Authentication (Planned):** Implement user authentication to allow different artists to manage their portfolios securely.
- **Image Upload:** Artists can upload images associated with their artwork.
- **Responsive Design:** The application is designed to be responsive and user-friendly across different devices.
- **Sorting and Filtering:** Users can sort and filter their artwork based on different criteria, such as title or date added.
- **Portfolio Grid/List View:** Display portfolios in a grid or list format with options to hide/show specific artworks.

## Installation

### Prerequisites

- Node.js
- MySQL server
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/artist-portfolio.git
   ```
   
2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up your MySQL database:
   - Create a database named `portfolio_db`.
   - Update the `AppModule` in `src/app.module.ts` with your MySQL credentials.

4. Run the backend server:
   ```bash
   npm run start
   ```

5. Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

6. Run the frontend application:
   ```bash
   npm start
   ```

## Configuration

- The backend server runs on `http://localhost:3001`.
- The frontend application runs on `http://localhost:3000`.
- Image uploads are stored in the `uploads` directory by default.

## Important Notes

- **Image Display Issue:** If images are not displaying on the main screen, ensure the paths are correctly set in the database and that the server is configured to serve static files from the `uploads` directory.
- **File Structure:** Ensure that the file structure is correct for both backend and frontend. Misplaced files can lead to runtime errors.

## Future Enhancements

- Implement user authentication and authorization for better security.
- Add a search feature to quickly find specific artworks.
- Enhance the user interface with advanced styling and animations.
