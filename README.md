# 极享商业中台 / OCM

极享商业中台是一个面向内部运营、销售成交、招商代理、交付服务和数据运营的管理后台项目。当前仓库包含两类资产：

- `jixiang-admin/`：React + Vite + TypeScript 实现的中台控制中心。
- `prototype-*.html` 与交付文档：早期静态原型和产品/交付说明。

## 快速启动

环境要求：

- Node.js `^20.19.0` 或 `>=22.12.0`
- npm 11 或兼容版本

```powershell
cd jixiang-admin
npm.cmd install
npm.cmd run dev
```

默认 Vite 会优先使用 `5173` 端口；如果本机已有其他服务占用，会自动切换到下一个端口，例如 `5174`。

## 常用命令

```powershell
cd jixiang-admin
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
npm.cmd audit --audit-level=moderate
```

说明：在 Windows PowerShell 中直接执行 `npm run ...` 可能被执行策略拦截，建议使用 `npm.cmd run ...`。

## 技术栈

- React 18
- TypeScript
- Vite
- MUI / MUI X Data Grid
- Recharts
- Zustand
- Tailwind CSS

## 目录结构

```text
.
├── jixiang-admin/                 # React 工程
│   ├── docs/                      # 架构与设计文档
│   ├── public/                    # 静态资源
│   └── src/
│       ├── components/            # 通用组件
│       ├── hooks/                 # mock 数据与导航 hooks
│       ├── layouts/               # Sidebar / Topbar / AppLayout
│       ├── pages/                 # 业务模块页面
│       ├── routes/                # 路由与导航配置
│       ├── services/              # API 封装入口
│       ├── stores/                # Zustand 状态
│       ├── theme/                 # 设计令牌与 MUI 主题
│       ├── types/                 # 全局类型
│       └── utils/                 # 工具函数
├── prototype-*.html               # 静态原型
├── PROJECT_HEALTH_CHECKLIST.md    # 项目体检清单
└── DELIVERY_SCOPE.md              # 交付范围与模块状态
```

## 当前状态

当前 React 工程已经覆盖 14 个业务模块，主要数据仍来自 `jixiang-admin/src/hooks/useMockData.ts`。项目可构建、可 lint，但仍缺少真实 API 接入、权限认证、测试体系和部署配置。

首期推进请以 `PROJECT_HEALTH_CHECKLIST.md` 和 `DELIVERY_SCOPE.md` 为准。

## 质量基线

每次合并前至少运行：

```powershell
cd jixiang-admin
npm.cmd run lint
npm.cmd run test
npm.cmd run build
```

GitHub Actions 会在 `main` 分支 push 或 pull request 时自动执行 lint、test 和 build。
