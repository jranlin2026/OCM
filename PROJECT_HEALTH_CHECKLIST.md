# 极享商业中台项目体检清单

更新时间：2026-06-21  
仓库：jranlin2026/OCM  
当前定位：React + Vite + TypeScript 的内部运营中台原型工程，根目录同时保存静态 HTML 原型与交付文档。

## 1. 体检快照

| 维度 | 状态 | 证据 | 结论 |
| --- | --- | --- | --- |
| 仓库保存 | 通过 | 已推送 `main`，提交 `29e93c5 Initial project save` | 已具备版本管理基线 |
| 构建 | 通过 | `npm.cmd run build` 成功 | 已完成路由懒加载，首包警告已消除 |
| Lint | 通过 | `npm.cmd run lint` 成功 | 基础代码规范可用 |
| 依赖安全 | 通过 | Vite 已升级到 7.3.5，`npm.cmd audit --audit-level=moderate` 通过；仅剩开发服务器场景的 low severity esbuild 提示 | moderate/high 安全基线已恢复 |
| 页面覆盖 | 较完整 | 14 个业务模块，128 个 TSX 页面/组件文件 | 已超过普通原型阶段 |
| 数据来源 | 待改造 | 47 个 mock hook，业务页面未接真实 API | 主要瓶颈是数据层 |
| 测试体系 | 已完成第一版 | `npm.cmd run test`，2 个测试文件 / 5 个用例通过 | 已纳入 CI，后续继续补页面与交互测试 |
| 移动端 | 有明显缺口 | 固定 240px 侧栏，小屏挤压内容 | 桌面后台优先，移动端需专项改造 |

## 2. P0 必做项

| 检查项 | 状态 | 负责人建议 | 动作 |
| --- | --- | --- | --- |
| 明确交付范围 | 待做 | 产品/项目负责人 | 标记哪些模块是首期可交付，哪些只是展示原型 |
| API 接入方案 | 已完成第一版 | 前后端负责人 | 已新增 `API_CONTRACT.md`，后续按后端评审调整 |
| 权限与登录 | 待做 | 前端/后端 | 设计账号、角色、菜单权限、接口鉴权与登录态持久化 |
| 安全漏洞处理 | 已完成 | 前端负责人 | 已升级 Vite 7.3.5 与 `@vitejs/plugin-react` 5.2.0，并通过 lint/build/audit moderate 基线 |
| 测试基线 | 已完成第一版 | 前端负责人 | 已添加 Vitest、Testing Library、导航配置测试和 mock 数据完整性测试 |
| 部署配置 | 待做 | 运维/前端 | 确认构建产物托管方式、环境变量、API 代理、404 fallback |
| 数据字典 | 已完成第一版 | 产品/后端 | 已新增 `DATA_DICTIONARY.md`，后续随接口和数据库模型细化 |
| 首期交付范围 | 已完成第一版 | 项目负责人 | 已新增 `DELIVERY_SCOPE.md`，后续按评审结果更新 |

## 3. P1 重要优化

| 检查项 | 状态 | 证据 | 动作 |
| --- | --- | --- | --- |
| 首包体积 | 已优化第一版 | 主入口约 403KB，页面已按路由拆分，Vite 不再提示首包超限 | 后续可继续拆 Recharts 等重依赖 |
| Mock 数据拆分 | 待优化 | `src/hooks/useMockData.ts` 约 110KB | 按业务模块拆到 `src/mocks/{module}.ts` |
| 路由文件拆分 | 待优化 | `src/routes/index.tsx` 约 10KB，集中 import 所有页面 | 路由模块化，并结合 `React.lazy` |
| 移动端布局 | 待优化 | 侧栏固定宽度，主内容 `ml: 240px/64px` | 小屏改成抽屉式导航，内容区取消固定左边距 |
| 组件性能 | 已优化第一版 | 已添加路由级 lazy + Suspense fallback | 后续评估列表虚拟化与图表按需加载 |
| 文档入口 | 已完成第一版 | 已新增根目录 `README.md` | 后续随部署/API 方案继续补充 |
| CI | 已完成第一版 | 已新增 `.github/workflows/ci.yml` | 当前覆盖 install、lint、test、build，audit 先保留为人工检查 |

## 4. P2 后续治理

| 检查项 | 状态 | 动作 |
| --- | --- | --- |
| 依赖升级策略 | 进行中 | Vite 安全升级已完成；React/MUI 大版本后续单独评估 |
| UI 设计系统沉淀 | 进行中 | 已有 `theme/tokens.ts`，后续补组件规范和页面模板 |
| 错误处理 | 待做 | API 层补统一错误、loading、空状态、重试策略 |
| 国际化/编码 | 观察 | 浏览器中文正常，PowerShell 输出中文会乱码；文档和源码需统一 UTF-8 |
| 可访问性 | 待做 | 图标按钮、表格、筛选控件补充 aria/label 规范 |
| 埋点与审计 | 待做 | 系统管理已有日志页面原型，后续接真实操作日志 |

## 5. 当前项目资产盘点

- React 工程：`jixiang-admin`
- 静态原型：根目录 `prototype-*.html`，共 56 个
- 项目入口文档：`README.md`
- 首期范围文档：`DELIVERY_SCOPE.md`
- API 合同草案：`API_CONTRACT.md`
- 数据字典草案：`DATA_DICTIONARY.md`
- 核心页面目录：`dashboard`、`products`、`project`、`sales`、`agent`、`acquisition`、`cases`、`training`、`materials`、`delivery`、`policies`、`brand`、`data`、`settings`
- 关键共享层：
  - 主题：`jixiang-admin/src/theme`
  - 路由：`jixiang-admin/src/routes`
  - 布局：`jixiang-admin/src/layouts`
  - UI 组件：`jixiang-admin/src/components`
  - Mock 数据：`jixiang-admin/src/hooks/useMockData.ts`
  - API 封装：`jixiang-admin/src/services/api.ts`

## 6. 已执行检查命令

```powershell
git status -sb
npm.cmd run build
npm.cmd run lint
npm.cmd audit --audit-level=moderate
npm.cmd outdated --long
rg "export function use" jixiang-admin\src\hooks\useMockData.ts -n
rg "api\.|fetch\(|axios|VITE_API|localStorage|sessionStorage" jixiang-admin\src -n
rg "TODO|FIXME|any|@ts-ignore|dangerouslySetInnerHTML|console\.log" jixiang-admin\src -n
```

## 7. 建议推进顺序

1. 已完成：补根目录 README，固定启动、构建、部署、目录说明。
2. 已完成第一版：确认首期模块范围，给每个模块标记：可演示 / 待接 API / 仅原型。
3. 已完成第一版：加最小 CI：lint + build。
4. 已完成第一版：形成实体数据字典。
5. 已完成第一版：新建 API contract 文档，和后端对齐接口。
6. 已完成：处理 Vite/esbuild moderate/high 安全基线；剩余 low severity 开发服务器提示等待上游修复。
7. 已完成第一版：做路由懒加载和分包，降低首包。
8. 已完成第一版：补测试基线并纳入 CI。
9. 拆分 `useMockData.ts`。
10. 做桌面端主流程 QA；移动端单独排期。

## 8. 2026-06-21 13:35 项目负责人更新

### 已完成

- 仓库已同步到 `https://github.com/jranlin2026/OCM.git`，当前 `main` 包含两轮新增提交：
  - `212a31f Add organization permission management prototype`
  - `483fe66 Add mock auth guard and audit logs`
- 系统管理已升级为组织权限骨架：
  - `/settings/users`：员工 & 部门，支持组织树筛选和关键词搜索。
  - `/settings/roles`：角色权限，支持角色切换、成员表和权限标签展示。
  - `/settings/recycle-bin`：账号回收站，支持关键词搜索。
  - `/settings/logs`：操作日志，支持级别筛选和关键词搜索。
- 已新增 mock 登录与路由权限守卫：
  - `/login` 登录页。
  - 企业管理员、销售经理、财务三类演示账号。
  - 按角色过滤侧边栏菜单。
  - 未登录访问业务页会跳转登录。
  - 无权限访问会展示 403 页面。
- 已新增本地审计日志：
  - 记录登录、退出、登录失败、拒绝访问。
  - 日志 ID 已做唯一化，避免 React key 重复警告。
  - 重复拒绝访问日志已做短时间去重。

### 最新验证

- `npm.cmd run test`：通过，5 个测试文件 / 14 个用例。
- `npm.cmd run lint`：通过。
- `npm.cmd run build`：通过。
- 浏览器冒烟：
  - 财务账号登录后只能看到财务允许的菜单。
  - 财务账号访问 `/settings/roles` 会进入 403。
  - 管理员可进入 `/settings/logs` 查看登录、退出、拒绝访问记录。
  - 新标签日志页控制台无应用 error。
  - 57 条业务路由全量扫描通过，无空白页、无路由错跳、无控制台 error。

### 当前 P0 状态调整

| 检查项 | 当前状态 | 下一步 |
| --- | --- | --- |
| 权限与登录 | 已完成 mock 骨架 | 接真实 `/auth/login`、`/auth/me`、菜单权限接口 |
| 组织架构 | 已完成演示骨架 | 增加真实新增、移动、禁用、离职、恢复账号流程 |
| 操作日志 | 已完成本地审计骨架 | 写操作接 API 后统一记录服务端审计日志 |
| API 接入 | 文档草案已有，需更新细节 | 拆 `src/services` 模块并逐页替换 mock 数据 |
| Mock 数据治理 | 待优化 | 优先拆分 `useMockData.ts`，避免单文件继续膨胀 |
