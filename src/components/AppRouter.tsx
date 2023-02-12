import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Works from '../pages/Works'

function AppRouter() {

  return (
    <Routes>
      <Route key='/Welcome' path='/Welcome' element={<Welcome/>}></Route>
      <Route key='Welcome' path='/works' element={<Works/>}></Route>
      <Route path='/*' element={<Navigate replace to='/Welcome' />}></Route>
    </Routes>
  )
}

export default AppRouter
