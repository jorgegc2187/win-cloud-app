import React from 'react';
import { Sidebar } from '../../ui';
import { DashboardPage, JobsPage, RepositoriesPage } from '../pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';

export const VeamRoutes = () => {
    return (
        <>

            <Sidebar />

            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Routes>
                        <Route path='/jobs' element={<JobsPage />} />
                        <Route path='/repositories' element={<RepositoriesPage />} />
                        <Route path='/dashboard' element={<DashboardPage />} />
                        <Route path='/' element= { <Navigate to={"/dashboard"}/> }  />

                    </Routes>
                </div>

            </div>



        </>
    )
}
