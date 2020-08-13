import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
// import { useForm } from "react-hook-form"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import "../styles/form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form"

library.add(fab, faCheckSquare, faCoffee, faArrowCircleRight)

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Form} />
    </Router>
  )
}
