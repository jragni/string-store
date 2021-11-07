/** Messages for StringStoreHomePage */

import { defineMessages } from 'react-intl';

export const scope = 'stringstore.containers.StringStoreHomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'String Store App',
  },
  headerMessage: {
    id: `${scope}.header-message`,
    defaultMessage:
      'An application that allows you to store messages onto the database.',
  },
  inputLabel: {
    id: `${scope}.input-label.message`,
    defaultMessage: 'String: ',
  },
});
