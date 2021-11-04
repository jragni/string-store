/** loadable
 * Asynchronously loads the component for the StringStoreHomePage.
 * Used for showing loading inidicator if page is loading.
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
