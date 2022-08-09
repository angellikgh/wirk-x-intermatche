import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Dashboard from './dashboard';
import Requests from './requests';

export default function ({}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="main w-screen h-screen overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/users" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
