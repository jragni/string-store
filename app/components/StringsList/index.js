/** StringsList
 *
 * List all the strings on the database.
 *
 * Props:
 *  loading: boolean indicator to see if data has been fetched.
 *  error: error message.
 *  strings: array of strings queried from the server.
 *
 * Render:
 *  StringsDisplayPage -> StringList -> { StringListItem}
 */

import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StringListItem from 'containers/StringListItem';

StringList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default function StringList({ loading, error, strings = [] }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (strings !== false) {
    return <List items={strings} component={StringListItem} />;
  }

  return null;
}
