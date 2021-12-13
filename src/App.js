import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import DeviceInfo from './pages/deviceInfo';
import DeviceList from './pages/deviceList';

function DeviceInfoLink() {
    return (
      <>
        <nav>
          <Link to="/:id">
            About
          </Link>
        </nav>
        <DeviceInfo />
      </>
    );
  }

  function DeviceListLink() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <DeviceList />
      </>
    );
  }

function Add() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<DeviceListLink />} />
          <Route path="/:id" element={<DeviceInfoLink />} />
        </Routes>
    </div>
  );
}
export default Add;