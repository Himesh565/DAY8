import React, { useState, useEffect } from 'react';
import './RandomUser.css';

/**
 * RandomUser Component
 * 
 * Fetches and displays random user data from the Random User API
 * Features: Loading states, error handling, glassmorphism UI, and responsive design
 */
const RandomUser = () => {
  // State management for user data, loading, and error states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetches random user data from the API
   * Handles loading states and error management
   */
  const fetchUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://randomuser.me/api/');
      
      // Check if response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract user data from API response
      const userData = data.results[0];
      setUser(userData);
    } catch (err) {
      // Set error message for display
      setError(err.message || 'Failed to fetch user data');
    } finally {
      // Always set loading to false after request completes
      setLoading(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  /**
   * Loading Skeleton Component
   * Displays animated placeholder while data is being fetched
   */
  const LoadingSkeleton = () => (
    <div className="skeleton-container">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-text skeleton-text-long"></div>
      <div className="skeleton-text skeleton-text-short"></div>
    </div>
  );

  /**
   * Error State Component
   * Shows error message with retry button
   */
  const ErrorState = () => (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{error}</p>
      <button className="btn btn-retry" onClick={fetchUser}>
        🔄 Retry
      </button>
    </div>
  );

  /**
   * User Card Component
   * Displays user information with premium glassmorphism design
   */
  const UserCard = () => (
    <div className="user-card">
      {/* User Avatar */}
      <div className="avatar-container">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="avatar"
        />
      </div>

      {/* User Information */}
      <div className="user-info">
        <h2 className="user-name">
          {user.name.first} {user.name.last}
        </h2>
        
        <div className="user-details">
          <div className="detail-item">
            <span className="detail-icon">📧</span>
            <span className="detail-text">{user.email}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">🌍</span>
            <span className="detail-text">{user.location.country}</span>
          </div>
        </div>
      </div>

      {/* Load New User Button */}
      <button 
        className="btn btn-primary" 
        onClick={fetchUser}
        disabled={loading}
      >
        ✨ Load New User
      </button>
    </div>
  );

  // Render appropriate component based on current state
  return (
    <div className="random-user-container">
      <div className="glass-card">
        {loading && <LoadingSkeleton />}
        {error && !loading && <ErrorState />}
        {user && !loading && !error && <UserCard />}
      </div>
    </div>
  );
};

export default RandomUser;
