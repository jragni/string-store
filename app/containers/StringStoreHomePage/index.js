/** StringStoreHomepage
 *
 * This is the homepage for the String Store Applcation. The homepage shall
 * render the input component that will be used to submit a string to the
 * database.
 *
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

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import saga from './saga';
import reducer from './reducer';
import { changeString } from './actions';
import { makeSelectString } from './selectors';

import { postString } from '../App/actions';

import Section from './Section';
import CenteredSection from './CenteredSection';
import Input from './Input';
import H2 from '../../components/H2';
import Form from './Form';
import { makeSelectLoading } from '../App/selectors';
import messages from './messages';

// key used for reducer
const key = 'stringstorehome';

export function StringStoreHomePage({ string, onSubmitForm, onChangeString }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // TODO need to add a styled component with conditional rendering!

  return (
    <article>
      <Helmet>
        <title> String Store Home Page</title>
        <meta name="description" content="String Store Application homepage" />
      </Helmet>
      <div>
        <CenteredSection>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <p>
            <FormattedMessage {...messages.headerMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>{/* Header */}</H2>
        </Section>
        <Form onSubmit={onSubmitForm}>
          <label htmlFor="string">
            <FormattedMessage {...messages.inputLabel} />
            <Input
              id="string"
              type="text"
              placeholder="Enter string here..."
              value={string} // Note: to discuss using string state see line 87
              onChange={onChangeString}
            />
          </label>
          <button id="submit-btn" type="submit">
            Submit
          </button>
          <ToastContainer position="bottom-center" closeOnClick="true" />
        </Form>
      </div>
    </article>
  );
}

StringStoreHomePage.propTypes = {
  string: PropTypes.string,
  onChangeString: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

// NOTE: learning the library, would use useState hook for form input.
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  string: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
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
