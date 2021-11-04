/** StringStoreHomepage
 *
 * This is the homepage for the String Store Applcation. The homepage shall
 * render the input component that will be used to submit a string to the
 * database.
 *
 * Renders:
 *  App -> StringStoreHomePage ->
 * TODO: add render paths for components
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
// TODO: create messages for the fields.
import reducer from './reducer';
import { changeString } from './action';
import { makeSelectString } from './selectors';

// Styled Components
import Section from './Section';
import CenteredSection from './CenteredSection';
import Input from './Input';
import H2 from '../../components/H2';
import Form from './Form';

// key used for reducer
const key = 'stringstorehome';

StringStoreHomePage.propTypes = {
  string: PropTypes.string,
  onChangeString: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function StringStoreHomePage({ string, onSubmitForm, onChangeString }) {
  useInjectReducer({ key, reducer });

  // TODO add a message that verifies the user has successfully added or failed
  return (
    <article>
      <Helmet>
        <meta name="description" content="String Store Application homepage" />
      </Helmet>
      {/* TODO: Add components */}
      {/* TODO: add a centered section to add 1. landing statement 2. description 3. input */}
      <div>
        <CenteredSection>
          {/* TODO Add message H2 */}
          {/* TODO ADD p  */}
        </CenteredSection>
        <Section>
          <H2>{/* Header */}</H2>
        </Section>
        <Form onSubmit={onSubmitForm}>
          <label htmlFor="string">
            {/* TODO Insert message here */}
            string:
            <Input
              id="string"
              type="text"
              placeholder="Enter string here..."
              value={string}
              onChange={onChangeString}
            />
          </label>
        </Form>
      </div>
    </article>
  );
}

// TODO: create these callbackfunctions
const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(); TODO create a dispatch taht sends a request to the server
    },
  };
}
// FIXME: need to see changeString state.
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringStoreHomePage);
