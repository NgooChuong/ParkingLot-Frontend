# ParkingLot Management Backend

## Overview 🌟

**ParkingLotManagementAPI** is a backend system designed to manage parking lots, handle user requests, and provide administrative functionalities. The system supports various features for customers, administrators, and staff to ensure efficient management and operation of parking-related activities.

## Backend Features 🌐

### Features for Clients 👥

- **Authentication**:
  - **JWT Authentication**: Provides secure user authentication using JSON Web Tokens (JWT). 🔑
  - **Google Sign-In**: Supports user login through Google Sign-In for simplified authentication. 🌐
- **Parking Lot Management**:
  - **Filter and Search**: API to filter and search for parking lots and spaces. 🔍
  - **Ticket Invitations**: Invite tickets via email or QR code, and create QR codes for ticket invitations. 📧📱
  - **Online Payment and Refund**: Handle payments and refunds through Momo and PayPal. 💳
  - **Transportation Management**: API for managing transportation-related information. 🚗

- **Chat**:
  - **Real-Time Chat**: Real-time chat with staff through API for inquiries and support. 💬

- **Notifications**:
  - **Scheduled Notifications**: Send notifications based on schedules and events related to parking lots and reservations. 📅

### Features for Administrators 👨‍💼

- **Authentication**: Secure authentication for administrators using JWT and Face Recognition. 🔐
- **CRUD Operations**: API for Create, Read, Update, and Delete operations on parking lot information, reservations, and related data. 📝
- **Reporting and Statistics**: API to generate reports and view statistics related to parking lot usage and other metrics. 📊

## Technologies Used 🛠️

- **Spring boot**: Framework for building backend APIs and managing business logic. 🌱
- **Firebase**: Real-time database and user authentication service. 🔥
