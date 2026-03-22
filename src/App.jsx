import React from 'react';
import { Route, Switch } from 'wouter';
import ProjectDetail from './pages/project.detail.page.component';
import Home from './pages/home.page.component';

/**color-palette-showcase version 1.00 - Apps -
 * Features:
 * 
 *      --> Implementing wouter to route to color palettes       
 * 
 * Notes: This provider will be migrated later with the 
 * rest of the providers
 */

export default function App() {
  return (
    // Switch ensures only the first matching route renders
    <Switch>
      {/* The main preview page */}
      <Route path="/" component={Home} />
      
      {/* The dynamic detail page for each project */}
      <Route path="/project/:projectId" component={ProjectDetail} />
      
      {/* Catch-all route for 404 Not Found (Optional but highly recommended) */}
      <Route>
        <div className="min-h-screen flex items-center justify-center text-2xl text-slate-500">
          404: Page Not Found
        </div>
      </Route>
    </Switch>
  );
}