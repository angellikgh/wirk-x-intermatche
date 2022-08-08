import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Dashboard from './Dashboard';

export default function ({}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="main w-screen h-screen overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requests" element={<Dashboard />} />
          <Route path="/users" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
