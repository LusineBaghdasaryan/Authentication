import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import {UserLoginPage} from "./pages/UserLoginPage";
import {UserSignupPage} from "./pages/UserSignupPage";
import {PrivateRoute} from "./auth/PrivateRoute";

export const Routes = () => {
    return (
            <Router>
                <Switch>
                    <PrivateRoute path="/" exact>
                        <UserInfoPage />
                    </PrivateRoute>
                    <Route path="/login" exact>
                        <UserLoginPage />
                    </Route>
                    <Route path="/signup" exact>
                        <UserSignupPage />
                    </Route>
                </Switch>
            </Router>
    );
}
