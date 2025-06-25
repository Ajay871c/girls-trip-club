'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading your dashboard...</p>;
  if (status === 'unauthenticated') {
    if (typeof window !== 'undefined') window.location.href = '/login';
    return null;
  }

  const user = session.user;

  return (
    <div className="container">
      <div className="card">
        <h1>
          Welcome, <span>{user.name || 'User'}</span>
        </h1>
        <p>Account Info</p>

        <div className="intro--card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Subscription:</strong>
              <span>{user.subscription || 'Free'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Next Billing:</strong>
              <span>{user.nextBilling || 'N/A'}</span>
            </div>
          </div>
        </div>

        <button
          className="btn"
          onClick={() => signOut({ callbackUrl: '/login' })}
          style={{ marginTop: '2rem', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
