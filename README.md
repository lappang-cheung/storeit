# RealTime Storage Management System

This is a storage management system similar to Google Drive. The application is built using Next.js v15, TypeScript, TailwindCSS, AppWrite & Shadcn/UI. The purpose of the project was to relearn NextJs and TypeScript, as I have not touched a React production project since the 2020 transition into the Vue/Nuxt framework.

## Features

- **Real-time Storage Management System:** Multiple files upload, sharing and deletion.
- **User Authentication:** Secure user login and management powered by AppWrite OTP.
- **Responsive Design:** Styled with TailwindCSS for a seamless experience on any device.

## Tech Stack

- **Next.js:** React framework for server-side rendering and generating static websites.
- **TypeScript:** Typed JavaScript for better code quality and maintainability.
- **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- **AppWrite:** Real-time storage management and OTP verification.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v22 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git https://github.com/lappang-cheung/storeit.git
   cd store_it

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   
3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```env    
    // AppWrite Configs
    NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
    NEXT_PUBLIC_APPWRITE_PROJECT=YOUR_KEY
    NEXT_PUBLIC_APPWRITE_DATABASE=YOUR_KEY
    NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=YOUR_KEY
    NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=YOUR_KEY
    NEXT_PUBLIC_APPWRITE_BUCKET=YOUR_KEY
    NEXT_APPWRITE_KEY=YOUR_KEY
   ```
   
4. Run the development server:

   ```bash
    npm run dev
    # or
    yarn dev
    # or
    bun dev

### Demo
Here is the link to the [StoreIt]([https://live-doc-lime.vercel.app/](https://storage-management-solutions.vercel.app/sign-in))
