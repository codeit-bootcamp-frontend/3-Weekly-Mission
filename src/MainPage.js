import React from 'react'
import App from './App'
import FolderPage from './pages/FolderPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/folder" element={<FolderPage/>} />
        <Route path="/" element={<App/>} />
      </Routes>
   </BrowserRouter>
  )
}
