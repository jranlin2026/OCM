import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import UsersPage from './UsersPage';
import RolesPage from './RolesPage';
import RecycleBinPage from './RecycleBinPage';
import LogsPage from './LogsPage';

afterEach(() => {
  cleanup();
});

describe('organization management pages', () => {
  it('filters employees by selected department', () => {
    render(<UsersPage />);

    expect(screen.getByText('员工 & 部门')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /销售部/ }));

    expect(screen.getAllByText('销售部（3人）').length).toBeGreaterThan(0);
    expect(screen.getByText('张明')).toBeTruthy();
    expect(screen.queryByText('陈晨')).toBeNull();
  });

  it('switches role members from the role list', () => {
    render(<RolesPage />);

    expect(screen.getAllByText('企业管理员（1人）').length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('button', { name: /财务/ }));

    expect(screen.getAllByText('财务（1人）').length).toBeGreaterThan(0);
    expect(screen.getByText('刘洋')).toBeTruthy();
    expect(screen.queryByText('林恩光')).toBeNull();
  });

  it('searches recycled accounts by keyword', () => {
    render(<RecycleBinPage />);

    fireEvent.change(screen.getByPlaceholderText('请输入搜索关键词'), {
      target: { value: '吴珊' },
    });

    expect(screen.getByText('账号回收站（1）')).toBeTruthy();
    expect(screen.getByText('吴珊')).toBeTruthy();
    expect(screen.queryByText('周倩')).toBeNull();
  });

  it('filters operation logs by keyword and level', () => {
    render(<LogsPage />);

    fireEvent.change(screen.getByPlaceholderText('搜索日志...'), {
      target: { value: '权限' },
    });

    expect(screen.getAllByText(/操作日志/).length).toBeGreaterThan(0);
    expect(screen.getByText('拒绝访问')).toBeTruthy();
    expect(screen.queryByText('新增话术')).toBeNull();

    fireEvent.change(screen.getByPlaceholderText('搜索日志...'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: '危险' }));

    expect(screen.queryByText('拒绝访问')).toBeNull();
    expect(screen.getByText('登录失败')).toBeTruthy();
  });
});
