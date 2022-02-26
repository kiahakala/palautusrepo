import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "core-js/stable/index.js"
import "regenerator-runtime/runtime.js"
import './index.css'

// Bundling in production mode activates UglifyJS
// Production version can be tested locally by running cmd 'npx static-server' 
// in the 'build' folder -> the app starts running at http://localhost:9080

ReactDOM.render(<App />, document.getElementById('root'))