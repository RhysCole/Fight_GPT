# UFC Predictive Engine: Client Interface

A responsive, web-based frontend architecture designed to interface directly with the underlying UFC machine learning pipeline. This application translates complex, high-dimensional probability matrices and model outputs into an accessible, interactive dashboard for real-time fight analysis.

## Tech Stack
* **Frontend Framework:** React 
* **State Management:** [Redux Toolkit / TanStack Query]
* **Styling:** Tailwind CSS
* **API / Backend Bridge:** FastAPI  to interface with the Python ML models

## System Architecture
The primary engineering challenge was bridging the synchronous web interface with the computationally heavy Python predictive engines. 
* **API Integration:** The frontend client submits fighter data and parameters to a [FastAPI] endpoint. The backend processes this through the custom Random Forest and XGBoost pipelines, returning probability vectors and feature importance scores.
* **State & Caching:** Utilized [TanStack Query / Redux] to manage asynchronous data fetching, ensuring the UI remains responsive while the server computes real-time predictions and Glicko-2 Bayesian updates.
* **Data Visualization:** The interface parses raw accuracy metrics and confidence intervals, rendering them into dynamic visual components to easily compare fighter statistics and predicted bout outcomes.

## Key Features
* **Real-Time Prediction Engine:** Users can input specific bout parameters to trigger live model inference.
* **Dynamic Data Rendering:** Translates the 81.7% model accuracy and underlying feature weights into digestible analytical dashboards.
* **Responsive Design:** Built with a mobile-first approach using Tailwind CSS to ensure accessibility across all device types.

> Note: This repository contains the client-side code and UI architecture. The core machine learning pipelines, raw data processing scripts, and model training notebooks are maintained in the primary backend repository.
