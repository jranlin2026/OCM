export interface Department {
  id: string;
  name: string;
  parentId?: string;
}

export interface OrgUser {
  id: string;
  name: string;
  avatar: string;
  title: string;
  departmentId: string;
  roleId: string;
  account: string;
  phone: string;
  email: string;
  status: 'active' | 'disabled';
  lastLoginAt: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  status: 'active' | 'disabled';
}

export interface RecycleAccount {
  id: string;
  name: string;
  title: string;
  departmentName: string;
  account: string;
  handledAt: string;
}

const departments: Department[] = [
  { id: 'company', name: '极享AI' },
  { id: 'office', name: '总经办', parentId: 'company' },
  { id: 'brand', name: '市场品牌部', parentId: 'company' },
  { id: 'lead', name: '线索获客部', parentId: 'company' },
  { id: 'sales', name: '销售部', parentId: 'company' },
  { id: 'success', name: '客户成功部', parentId: 'company' },
  { id: 'finance', name: '财务部', parentId: 'company' },
];

const roles: Role[] = [
  { id: 'admin', name: '企业管理员', description: '拥有系统全量管理权限，可配置组织、角色、用户与关键数据。', permissions: ['全部模块', '组织架构', '角色权限', '数据导出', '操作日志'], status: 'active' },
  { id: 'sales-manager', name: '销售经理', description: '负责销售团队管理、报价方案、成交复盘与客户推进。', permissions: ['销售成交', '客户诊断', '报价方案', '数据驾驶舱'], status: 'active' },
  { id: 'market-manager', name: '市场经理', description: '负责获客动作、品牌内容、投放素材和活动转化数据。', permissions: ['获客引流', '内容素材', '品牌资产', '数据运营'], status: 'active' },
  { id: 'staff', name: '普通员工', description: '可查看日常业务资料，按部门权限参与内容和客户跟进。', permissions: ['项目认知', '培训赋能', '内容素材'], status: 'active' },
  { id: 'lead-team', name: '线索获客部', description: '面向线索运营团队，聚焦短视频、直播和私域获客动作。', permissions: ['获客引流', '案例见证', '数据运营'], status: 'active' },
  { id: 'finance', name: '财务', description: '查看合同、定价和佣金数据，不参与业务内容编辑。', permissions: ['政策合同(只读)', '佣金结算(只读)', '数据导出'], status: 'active' },
];

const users: OrgUser[] = [
  { id: 'U-001', name: '林恩光', avatar: '林', title: '创始人', departmentId: 'office', roleId: 'admin', account: '17759212966', phone: '177****2966', email: 'admin@jixiang.ai', status: 'active', lastLoginAt: '2026-06-21T08:30:00' },
  { id: 'U-002', name: '张明', avatar: '张', title: '销售经理', departmentId: 'sales', roleId: 'sales-manager', account: '13800000002', phone: '138****0002', email: 'zhangming@jixiang.ai', status: 'active', lastLoginAt: '2026-06-20T19:20:00' },
  { id: 'U-003', name: '李芳', avatar: '李', title: '销售专员', departmentId: 'sales', roleId: 'staff', account: '13800000003', phone: '138****0003', email: 'lifang@jixiang.ai', status: 'active', lastLoginAt: '2026-06-20T17:15:00' },
  { id: 'U-004', name: '王强', avatar: '王', title: '销售专员', departmentId: 'sales', roleId: 'staff', account: '13800000004', phone: '138****0004', email: 'wangqiang@jixiang.ai', status: 'disabled', lastLoginAt: '2026-06-18T11:05:00' },
  { id: 'U-005', name: '陈晨', avatar: '陈', title: '内容编辑', departmentId: 'brand', roleId: 'market-manager', account: '13800000005', phone: '138****0005', email: 'chenchen@jixiang.ai', status: 'active', lastLoginAt: '2026-06-21T09:10:00' },
  { id: 'U-006', name: '赵敏', avatar: '赵', title: '线索运营', departmentId: 'lead', roleId: 'lead-team', account: '13800000006', phone: '138****0006', email: 'zhaomin@jixiang.ai', status: 'active', lastLoginAt: '2026-06-19T15:30:00' },
  { id: 'U-007', name: '刘洋', avatar: '刘', title: '财务', departmentId: 'finance', roleId: 'finance', account: '13800000007', phone: '138****0007', email: 'liuyang@jixiang.ai', status: 'active', lastLoginAt: '2026-06-17T14:00:00' },
  { id: 'U-008', name: '周倩', avatar: '周', title: '客户成功', departmentId: 'success', roleId: 'staff', account: '13800000008', phone: '138****0008', email: 'zhouqian@jixiang.ai', status: 'active', lastLoginAt: '2026-06-16T10:25:00' },
];

const recycleAccounts: RecycleAccount[] = [
  { id: 'R-001', name: '吴珊', title: '销售专员', departmentName: '销售部', account: '18205922447', handledAt: '2026-06-08T09:11:10' },
  { id: 'R-002', name: '周倩', title: '客户成功', departmentName: '客户成功部', account: '13950040095', handledAt: '2026-05-28T14:20:00' },
];

export function useOrganizationData() {
  return {
    departments,
    users,
    roles,
    recycleAccounts,
  };
}
