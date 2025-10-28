import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Page as LoginPage } from '@/modules/login/components'
import { Page as PinPage } from '@/modules/pin/components'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pin" element={<PinPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes