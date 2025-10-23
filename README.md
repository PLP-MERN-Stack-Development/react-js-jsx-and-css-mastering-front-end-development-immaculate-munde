# Task Manager Application

A modern task management application built with React, featuring dark mode, API integration, and responsive design.

Access the live demo at: https://react-js-jsx-and-css-mastering-fron-one-alpha.vercel.app/

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment (create .env file):
```bash
VITE_API_URL=https://jsonplaceholder.typicode.com
```

3. Start development server:
```bash
npm run dev
```

## Features
- Task Management with local storage
- Dark/Light theme support
- API integration with JSONPlaceholder
- Responsive design
- Time-based task scheduling

## Tech Stack
- React
- React Router
- Tailwind CSS
- Vite

## Project Structure
```
src/
  ├── api/          # API integration
  ├── components/   # Reusable components
  ├── context/      # Context providers
  ├── pages/        # Page components
  └── App.jsx       # Main application
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
