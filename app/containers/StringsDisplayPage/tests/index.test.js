/**
 * Test for the StringDisplayPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringsDisplayPage, mapDispatchToProps } from '../index';
import { loadStrings } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<StringDisplayPages />', () => {
  let store;
  const onMountMock = jest.fn();

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
            onMount={onMountMock}
            loading={false}
            error={false}
            strings={[]}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
  it('should fetch the strings on mount', () => {
    const strings = [{ id: 1, message: 'TEST1' }, { id: 2, message: 'TEST2' }];

    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringsDisplayPage
            onMount={onMountMock}
            loading={false}
            error={false}
            strings={strings}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(onMountMock).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  describe('onMount', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onMount).toBeDefined();
    });

    it('should dispatch loadStrings when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onMount();
      expect(dispatch).toHaveBeenCalledWith(loadStrings());
    });
  });
});
