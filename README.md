# MyAza Financial Dashboard

A modern financial dashboard application built with Next.js and TypeScript, featuring account management, transaction tracking, analytics, and more.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Authentication](#authentication)
7. [Assumptions](#assumptions)
8. [Routes](#routes)
9. [Testing](#testing)
10. [Additional Features](#additional-features)
11. [Scripts](#scripts)

## Overview

This application is a financial dashboard that provides users with a modern interface to manage their finances, track transactions, analyze spending patterns, and manage their credit cards and wallets. It features a responsive design, authentication, and interactive components for a seamless user experience.

## Features

- **User Authentication**: Secure login system using NextAuth.js
- **Dashboard Overview**: Summary of financial metrics and activity
- **Wallet Management**: View and manage different wallet accounts
- **Transaction History**: Track and filter recent transactions
- **Analytics**: Interactive charts to visualize financial data
- **Credit Card Management**: View and manage credit cards
- **Activity Tracking**: Monitor recent account activities
- **Responsive Design**: Fully responsive UI that works on all devices

## Tech Stack

### Frontend

- **Next.js 15**: React framework with App Router architecture
- **TypeScript**: For type-safe code
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable component library built on Radix UI
- **Framer Motion**: Animation library
- **Recharts**: Charting library for data visualization
- **React Hook Form**: Form management with Zod validation

### Authentication

- **NextAuth.js**: Authentication solution for Next.js
- **Credentials Provider**: Email/password authentication

### Development Tools

- **ESLint**: Code linting
- **TypeScript**: Static type checking

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/myaza-frontend-test.git
   cd myaza-frontend-test
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory
   - Add the required environment variables:
     ```
     AUTH_SECRET=your_next_auth_secret_key
     ```
   - Generate your key with: `npx auth secret`

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
myaza-frontend-test/
├── app/                  # Next.js App Router structure
│   ├── auth/             # Authentication routes
│   ├── dashboard/        # Dashboard routes
│   └── api/              # API routes
├── features/             # Feature-based code organization
│   ├── auth/             # Authentication components and logic
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Layout components
│   └── shared/           # Shared UI components
├── mock/                 # Mock data for development
├── lib/                  # Utility functions and helpers
├── constants/            # Application constants
├── hooks/                # Custom React hooks
├── schemas/              # Zod validation schemas
└── public/               # Static assets
```

## Authentication

Authentication is handled using NextAuth.js with a Credentials provider.

For testing purposes, a demo account is available:

- **Email**: `test@myaza.com`
- **Password**: `password123`

## Assumptions

During development, the following assumptions were made:

1. **Authentication**:

   - The application uses a simplified mock authentication flow with NextAuth.js
   - No middleware has been implemented to restrict page access based on auth state
   - Users can navigate to dashboard routes even without being authenticated
   - A test account has been provided for demonstration purposes

2. **Data**:

   - All data displayed in the dashboard is mock data
   - No actual API calls are made to external services
   - Charts and statistics are pre-populated with sample data

3. **Features**:
   - Some navigation links are placeholder links (marked with "#" in the URL)
   - The wallet feature is partially implemented for demonstration

## Routes

The following routes are implemented and accessible in the application:

| Route               | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `/`                 | Root route, redirects to login                                      |
| `/auth/sign-in`     | Login page with authentication form                                 |
| `/dashboard`        | Main dashboard with overview statistics, transactions, and activity |
| `/dashboard/wallet` | Wallet management page with detailed financial information          |

Note: Some navigation links in the sidebar point to placeholder routes (marked with "#") that are not yet implemented.

## Testing

Run unit tests using the following command:

```bash
pnpm test
```

## Additional Features

1. **Onboarding Tour**: A guided tour to help new users navigate the dashboard
2. **Theme Support**: Light and dark mode support via next-themes
3. **Responsive Layout**: Mobile-friendly design that adapts to different screen sizes

## Scripts

- `pnpm dev`: Run development server with Turbopack
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run ESLint for code linting
- `pnpm test`: Run unit tests
