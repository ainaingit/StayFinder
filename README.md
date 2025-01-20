StayFinder

StayFinder is a full-stack web application inspired by Airbnb, designed to allow users to search, explore, and book unique accommodations around the world. This project demonstrates skills in React.js, advanced state management, backend API integration, and third-party services.

🎯 Features

User Features

🔍 Advanced Search: Search for accommodations by location, price, dates, and more.

🗺️ Interactive Map: Explore properties directly on a map.

💾 Favorites: Save your favorite properties for future reference.

🛏️ Property Details: View descriptions, reviews, and availability.

🛒 Easy Booking: Book your stay in just a few clicks with secure payment integration.

Host Features

📋 Property Management: Add, modify, or remove your listings.

📈 Reservation Tracking: Keep an overview of your bookings.

Admin Features

🔧 Advanced Management: Moderate listings and manage users.

🛠️ Technologies Used

Frontend

React.js: Reactive components and state management.

React Router: Multi-page navigation.

Framer Motion: Smooth animations.

Backend

Node.js with Express: RESTful API.

MongoDB: Data storage.

External Services

Google Maps API: Interactive maps.

Stripe: Secure payments.

Cloudinary: Image management and optimization.

🚀 Advanced Features

🎯 Recommendation System: Personalized suggestions based on user searches.

💬 Real-Time Chat: Direct messaging between renters and hosts.

🌗 Dark Mode: Improved user experience with light and dark themes.

🔧 Installation and Setup

Prerequisites

Node.js (v16+)

MongoDB

Steps

Clone the repository

git clone https://github.com/your-username/stayfinder.git
cd stayfinder

Set up the backend

cd backend
npm install

Create a .env file in the backend folder and add the following:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Start the backend:

npm run dev

Set up the frontend

cd ../frontend
npm install

Create a .env file in the frontend folder and add the following:

REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

Start the frontend:

npm start

Access the application

Frontend: http://localhost:3000

Backend: http://localhost:5000

📁 Project Structure

Backend

index.js: Entry point for the backend application.

routes/: API routes for listings, bookings, users, etc.

models/: Mongoose schemas for data models.

controllers/: Logic for handling requests.

middleware/: Authentication and error handling middleware.

Frontend/

  ├── public/                 # Static files (index.html, favicon, etc.)
  └── src/
      ├── assets/             # Images, logos, icons, etc.
      ├── components/         # Reusable components (Navbar, Card, etc.)
      ├── context/            # Global state management with React Context API
      ├── pages/              # Components for pages (HomePage, PropertyPage, etc.)
      ├── utils/              # Utility functions (API calls, helpers)
      ├── App.js              # Entry point of the application
      └── index.js            # React project initialization

🌟 Future Enhancements

Add user reviews and ratings for properties.

Implement multi-language support.

Add advanced analytics for admin dashboards.

Enable push notifications for booking updates.

📝 License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

📧 Contact

For questions or suggestions, please contact:

Email: ainakevinramaroson@gmail.com

GitHub: ainaingit

