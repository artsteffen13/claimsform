import React from 'react';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import {Route} from 'react-router-dom';
import Login from "./components/Login";

function App() {

  return (
    <Container maxWidth="xl">
      <Header/>
        <Route path="/login"><Login/></Route>

    </Container>
  );
}

export default App;
