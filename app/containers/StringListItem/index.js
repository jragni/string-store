/** StringListItem
 *
 * Component that renders an individual string from database.
 *
 * Props:
 *  - item {Object} like {id, message} : contains the string data from the database.
 * StringList -> StringListItem -> ListItem
 */

import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

StringListItem.propTypes = {
  item: PropTypes.any,
};

export default function StringListItem({ item }) {
  const content = <Wrapper> {item.message} </Wrapper>;

  return <ListItem key={`string-list-item-${item.id}`} item={content} />;
}

// TODO add tests for viewing this component.
