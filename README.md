# Vite React Development Server Setup

This guide will help you set up and run the development server for a Vite React project.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Steps to Get Started

### 1. Clone the Repository
Clone the project repository to your local machine using Git:
```bash
git clone https://github.com/ulugbek101/lms-frontend
cd lms-frontend
```


### 2. Install Dependencies
Navigate to the project folder and install the required dependencies with npm or yarn:
```bash
npm install
```
Or, if you're using yarn:
```bash
yarn install
```

### 3. Run the Development Server
Once the dependencies are installed, you can start the development server:
```bash
npm run dev
```
Or, if you're using yarn:
```bash
yarn dev
```

This will start the Vite development server. You should see output indicating the server is running, and it will show the local development URL (usually http://localhost:3000).

### 4. Open in Browser
Open your browser and go to the provided URL (e.g., http://localhost:3000) to view the React app in development mode.


### Additional Commands
- Build the Project for Production
To build the project for production, run:
```bash
npm run build
```
- Preview the Production Build
After building the project, you can preview the production build locally:
```bash
npm run preview
```


### Troubleshooting
- If you encounter any issues with dependencies, try deleting node_modules and package-lock.json (or yarn.lock) and running npm install (or yarn install) again.


