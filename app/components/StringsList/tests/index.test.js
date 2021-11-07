import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import StringsList from '../index';
import configureStore from '../../../configureStore';

describe('<StringsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<StringsList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <StringsList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the strings if loading was successful', () => {
    const store = configureStore({ global: { string: '' } }, browserHistory);
    const repos = [
      {
        id: 1,
        message: 'TEST1',
      },
      {
        id: 2,
        message: 'TEST2',
      },
    ];
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringsList strings={repos} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <StringsList strings={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
