import React, { useState, useMemo, useCallback, Suspense, lazy } from 'react'
import UserList from './UserList'

// Lazy load UserList component for code splitting
const UserListLazy = lazy(() => import('./UserList'))

// Generate 500 mock users
const generateUsers = () => {
  const users = []
  for (let i = 1; i <= 500; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`
    })
  }
  return users
}

const allUsers = generateUsers()

// ============================================================
// PHASE 1: UNOPTIMIZED VERSION
// ============================================================
function AppUnoptimized() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState(allUsers)

  // ❌ PROBLEM: Filtering on every render without optimization
  // This causes performance issues when typing
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>User List - Unoptimized</h1>
      
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <UserList users={filteredUsers} onDelete={handleDelete} />

      <div className="stats">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  )
}

// ============================================================
// PHASE 2: OPTIMIZED VERSION
// ============================================================
function AppOptimized() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState(allUsers)

  // ✅ OPTIMIZATION 1: useMemo - caches filtered results
  // Only recalculates when 'users' or 'searchTerm' changes
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [users, searchTerm])

  // ✅ OPTIMIZATION 2: useCallback - prevents function recreation
  // The function identity stays the same unless 'users' changes
  const handleDelete = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id))
  }, [users])

  return (
    <div className="container">
      <h1>User List - Optimized</h1>
      
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* ✅ OPTIMIZATION 3: React.lazy + Suspense for code splitting */}
      <Suspense fallback={<div>Loading...</div>}>
        <UserListLazy users={filteredUsers} onDelete={handleDelete} />
      </Suspense>

      <div className="stats">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  )
}

// ============================================================
// MAIN APP - Toggle between versions
// ============================================================
export default function App() {
  const [isOptimized, setIsOptimized] = useState(false)

  return (
    <>
      <div className="phase-toggle">
        <button
          className={`phase-btn ${!isOptimized ? 'active' : ''}`}
          onClick={() => setIsOptimized(false)}
        >
          Phase 1: Unoptimized
        </button>
        <button
          className={`phase-btn ${isOptimized ? 'active' : ''}`}
          onClick={() => setIsOptimized(true)}
        >
          Phase 2: Optimized
        </button>
      </div>

      {isOptimized ? <AppOptimized /> : <AppUnoptimized />}
    </>
  )
}