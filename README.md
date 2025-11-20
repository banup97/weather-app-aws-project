# weather-app-aws-project
A serverless weather application using AWS Lambda, API Gateway, and S3.

weather-app-aws-project
│
├── README.md
│
├── lambda/
│   └── index.js   (your lambda code)
│
├── website/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── screenshots/
│   ├── lambda-success.png
│   ├── api-working.png
│   ├── s3-hosting.png
│   └── website-output.png
│
└── architecture/
    └── architecture-diagram.png

    🌦️ Weather App using AWS (Serverless Project)

📌 Overview

This is a fully serverless weather application built using:

AWS Lambda (Backend processing)

API Gateway (REST API endpoint)

S3 Static Hosting (Frontend website)

OpenWeatherMap API (Weather data)


The user enters a city name → the request goes to Lambda → Lambda sends API request → returns real-time weather details.


---

🏗️ Architecture Diagram

User → S3 Website → API Gateway → Lambda → OpenWeatherMap API → Response to UI




---

🚀 Features

Real-time weather retrieval

Completely serverless

Fast and scalable

Low cost / Free tier friendly

Frontend hosted on S3

Backend using Node.js Lambda



---

📁 Project Structure

/lambda
  index.js

/website
  index.html
  script.js
  style.css

/screenshots


---

🛠️ Technologies Used

AWS Lambda

AWS API Gateway

Amazon S3

JavaScript (Node.js)

HTML, CSS

OpenWeatherMap API



---

📝 Approach & Methodology

1️⃣ Requirements Understanding

Goal: Create a simple weather app using AWS serverless components.

Breakdown:

Backend → Lambda

Frontend → S3

API Gateway → Connect frontend to backend

External API → Weather data



---

2️⃣ Implementation Steps

Backend (Lambda)

Create Lambda function in Node.js

Write code to call OpenWeatherMap API

Format JSON response

Add environment variable: API_KEY

Test Lambda in the console


API Gateway

Create HTTP API

Add route /weather

Attach Lambda Integration

Deploy API and copy invoke URL


Frontend (S3)

Enable static website hosting

Upload HTML, CSS, JS

Replace API URL in script.js

Make bucket public for website hosting

Open website endpoint to test



---

3️⃣ Key Concepts Learned

Serverless architecture

API Gateway integrations

IAM roles & permissions

S3 static hosting

HTTP requests in JavaScript

Environment variables for security

---

4️⃣ Challenges & Solutions

Challenge	Solution

API Gateway returned “Not Found”	Attached correct Lambda integration
S3 didn't show hosting option	Enabled ACLs & public access
Weather API returned “city not found”	Validated input & fixed API URL
CORS error	Enabled CORS in API Gateway

---

5️⃣ Conclusion

This project demonstrates understanding of AWS serverless architecture, API development, frontend integration, and cloud deployment.



