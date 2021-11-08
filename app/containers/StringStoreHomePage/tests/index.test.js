/**
 * StringStoreHomePage Tests
 */

import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringStoreHomePage, mapDispatchToProps } from '../index';
import { changeString } from '../actions';
import { postString } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<StringStoreHomePage /> tests', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringStoreHomePage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should call onSubmitForm when submit is pressed', () => {
    const onSubmitMock = jest.fn(e => e.preventDefault());
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringStoreHomePage
            string="TEST"
            onSubmitForm={onSubmitMock}
            onChangeString={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    fireEvent.click(container.querySelector('#submit-btn'));
    expect(onSubmitMock).toHaveBeenCalled();
  });

  describe('mapDispatchToProps test', () => {
    describe('onChangeString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeString).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'TEST';
        result.onChangeString({ target: { value: string } });
        expect(dispatch).toHaveBeenCalledWith(changeString(string));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch postString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(postString());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
