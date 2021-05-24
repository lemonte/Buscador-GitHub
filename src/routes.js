import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import ResultsPage from "./pages/resultsPage";

export default function Routes() {

    return (
        <>
        <BrowserRouter>
         <Navbar />
            <Switch  >
                <Route path="/" component={HomePage} exact />
                <Route path="/results" component={ResultsPage} exact />
            </Switch>
        </BrowserRouter>
        </>
    );
}