import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  useDashboardData,
  useProducts,
  useAgentList,
  useOperationDashboards,
} from './useMockData';

describe('mock data hooks', () => {
  it('provides a complete dashboard snapshot', () => {
    const { result } = renderHook(() => useDashboardData());

    expect(result.current.kpis).toHaveLength(4);
    expect(result.current.revenue.length).toBeGreaterThanOrEqual(12);
    expect(result.current.funnel.length).toBeGreaterThanOrEqual(5);
    expect(result.current.orders.length).toBeGreaterThan(0);
    expect(result.current.todos.length).toBeGreaterThan(0);
  });

  it('keeps product matrix data ready for the product page', () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current).toHaveLength(4);
    expect(result.current.map((product) => product.tier)).toEqual([
      'standard',
      'agent',
      'oem',
      'partner',
    ]);
    expect(result.current.every((product) => product.benefits.length > 0)).toBe(true);
    expect(result.current.every((product) => product.deliveryItems.length > 0)).toBe(true);
  });

  it('keeps later-phase modules populated for demos', () => {
    const agents = renderHook(() => useAgentList()).result.current;
    const operationDashboards = renderHook(() => useOperationDashboards()).result.current;

    expect(agents.length).toBeGreaterThan(0);
    expect(operationDashboards.length).toBeGreaterThan(0);
    expect(operationDashboards[0].kpis.length).toBeGreaterThan(0);
    expect(operationDashboards[0].charts.length).toBeGreaterThan(0);
  });
});
