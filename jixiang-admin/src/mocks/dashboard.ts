import {
  DashboardData,
  OrderStatus,
  Priority,
} from '@/types';

export const dashboardData: DashboardData = {
  kpis: [
    { label: '店播成交额', value: 128000, change: 12.3, trend: 'up', icon: 'fa-solid fa-chart-line', color: '#22C55E', suffix: '元' },
    { label: '加微率', value: 38.5, change: 5.2, trend: 'up', icon: 'fa-solid fa-user-plus', color: '#3B82F6', suffix: '%' },
    { label: '有效诊断率', value: 72.3, change: 8.1, trend: 'up', icon: 'fa-solid fa-stethoscope', color: '#A855F7', suffix: '%' },
    { label: '高客单升单率', value: 35.6, change: 15.4, trend: 'up', icon: 'fa-solid fa-arrow-trend-up', color: '#F59E0B', suffix: '%' },
  ],
  revenue: [
    { month: '2024-01', revenue: 320000, orders: 28 },
    { month: '2024-02', revenue: 298000, orders: 25 },
    { month: '2024-03', revenue: 385000, orders: 33 },
    { month: '2024-04', revenue: 420000, orders: 36 },
    { month: '2024-05', revenue: 510000, orders: 42 },
    { month: '2024-06', revenue: 478000, orders: 39 },
    { month: '2024-07', revenue: 560000, orders: 45 },
    { month: '2024-08', revenue: 625000, orders: 51 },
    { month: '2024-09', revenue: 590000, orders: 48 },
    { month: '2024-10', revenue: 680000, orders: 55 },
    { month: '2024-11', revenue: 750000, orders: 62 },
    { month: '2024-12', revenue: 820000, orders: 68 },
  ],
  funnel: [
    { stage: '直播间观看', count: 15800, rate: '100%' },
    { stage: '加微信', count: 6083, rate: '38.5%' },
    { stage: '客户诊断', count: 4398, rate: '72.3%' },
    { stage: '报价方案', count: 1565, rate: '35.6%' },
    { stage: '成交', count: 1024, rate: '65.4%' },
  ],
  orders: [
    { id: 'ORD-2024-001', customerName: '王芳', productName: '标准版', amount: 899, status: OrderStatus.COMPLETED, agentName: '张丽', createdAt: '2024-12-18' },
    { id: 'ORD-2024-002', customerName: '李明辉', productName: '代理版', amount: 9800, status: OrderStatus.COMPLETED, agentName: '王强', createdAt: '2024-12-16' },
    { id: 'ORD-2024-003', customerName: '陈静', productName: '标准版', amount: 899, status: OrderStatus.CONFIRMED, agentName: '张丽', createdAt: '2024-12-15' },
    { id: 'ORD-2024-004', customerName: '赵志远', productName: '贴牌版', amount: 29800, status: OrderStatus.DELIVERED, agentName: '李娜', createdAt: '2024-12-14' },
    { id: 'ORD-2024-005', customerName: '刘洋', productName: '标准版', amount: 899, status: OrderStatus.PENDING, agentName: '王强', createdAt: '2024-12-13' },
  ],
  todos: [
    { id: 'TODO-001', title: '审核新代理商入驻申请', priority: Priority.HIGH, deadline: '2024-12-20', completed: false, module: '招商代理' },
    { id: 'TODO-002', title: '更新双十二活动话术模板', priority: Priority.HIGH, deadline: '2024-12-19', completed: true, module: '话术库' },
    { id: 'TODO-003', title: '整理本周高意向客户名单', priority: Priority.MEDIUM, deadline: '2024-12-21', completed: false, module: '销售成交' },
    { id: 'TODO-004', title: '生成12月销售数据报表', priority: Priority.MEDIUM, deadline: '2024-12-22', completed: false, module: '数据运营' },
    { id: 'TODO-005', title: '检查FAQ最新政策更新', priority: Priority.LOW, deadline: '2024-12-25', completed: false, module: '项目认知' },
  ],
};
