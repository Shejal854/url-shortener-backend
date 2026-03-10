# URL Shortener Backend
A lightweight URL shortener API built with Node.js, Express, and MongoDB. Send a long URL, get a short one back.

## What it does
- Turns long URLs into short, shareable links
- Redirects anyone who visits the short link to the original URL
- Stores everything in MongoDB so links persist across restarts

## Stack
Node.js · Express · MongoDB · shortid

## Project Structure
```
url-shortener-backend/
├── controllers/
│   └── urlController.js
├── models/
│   └── urlModel.js
├── routes/
│   └── urlRoutes.js
├── config/
│   └── db.js
├── app.js
├── .env
└── package.json
```

## Installation
1. Clone the repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/url-shortener-backend.git
```
2. Navigate to the project folder
```bash
cd url-shortener-backend
```
3. Install dependencies
```bash
npm install
```
4. Create a .env file
```bash

PORT=8001
CONNECTION_STRING=mongodb://127.0.0.1:27017/UrlDB
BASE_URL=http://localhost:8001
```
5. Start the server
```bash
npm start
```

Server will run at:

http://localhost:8001

## API Endpoints
### 1. Create Short URL

**POST**  `/api/url/shorten`

Request Body:
```json
{
  "originalUrl": "https://google.com"
}
```

Response:
```json
{
  "success": true,
  "shortUrl": "http://localhost:8001/RA6XAk4"
}
```
--- 
### 2. Redirect to Original URL

**GET** `/:shortCode`



Example:
```
http://localhost:8001/abc123
```

This will redirect the user to the original URL.


## How it works

When you POST a URL, the server generates a unique code using `shortid` and saves the mapping to MongoDB. Anyone who hits `/:shortCode` gets a 302 redirect to wherever that code points.

---

## What's next

- Click tracking and analytics
- Custom short codes
- Link expiration
- Rate limiting
- A simple frontend

---

## Author

Built by **Shejal Yadav** — if this helped you, a ⭐ on GitHub is always appreciated!