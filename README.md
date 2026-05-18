# 🚗 RentalCar

RentalCar is a modern web application for browsing and renting cars online.  
The project was built with **Next.js App Router**, **TypeScript**, **TanStack Query**, and **CSS Modules**.

The application allows users to browse available rental cars, apply advanced filters, view detailed information about each car, and submit booking requests through a convenient online form.

---

# ✨ Features

## 🚘 Car Catalog
Browse available rental cars with responsive card layouts and detailed previews.

## 🔍 Advanced Filtering
Users can filter cars by:

- brand
- rental price
- mileage range

## 📄 Dynamic Car Details Page
Each car has its own detailed page with:

- specifications
- rental conditions
- location
- description
- booking section

## 📩 Booking Request Form
Users can submit rental requests directly from the car details page.

## ✅ Form Validation
Implemented validation for all booking form fields.

## 🔗 URL-based Filters
Filters are synchronized with URL search parameters, allowing users to:

- share filtered results
- preserve filter state
- improve navigation experience

## 🔄 Pagination with Load More
Cars are loaded dynamically with pagination support.

## 🔔 Toast Notifications
Success and error notifications using React Hot Toast.

## ⏳ Loading & Error States
Implemented loaders, empty states, and error handling for asynchronous operations.

## ⚡ SEO Optimization
Dynamic metadata generation with:

- title
- description
- Open Graph metadata
- dynamic URLs

## 🧭 Active Navigation
Navigation links automatically highlight the active route.

---

# 🛠️ Technologies & Tools

## ⚛️ Frontend
- React
- Next.js
- TypeScript

## ⚡ Data Fetching
- TanStack Query
- Axios

## 📋 Forms & Validation
- Formik
- Yup

## 🎨 UI & Styling
- CSS Modules
- clsx
- React Select
- React DatePicker
- React Hot Toast
- modern-normalize

## 🌐 Next.js Features
- App Router
- Dynamic Routes
- Server & Client Components
- Metadata API
- next/image
- next/navigation

---

# 🌐 Backend API

The project uses the RentalCar API:

https://car-rental-api.goit.study

## Used Endpoints

- `GET /cars`
- `GET /cars/{id}`
- `GET /cars/filters`
- `POST /cars/{carId}/booking-requests`

---

# 🧱 Project Structure

```bash
RentalCar/
├─ app/
│  ├─ catalog/
│  │  ├─ [carId]/
│  │  │  └─ page.tsx
│  │  ├─ CatalogClient.tsx
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ CarCard/
│  ├─ Filters/
│  ├─ Header/
│  ├─ Hero/
│  ├─ Loader/
│  └─ RentalForm/
│
├─ hooks/
├─ lib/
├─ providers/
├─ types/
└─ utils/
```

---

# 🔍 SEO Optimization

The project implements dynamic metadata generation using:

- `generateMetadata()`

Includes:

- 📌 title
- 📌 description
- 📌 Open Graph metadata
- 📌 dynamic URLs

This improves:

- SEO optimization
- social media previews
- page indexing

---

# ⚡ Performance Optimization

The application uses:

- 🖼️ `next/image`
- ⚡ Server Components
- 📦 Code Splitting
- 🚀 Optimized Routing
- 🔍 Metadata API

---

# 🚀 Deployment

The project is deployed on Vercel.

## 🌐 Live Demo

https://rentalcar-blue.vercel.app/

## 💻 GitHub Repository

https://github.com/marana08/rentalcar

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/marana08/rentalcar.git
```

Go to the project folder:

```bash
cd rentalcar
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

# 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run development server |
| `npm run build` | Build project for production |
| `npm run start` | Start production build |
| `npm run lint` | Run ESLint |

---

# 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
NEXT_PUBLIC_API_URL=https://car-rental-api.goit.study
```

---

# 👩‍💻 Author

**Mariana**

💼 Frontend Developer  
🌐 React / Next.js Developer

GitHub:  
https://github.com/marana08

---

# 📄 License

This project was created for educational and portfolio purposes ✨
