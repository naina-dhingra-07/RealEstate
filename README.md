# Estatery — Real Estate Website

A modern real estate listing website built with **React**, **React Router**, and **Tailwind CSS**.

## Tech Stack
- React 18
- React Router v6
- Tailwind CSS v3
- Vite
- react-icons

## Features
- Browse all property listings
- Filter by: search query, category (Apartment/Villa/Bungalow/Studio), type (Rent/Buy)
- Sort by price or rating
- Active filter chips with individual clear options
- Full property detail page with amenities, agent info, and similar listings
- Responsive design — works on mobile, tablet, and desktop

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed top navbar with mobile menu
│   ├── PropertyCard.jsx  # Card used in grids
│   └── SearchFilter.jsx  # Filter bar + chip logic
├── data/
│   └── properties.js     # All property data + filter constants
├── pages/
│   ├── Home.jsx          # Landing page with hero + featured listings
│   ├── Listings.jsx      # All listings with filter state
│   ├── PropertyDetail.jsx # Single property view
│   └── About.jsx         # About page
├── App.jsx               # Router setup
├── main.jsx              # Entry point
└── index.css             # Tailwind + custom utilities
```

## How Filtering Works

State is held in `Listings.jsx` as a `filters` object. The `useMemo` hook re-runs the filter pipeline whenever `filters` changes:

1. Text search — `.filter()` against `title` and `address`
2. Category match — exact string match against `property.category`
3. Type match — `"rent"` or `"buy"` against `property.type`
4. Sort — `.sort()` by price or rating

The `SearchFilter` component is purely presentational — it receives `filters` and an `onChange` callback, keeping all logic in one place.
