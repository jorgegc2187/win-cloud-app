import { Route, Routes } from 'react-router-dom'

import { VeamRoutes } from '../veeam'

export const AppRouter = () => {
  return (
    <>

      <Routes>

        {/* <Route path='veeam' element={<VeamRoutes />} /> */}
        <Route path='/*' element={<VeamRoutes />} />

      </Routes>

    </>
  )
}
