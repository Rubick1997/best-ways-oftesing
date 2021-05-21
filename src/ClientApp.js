//everything what we want to happen only on clinet side
//i M expecting complete murkup at this point, please take over this complete murkup
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//stuff that should only happen in the browser line analytics 
hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)