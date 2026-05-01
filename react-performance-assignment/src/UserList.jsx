import React from 'react'
import UserItem from './UserItem'

// ============================================================
// PHASE 1: UNOPTIMIZED VERSION
// ============================================================
// ❌ No React.memo - re-renders on every parent render
export function UserList({ users, onDelete }) {
  return (
    <ul className="user-list">
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

// ============================================================
// PHASE 2: OPTIMIZED VERSION
// ============================================================
// ✅ React.memo - only re-renders when props actually change
// This prevents unnecessary re-renders of list items
const UserListOptimized = React.memo(function UserListOptimized({ users, onDelete }) {
  return (
    <ul className="user-list">
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
})

export default UserListOptimized