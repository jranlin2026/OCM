# 数据字典第一版

更新时间：2026-06-21

本数据字典从当前 `jixiang-admin/src/types/index.ts` 与 mock 数据中抽取，用于后续 API、数据库和前端状态对齐。

## 通用枚举

| 名称 | 值 | 说明 |
| --- | --- | --- |
| `ContentStatus` | `draft` / `published` | 内容草稿与已发布 |
| `Priority` | `high` / `medium` / `low` | 优先级 |
| `OrderStatus` | `pending` / `confirmed` / `delivered` / `completed` | 订单/服务处理状态 |
| `ProductTier` | `standard` / `agent` / `oem` / `partner` | 产品版本 |

## 核心实体

### Product

产品矩阵中的售卖版本。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 产品 ID |
| `name` | string | 产品名称 |
| `price` | number | 售价 |
| `tier` | ProductTier | 产品版本 |
| `description` | string | 产品描述 |
| `benefits` | string[] | 权益列表 |
| `deliveryItems` | string[] | 交付项 |
| `status` | ContentStatus | 状态 |
| `sales` | number | 销量 |
| `revenue` | number | 收入 |

### OrderRecord

仪表盘最近订单。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 订单号 |
| `customerName` | string | 客户名 |
| `productName` | string | 产品名 |
| `amount` | number | 金额 |
| `status` | OrderStatus | 状态 |
| `agentName` | string | 代理/归属人 |
| `createdAt` | string | 创建日期 |

### User / Role / Log

系统管理基础实体。当前页面有展示数据，类型需要在接 API 前补齐。

| 实体 | 关键字段 | 说明 |
| --- | --- | --- |
| User | id、name、phone、role、status、lastLoginAt | 后台用户 |
| Role | id、name、permissions、userCount、status | 角色与权限集合 |
| OperationLog | id、user、action、module、detail、ip、level、createdAt | 操作审计 |

## 业务实体

### 销售成交

| 实体 | 说明 |
| --- | --- |
| `Script` | 话术内容，按直播、聊天、电话、朋友圈、线下分类 |
| `SalesQA` | 销售问答与异议处理 |
| `DiagnosisTemplate` | 客户诊断模板 |
| `Quotation` | 报价方案 |
| `SOP` | 销售 SOP |

### 招商代理

| 实体 | 说明 |
| --- | --- |
| `Agent` | 代理商基础信息、等级、区域、销售额、佣金 |
| `CommissionRule` | 佣金规则 |
| `CommissionSettlement` | 佣金结算单 |
| `AgentAgreement` | 代理协议 |
| `AgentPolicy` | 代理政策 |
| `GrowthPath` | 代理成长路径 |

### 获客引流

| 实体 | 说明 |
| --- | --- |
| `DailyAction` | 每日获客动作 |
| `ShortVideoPlan` | 短视频计划 |
| `LiveStreamPlan` | 直播计划 |
| `PrivateDomainRecord` | 私域内容记录 |
| `OfflineActivity` | 线下活动 |

### 内容与案例

| 实体 | 说明 |
| --- | --- |
| `CaseStudy` | 案例正文与成果指标 |
| `CaseTemplate` | 案例模板 |
| `MaterialCollection` | 素材收集记录 |
| `CustomerInterview` | 客户访谈 |
| `BrandTemplate` | 品牌模板 |
| `BrandCertificate` | 品牌证书 |

### 交付、政策、培训、数据运营

| 实体 | 说明 |
| --- | --- |
| `DeliverySOP` | 交付 SOP |
| `AcceptanceCriteria` | 验收标准 |
| `ServiceDiagnosis` | 服务诊断 |
| `AfterSaleRecord` | 售后记录 |
| `PricingStrategy` | 定价策略 |
| `CommissionPolicy` | 佣金政策 |
| `RefundPolicy` | 退款政策 |
| `ComplianceRecord` | 合规记录 |
| `ContractTemplate` | 合同模板 |
| `Course` | 课程 |
| `TrainingCamp` | 训练营 |
| `StudentAssignment` | 作业 |
| `StudentProgress` | 学习进度 |
| `OperationDashboard` | 运营看板 |
| `DataFunnel` | 数据漏斗 |
| `RankingItem` | 排行项 |
| `ComplaintAnalysis` | 投诉分析 |
| `OperationReview` | 运营复盘 |

## 建模建议

1. ID 使用稳定字符串，前端当前 mock 中已有业务前缀，可后续替换为后端生成 ID。
2. 时间字段统一 ISO 8601 字符串，前端展示层负责格式化。
3. 列表接口统一支持 `keyword`、`status`、`page`、`pageSize`。
4. 涉及权限和审计的写操作必须写入 `OperationLog`。
5. `useMockData.ts` 后续拆分时，每个实体应单独导出 mock 列表，避免继续堆叠单文件。

