import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
// import { useForm } from "react-hook-form"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/form.css"

import Form from "./Form"
import Thanks from "./Thanks"
import Requests from "./Requests"

library.add(fab, faCheckSquare, faCoffee, faArrowCircleRight)

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Form} />
      <Route exact path="/thx" component={Thanks} />
      <Route exact path="/super-secret-url/requests" component={Requests} />
    </Router>
  )
}
