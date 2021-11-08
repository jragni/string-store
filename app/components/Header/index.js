import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './Dovenmuhle Logo 2019-08.png';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.dovenmuehle.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/strings">
          <FormattedMessage {...messages.strings} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
