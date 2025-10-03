# JobHunt Pro - Job Listings Frontend

A modern, responsive job board application built with React that allows users to search, filter, and manage job listings. The application features a beautiful UI with a focus on user experience and functionality. Features intelligent job scraping from LinkedIn with advanced filtering and prioritization.

## 🔗 Project Components

- **Frontend** (This Repository):
  - Modern React-based UI
  - Responsive design
  - Real-time job updates
  - Advanced search and filtering
  - Beautiful job cards
  - Intuitive user interface

- **Backend**: [Job-Listing-Backend](https://github.com/brocode-01/Job_Listing_Backend.git)
  - RESTful API
  - LinkedIn job scraping
  - Database management
  - Job analytics
  - Search optimization

## 🌟 Features

- **Job Search & Filtering**
  - Search jobs by keyword, title, or location
  - Filter by location, company, job type, and experience level
  - Sort jobs by date posted, title, company, or location
  - Real-time search results
  - Advanced filtering system
  - Clear all filters option

- **Job Management**
  - Post new job listings with detailed information
  - Edit existing job listings
  - Delete job listings
  - Automated job scraping functionality through LinkedIn
  - View job statistics and metrics

- **Intelligent LinkedIn Integration**
  - Display of scraped jobs with smart filtering
  - Focus on full-time, mid to senior positions
  - Advanced job prioritization system
  - Technology-aware ranking
  - Quality-based sorting
  - Last 24 hours listings

- **Modern UI/UX**
  - Responsive design for all devices
  - Beautiful gradient backgrounds
  - Smooth animations and transitions
  - Loading states and error handling
  - Clean and intuitive interface
  - Accessibility features

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- [Backend API](https://github.com/brocode-01/Job_Listing_Backend.git) running on `http://localhost:5000`

### Installation

1. Clone both repositories:
```bash
# Clone Frontend
git clone <repository-url>
cd Job-Listing-Frontend

# Clone Backend
git clone https://github.com/brocode-01/Job_Listing_Backend.git
cd Job_Listing_Backend
```

2. Install dependencies for both:
```bash
# Frontend dependencies
cd job-listings-frontend
npm install

# Backend dependencies
cd ../JobHuntPro-Job-Listing-Backend
npm install
```

3. Start both servers:
```bash
# Start Backend (in Job-Listing-Backend directory)
npm start

# Start Frontend (in job-listings-frontend directory)
npm start
```

The frontend application will be available at `http://localhost:3000` and will connect to the backend at `http://localhost:5000`.

## 🔧 Configuration

### Frontend Configuration
The frontend is configured to connect to the backend API at `http://localhost:5000`. This can be modified in:
- `src/services/BackendService.js` - API base URL
- `package.json` - proxy configuration
- `.env` file - Environment variables

### Environment Variables
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_VERSION=1.0.0
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   │   ├── Button.js   # Custom button component
│   │   ├── Input.js    # Form input component
│   │   └── Modal.js    # Modal dialog component
│   ├── Header.js       # App header with navigation
│   ├── HeroSection.js  # Hero section with search
│   ├── JobCard.js      # Job listing card component
│   ├── FilterSidebar.js# Filtering sidebar
│   └── AddJobModal.js  # Job posting modal
├── screens/            # Screen components
│   ├── JobListScreen.js# Main job listing screen
│   ├── DashboardScreen.js# Statistics dashboard
│   └── AboutScreen.js  # About page
├── services/           # API services
│   ├── BackendService.js# Backend API integration
│   └── JobService.js   # Job-related API calls
├── hooks/             # Custom React hooks
│   ├── useJobs.js     # Job data management
│   └── useFilters.js  # Filter state management
├── context/           # React context providers
│   └── JobContext.js  # Job data context
├── utils/             # Utility functions
│   ├── api.js        # API helper functions
│   └── filters.js    # Filter helper functions
├── styles/           # Styling files
│   ├── global.css    # Global styles
│   └── variables.css # CSS variables
├── App.js            # Main application component
├── App.css           # Global styles
└── index.js          # Application entry point
```

## 🔌 API Integration

### Job Management
```javascript
// Get all jobs with filters
GET /api/jobs?location=&company=&job_type=&experience=&sort_by=&sort_order=

// Create new job
POST /api/jobs
{
  title: string,
  company: string,
  location: string,
  description: string,
  salary: string,
  job_type: string,
  experience_level: string,
  application_url: string
}

// Update job
PUT /api/jobs/:id
{
  // Same fields as POST
}

// Delete job
DELETE /api/jobs/:id
```

### Job Scraping
```javascript
// Trigger job scraping
POST /api/scrape

// Get scraping status
GET /api/scrape/status
```

### Statistics
```javascript
// Get job statistics
GET /api/stats
```

## 🔒 Security Features

- CORS configuration
- Input validation
- XSS prevention
- API error handling
- Rate limiting handling
- Secure HTTP headers

## 🎨 Features in Detail

### Job Search and Filtering
- Full-text search across job title, company, and location
- Advanced filtering options:
  - Location filter
  - Company filter
  - Job type (Full-time, Part-time, Contract, Internship)
  - Experience level (Entry, Mid, Senior)
- Sort by multiple criteria
- Clear all filters option

### Job Management
- Add new jobs with detailed information
- Edit existing jobs
- Delete jobs
- Automated job scraping from external sources
- Bulk operations support

### Statistics Dashboard
- Total jobs count
- Scraped vs. manually added jobs ratio
- Top companies chart
- Location distribution
- Job type breakdown
- Real-time updates

## 🎯 Future Enhancements

- User authentication and authorization
- Job application tracking
- Email notifications
- Advanced search filters
- Company profiles
- Mobile app version
- Saved searches
- Job alerts
- Resume parser
- Application tracking system

## 🛠️ Development

### Component Development
- Storybook integration for component development
- Jest and React Testing Library for unit tests
- E2E tests with Cypress
- ESLint and Prettier for code formatting

### State Management
- React Context for global state
- Custom hooks for reusable logic
- Local storage for persistence
- Real-time updates
