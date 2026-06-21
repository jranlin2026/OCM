# 极享商业中台项目体检清单

更新时间：2026-06-21  
仓库：jranlin2026/OCM  
当前定位：React + Vite + TypeScript 的内部运营中台原型工程，根目录同时保存静态 HTML 原型与交付文档。

## 1. 体检快照

| 维度 | 状态 | 证据 | 结论 |
| --- | --- | --- | --- |
| 仓库保存 | 通过 | 已推送 `main`，提交 `29e93c5 Initial project save` | 已具备版本管理基线 |
| 构建 | 通过，带警告 | `npm.cmd run build` 成功 | 可打包，但首包过大 |
| Lint | 通过 | `npm.cmd run lint` 成功 | 基础代码规范可用 |
| 依赖安全 | 有风险 | `npm.cmd audit --audit-level=moderate` 报 Vite/esbuild 漏洞 | 需要规划 Vite 升级 |
| 页面覆盖 | 较完整 | 14 个业务模块，128 个 TSX 页面/组件文件 | 已超过普通原型阶段 |
| 数据来源 | 待改造 | 47 个 mock hook，业务页面未接真实 API | 主要瓶颈是数据层 |
| 测试体系 | 缺失 | 未发现 test/vitest/jest/playwright 配置 | 上线前必须补测试 |
| 移动端 | 有明显缺口 | 固定 240px 侧栏，小屏挤压内容 | 桌面后台优先，移动端需专项改造 |

## 2. P0 必做项

| 检查项 | 状态 | 负责人建议 | 动作 |
| --- | --- | --- | --- |
| 明确交付范围 | 待做 | 产品/项目负责人 | 标记哪些模块是首期可交付，哪些只是展示原型 |
| API 接入方案 | 待做 | 前后端负责人 | 将 `src/services/api.ts` 扩展为模块化接口层，逐步替换 `useMockData.ts` |
| 权限与登录 | 待做 | 前端/后端 | 设计账号、角色、菜单权限、接口鉴权与登录态持久化 |
| 安全漏洞处理 | 待做 | 前端负责人 | 评估 Vite 5 -> 新版本升级影响，优先消除 esbuild dev-server 漏洞 |
| 测试基线 | 待做 | 前端负责人 | 添加 Vitest/Testing Library 或 Playwright，至少覆盖路由、核心表格、搜索筛选 |
| 部署配置 | 待做 | 运维/前端 | 确认构建产物托管方式、环境变量、API 代理、404 fallback |
| 数据字典 | 待做 | 产品/后端 | 从 mock 数据中抽取实体：产品、订单、代理、合同、培训、数据看板等 |

## 3. P1 重要优化

| 检查项 | 状态 | 证据 | 动作 |
| --- | --- | --- | --- |
| 首包体积 | 待优化 | 构建 JS 约 1.13MB，Vite 提示超过 500KB | 路由懒加载、手动分包 MUI/Recharts、按需加载重页面 |
| Mock 数据拆分 | 待优化 | `src/hooks/useMockData.ts` 约 110KB | 按业务模块拆到 `src/mocks/{module}.ts` |
| 路由文件拆分 | 待优化 | `src/routes/index.tsx` 约 10KB，集中 import 所有页面 | 路由模块化，并结合 `React.lazy` |
| 移动端布局 | 待优化 | 侧栏固定宽度，主内容 `ml: 240px/64px` | 小屏改成抽屉式导航，内容区取消固定左边距 |
| 组件性能 | 待优化 | 页面数量多，当前无懒加载/Suspense | 重页面和图表区按需加载，列表增加虚拟化评估 |
| 文档入口 | 待优化 | 有设计文档，但缺统一 README | 增加根目录 README，说明启动、构建、目录和交付范围 |
| CI | 待优化 | 当前无 GitHub Actions | 加入 build + lint + audit 的最小 CI |

## 4. P2 后续治理

| 检查项 | 状态 | 动作 |
| --- | --- | --- |
| 依赖升级策略 | 待规划 | 分两阶段升级：先 Vite 安全补丁，再 React/MUI 大版本评估 |
| UI 设计系统沉淀 | 进行中 | 已有 `theme/tokens.ts`，后续补组件规范和页面模板 |
| 错误处理 | 待做 | API 层补统一错误、loading、空状态、重试策略 |
| 国际化/编码 | 观察 | 浏览器中文正常，PowerShell 输出中文会乱码；文档和源码需统一 UTF-8 |
| 可访问性 | 待做 | 图标按钮、表格、筛选控件补充 aria/label 规范 |
| 埋点与审计 | 待做 | 系统管理已有日志页面原型，后续接真实操作日志 |

## 5. 当前项目资产盘点

- React 工程：`jixiang-admin`
- 静态原型：根目录 `prototype-*.html`，共 56 个
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

1. 补根目录 README，固定启动、构建、部署、目录说明。
2. 确认首期模块范围，给每个模块标记：可交付 / 需接 API / 仅原型。
3. 拆分 `useMockData.ts`，同步形成实体数据字典。
4. 新建 API contract 文档，和后端对齐接口。
5. 加最小 CI：lint + build。
6. 处理 Vite/esbuild 安全告警。
7. 做路由懒加载和分包，降低首包。
8. 做桌面端主流程 QA；移动端单独排期。

