import React from "react";
import { Layout } from "antd";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";
import HomePage from "./pages/HomePage";

const { Content, Header, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="main-layout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route exact path="/" component={HomePage}></Route>
          </Routes>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
