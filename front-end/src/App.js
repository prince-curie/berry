import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import NewLanding from './pages/NewLand';
import DefaultFooter from './components/DefaultFooter';

function App() {
    return (
        <Switch>
            <div className="bg-contract w-full">
            <Route exact path="/new" component={Landing} />
            <Route exact path="/" component={NewLanding} />
            {/* <Redirect from="*" to="/" /> */}
            {/* <DefaultFooter /> */}
            </div>
        </Switch>
    );
}

export default App;
