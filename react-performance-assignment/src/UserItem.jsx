import React from 'react'

// ============================================================
// PHASE 1: UNOPTIMIZED VERSION
// ============================================================
// ❌ No React.memo - re-renders every time parent re-renders
// This causes all 500 items to re-render on every keystroke
function UserItem({ user, onDelete }) {
  return (
    <li className="user-item">
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-email">{user.email}</div>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </li>
  )
}

// ============================================================
// PHASE 2: OPTIMIZED VERSION
// ============================================================
// ✅ React.memo - only re-renders when user.id or onDelete changes
// This significantly reduces re-renders during search
const UserItemOptimized = React.memo(function UserItemOptimized({ user, onDelete }) {
  return (
    <li className="user-item">
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-email">{user.email}</div>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </li>
  )
})

export default UserItemOptimized