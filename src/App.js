import React from "react";
import { useState, useEffect } from "react";

/* Set API URL based on build environment */
const NETLIFY_API_BASE = process.env.REACT_APP_NETLIFY_API_URL || 'http://localhost:9000'; 
const API_URL = `${NETLIFY_API_BASE}/.netlify/functions/api`;


function App() {
    const [state, setState] = useState(null);
    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setState(data.message))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="container text-center">
            <h1>Welcome to My Full-Stack App </h1>
            <p>This is a React app styled with Bootstrap 5.</p>
            <p>{state}</p>
        </div>
    );
}

export default App;