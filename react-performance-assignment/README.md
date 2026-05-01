# React Performance Optimization Assignment

## Project Overview

This project demonstrates React performance optimization techniques through a "User List with Search" application. It shows both an unoptimized version (Phase 1) and an optimized version (Phase 2) so you can compare the differences.

## What Was the Problem?

In the unoptimized version, we faced several performance issues:

1. **Unnecessary Re-renders**: Every time the user types in the search box, ALL 500 list items re-render, even if their content hasn't changed.

2. **Expensive Filtering**: The filtering logic runs on every render, recalculating the filtered list repeatedly.

3. **Function Recreation**: The `handleDelete` function is recreated on every render, causing child components to re-render even when the function is the same.

4. **No Code Splitting**: The entire bundle is loaded at once, even if some components aren't needed immediately.

## What Optimizations Were Applied?

### Phase 2 includes these optimizations:

1. **React.memo** (UserItem.jsx & UserList.jsx)
   - Wraps components to prevent re-renders when props haven't changed
   - Each user item only re-renders when its specific data changes

2. **useMemo** (App.jsx)
   - Caches the filtered users array
   - Only recalculates when `users` or `searchTerm` actually changes
   - Avoids expensive filtering on every render

3. **useCallback** (App.jsx)
   - Keeps function reference stable across renders
   - Prevents child components from re-rendering due to function recreation

4. **React.lazy + Suspense** (App.jsx)
   - Code splitting: UserList component is loaded on-demand
   - Suspense shows a loading state while the component loads

## Project Structure

```
react-performance-assignment/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx          # Main app with both versions
│   ├── UserList.jsx     # List component (with React.memo)
│   ├── UserItem.jsx     # Individual user (with React.memo)
│   └── index.css
└── README.md
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually http://localhost:5173)

## How to Test

1. Click "Phase 1: Unoptimized" - Type in the search box and observe the lag
2. Click "Phase 2: Optimized" - Type in the search box and observe the improvement

## What Improvements Were Observed?

- **Faster typing**: No lag when searching in Phase 2
- **Fewer re-renders**: Only changed items re-render
- **Better user experience**: Smooth, responsive UI
- **Smaller initial bundle**: Code splitting reduces initial load time

## Key Takeaways

- `React.memo` - Memoize components to avoid unnecessary re-renders
- `useMemo` - Memoize expensive calculations
- `useCallback` - Stabilize function references
- `React.lazy` - Code splitting for better performance