import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import { Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/people">
              <People />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
