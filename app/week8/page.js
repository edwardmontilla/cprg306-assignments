import React from 'react';
import { useUserAuth } from './_utils/auth-context';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('GitHub sign-in error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <a href="./shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={handleGitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
