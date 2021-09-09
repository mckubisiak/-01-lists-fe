import React from 'react';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" exact component={CharacterDetailContainer} />
        <Route path="/" exact component={HeyArnoldContainer} />
      </Switch>
    </BrowserRouter>
  );
}
