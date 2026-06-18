# InsightFlow Analytics

A full-stack user analytics platform inspired by modern behavioral analytics tools. InsightFlow tracks user interactions on a website, stores them in MongoDB, and visualizes user journeys and click heatmaps through an interactive dashboard.

## Live Demo

* Frontend Dashboard: https://insightflow-analytics-two.vercel.app/
* Backend API: https://insightflow-analytics.onrender.com
* GitHub Repository: https://github.com/Yashasvi-14/insightflow-analytics

---

## Overview

InsightFlow helps visualize how users interact with a website by collecting behavioral events such as page views and clicks.

The platform consists of:

1. A lightweight JavaScript tracking SDK
2. A Node.js backend API
3. MongoDB Atlas for event storage
4. A React analytics dashboard

Collected events are transformed into actionable insights through:

* Session Analytics
* User Journey Tracking
* Click Heatmaps
* Activity Statistics

---

## Features

### Event Tracking SDK

Tracks:

* Page Views
* Click Events
* Session IDs
* Page URLs
* Event Timestamps
* Click Coordinates (X/Y)

### Session Analytics

* View all tracked sessions
* Total event count per session
* Last activity tracking
* Session overview cards

### User Journey View

* Chronological timeline of user activity
* Page navigation tracking
* Click interaction history

### Heatmap Visualization

* Visual click heatmaps
* Dynamic page selection
* Browser-style preview interface
* Real click coordinate rendering

### Dashboard Analytics

* Total Events
* Total Sessions
* Total Clicks
* Tracked Pages

---

## Architecture

```text
Website
   │
   ▼
Tracker SDK (tracker.js)
   │
   ▼
Node.js + Express API
   │
   ▼
MongoDB Atlas
   │
   ▼
React Dashboard
```

---

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

```text
insightflow-analytics/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   └── services/
│
├── tracker-sdk/
│   ├── tracker.js
│   ├── index.html
│   └── pricing.html
│
└── README.md
```

---

## API Endpoints

### Create Event

```http
POST /api/events
```

### Get Sessions

```http
GET /api/events/sessions
```

### Get Session Events

```http
GET /api/events/sessions/:sessionId
```

### Get Heatmap Data

```http
GET /api/events/heatmap?pageUrl=/home
```

### Get Statistics

```http
GET /api/events/stats
```

### Get Tracked Pages

```http
GET /api/events/pages
```

---

## Tracker SDK Usage

Include the tracking script on any webpage:

```html
<script src="tracker.js"></script>
```

Automatically tracks:

* Page Views
* Click Events
* Session IDs
* Click Coordinates

Events are sent directly to the backend API for storage and analysis.

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/Yashasvi-14/insightflow-analytics.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Screenshots

### Dashboard

<img width="481" height="337" alt="image" src="https://github.com/user-attachments/assets/3610e2ef-5cde-46a4-abb9-cbb93ded3da1" />

### Session Journey

<img width="478" height="334" alt="image" src="https://github.com/user-attachments/assets/7fa4b126-fa16-49b6-a499-1114cd1722bd" />

### Heatmap View

<img width="480" height="334" alt="image" src="https://github.com/user-attachments/assets/c1cf2d38-3746-4e8d-8e9a-35ba9e0aea2d" />

### Heat Canvas

<img width="455" height="276" alt="image" src="https://github.com/user-attachments/assets/2bdfb5dc-65e3-4c68-bee9-2024ea937b1e" />

<img width="458" height="284" alt="image" src="https://github.com/user-attachments/assets/6c5ef19a-16d2-4725-9081-8036f59df2ed" />

### Demo Website

<img width="578" height="298" alt="image" src="https://github.com/user-attachments/assets/d1658572-5066-41d3-a7e9-3eb759a2aa22" />

<img width="599" height="312" alt="image" src="https://github.com/user-attachments/assets/90e07609-fccb-48f2-8853-ee3d758d7913" />

---

## Design Decisions

### Why MongoDB?

Event tracking data is naturally document-oriented and flexible. MongoDB allows efficient storage and querying of user interaction events.

### Why Session-Based Analytics?

Sessions help reconstruct user journeys and understand behavioral patterns across page visits and interactions.

### Why a Separate Tracking SDK?

The tracking script can be embedded into any webpage and decouples data collection from the analytics dashboard.

---

## Future Improvements

* Authentication & User Management
* Real-Time Event Streaming
* Advanced Heatmaps
* Session Replay
* Funnel Analytics
* Event Filtering
* Device & Browser Analytics
* Custom Event Tracking

---

## Author

Yashasvi Tekriwal

Electrical Engineering, Delhi Technological University (DTU)

GitHub: https://github.com/Yashasvi-14

E-mail: yashasvitekriwal14032004@gmail.com

LinkedIn: https://www.linkedin.com/in/yashasvi-tekriwal-1a3424280/

---

Built as part of the Full Stack Engineer Assignment for CausalFunnel.
