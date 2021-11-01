import React from 'react'
import { Outlet, ReactLocation, Route, Router } from 'react-location'
import AppLayout from './Layouts/AppLayout'
import Home from './pages/Home'
import Types from './pages/Types'
import Objects from './pages/Objects'
import './app.css'

const LOCATION = new ReactLocation({
  // defaultLoaderMaxAge: 1000,
  // defaultLinkPreloadMaxAge: 1000 * 3
})

type MyRoute = Route & {
  title?: string
}

export const PAGES: MyRoute[] = [
  { path: '/types', title: 'Types', element: <Types /> },
  { path: '/objects', title: 'Objects', element: <Objects /> }
]

const ROUTES: Route[] = [{ path: '/', element: <Home /> }, ...PAGES]

function App() {
  return (
    <Router location={LOCATION} routes={ROUTES}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Router>
  )
}

export default App
