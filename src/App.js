import 'antd/dist/antd.min.css';
import './App.css';

import Body from './components/Body';
import { useAuth0 } from '@auth0/auth0-react';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './components/common/Header';
import FooterCopyright from './components/common/FooterCopyright';

import BasicTable from './components/Table';

import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Layout className="layout">
            <Router>
              <Header>
                <AppHeader />
              </Header>
              <BasicTable />
              <Content>
                {/* <Routes>
                  <Route
                    path="/demo/react/antdesign/grocery/"
                    element={<AppHome />}
                  />
                </Routes> */}
              </Content>
            </Router>
            <Body />
            <br />
            <br />
            <FooterCopyright />
          </Layout>
        </>
      )}
    </main>
  );
}

export default App;
