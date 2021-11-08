/**
 * Test for the StringDisplayPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringsDisplayPage, mapDispatchToProps } from '../index';
// import { loadStrings } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<StringDisplayPages />', () => {
  let store;
  const onMount = jest.fn();

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringsDisplayPage
            onMount={onMount}
            loading={false}
            error={false}
            string={[]}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
