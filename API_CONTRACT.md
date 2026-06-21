# API Contract 第一版

更新时间：2026-06-21

本文定义前后端对接的接口草案。当前前端已有 `jixiang-admin/src/services/api.ts`，默认基地址为 `VITE_API_BASE_URL` 或 `/api`。

## 通用约定

### Base URL

```text
/api
```

### 响应格式

```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

### 分页格式

```json
{
  "items": [],
  "page": 1,
  "pageSize": 20,
  "total": 0
}
```

### 通用查询参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `keyword` | string | 搜索关键词 |
| `status` | string | 状态 |
| `page` | number | 页码 |
| `pageSize` | number | 每页数量 |

## P0 接口

### 认证与当前用户

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | `/auth/login` | 登录 |
| POST | `/auth/logout` | 退出 |
| GET | `/auth/me` | 当前用户、角色、菜单权限 |
| GET | `/auth/menus` | 当前用户可访问菜单 |

### 系统管理

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/users` | 用户列表 |
| POST | `/users` | 新建用户 |
| PUT | `/users/:id` | 更新用户 |
| DELETE | `/users/:id` | 删除/停用用户 |
| GET | `/roles` | 角色列表 |
| POST | `/roles` | 新建角色 |
| PUT | `/roles/:id` | 更新角色和权限 |
| GET | `/operation-logs` | 操作日志 |

### 数据驾驶舱

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/dashboard/summary` | KPI、收入趋势、漏斗、最近订单、待办 |
| GET | `/dashboard/kpis` | KPI 卡片 |
| GET | `/dashboard/revenue-trend` | 收入趋势 |
| GET | `/dashboard/funnel` | 转化漏斗 |
| GET | `/dashboard/recent-orders` | 最近订单 |
| GET | `/dashboard/todos` | 待办 |

### 产品矩阵

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/products` | 产品列表 |
| POST | `/products` | 新建产品 |
| PUT | `/products/:id` | 更新产品 |
| GET | `/products/:id/benefits` | 产品权益 |
| GET | `/products/:id/delivery-items` | 产品交付清单 |

### 项目认知

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/project/faqs` | FAQ 列表 |
| POST | `/project/faqs` | 新建 FAQ |
| PUT | `/project/faqs/:id` | 更新 FAQ |
| GET | `/project/competitors` | 竞品列表 |
| GET | `/project/guides` | 新人指南 |

### 销售成交

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/sales/scripts` | 话术列表 |
| POST | `/sales/scripts` | 新建话术 |
| GET | `/sales/qa` | 问答列表 |
| GET | `/sales/diagnoses` | 诊断模板 |
| GET | `/sales/quotations` | 报价方案 |
| GET | `/sales/sops` | 销售 SOP |

### 内容库

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/cases` | 案例列表 |
| GET | `/case-templates` | 案例模板 |
| GET | `/materials` | 素材列表 |
| POST | `/materials` | 新建素材记录 |
| GET | `/interviews` | 客户访谈 |

## P1 接口

| 模块 | 路径前缀 | 说明 |
| --- | --- | --- |
| 招商代理 | `/agents` | 代理商、政策、协议、结算、成长路径 |
| 获客引流 | `/acquisition` | 每日动作、短视频、直播、私域、线下活动 |
| 交付服务 | `/delivery` | SOP、验收、诊断、售后、调研 |
| 政策合同 | `/policies` | 定价、佣金、退款、合规、合同模板、客户报备 |

## P2 接口

| 模块 | 路径前缀 | 说明 |
| --- | --- | --- |
| 培训赋能 | `/training` | 课程、训练营、作业、进度 |
| 品牌资产 | `/brand` | VI、模板、证书 |
| 数据运营 | `/operation-data` | 看板、漏斗、排行、投诉、复盘 |

## 前端改造建议

1. 在 `src/services` 下按模块拆分接口文件，例如 `products.ts`、`sales.ts`、`settings.ts`。
2. 在 API 层统一处理 `code !== 0`、HTTP 错误、登录过期。
3. 页面先保持现有 UI，逐页把 `useMockData` 替换为 API 调用。
4. 列表页面统一引入 loading、empty、error 三种状态。
5. 写操作完成后统一刷新列表，并记录操作日志。

