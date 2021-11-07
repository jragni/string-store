/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'stringstore.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  strings: {
    id: `${scope}.stringstoredislplay`,
    defaultMessage: 'Strings',
  },
});
