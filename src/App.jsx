import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/Layout/DefaultLayout';
import LayoutFooter from '~/Layout/LayoutFooter';
import LayoutNoHeader from '~/Layout/LayoutNoHeader';
import publicRoutes from '~/routes/routes';
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout === 'isFooter') {
            Layout = LayoutFooter;
          } else if (route.layout === 'center') {
            Layout = LayoutNoHeader;
          } else {
            Layout = DefaultLayout;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
