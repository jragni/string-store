/** StringsDisplayPage
 *
 * Component that displays all the strings stored on the database.
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// Styled Components
import H1 from 'components/H1';
import StringsList from 'components/StringsList';

import { loadStrings } from 'containers/App/actions';
import saga from './saga';
import messages from './messages';

const key = 'stringstoredisplay';

StringsDisplayPage.propTypes = {
  onMount: PropTypes.func,
  strings: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

export function StringsDisplayPage({ onMount, strings, loading, error }) {
  useInjectSaga({ key, saga });

  useEffect(function getStringsOnMount() {
    onMount();
  }, []);

  const stringsListProps = {
    strings,
    loading,
    error,
  };

  return (
    <div>
      <Helmet>
        <title>Strings Display Page</title>
        <meta
          name="description"
          content="Page to display the strings stored on the database"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <StringsList {...stringsListProps} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadStrings());
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
)(StringsDisplayPage);
