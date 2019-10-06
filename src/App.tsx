import React from 'react';
import './App.css';
import Header from './header/Header'
import Footer from './footer/footer'
import LandingPage from './landingPage/landingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VehicleDetails from './vehicleDetails/vehicleDetails';
import Coverages from './coverages/coverages';
import paymentsPage from './payments/payments';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/vehicleDetails" component={VehicleDetails} />
      <Route exact path="/coverages" component={Coverages} />
      <Route exact path="/payments" component={paymentsPage} />
      <Footer />
    </Router>
  );
}

export default App;
