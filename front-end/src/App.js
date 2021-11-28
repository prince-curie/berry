import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import NewLanding from './pages/NewLand';
import DefaultFooter from './components/DefaultFooter';
import LendingPool from './pages/LendingPool';
import SupplyBorrow from './pages/SupplyBorrow'

function App() {
    return (
        <Switch>
            <div>
          
            <Route exact path="/" component={NewLanding} />
            <Route exact path="/lending" component={LendingPool} />
            <Route exact path="/mode" component={SupplyBorrow} />
            {/* <Redirect from="*" to="/" /> */}
            {/* <DefaultFooter /> */}
            </div>
        </Switch>
    );
}

export default App;
