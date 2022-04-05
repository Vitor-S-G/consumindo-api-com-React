import React from 'react';
import { Switch } from 'react-router-dom';
import MyRouter from './MyRoute';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Alunos} isClosed={false} />
      <MyRouter exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRouter exact path="/aluno/" component={Aluno} isClosed />
      <MyRouter exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRouter exact path="/login/" component={Login} isClosed={false} />
      <MyRouter exact path="/register/" component={Register} isClosed={false} />
      <MyRouter path="*" component={Page404} />
    </Switch>
  );
}
