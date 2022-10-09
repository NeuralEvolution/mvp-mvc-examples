import { useEffect, useState } from 'react';

const Container = (props) => {
  const { Model, Presenter, View, ...inputProps } = props;
  const [model, setModel] = useState(new Model());
  const [activePresenter, setActivePresenter] = useState(new Presenter(model, setModel));

  useEffect(() => {
    setActivePresenter(new Presenter(model, setModel));
  }, [model, Presenter]);

  return <View inputProps={inputProps} {...activePresenter} />;
};

export const connect = (Model, View, Presenter) => (props) =>
  <Container Model={Model} View={View} Presenter={Presenter} {...props} />;
