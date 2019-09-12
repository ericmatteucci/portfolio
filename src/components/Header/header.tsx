import React from 'react';
import Typist from 'react-typist';
import './header.scss';

type HeaderPropTypes = {};

class Header extends React.Component<HeaderPropTypes> {
  render() {
    return (
      <div className="main">
        <Typist className="title">
                    Eric Matteucci
        </Typist>
      </div>
    );
  }
};

export default Header;
