# Descriptive Report: Full Stack Rental Website

## Introduction

The Full Stack Rental Website is a sophisticated web application designed to provide users with a seamless experience for renting a wide range of items on a monthly basis. This comprehensive report will provide an in-depth overview of the key features and components of this web application, which offers a user-friendly interface, powerful database management, category-wise sorting, pagination, responsive design, and various essential functionalities.

## Key Features

### Product Selection and Monthly Pricing
Users can easily browse and select products they wish to rent on a monthly basis. This functionality is enabled by the backend server, which retrieves product information from a robust and extensive database.

### Category-Wise Sorting
To simplify product discovery, the website allows users to sort items by categories. This feature enhances the user experience by ensuring that users can quickly find products that match their specific needs.

### Pagination
Pagination is implemented to ensure that the website remains user-friendly, even when dealing with a large number of products. This feature divides the product listing into manageable pages, preventing information overload and allowing users to navigate the catalog effortlessly.

### User-Friendly Design and Slidebar
The website boasts an attractive and intuitive design, making it visually appealing and user-friendly. A slidebar is incorporated, providing users with easy access to essential navigation options.

### Product Interaction
Each product on the website includes "Add to Cart" and "Rent Now" buttons. The "Add to Cart" feature allows users to accumulate items for rental with specified quantities, while the "Rent Now" button allows users to proceed directly to the checkout page, streamlining the rental process.

### User Authentication
To ensure security and personalization, the website includes both login and signup pages. Users can create accounts, log in, and manage their rental activities securely.

### Admin Features
The backend of the web application includes an admin panel, which grants administrators the ability to add and delete products from the database. This functionality ensures that the product catalog remains up-to-date and relevant.

### Payment Options
The checkout page offers a range of payment options, with the default option being "Cash on Delivery." This flexibility allows users to choose the most convenient method for completing their rental transactions.

### Location Integration
Users can customize their experience by selecting their location, which is displayed in the navbar. This feature can be particularly useful for users who wish to find products available in their specific area.

Certainly! Here's a detailed guide for setting up your project with all the required packages:

## Backend (Django) Setup:

### Prerequisites:

1. **Python**: Install Python (3.6 or higher) from the [official website](https://www.python.org/downloads/).

2. **Pip**: Python comes with `pip` pre-installed. Make sure you're using a recent version of `pip`.

### Installation:

1. **Create a Virtual Environment** (Optional but recommended):

   ```bash
   python3 -m venv myenv
   source myenv/bin/activate   # On Windows, use `myenv\Scripts\activate`
   ```

2. **Clone Your Django Project** (if not already done):

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

3. **Install Required Packages**:

   ```bash
   pip install django==4.2.5  # Install Django 4.2.5
   pip install djangorestframework  # Install Django REST framework
   pip install django-oauth-toolkit  # Install OAuth2 Provider
   pip install django-cors-headers  # Install Django CORS headers
   ```

   - `django-oauth-toolkit` is important for OAuth2 authentication, and `django-cors-headers` is necessary if you're working with frontend and backend on different origins.

4. **Database Migration**:

   ```bash
   python manage.py migrate
   ```

   This will create the necessary database tables based on your Django models.

5. **Create Superuser** (Optional but recommended for accessing Django admin):

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to create a superuser account.

6. **Run Django Server**:

   ```bash
   python manage.py runserver
   ```

   Your Django backend will now be running at `http://127.0.0.1:8000/`.

## Frontend (React) Setup:

### Prerequisites:

1. **Node.js and npm**: Install Node.js (which includes npm) from the [official website](https://nodejs.org/).

### Installation:

1. **Navigate to Frontend Directory**:

   ```bash
   cd frontend
   ```

2. **Install Required Packages**:

   ```bash
   npm install axios react react-dom react-router-dom react-icons react-paginate react-simple-image-slider react-social-icons react-toastify
   ```

   These packages include dependencies for React, routing, API calls, icons, pagination, image slider, social icons, and toast notifications.

3. **Start React Server**:

   ```bash
   npm run dev
   ```

   Your React frontend will now be running at `http://localhost:3000/`.

### Running Both Servers Together:

- Start your Django server as mentioned in step 6 above.
- In a separate terminal, navigate to the `frontend` directory and run the React server with `npm run dev`.

## Technologies Used:

### Backend:

- **Django**: A high-level Python web framework.
- **Django REST Framework**: A powerful and flexible toolkit for building Web APIs.
- **OAuth2 Provider**: For implementing OAuth 2.0 authentication.
- **SQLite**: A lightweight, serverless, self-contained SQL database.

### Frontend:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For adding navigation to your React application.
- **Axios**: A promise-based HTTP client for making API calls.
- **React Icons**: A library of popular icons for React.
- **React Paginate**: A component for handling pagination in React.
- **React Simple Image Slider**: A simple image slider component for React.
- **React Social Icons**: A set of social media icons as React components.
- **React Toastify**: A library for toast notifications in React.

### Contributors:

## Technical Details

The Full Stack Rental Website is built using a comprehensive tech stack, including:

- Frontend: HTML, CSS, JavaScript, and a responsive framework (e.g., Bootstrap) for the user interface.
- Backend: A server-side programming language (e.g., Node.js, Python, Ruby) for handling requests and interacting with the database.
- Database: A powerful and scalable database management system (e.g., MySQL, PostgreSQL, MongoDB) for storing product information and user data.
- Authentication: Secure authentication protocols (e.g., JWT, OAuth) for user login and registration.
- Payment Gateway: Integration with a payment gateway (e.g., Stripe, PayPal) for processing rental payments securely.
- Hosting: Deployment on a reliable hosting service (e.g., AWS, Heroku) to ensure the website's availability and performance.

## Conclusion

The Full Stack Rental Website offers a feature-rich and user-centric platform for renting a wide variety of products on a monthly basis. Its powerful database, user-friendly design, category sorting, pagination, and other essential features make it an ideal solution for both customers seeking rental items and administrators managing the product catalog. With its intuitive interface and secure payment options, this web application provides a seamless rental experience for users while maintaining the flexibility for administrators to keep the catalog up to date.
