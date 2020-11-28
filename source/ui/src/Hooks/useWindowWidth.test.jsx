import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useWindowWidth from './useWindowWidth';

describe('useWindowWidth page tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('useWindowWidth returns default 1024', () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current).toBe(1024);
  });

  test('useWindowWidth returns resized 375', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useWindowWidth());
    const width = 375;
    const height = 812;

    await act(async () => {
      const resizeEvent = document.createEvent('Event');
      resizeEvent.initEvent('resize', true, true);

      global.window.innerWidth = width;
      global.window.innerHeight = height;
      global.window.dispatchEvent(resizeEvent);
      await act(() => waitForNextUpdate());
    });
    expect(result.current).toBe(width);
  });
});
