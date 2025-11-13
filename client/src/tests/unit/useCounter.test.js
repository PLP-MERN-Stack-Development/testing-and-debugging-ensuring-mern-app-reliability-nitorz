import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';
test('increments counter', () => { const { result } = renderHook(() => useCounter(0)); act(() => { result.current.increment(); }); expect(result.current.count).toBe(1); });