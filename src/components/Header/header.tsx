import React from 'react';
import './header.scss';
import Typist from 'react-typist';

type HeaderPropTypes = {};

class Header extends React.Component<HeaderPropTypes> {
  render() {
    return (
      <div className="headerMain">
        <Typist
          className="title"
          stdTypingDelay={25}
          avgTypingDelay={110}
          cursor={{"hideWhenDone": true}}
        >
          <div>Eric Matteucci</div>
        </Typist>
      </div>
    );
  }
};

export default Header;
