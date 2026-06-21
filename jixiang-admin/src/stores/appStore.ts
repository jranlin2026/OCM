import { create } from 'zustand';

interface UserInfo {
  name: string;
  role: string;
  avatar: string;
}

interface AppState {
  sidebarCollapsed: boolean;
  user: UserInfo;
  toggleSidebar: () => void;
  setUser: (user: UserInfo) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarCollapsed: false,
  user: { name: '林恩光', role: '超级管理员', avatar: '林' },
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setUser: (user) => set({ user }),
}));
