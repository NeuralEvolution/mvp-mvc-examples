import React from 'react';
import Container from './Container';

const connect = (Model, Presenter, Component) => (props) =>
  <Container modal={Model} presenter={Presenter} component={Component} {...props} />;

export { connect };
