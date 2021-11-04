/** StringsDisplayPage
 *
 * Component that displays all the strings stored on the database.
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useInjectReducer } from 'utils/injectReducer';

// import messages from './messages'; // TODO add this
// Styled Components
import H1 from 'components/H1';
import List from './List';

export default function StringsDisplayPage({ strings, loading, error }) {
  useInjectReducer({ key, saga });
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
        {/* TODO add h1 message with a header */}
        List of Stored Strings
      </H1>
      <List>{/* TODO add a prop to this */}</List>
    </div>
  );
}
