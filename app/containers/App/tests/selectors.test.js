import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectError', () => {
  const stringsSelector = makeSelectStrings();
  it('should select the strings', () => {
    const strings = [{ id: 1, message: 'Test' }];
    const mockedState = {
      global: {
        strings,
      },
    };
    expect(stringsSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
