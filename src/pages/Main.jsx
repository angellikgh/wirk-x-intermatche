import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Dashboard from './home';
import Requests from './requests';
import RequestDetail from './requests/Detail';

export default function ({}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="main w-screen h-screen overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/requests" element={<Requests />} />
          <Route path="/requests/:id" element={<RequestDetail />} />
          <Route path="/users" />
        </Routes>
      </div>
    </div>
  );
}
