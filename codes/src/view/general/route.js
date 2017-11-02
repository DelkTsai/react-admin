import NotFoundView from './Error/404';
import WelcomeView from './welcome/WelcomeView';

export default [{
  path: '/home',
  component: WelcomeView
}, {
  path: '/welcome',
  component: WelcomeView
}, {
  path: '/404',
  component: NotFoundView
}];
