import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../components/layout';
import { useSideRoutesContext } from '../../contexts/sideRoutes';
import Loader from '../../components/loader';
// import DashboardHome from './Dashboard';
const DashboardHome = React.lazy(() => import('./Dashboard'));

const Dashboard = () => {
  const [sidebar] = useSideRoutesContext();
  return (
    <Layout sidebar={sidebar}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/dashboard/buy' render={() => <div>Buy</div>} />
          <Route path='/dashboard/sell' render={() => <div>sell</div>} />
          <Route
            path='/dashboard/cashier-names'
            render={() => <div>cashier-names</div>}
          />
          <Route path='/dashboard/owner' render={() => <div>owner</div>} />
          <Route exact path='/dashboard' component={DashboardHome} />
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default Dashboard;
