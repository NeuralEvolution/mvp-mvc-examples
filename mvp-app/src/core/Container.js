import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);

    const Modal = props.modal;
    this.state = new Modal();

    const Presenter = props.presenter;
    this.state = new Presenter();
  }

  updateState(newState) {
    this.setState(newState);
  }

  componentDidUpdate() {
    const Presenter = this.props.presenter;
    this.Presenter = new Presenter(this.state, this.updateState);
  }

  render = () => {
    const { modal, presenter, component, ...inputProps } = this.props;

    return <component inputProps={inputProps} {...this.state} {...this.presenter} />;
  };
}

export default Container;
