import "./App.css";
import Nav from "./componants/Nav";
import { useState } from "react";
import { List } from "./componants/Liste";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OurTours from "./componants/OurTours";
import { Home } from "./componants/Home";
import AddTours from "./componants/AddTours"

function App() {
  const [list, setList] = useState(List);
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Nav name={name} setName={setName} />
      <Switch>
        <Route
          path="/OurTours"
          render={(props) => <OurTours {...props} list={list} name={name} />}
        />
        <Route exact path="/" component={Home} />
        <Route path="/AddTours" component={AddTours} />
      </Switch>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
