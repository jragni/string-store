/** StringStoreHomepage
 *
 * This is the homepage for the String Store Applcation. The homepage shall
 * render the input component that will be used to submit a string to the
 * database.
 *
 * Renders:
 *  App -> StringStoreHomePage ->
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// TODO: create messages for the fields.
import saga from './saga';
import reducer from './reducer';
import { changeString } from './action';
import { makeSelectString } from './selectors';

import { postString } from '../App/actions';

// Styled Components
import Section from './Section';
import CenteredSection from './CenteredSection';
import Input from './Input';
import H2 from '../../components/H2';
import Form from './Form';
import { makeSelectLoading } from '../App/selectors';

// key used for reducer
const key = 'stringstorehome';

StringStoreHomePage.propTypes = {
  loading: PropTypes.bool,
  string: PropTypes.string,
  onChangeString: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function StringStoreHomePage({
  loading,
  string,
  onSubmitForm,
  onChangeString,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
          {/* TODO add message for submit */}
          <button type="submit"> Submit </button>
          <ToastContainer position="bottom-center" closeOnClick="true" />
          {/* TODO add message for the I tag  */}
          <Section>
            {loading ? <i> Adding string to database...</i> : ' '}
          </Section>
        </Form>
      </div>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  string: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(postString());
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringStoreHomePage);
