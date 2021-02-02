import { CustomersTable } from "./views/CustomersTable";
import { CustomersTable2 } from "./views-2/CustomersTable2";
import { Trips } from './views/Trips'
import { Trips2 } from './views-2/Trips2'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/customers">
            <CustomersTable />
          </Route>
          <Route path="/customers2">
            <CustomersTable2 />
          </Route>
          <Route path="/trips">
            <Trips />
          </Route>
          <Route path="/trips2">
            <Trips2 />
          </Route>
          <Route path="/">
            <Redirect to="/customers" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
