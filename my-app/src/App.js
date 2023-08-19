import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Dashboard from "./Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

/**
 * React query : library simplifies fetch + synchronize data from server.
 */

const queryClient = new QueryClient(); // instanitiate the query client and provide it in component tree

function App() {
  return (
    //every child component can fetch data:
    // then define a function in hooks to fetch data from server
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="app--content">
            <Aside />
            <Dashboard />
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
