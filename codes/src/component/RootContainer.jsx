/**
 * @file 应用的 Root 容器
 * @author Zhang Peng
 * @see http://gaearon.github.io/react-hot-loader/getstarted/
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { configStore, history, rootRouter } from '../common';

// 创建 Redux Store，这是本应用唯一的状态管理容器
const store = configStore();

// 返回包裹了路由的 HCFLayout
class WrappedContainer extends React.PureComponent {
  render() {
    const Layout = require('./layout/Layout').default;
    return (
      <Layout>
        <Switch>
          {rootRouter.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
          <Redirect from="/" to="/home" />
        </Switch>
      </Layout>
    );
  }
}

/**
 * 应用的 Root 容器
 */
export default class RootContainer extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={WrappedContainer} />
            <Redirect to="/" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

