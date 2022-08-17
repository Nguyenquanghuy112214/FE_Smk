import Home from '~/pages/HomePage/HomePage';
import School from '~/pages/SchoolPage';
import Register from '~/pages/RegisterPage/Register';
import Login from '~/pages/LoginPage/Login';
import Vocabulary from '~/pages/VocabularyPage/Vocabulary';
import Grammar from '~/pages/GrammarPage/Grammar';
import Learning from '~/pages/LearningPage/Learning';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.homepage,
    component: Home,
    layout: 'isFooter',
  },
  {
    path: config.routes.school,
    component: School,
    layout: 'isFooter',
  },
  {
    path: config.routes.register,
    component: Register,
    layout: 'center',
  },
  {
    path: config.routes.login,
    component: Login,
    layout: 'center',
  },
  {
    path: config.routes.vocabulary,
    component: Vocabulary,
  },
  {
    path: config.routes.grammar,
    component: Grammar,
  },
  {
    path: config.routes.learning,
    component: Learning,
  },
];

export default publicRoutes;
