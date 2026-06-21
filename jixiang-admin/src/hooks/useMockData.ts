import { useMemo } from 'react';
import { dashboardData } from '@/mocks/dashboard';
import { products } from '@/mocks/products';
import {
  ProductTier,
  ContentStatus,
  ScriptCategory,
  Priority,
  OrderStatus,
  FaqItem,
  Competitor,
  GuideStep,
  Script,
  SalesQA,
  DiagnosisTemplate,
  Quotation,
  SOP,
  AgentLevel,
  SettlementStatus,
  AgreementStatus,
  Agent,
  CommissionRule,
  CommissionSettlement,
  AgentAgreement,
  AgentPolicy,
  GrowthPath,
  AcquisitionChannel,
  TaskStatus,
  DailyAction,
  ShortVideoPlan,
  LiveStreamPlan,
  PrivateDomainRecord,
  OfflineActivity,
  CaseCategory,
  CaseStudy,
  CaseTemplate,
  MaterialCollection,
  CustomerInterview,
  TrainingType,
  TrainingStatus,
  Course,
  TrainingCamp,
  StudentAssignment,
  StudentProgress,
  SOPCategory,
  DeliverySOP,
  AcceptanceCriteria,
  ServiceDiagnosis,
  AfterSaleRecord,
  PolicyStatus,
  PricingStrategy,
  CommissionPolicy,
  RefundPolicy,
  ComplianceRecord,
  ContractTemplate,
  VISpec,
  BrandTemplate,
  BrandCertificate,
  OperationDashboard,
  DataFunnel,
  ComplaintAnalysis,
  OperationReview,
} from '@/types';

/* ============= Dashboard ============= */

export function useDashboardData() {
  return useMemo(() => dashboardData, []);
}

/* ============= 产品矩阵 ============= */

export function useProducts() {
  return useMemo(() => products, []);
}

/* ============= FAQ ============= */

export function useFAQs(): FaqItem[] {
  return useMemo(() => [
    {
      id: 'FAQ-001',
      question: '极享AI平台支持哪些直播平台？',
      answer: '目前支持抖音、快手、视频号、淘宝直播四大主流平台。我们提供适配各平台的话术模板和数据分析工具，帮助您在不同平台都能高效运营。',
      category: '平台支持',
      sortOrder: 1,
      status: ContentStatus.PUBLISHED,
      tags: ['平台', '直播', '兼容'],
      createdAt: '2024-06-01',
      updatedAt: '2024-12-10',
    },
    {
      id: 'FAQ-002',
      question: '标准版和代理版的主要区别是什么？',
      answer: '标准版面向个人创业者，提供基础的AI话术生成和数据报表功能；代理版面向中小团队，增加了客户诊断工具、竞品对比分析和自动报价方案等高级功能，同时支持多人协作的团队管理后台。',
      category: '产品对比',
      sortOrder: 2,
      status: ContentStatus.PUBLISHED,
      tags: ['产品', '版本', '功能'],
      createdAt: '2024-06-01',
      updatedAt: '2024-12-08',
    },
    {
      id: 'FAQ-003',
      question: '购买后多久可以开始使用？',
      answer: '标准版购买后即时开通，10分钟内即可开始使用。代理版、贴牌版和合伙人版需要1-3个工作日的部署和配置时间，我们的客户成功团队会全程协助您完成搭建。',
      category: '售后服务',
      sortOrder: 3,
      status: ContentStatus.PUBLISHED,
      tags: ['购买', '开通', '部署'],
      createdAt: '2024-06-05',
      updatedAt: '2024-12-06',
    },
    {
      id: 'FAQ-004',
      question: 'AI生成的话术是否可以自定义修改？',
      answer: '完全可以。AI生成的初稿话术支持全文自定义编辑，您可以根据自己的产品和风格进行调整。系统还会记录您的修改偏好，持续优化后续生成的推荐内容。',
      category: '功能使用',
      sortOrder: 4,
      status: ContentStatus.PUBLISHED,
      tags: ['AI', '话术', '自定义'],
      createdAt: '2024-07-01',
      updatedAt: '2024-12-05',
    },
    {
      id: 'FAQ-005',
      question: '代理商的佣金如何结算？',
      answer: '代理商佣金按月结算，每月5日前生成上月结算单，15日前完成打款。佣金比例根据代理等级和业绩阶梯式计算，具体比例可在代理商后台查看。',
      category: '代理政策',
      sortOrder: 5,
      status: ContentStatus.PUBLISHED,
      tags: ['代理', '佣金', '结算'],
      createdAt: '2024-07-15',
      updatedAt: '2024-12-03',
    },
    {
      id: 'FAQ-006',
      question: '是否支持多人同时使用一个账号？',
      answer: '标准版仅支持单人使用。代理版支持最多5个子账号，贴牌版支持20个子账号，合伙人版不限子账号数量。所有版本均支持权限分级管理。',
      category: '账号管理',
      sortOrder: 6,
      status: ContentStatus.PUBLISHED,
      tags: ['账号', '多人', '权限'],
      createdAt: '2024-08-01',
      updatedAt: '2024-11-28',
    },
    {
      id: 'FAQ-007',
      question: '数据报表的更新频率是怎样的？',
      answer: '核心数据实时更新，详细报表每日凌晨自动生成。支持自定义时间范围的数据导出，格式包括CSV和Excel。',
      category: '数据功能',
      sortOrder: 7,
      status: ContentStatus.PUBLISHED,
      tags: ['数据', '报表', '导出'],
      createdAt: '2024-09-01',
      updatedAt: '2024-11-20',
    },
    {
      id: 'FAQ-008',
      question: '合同到期后数据如何处理？',
      answer: '合同到期后，您有30天的数据导出期，可以下载所有历史数据。超过30天未续费，系统将按照数据隐私政策对数据进行匿名化处理。建议在合同到期前及时续费或导出数据。',
      category: '售后服务',
      sortOrder: 8,
      status: ContentStatus.PUBLISHED,
      tags: ['合同', '数据', '续费'],
      createdAt: '2024-10-01',
      updatedAt: '2024-11-15',
    },
  ], []);
}

/* ============= 竞品对比 ============= */

export function useCompetitors(): Competitor[] {
  return useMemo(() => [
    {
      id: 'COMP-001',
      name: '某AI话术平台A',
      description: '专注于AI话术生成的传统SaaS平台，功能较为单一',
      features: [
        { category: 'AI话术生成', ourValue: '多场景AI话术生成，覆盖直播/私聊/电话等场景', competitorValue: '仅支持直播话术模板', isAdvantage: true },
        { category: '客户诊断', ourValue: 'AI智能诊断+自动匹配产品方案', competitorValue: '无此功能', isAdvantage: true },
        { category: '竞品对比', ourValue: '自动采集+智能分析报告', competitorValue: '需手动整理', isAdvantage: true },
        { category: '报价方案', ourValue: '自动生成多版本报价单', competitorValue: '仅固定模板', isAdvantage: true },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-01',
      updatedAt: '2024-12-10',
    },
    {
      id: 'COMP-002',
      name: '某直播运营平台B',
      description: '侧重直播数据监测与运营分析',
      features: [
        { category: 'AI话术生成', ourValue: '多场景AI话术生成，覆盖直播/私聊/电话等场景', competitorValue: '无AI话术功能', isAdvantage: true },
        { category: '客户诊断', ourValue: 'AI智能诊断+自动匹配产品方案', competitorValue: '无此功能', isAdvantage: true },
        { category: '直播数据', ourValue: '基础直播数据看板', competitorValue: '深度直播数据分析', isAdvantage: false },
        { category: '定价', ourValue: '899元起，多版本灵活选择', competitorValue: '基础版1999元/月起', isAdvantage: true },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-01',
      updatedAt: '2024-12-08',
    },
    {
      id: 'COMP-003',
      name: '某销售赋能平台C',
      description: '面向大客户的销售CRM+赋能平台',
      features: [
        { category: 'AI话术生成', ourValue: '多场景AI话术生成', competitorValue: '仅销售话术模板', isAdvantage: true },
        { category: '目标客群', ourValue: '中小团队到企业级全覆盖', competitorValue: '仅面向大客户', isAdvantage: true },
        { category: '部署方式', ourValue: 'SaaS+混合部署', competitorValue: '仅支持私有化部署', isAdvantage: true },
        { category: '价格', ourValue: '899元起，性价比高', competitorValue: '年费10万元起', isAdvantage: true },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-07-01',
      updatedAt: '2024-12-05',
    },
  ], []);
}

/* ============= 新人指南 ============= */

export function useGuides(): GuideStep[] {
  return useMemo(() => [
    {
      id: 'GUIDE-001',
      title: '注册与账号设置',
      description: '完成平台注册，配置个人资料和账号安全',
      stepOrder: 1,
      icon: 'fa-solid fa-user-plus',
      actionItems: ['注册极享AI账号', '完善个人资料信息', '设置安全密码', '绑定手机和邮箱'],
      status: ContentStatus.PUBLISHED,
    },
    {
      id: 'GUIDE-002',
      title: '了解产品体系',
      description: '熟悉四大产品版本的功能特性和适用场景',
      stepOrder: 2,
      icon: 'fa-solid fa-cubes',
      actionItems: ['查看各版本功能介绍', '了解版本对比差异', '根据需求选择合适版本', '如有疑问咨询客户经理'],
      status: ContentStatus.PUBLISHED,
    },
    {
      id: 'GUIDE-003',
      title: '学习话术生成',
      description: '掌握AI话术生成工具的使用方法',
      stepOrder: 3,
      icon: 'fa-solid fa-message',
      actionItems: ['浏览话术模板库', '尝试AI生成话术', '自定义编辑和优化', '保存到个人话术集'],
      status: ContentStatus.PUBLISHED,
    },
    {
      id: 'GUIDE-004',
      title: '使用客户诊断',
      description: '学习使用客户诊断工具分析客户需求',
      stepOrder: 4,
      icon: 'fa-solid fa-stethoscope',
      actionItems: ['创建诊断模板', '填写客户信息', '获取诊断报告', '查看产品推荐方案'],
      status: ContentStatus.PUBLISHED,
    },
    {
      id: 'GUIDE-005',
      title: '掌握数据看板',
      description: '学会使用数据分析功能跟踪业务表现',
      stepOrder: 5,
      icon: 'fa-solid fa-chart-bar',
      actionItems: ['查看核心KPI指标', '分析收入趋势', '追踪转化漏斗', '导出数据报表'],
      status: ContentStatus.PUBLISHED,
    },
    {
      id: 'GUIDE-006',
      title: '开启销售转化',
      description: '综合运用各项工具完成客户转化',
      stepOrder: 6,
      icon: 'fa-solid fa-rocket',
      actionItems: ['制定跟进计划', '使用报价方案功能', '跟踪订单状态', '复盘成交数据'],
      status: ContentStatus.PUBLISHED,
    },
  ], []);
}

/* ============= 话术库 ============= */

export function useScripts(): Script[] {
  return useMemo(() => [
    {
      id: 'SCRIPT-001',
      title: '双十二限时活动开场话术',
      category: ScriptCategory.LIVE,
      content: '欢迎新进来的朋友！今天咱们直播间可是有大福利的……双十二提前购，全年最低价，错过就要等明年了！',
      tags: ['双十二', '促销', '限时'],
      viewCount: 2840,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-12-01',
      updatedAt: '2024-12-15',
    },
    {
      id: 'SCRIPT-002',
      title: '产品痛点引入话术',
      category: ScriptCategory.LIVE,
      content: '各位老板，做直播带货最头疼的是什么？是不是每天要写话术、要分析数据、还要跟客户一个个聊？今天我给大家带来一个神器……',
      tags: ['痛点', '产品介绍', '转化'],
      viewCount: 2156,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-11-20',
      updatedAt: '2024-12-12',
    },
    {
      id: 'SCRIPT-003',
      title: '首次跟进-破冰话术',
      category: ScriptCategory.CHAT,
      content: '您好，我是极享AI的运营顾问XXX，刚才看到您在直播间对我们的产品感兴趣，想跟您简单聊一下，看能不能帮到您。',
      tags: ['跟进', '破冰', '微信'],
      viewCount: 1892,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-11-15',
      updatedAt: '2024-12-10',
    },
    {
      id: 'SCRIPT-004',
      title: '产品对比推荐话术',
      category: ScriptCategory.CHAT,
      content: '根据您目前的情况，我建议先看看我们的标准版，899元包含全套AI话术工具，性价比非常高。如果您团队有2-3个人一起用，代理版会更合适……',
      tags: ['对比', '推荐', '产品'],
      viewCount: 1567,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-11-10',
      updatedAt: '2024-12-08',
    },
    {
      id: 'SCRIPT-005',
      title: '电话邀约演示话术',
      category: ScriptCategory.PHONE,
      content: '您好，请问是XXX先生/女士吗？我是极享AI的XXX，之前您了解过我们的AI直播赋能产品，我想约一个时间给您做一个15分钟的线上演示，您看明天上午还是下午方便？',
      tags: ['电话', '邀约', '演示'],
      viewCount: 1234,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-11-05',
      updatedAt: '2024-12-05',
    },
    {
      id: 'SCRIPT-006',
      title: '朋友圈种草文案',
      category: ScriptCategory.MOMENTS,
      content: '🔥 做直播带货的朋友看过来！极享AI一站式赋能平台，AI自动生话术、智能诊断客户需求、自动生成报价方案……新人首月仅需899！',
      tags: ['朋友圈', '种草', '引流'],
      viewCount: 3210,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-11-01',
      updatedAt: '2024-12-01',
    },
    {
      id: 'SCRIPT-007',
      title: '异议处理-价格太贵',
      category: ScriptCategory.CHAT,
      content: '我理解您觉得价格高了。其实899元一年，平均每天才2块4毛钱，但能帮您省下每天写话术的2个小时，一个月就是60个小时，换算下来性价比非常高。',
      tags: ['异议', '价格', '转化'],
      viewCount: 1876,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-10-20',
      updatedAt: '2024-11-28',
    },
    {
      id: 'SCRIPT-008',
      title: '老客户转介绍话术',
      category: ScriptCategory.CHAT,
      content: '王总，您用我们产品也有3个月了，整体效果还满意吧？如果身边有朋友也在做直播带货，欢迎推荐给我们，成功签约后您这边也有推荐奖励哦！',
      tags: ['转介绍', '老客户', '裂变'],
      viewCount: 1098,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-10-15',
      updatedAt: '2024-11-25',
    },
    {
      id: 'SCRIPT-009',
      title: '线下展会接待话术',
      category: ScriptCategory.OFFLINE,
      content: '欢迎了解极享AI！我们提供AI直播带货一站式赋能方案，从话术生成到客户诊断到成交转化，全流程AI辅助。方便加个微信，我把详细资料发给您。',
      tags: ['线下', '展会', '接待'],
      viewCount: 876,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-10-01',
      updatedAt: '2024-11-20',
    },
    {
      id: 'SCRIPT-010',
      title: '促单成交收尾话术',
      category: ScriptCategory.LIVE,
      content: '今天下单的朋友，额外再送价值1999元的新人运营大礼包！包含全套话术模板+数据分析工具+一对一指导服务。仅限前20名，手慢无！',
      tags: ['促单', '限时', '赠品'],
      viewCount: 2543,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-09-20',
      updatedAt: '2024-11-15',
    },
  ], []);
}

/* ============= 百问百答 ============= */

export function useQAList(): SalesQA[] {
  return useMemo(() => [
    {
      id: 'QA-001',
      question: '你们和普通的直播工具有什么区别？',
      answer: '我们不只是一个直播工具，而是一套完整的AI销售赋能体系。除了基础的直播功能外，我们提供AI话术生成、客户智能诊断、竞品对比分析、自动报价方案等全链路工具，帮助您从获客到成交每一个环节都提效。',
      scenario: '产品对比',
      keywords: ['区别', '不同', '优势'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 86,
      createdAt: '2024-06-01',
    },
    {
      id: 'QA-002',
      question: '我没有直播经验，能上手吗？',
      answer: '完全可以。我们的产品设计初衷就是让零基础用户也能快速上手。系统的六步新人指南会手把手教您从注册到成交的每一步，同时话术库提供了大量可直接使用的模板。',
      scenario: '使用门槛',
      keywords: ['新手', '零基础', '上手'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 72,
      createdAt: '2024-06-05',
    },
    {
      id: 'QA-003',
      question: '能不能先试用再购买？',
      answer: '当然可以。我们提供7天免费试用，期间可以体验标准版的全部功能。试用期结束后再决定是否购买，没有任何强制消费。',
      scenario: '购买决策',
      keywords: ['试用', '免费', '体验'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 95,
      createdAt: '2024-06-10',
    },
    {
      id: 'QA-004',
      question: '数据安全怎么保障的？',
      answer: '我们采用银行级数据加密技术，所有数据传输和存储都经过AES-256加密。同时我们获得了等保三级认证，定期进行安全审计。客户数据严格隔离，不会与任何第三方共享。',
      scenario: '安全合规',
      keywords: ['安全', '数据', '加密'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 64,
      createdAt: '2024-07-01',
    },
    {
      id: 'QA-005',
      question: '升级版本后，原有数据会丢失吗？',
      answer: '不会。从标准版升级到代理版或更高级别，所有历史数据完整保留，无缝迁移。升级后还会解锁更多高级功能，不影响您正在进行的业务流程。',
      scenario: '产品升级',
      keywords: ['升级', '数据', '迁移'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 58,
      createdAt: '2024-07-15',
    },
    {
      id: 'QA-006',
      question: '可以开发票吗？',
      answer: '支持开具增值税普通发票和专用发票。购买后可以在后台「我的订单」中申请开票，电子发票即时生成，纸质发票3-5个工作日寄出。',
      scenario: '售后服务',
      keywords: ['发票', '报销', '财务'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 51,
      createdAt: '2024-08-01',
    },
    {
      id: 'QA-007',
      question: '你们有售后服务吗？',
      answer: '所有版本均提供在线客服支持（工作日9:00-21:00）。代理版及以上提供专属客户成功经理一对一服务。贴牌版和合伙人版还包含季度业务复盘和上门培训服务。',
      scenario: '售后服务',
      keywords: ['售后', '客服', '支持'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 47,
      createdAt: '2024-09-01',
    },
    {
      id: 'QA-008',
      question: 'AI生成的内容会不会有版权问题？',
      answer: '不会。AI生成的原创内容版权归用户所有，我们平台不保留任何生成内容的所有权。您可以自由使用、修改和分发AI生成的全部内容。',
      scenario: '法律合规',
      keywords: ['版权', 'AI', '原创'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 42,
      createdAt: '2024-10-01',
    },
    {
      id: 'QA-009',
      question: '订单退款政策是怎样的？',
      answer: '购买后7天内无条件全额退款。超过7天但未使用核心功能的，可按剩余服务期限比例退款。已深度使用（如完成客户诊断、生成大量话术）的订单，不支持退款但可申请版本降级。',
      scenario: '购买决策',
      keywords: ['退款', '退货', '取消'],
      status: ContentStatus.PUBLISHED,
      helpfulCount: 39,
      createdAt: '2024-11-01',
    },
  ], []);
}

/* ============= 客户诊断 ============= */

export function useDiagnoses(): DiagnosisTemplate[] {
  return useMemo(() => [
    {
      id: 'DIAG-001',
      title: '直播新手基础诊断',
      questions: [
        { id: 'DQ-001', label: '您目前是否在从事直播带货？', type: 'radio', options: ['正在做', '准备开始', '了解阶段'], required: true },
        { id: 'DQ-002', label: '您主要做哪个平台？', type: 'select', options: ['抖音', '快手', '视频号', '淘宝直播', '多个平台', '尚未确定'], required: true },
        { id: 'DQ-003', label: '您的团队规模是？', type: 'radio', options: ['个人', '2-5人', '6-20人', '20人以上'], required: true },
        { id: 'DQ-004', label: '目前最大的痛点是什么？', type: 'checkbox', options: ['不会写话术', '数据不会分析', '客户转化率低', '不知道怎么开始', '其他'], required: true },
        { id: 'DQ-005', label: '月均直播场次', type: 'select', options: ['0场（新手）', '1-5场', '6-15场', '15场以上'], required: false },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-01',
    },
    {
      id: 'DIAG-002',
      title: '销售转化能力诊断',
      questions: [
        { id: 'DQ-006', label: '您直播间的平均在线人数？', type: 'select', options: ['50人以下', '50-200人', '200-1000人', '1000人以上'], required: true },
        { id: 'DQ-007', label: '您的加微率大概是多少？', type: 'radio', options: ['10%以下', '10%-30%', '30%-50%', '50%以上'], required: true },
        { id: 'DQ-008', label: '从加微到成交平均需要多久？', type: 'radio', options: ['1天内', '2-3天', '4-7天', '7天以上'], required: true },
        { id: 'DQ-009', label: '您是否有系统的客户跟进流程？', type: 'radio', options: ['有完整流程', '有但不规范', '没有，随缘跟进'], required: true },
        { id: 'DQ-010', label: '客单价主要集中在哪个区间？', type: 'select', options: ['500元以下', '500-2000元', '2000-10000元', '10000元以上'], required: false },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-07-01',
    },
    {
      id: 'DIAG-003',
      title: '团队成长需求诊断',
      questions: [
        { id: 'DQ-011', label: '您希望未来3个月的团队规模是？', type: 'radio', options: ['维持现有规模', '扩大2倍', '扩大3倍以上'], required: true },
        { id: 'DQ-012', label: '您最需要提升的能力是？', type: 'checkbox', options: ['话术能力', '数据分析', '客户转化', '团队管理', '品牌建设'], required: true },
        { id: 'DQ-013', label: '您是否有品牌化的计划？', type: 'radio', options: ['已经有品牌', '计划中', '暂无打算'], required: true },
        { id: 'DQ-014', label: '您对OEM贴牌或合伙人模式感兴趣吗？', type: 'radio', options: ['非常感兴趣', '了解一下', '暂时不感兴趣'], required: false },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-08-01',
    },
  ], []);
}

/* ============= 报价方案 ============= */

export function useQuotations(): Quotation[] {
  return useMemo(() => [
    {
      id: 'QUOTE-001',
      title: '个人创业者快速起盘方案',
      targetTier: ProductTier.STANDARD,
      description: '适合个人直播创业者，以最低成本快速启动AI赋能直播带货',
      items: [
        { name: '标准版年度订阅', description: 'AI话术生成+基础数据+社群支持', amount: 899, unit: '元/年' },
        { name: '新手训练营', description: '7天线上集训+实操指导', amount: 0, unit: '免费赠送' },
      ],
      totalAmount: 899,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-01',
    },
    {
      id: 'QUOTE-002',
      title: '中小团队高效增长方案',
      targetTier: ProductTier.AGENT,
      description: '适合2-5人团队，全套AI销售工具+团队协作功能',
      items: [
        { name: '代理版年度订阅', description: 'AI全套工具+团队管理+诊断工具', amount: 9800, unit: '元/年' },
        { name: '团队上手培训', description: '2小时线上专场培训（含答疑）', amount: 0, unit: '免费赠送' },
        { name: '定制化话术包', description: '根据产品定制20条专属话术', amount: 0, unit: '免费赠送' },
      ],
      totalAmount: 9800,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-15',
    },
    {
      id: 'QUOTE-003',
      title: '品牌定制全套解决方案',
      targetTier: ProductTier.OEM,
      description: '适合成熟团队，OEM品牌定制+完整销售体系搭建',
      items: [
        { name: '贴牌版年度订阅', description: '全套品牌定制+CRM+API', amount: 29800, unit: '元/年' },
        { name: '品牌系统部署', description: 'OEM品牌定制+系统部署', amount: 0, unit: '免费赠送' },
        { name: '全员培训服务', description: '团队培训+考核认证', amount: 0, unit: '免费赠送' },
        { name: '专属客户成功经理', description: '1对1专属服务+季度复盘', amount: 0, unit: '免费赠送' },
      ],
      totalAmount: 29800,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-07-01',
    },
    {
      id: 'QUOTE-004',
      title: '战略合伙人尊享方案',
      targetTier: ProductTier.PARTNER,
      description: '区域独家授权+品牌溢价分润+战略资源对接',
      items: [
        { name: '合伙人版年度订阅', description: '区域独家授权+品牌溢价分润', amount: 159800, unit: '元/年' },
        { name: '联合市场推广基金', description: '总部提供市场推广资源支持', amount: 0, unit: '免费赠送' },
        { name: '年度分红权益', description: '按区域业绩享受年度分红', amount: 0, unit: '按比例' },
        { name: '战略资源对接', description: '总部资源优先对接+季度战略会', amount: 0, unit: '免费赠送' },
      ],
      totalAmount: 159800,
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-08-01',
    },
  ], []);
}

/* ============= 升单SOP ============= */

export function useSOPs(): SOP[] {
  return useMemo(() => [
    {
      id: 'SOP-001',
      title: '标准版→代理版升单流程',
      targetStage: '成交后30天内',
      steps: [
        {
          stepOrder: 1,
          title: '价值感知培育',
          description: '在成交后第一周内，主动向客户展示标准版之外的高级功能，通过客户成功案例和功能对比，让客户自然产生升级需求',
          duration: '成交后1-7天',
          resources: ['代理版功能清单', '客户升级案例集', '功能对比表'],
          checkItems: ['已发送代理版功能介绍', '已分享至少2个升级案例', '客户对高级功能表现出兴趣'],
        },
        {
          stepOrder: 2,
          title: '痛点挖掘与需求匹配',
          description: '通过定期回访了解客户使用情况，发现标准版无法满足的需求点，自然引导到代理版解决方案',
          duration: '成交后7-14天',
          resources: ['客户回访话术模板', '需求诊断问卷'],
          checkItems: ['已完成首次回访', '已记录客户使用痛点', '已匹配代理版对应功能'],
        },
        {
          stepOrder: 3,
          title: '方案演示与对比',
          description: '为客户定制代理版功能演示，突出团队协作、客户诊断等核心差异点',
          duration: '成交后14-21天',
          resources: ['代理版演示PPT', '对比分析模板', '报价方案'],
          checkItems: ['已完成在线演示', '已提供定制化报价', '客户已看到对比价值'],
        },
        {
          stepOrder: 4,
          title: '促成升级转化',
          description: '提供限时升级优惠（如首年折扣、额外赠品），推动客户当场决策',
          duration: '成交后21-30天',
          resources: ['限时优惠方案', '升级合同模板', '客户异议处理话术'],
          checkItems: ['已提供限时优惠', '已处理客户异议', '已完成升级签约'],
        },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-06-01',
      updatedAt: '2024-12-01',
    },
    {
      id: 'SOP-002',
      title: '代理版→贴牌版升单流程',
      targetStage: '使用3-6个月后',
      steps: [
        {
          stepOrder: 1,
          title: '品牌化需求激发',
          description: '通过行业趋势分析和竞品动态，激发客户对品牌化的需求',
          duration: '使用第3个月',
          resources: ['行业趋势报告', '品牌化案例集', '竞品品牌分析'],
          checkItems: ['已分享行业趋势', '客户对品牌化有认知', '已识别品牌化需求信号'],
        },
        {
          stepOrder: 2,
          title: 'OEM方案定制',
          description: '根据客户业务规模和需求，定制个性化的OEM贴牌方案',
          duration: '使用第4个月',
          resources: ['OEM方案模板', '定制案例库', 'ROI测算工具'],
          checkItems: ['已完成需求调研', '已出定制方案', '客户对方案满意'],
        },
        {
          stepOrder: 3,
          title: '商务谈判与签约',
          description: '围绕价格、服务周期、技术支持等关键条款进行商务谈判',
          duration: '使用第5个月',
          resources: ['OEM合同模板', '价格权限表', '竞品报价对标'],
          checkItems: ['条款已达成一致', '合同已审核', '已签约付款'],
        },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-07-01',
      updatedAt: '2024-11-28',
    },
    {
      id: 'SOP-003',
      title: '贴牌版→合伙人版升级路径',
      targetStage: '合作满1年后',
      steps: [
        {
          stepOrder: 1,
          title: '合作效果复盘',
          description: '系统回顾一年合作数据，展示贴牌版带来的实际业务增长',
          duration: '合作第11个月',
          resources: ['年度数据报告模板', 'ROI分析框架', '增长案例'],
          checkItems: ['已完成年度数据复盘', '已量化合作价值', '客户认同增长效果'],
        },
        {
          stepOrder: 2,
          title: '合伙人权益沟通',
          description: '详细介绍合伙人版权益，重点突出区域独家、品牌溢价分润和年度分红',
          duration: '合作第11个月',
          resources: ['合伙人权益手册', '分润模型测算', '区域市场分析'],
          checkItems: ['已完成合伙人权益介绍', '客户了解分润机制', '已进行区域市场分析'],
        },
        {
          stepOrder: 3,
          title: '签约与交接',
          description: '完成合伙人签约，进行区域授权交接和市场规划',
          duration: '合作第12个月',
          resources: ['合伙人合同', '区域授权文件', '市场启动计划'],
          checkItems: ['合同已签署', '授权文件已交接', '市场启动计划已制定'],
        },
      ],
      status: ContentStatus.PUBLISHED,
      createdAt: '2024-08-01',
      updatedAt: '2024-11-20',
    },
  ], []);
}

/* ============= 产品权益对比 ============= */

export function useComparisons() {
  return useMemo(() => ({
    headers: ['功能', '标准版', '代理版', '贴牌版', '合伙人版'],
    rows: [
      { feature: 'AI话术生成', values: ['✓ 基础', '✓ 高级', '✓ 专业', '✓ 全功能'] },
      { feature: '客户诊断工具', values: ['✕', '✓', '✓', '✓'] },
      { feature: '竞品对比分析', values: ['✕', '✓', '✓', '✓'] },
      { feature: '自动报价方案', values: ['✕', '✓', '✓', '✓'] },
      { feature: '团队协作', values: ['✕', '最多5人', '最多20人', '不限'] },
      { feature: '品牌定制', values: ['✕', '✕', '✓ OEM', '✓ 深度'] },
      { feature: 'API接口', values: ['✕', '✕', '✓', '✓'] },
      { feature: '专属客户经理', values: ['✕', '✕', '✓', '✓'] },
      { feature: '区域独家授权', values: ['✕', '✕', '✕', '✓'] },
      { feature: '年度分红', values: ['✕', '✕', '✕', '✓'] },
      { feature: '价格', values: ['¥899/年', '¥9,800/年', '¥29,800/年', '¥159,800/年'] },
    ],
  }), []);
}

/* ============= 招商代理中心 ============= */

export function useAgentList(): Agent[] {
  return useMemo(() => [
    {
      id: 'AGT-001', name: '张伟', phone: '138****1234', email: 'zhangwei@example.com',
      level: AgentLevel.GOLD, region: '华东-上海', totalSales: 458000, totalCommission: 68700,
      agreementCount: 2, status: ContentStatus.PUBLISHED, joinedAt: '2024-03-15', updatedAt: '2024-12-18',
    },
    {
      id: 'AGT-002', name: '李芳', phone: '139****5678', email: 'lifang@example.com',
      level: AgentLevel.PLATINUM, region: '华南-广州', totalSales: 892000, totalCommission: 133800,
      agreementCount: 3, status: ContentStatus.PUBLISHED, joinedAt: '2024-01-10', updatedAt: '2024-12-17',
    },
    {
      id: 'AGT-003', name: '王强', phone: '137****9012', email: 'wangqiang@example.com',
      level: AgentLevel.SILVER, region: '华北-北京', totalSales: 215000, totalCommission: 32250,
      agreementCount: 1, status: ContentStatus.PUBLISHED, joinedAt: '2024-06-01', updatedAt: '2024-12-15',
    },
    {
      id: 'AGT-004', name: '赵敏', phone: '136****3456', email: 'zhaomin@example.com',
      level: AgentLevel.DIAMOND, region: '西南-成都', totalSales: 1560000, totalCommission: 234000,
      agreementCount: 4, status: ContentStatus.PUBLISHED, joinedAt: '2023-09-20', updatedAt: '2024-12-18',
    },
    {
      id: 'AGT-005', name: '陈刚', phone: '158****7890', email: 'chengang@example.com',
      level: AgentLevel.BRONZE, region: '华中-武汉', totalSales: 89000, totalCommission: 13350,
      agreementCount: 1, status: ContentStatus.PUBLISHED, joinedAt: '2024-09-01', updatedAt: '2024-12-10',
    },
    {
      id: 'AGT-006', name: '刘洋', phone: '186****2345', email: 'liuyang@example.com',
      level: AgentLevel.GOLD, region: '华东-杭州', totalSales: 567000, totalCommission: 85050,
      agreementCount: 2, status: ContentStatus.PUBLISHED, joinedAt: '2024-04-10', updatedAt: '2024-12-16',
    },
  ], []);
}

export function useCommissionRules(): CommissionRule[] {
  return useMemo(() => [
    { id: 'CR-001', level: AgentLevel.BRONZE, productTier: ProductTier.STANDARD, commissionRate: 10, condition: '月销售额≥5万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-002', level: AgentLevel.SILVER, productTier: ProductTier.STANDARD, commissionRate: 12, condition: '月销售额≥10万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-003', level: AgentLevel.SILVER, productTier: ProductTier.AGENT, commissionRate: 15, condition: '月销售额≥10万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-004', level: AgentLevel.GOLD, productTier: ProductTier.AGENT, commissionRate: 18, condition: '月销售额≥20万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-005', level: AgentLevel.GOLD, productTier: ProductTier.OEM, commissionRate: 20, condition: '月销售额≥20万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-006', level: AgentLevel.PLATINUM, productTier: ProductTier.OEM, commissionRate: 22, condition: '月销售额≥50万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-007', level: AgentLevel.PLATINUM, productTier: ProductTier.PARTNER, commissionRate: 25, condition: '月销售额≥50万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
    { id: 'CR-008', level: AgentLevel.DIAMOND, productTier: ProductTier.PARTNER, commissionRate: 30, condition: '月销售额≥100万', status: ContentStatus.PUBLISHED, createdAt: '2024-01-01' },
  ], []);
}

export function useSettlements(): CommissionSettlement[] {
  return useMemo(() => [
    { id: 'SET-001', agentId: 'AGT-001', agentName: '张伟', period: '2024-11', totalAmount: 48500, commissionAmount: 7275, rate: 15, status: SettlementStatus.APPROVED, orderCount: 12, paidAt: '2024-12-10', createdAt: '2024-12-01' },
    { id: 'SET-002', agentId: 'AGT-002', agentName: '李芳', period: '2024-11', totalAmount: 89600, commissionAmount: 16128, rate: 18, status: SettlementStatus.PAID, orderCount: 23, paidAt: '2024-12-12', createdAt: '2024-12-01' },
    { id: 'SET-003', agentId: 'AGT-004', agentName: '赵敏', period: '2024-11', totalAmount: 156800, commissionAmount: 34496, rate: 22, status: SettlementStatus.PAID, orderCount: 35, paidAt: '2024-12-12', createdAt: '2024-12-01' },
    { id: 'SET-004', agentId: 'AGT-003', agentName: '王强', period: '2024-11', totalAmount: 23500, commissionAmount: 2820, rate: 12, status: SettlementStatus.AUDITING, orderCount: 5, createdAt: '2024-12-01' },
    { id: 'SET-005', agentId: 'AGT-001', agentName: '张伟', period: '2024-10', totalAmount: 52000, commissionAmount: 7800, rate: 15, status: SettlementStatus.PAID, orderCount: 14, paidAt: '2024-11-10', createdAt: '2024-11-01' },
    { id: 'SET-006', agentId: 'AGT-006', agentName: '刘洋', period: '2024-11', totalAmount: 62300, commissionAmount: 9345, rate: 15, status: SettlementStatus.PENDING, orderCount: 8, createdAt: '2024-12-01' },
    { id: 'SET-007', agentId: 'AGT-005', agentName: '陈刚', period: '2024-11', totalAmount: 9800, commissionAmount: 980, rate: 10, status: SettlementStatus.REJECTED, remark: '订单数据有误，需核实', orderCount: 3, createdAt: '2024-12-01' },
  ], []);
}

export function useAgentAgreements(): AgentAgreement[] {
  return useMemo(() => [
    { id: 'AGR-001', agentId: 'AGT-001', agentName: '张伟', title: '黄金代理合作协议（2024）', level: AgentLevel.GOLD, startDate: '2024-03-15', endDate: '2025-03-14', commissionRate: 15, status: AgreementStatus.ACTIVE, createdAt: '2024-03-15', updatedAt: '2024-11-20' },
    { id: 'AGR-002', agentId: 'AGT-002', agentName: '李芳', title: '铂金代理合作协议（2024-2025）', level: AgentLevel.PLATINUM, startDate: '2024-01-10', endDate: '2025-07-09', commissionRate: 22, status: AgreementStatus.ACTIVE, createdAt: '2024-01-10', updatedAt: '2024-12-01' },
    { id: 'AGR-003', agentId: 'AGT-004', agentName: '赵敏', title: '钻石代理合作协议（2024-2026）', level: AgentLevel.DIAMOND, startDate: '2024-03-01', endDate: '2026-02-28', commissionRate: 30, status: AgreementStatus.ACTIVE, createdAt: '2024-03-01', updatedAt: '2024-12-10' },
    { id: 'AGR-004', agentId: 'AGT-003', agentName: '王强', title: '白银代理合作协议（2024）', level: AgentLevel.SILVER, startDate: '2024-06-01', endDate: '2024-11-30', commissionRate: 12, status: AgreementStatus.EXPIRED, createdAt: '2024-06-01', updatedAt: '2024-11-30' },
    { id: 'AGR-005', agentId: 'AGT-005', agentName: '陈刚', title: '青铜代理合作协议', level: AgentLevel.BRONZE, startDate: '2024-09-01', endDate: '2025-08-31', commissionRate: 10, status: AgreementStatus.PENDING_SIGN, createdAt: '2024-09-01', updatedAt: '2024-09-01' },
  ], []);
}

export function useAgentPolicies(): AgentPolicy[] {
  return useMemo(() => [
    { id: 'AP-001', title: '代理商等级晋升标准（2024版）', category: 'level', content: '代理商等级分为青铜、白银、黄金、铂金、钻石五级。晋升条件包括销售额门槛、合作时长、客户满意度等维度。', effectiveDate: '2024-01-01', status: ContentStatus.PUBLISHED, sortOrder: 1, createdAt: '2024-01-01' },
    { id: 'AP-002', title: '月度佣金结算规则', category: 'commission', content: '每月5日前生成上月结算单，15日前完成打款。佣金根据代理等级和产品线阶梯式比例计算。', effectiveDate: '2024-01-01', status: ContentStatus.PUBLISHED, sortOrder: 2, createdAt: '2024-01-01' },
    { id: 'AP-003', title: '新代理商启航培训计划', category: 'training', content: '新签约代理商需在30天内完成基础培训，含产品知识、系统操作、销售技巧三大模块。', effectiveDate: '2024-03-01', status: ContentStatus.PUBLISHED, sortOrder: 3, createdAt: '2024-03-01' },
    { id: 'AP-004', title: '季度销售竞赛奖励办法', category: 'reward', content: '每季度根据销售额排名，前三名分别获得额外奖励金和晋升推荐。', effectiveDate: '2024-06-01', status: ContentStatus.PUBLISHED, sortOrder: 4, createdAt: '2024-06-01' },
    { id: 'AP-005', title: '代理商考核退出机制', category: 'level', content: '连续3个月未达标或严重违规的代理商，将启动降级或退出流程。', effectiveDate: '2024-01-01', expireDate: '2025-01-01', status: ContentStatus.DRAFT, sortOrder: 5, createdAt: '2024-12-01' },
  ], []);
}

export function useGrowthPaths(): GrowthPath[] {
  return useMemo(() => [
    { id: 'GP-001', title: '青铜→白银成长路径', fromLevel: AgentLevel.BRONZE, toLevel: AgentLevel.SILVER, requirements: ['月均销售额≥10万', '合作满3个月', '完成基础培训', '客户满意度≥4星'], benefits: ['佣金比例提升2%', '享优先技术支持', '月度数据报告'], estimatedDuration: '3-6个月', sortOrder: 1, status: ContentStatus.PUBLISHED },
    { id: 'GP-002', title: '白银→黄金成长路径', fromLevel: AgentLevel.SILVER, toLevel: AgentLevel.GOLD, requirements: ['月均销售额≥20万', '合作满6个月', '通过进阶考核', '无违规记录'], benefits: ['佣金比例提升3%', '专属客户经理', '季度市场活动支持', '品牌授权使用'], estimatedDuration: '6-12个月', sortOrder: 2, status: ContentStatus.PUBLISHED },
    { id: 'GP-003', title: '黄金→铂金成长路径', fromLevel: AgentLevel.GOLD, toLevel: AgentLevel.PLATINUM, requirements: ['月均销售额≥50万', '合作满12个月', '团队≥5人', '培养2名新代理'], benefits: ['佣金比例提升4%', '区域保护政策', '联合品牌推广', '年度海外考察名额'], estimatedDuration: '12-18个月', sortOrder: 3, status: ContentStatus.PUBLISHED },
    { id: 'GP-004', title: '铂金→钻石成长路径', fromLevel: AgentLevel.PLATINUM, toLevel: AgentLevel.DIAMOND, requirements: ['月均销售额≥100万', '合作满24个月', '团队≥15人', '区域市场占有率≥30%'], benefits: ['佣金比例提升5%', '区域独家授权', '公司分红权益', '战略合伙人身份', '董事会列席资格'], estimatedDuration: '18-36个月', sortOrder: 4, status: ContentStatus.PUBLISHED },
  ], []);
}

/* ============= 获客引流中心 ============= */

export function useDailyActions(): DailyAction[] {
  return useMemo(() => [
    { id: 'DA-001', title: '发布抖音短视频（产品功能介绍）', channel: AcquisitionChannel.SHORT_VIDEO, description: '制作并发布一条60秒内的产品功能介绍短视频', status: TaskStatus.COMPLETED, assignee: '李明', deadline: '2024-12-18', completedAt: '2024-12-18', result: '播放量8500，点赞320，新增线索15条', createdAt: '2024-12-17' },
    { id: 'DA-002', title: '微信群日常运营（3个群）', channel: AcquisitionChannel.PRIVATE_DOMAIN, description: '在3个客户微信群中分享行业资讯和产品干货', status: TaskStatus.IN_PROGRESS, assignee: '王芳', deadline: '2024-12-19', createdAt: '2024-12-18' },
    { id: 'DA-003', title: '朋友圈推广文案发布', channel: AcquisitionChannel.PRIVATE_DOMAIN, description: '发布一条关于限时优惠的朋友圈文案', status: TaskStatus.NOT_STARTED, assignee: '李明', deadline: '2024-12-20', createdAt: '2024-12-18' },
    { id: 'DA-004', title: '策划周末地推活动方案', channel: AcquisitionChannel.OFFLINE, description: '完成周末商圈地推活动的详细方案策划', status: TaskStatus.IN_PROGRESS, assignee: '陈晨', deadline: '2024-12-21', createdAt: '2024-12-16' },
    { id: 'DA-005', title: '预约直播嘉宾（周三场）', channel: AcquisitionChannel.LIVE, description: '联系并确认周三直播的嘉宾人选和话题', status: TaskStatus.OVERDUE, assignee: '王芳', deadline: '2024-12-17', createdAt: '2024-12-14' },
  ], []);
}

export function useShortVideoPlans(): ShortVideoPlan[] {
  return useMemo(() => [
    { id: 'SV-001', title: '极享AI 1分钟快速上手', platform: 'douyin', script: '展示从注册到生成第一条话术的全流程，突出简单易用', publishDate: '2024-12-15', status: ContentStatus.PUBLISHED, views: 12500, likes: 890, comments: 56, shares: 234, leads: 42, createdAt: '2024-12-10' },
    { id: 'SV-002', title: '直播带货翻倍秘籍（上）', platform: 'douyin', script: '分享3个提升直播间转化的实用技巧，引出极享AI解决方案', publishDate: '2024-12-12', status: ContentStatus.PUBLISHED, views: 23200, likes: 1560, comments: 128, shares: 567, leads: 89, createdAt: '2024-12-08' },
    { id: 'SV-003', title: '客户诊断实操演示', platform: 'kuaishou', script: '现场演示如何使用极享AI的客户诊断工具，从分析到出方案', publishDate: '2024-12-18', status: ContentStatus.PUBLISHED, views: 8900, likes: 620, comments: 45, shares: 178, leads: 28, createdAt: '2024-12-14' },
    { id: 'SV-004', title: '代理商成功故事-李芳专访', platform: 'shipinhao', script: '采访铂金代理李芳，分享从个体到达人团队的成长经历', publishDate: '2024-12-20', status: ContentStatus.DRAFT, views: 0, likes: 0, comments: 0, shares: 0, leads: 0, createdAt: '2024-12-16' },
    { id: 'SV-005', title: '年底收官·限时福利预告', platform: 'douyin', script: '年底回馈老客户，限时折扣+赠品活动预告', publishDate: '2024-12-22', status: ContentStatus.DRAFT, views: 0, likes: 0, comments: 0, shares: 0, leads: 0, createdAt: '2024-12-18' },
  ], []);
}

export function useLiveStreamPlans(): LiveStreamPlan[] {
  return useMemo(() => [
    { id: 'LS-001', title: '极享AI产品深度解读：代理版', platform: '抖音', scheduledAt: '2024-12-19 19:00', duration: 60, host: '张老师', status: ContentStatus.PUBLISHED, peakViewers: 328, totalViewers: 1850, newFollowers: 89, leads: 36, remark: '重点介绍客户诊断功能', createdAt: '2024-12-15' },
    { id: 'LS-002', title: '直播带货实战技巧分享', platform: '视频号', scheduledAt: '2024-12-17 15:00', duration: 45, host: '王芳', status: ContentStatus.PUBLISHED, peakViewers: 256, totalViewers: 1230, newFollowers: 56, leads: 22, createdAt: '2024-12-13' },
    { id: 'LS-003', title: '年终回馈·限时秒杀专场', platform: '抖音', scheduledAt: '2024-12-22 20:00', duration: 90, host: '张老师', status: ContentStatus.DRAFT, peakViewers: 0, totalViewers: 0, newFollowers: 0, leads: 0, createdAt: '2024-12-18' },
    { id: 'LS-004', title: 'AI赋能直播带货：2025趋势展望', platform: '快手', scheduledAt: '2024-12-25 14:00', duration: 60, host: '李总', status: ContentStatus.DRAFT, peakViewers: 0, totalViewers: 0, newFollowers: 0, leads: 0, createdAt: '2024-12-18' },
    { id: 'LS-005', title: '新品发布：OEM贴牌版全新升级', platform: '抖音', scheduledAt: '2024-12-14 20:00', duration: 75, host: '张老师', status: ContentStatus.PUBLISHED, peakViewers: 412, totalViewers: 2680, newFollowers: 134, leads: 58, createdAt: '2024-12-10' },
  ], []);
}

export function usePrivateDomainRecords(): PrivateDomainRecord[] {
  return useMemo(() => [
    { id: 'PD-001', channel: 'wechat', title: '1对1跟进：高意向客户王总', content: '发送产品介绍资料并预约Demo演示', publishDate: '2024-12-18', status: ContentStatus.PUBLISHED, views: 1, interactions: 1, leads: 1, tags: ['高意向', '跟进'], createdAt: '2024-12-18' },
    { id: 'PD-002', channel: 'group', title: '行业交流群：分享AI直播趋势报告', content: '在3个行业交流群分享2025年AI直播带货趋势报告', publishDate: '2024-12-17', status: ContentStatus.PUBLISHED, views: 680, interactions: 45, leads: 8, tags: ['行业报告', '群运营'], createdAt: '2024-12-17' },
    { id: 'PD-003', channel: 'moments', title: '朋友圈：客户成功案例分享', content: '分享某代理商用极享AI后销量翻倍的真实案例', publishDate: '2024-12-16', status: ContentStatus.PUBLISHED, views: 3560, interactions: 128, leads: 15, tags: ['案例', '朋友圈'], createdAt: '2024-12-16' },
    { id: 'PD-004', channel: 'official_account', title: '公众号推文：极享AI年度总结', content: '盘点2024年极享AI的重要更新和客户成功故事', publishDate: '2024-12-20', status: ContentStatus.DRAFT, views: 0, interactions: 0, leads: 0, tags: ['公众号', '年度总结'], createdAt: '2024-12-15' },
    { id: 'PD-005', channel: 'group', title: '老客户福利群：年终回馈活动', content: '在VIP客户群发布年终回馈活动详情，老客户专享折扣', publishDate: '2024-12-19', status: ContentStatus.DRAFT, views: 0, interactions: 0, leads: 0, tags: ['福利', '回馈'], createdAt: '2024-12-18' },
  ], []);
}

export function useOfflineActivities(): OfflineActivity[] {
  return useMemo(() => [
    { id: 'OA-001', title: '上海浦东新国际博览中心展会', location: '上海新国际博览中心E3馆', activityDate: '2024-12-10', budget: 15000, actualCost: 12800, contacts: 256, leads: 68, status: ContentStatus.PUBLISHED, description: '参加2024年AI产业博览会，现场展示产品并收集意向客户', responsiblePerson: '张明', createdAt: '2024-11-20' },
    { id: 'OA-002', title: '广州天河商圈地推活动', location: '广州天河城广场', activityDate: '2024-12-15', budget: 8000, actualCost: 7200, contacts: 180, leads: 42, status: ContentStatus.PUBLISHED, description: '周末商圈地推，面向电商创业者和中小商家推广', responsiblePerson: '李芳', createdAt: '2024-12-01' },
    { id: 'OA-003', title: '杭州互联网创业沙龙', location: '杭州梦想小镇', activityDate: '2024-12-22', budget: 5000, actualCost: 0, contacts: 0, leads: 0, status: ContentStatus.DRAFT, description: '联合杭州本地创业社区举办小型沙龙，分享AI销售工具趋势', responsiblePerson: '陈晨', createdAt: '2024-12-12' },
    { id: 'OA-004', title: '成都代理商招募会', location: '成都高新区希尔顿酒店', activityDate: '2024-12-28', budget: 20000, actualCost: 0, contacts: 0, leads: 0, status: ContentStatus.DRAFT, description: '2025年第一季度西南地区代理商招募说明会', responsiblePerson: '张明', createdAt: '2024-12-15' },
  ], []);
}

/* ============= 案例见证中心 ============= */

export function useCaseStudies(): CaseStudy[] {
  return useMemo(() => [
    {
      id: 'CS-001', title: '从0到月销60万：新手主播小美的蜕变', category: CaseCategory.TRANSFORMATION, customerName: '小美', customerTier: ProductTier.AGENT,
      summary: '零基础直播新手，借助极享AI全套工具，3个月内实现月销60万的突破',
      challenge: '完全没有直播经验，不会写话术，不懂数据分析，试播第一周只有3个观众',
      solution: '使用极享AI标准版→代理版，从AI话术生成开始，逐步使用客户诊断、竞品分析功能，系统化提升销售能力',
      result: '第1个月：月销2.8万 → 第2个月：月销18万 → 第3个月：月销62万，加微率从5%提升到42%',
      metrics: [{ label: '月销售额', value: '62万' }, { label: '加微率', value: '42%' }, { label: '客单价', value: '¥2,850' }, { label: '转化率', value: '28%' }],
      tags: ['新手', '直播', '逆袭'], status: ContentStatus.PUBLISHED, publishedAt: '2024-11-15', createdAt: '2024-11-10', updatedAt: '2024-12-01',
    },
    {
      id: 'CS-002', title: '品牌化升级：广州某MCN机构OEM合作案例', category: CaseCategory.PRODUCT, customerName: '广州星光MCN', customerTier: ProductTier.OEM,
      summary: '中型MCN机构通过OEM贴牌合作，打造自有品牌的AI销售赋能体系',
      challenge: '旗下30+主播，管理混乱，缺乏统一话术和数据体系，品牌化需求迫切',
      solution: '采用OEM贴牌版，定制品牌化的AI话术系统+CRM集成+数据看板，全员培训和考核',
      result: '主播管理效率提升200%，话术产出效率提升500%，整体GMV增长180%',
      metrics: [{ label: 'GMV增长', value: '180%' }, { label: '主播人效', value: '3倍' }, { label: '话术产出', value: '5倍' }, { label: '客户满意度', value: '4.8/5' }],
      tags: ['OEM', 'MCN', '品牌化'], status: ContentStatus.PUBLISHED, publishedAt: '2024-10-20', createdAt: '2024-10-15', updatedAt: '2024-11-25',
    },
    {
      id: 'CS-003', title: '区域独家代理：成都赵敏的合伙人之路', category: CaseCategory.REGION, customerName: '赵敏', customerTier: ProductTier.PARTNER,
      summary: '从个人代理到区域合伙人，1年实现月流水150万+的跨越式增长',
      challenge: '早期作为个人代理，受限于品牌影响力和工具不足，增长遇到瓶颈',
      solution: '升级为合伙人，获得区域独家授权、品牌溢价分润和总部战略资源',
      result: '团队从1人扩展到18人，覆盖西南地区3省，月流水突破150万',
      metrics: [{ label: '月流水', value: '156万' }, { label: '团队规模', value: '18人' }, { label: '客户数', value: '286家' }, { label: '年分红', value: '35万' }],
      tags: ['合伙人', '区域代理', '增长'], status: ContentStatus.PUBLISHED, publishedAt: '2024-12-01', createdAt: '2024-11-28', updatedAt: '2024-12-10',
    },
    {
      id: 'CS-004', title: '传统电商转型AI直播的标杆案例', category: CaseCategory.INDUSTRY, customerName: '杭州品尚电商', customerTier: ProductTier.AGENT,
      summary: '传统电商团队成功转型AI直播带货，3个月实现业绩翻番',
      challenge: '传统图文电商流量下滑，直播转型困难，缺乏直播人才和话术体系',
      solution: '使用极享AI代理版，从话术生成到客户诊断到报价全流程AI赋能',
      result: '成功孵化3个直播账号，月GMV从80万增长到160万，团队人均提成翻倍',
      metrics: [{ label: '月GMV', value: '160万' }, { label: '直播号', value: '3个' }, { label: 'ROI', value: '1:8' }, { label: '团队满意', value: '96%' }],
      tags: ['传统电商', '转型', '直播'], status: ContentStatus.PUBLISHED, publishedAt: '2024-11-25', createdAt: '2024-11-20', updatedAt: '2024-12-05',
    },
    {
      id: 'CS-005', title: '连锁品牌客户诊断提效案例', category: CaseCategory.INDUSTRY, customerName: '贝贝母婴连锁', customerTier: ProductTier.AGENT,
      summary: '全国28家连锁门店使用客户诊断工具后，销售效率提升3倍',
      challenge: '连锁门店销售能力参差不齐，客户流失率高，缺乏标准化的跟进流程',
      solution: '使用极享AI客户诊断+SOP系统，建立标准化的客户跟进和服务流程',
      result: '客户转化率提升65%，平均成交周期从7天缩短到2天，客户满意度提升至4.7',
      metrics: [{ label: '转化率', value: '+65%' }, { label: '成交周期', value: '2天' }, { label: '门店覆盖', value: '28家' }, { label: '满意率', value: '94%' }],
      tags: ['连锁', '诊断', '标准化'], status: ContentStatus.PUBLISHED, publishedAt: '2024-12-05', createdAt: '2024-12-01', updatedAt: '2024-12-12',
    },
    {
      id: 'CS-006', title: '0成本启动：宝妈兼职月入2万+', category: CaseCategory.TRANSFORMATION, customerName: '林晓', customerTier: ProductTier.STANDARD,
      summary: '全职宝妈利用业余时间，通过极享AI标准版实现月入2万+的副业收入',
      challenge: '时间碎片化，没有团队，预算有限，需要低门槛低成本的解决方案',
      solution: '选择标准版，利用AI话术生成和社群运营功能，专注小规模精准转化',
      result: '每天投入2-3小时，月均成交22单，月收入稳定在2万以上',
      metrics: [{ label: '月投入', value: '60小时' }, { label: '月收入', value: '2.2万' }, { label: '成交单数', value: '22单' }, { label: 'ROI', value: '1:24' }],
      tags: ['宝妈', '副业', '轻创业'], status: ContentStatus.DRAFT, publishedAt: '', createdAt: '2024-12-10', updatedAt: '2024-12-15',
    },
  ], []);
}

export function useCaseTemplates(): CaseTemplate[] {
  return useMemo(() => [
    {
      id: 'CT-001', title: '客户转型故事模板', description: '适合客户从使用前到使用后的转变故事', category: CaseCategory.TRANSFORMATION,
      sections: [
        { id: 'CTS-001', title: '客户背景', placeholder: '描述客户的行业、规模、原有痛点...', hint: '重点突出客户转型前的困境', sortOrder: 1 },
        { id: 'CTS-002', title: '面临挑战', placeholder: '客户遇到的具体问题和瓶颈...', hint: '量化问题，如"月销量不足XX"', sortOrder: 2 },
        { id: 'CTS-003', title: '解决方案', placeholder: '如何使用极享AI解决上述问题...', hint: '说明使用了哪些功能模块', sortOrder: 3 },
        { id: 'CTS-004', title: '最终成果', placeholder: '使用后的具体数据提升...', hint: '用数据说话，前后对比', sortOrder: 4 },
      ],
      status: ContentStatus.PUBLISHED, createdAt: '2024-06-01',
    },
    {
      id: 'CT-002', title: '产品案例模板', description: '聚焦某个产品版本或功能的实际应用效果', category: CaseCategory.PRODUCT,
      sections: [
        { id: 'CTS-005', title: '产品概述', placeholder: '介绍使用的产品版本和核心功能...', hint: '说明为什么选择这个版本', sortOrder: 1 },
        { id: 'CTS-006', title: '使用场景', placeholder: '客户在什么场景下使用产品...', hint: '描述具体的使用场景和频率', sortOrder: 2 },
        { id: 'CTS-007', title: '应用效果', placeholder: '使用后的具体收益和变化...', hint: '包含定性+定量效果', sortOrder: 3 },
        { id: 'CTS-008', title: '客户评价', placeholder: '客户的原话评价...', hint: '至少3条真实客户评价', sortOrder: 4 },
      ],
      status: ContentStatus.PUBLISHED, createdAt: '2024-06-15',
    },
  ], []);
}

export function useMaterials(): MaterialCollection[] {
  return useMemo(() => [
    { id: 'MAT-001', caseId: 'CS-001', title: '小美直播截图（前后对比）', type: 'screenshot', fileUrl: '/mock/materials/screenshot_001.png', fileSize: 2.4, source: '客户提供', tags: ['案例素材', '直播'], status: ContentStatus.PUBLISHED, uploadedAt: '2024-11-12' },
    { id: 'MAT-002', caseId: 'CS-001', title: '小美采访视频（3分钟）', type: 'video', fileUrl: '/mock/materials/video_001.mp4', fileSize: 156, source: '市场部拍摄', tags: ['采访', '视频'], status: ContentStatus.PUBLISHED, uploadedAt: '2024-11-15' },
    { id: 'MAT-003', caseId: 'CS-002', title: 'MCN机构数据报表截图', type: 'image', fileUrl: '/mock/materials/image_001.png', fileSize: 1.8, source: '客户提供', tags: ['数据', '报表'], status: ContentStatus.PUBLISHED, uploadedAt: '2024-10-18' },
    { id: 'MAT-004', title: '产品宣传背景图（横幅）', type: 'image', fileUrl: '/mock/materials/banner_001.png', fileSize: 3.2, source: '设计部制作', tags: ['宣传', '素材'], status: ContentStatus.PUBLISHED, uploadedAt: '2024-12-01' },
    { id: 'MAT-005', caseId: 'CS-004', title: '转型前后数据对比Excel', type: 'document', fileUrl: '/mock/materials/doc_001.xlsx', fileSize: 0.6, source: '客户成功部', tags: ['数据', '转型'], status: ContentStatus.PUBLISHED, uploadedAt: '2024-11-22' },
    { id: 'MAT-006', title: '客户颁奖典礼现场照片', type: 'image', fileUrl: '/mock/materials/photo_001.png', fileSize: 4.5, source: '市场部拍摄', tags: ['活动', '颁奖'], status: ContentStatus.DRAFT, uploadedAt: '2024-12-10' },
  ], []);
}

export function useInterviews(): CustomerInterview[] {
  return useMemo(() => [
    { id: 'INT-001', customerName: '小美', customerTitle: '极享AI代理版用户', tier: ProductTier.AGENT, interviewDate: '2024-11-10', interviewer: '张明', highlights: ['从零基础到月销60万', 'AI话术生成最实用', '推荐给身边所有做直播的朋友'], status: ContentStatus.PUBLISHED, tags: ['新手', '转型', '推荐'], createdAt: '2024-11-12' },
    { id: 'INT-002', customerName: '赵敏', customerTitle: '极享AI钻石合伙人', tier: ProductTier.PARTNER, interviewDate: '2024-11-28', interviewer: '李芳', highlights: ['1年从个人到团队', '区域独家授权价值大', '和总部一起成长'], status: ContentStatus.PUBLISHED, tags: ['合伙人', '区域', '成长'], createdAt: '2024-11-30' },
    { id: 'INT-003', customerName: '王总', customerTitle: '杭州品尚电商CEO', tier: ProductTier.AGENT, interviewDate: '2024-11-20', interviewer: '张明', highlights: ['传统电商必须转型', 'AI赋能是全方位的', '团队士气明显提升'], status: ContentStatus.PUBLISHED, tags: ['传统电商', '转型', '管理'], createdAt: '2024-11-22' },
    { id: 'INT-004', customerName: '林晓', customerTitle: '极享AI标准版用户', tier: ProductTier.STANDARD, interviewDate: '2024-12-12', interviewer: '王芳', highlights: ['宝妈也能轻松赚钱', '每天2小时就够了', '比想象中简单很多'], status: ContentStatus.DRAFT, tags: ['宝妈', '副业', '轻创业'], createdAt: '2024-12-14' },
  ], []);
}

/* ============= 培训赋能中心 ============= */

export function useCourses(): Course[] {
  return useMemo(() => [
    { id: 'CRS-001', title: '极享AI产品入门', type: TrainingType.VIDEO, category: '入门必学', description: '15分钟掌握极享AI平台的核心功能和基本操作', duration: 15, chapters: [
      { id: 'CH-001', title: '平台概览与注册', duration: 3, sortOrder: 1, isPreview: true },
      { id: 'CH-002', title: 'AI话术生成功能', duration: 5, sortOrder: 2, isPreview: true },
      { id: 'CH-003', title: '客户诊断工具', duration: 4, sortOrder: 3, isPreview: false },
      { id: 'CH-004', title: '数据看板解读', duration: 3, sortOrder: 4, isPreview: false },
    ], instructor: '张老师', status: ContentStatus.PUBLISHED, enrolledCount: 568, completionRate: 82, rating: 4.7, createdAt: '2024-06-01', updatedAt: '2024-12-01' },
    { id: 'CRS-002', title: 'AI直播话术实战课', type: TrainingType.VIDEO, category: '核心技能', description: '从零开始学习使用AI生成高质量直播话术的技巧和心法', duration: 45, chapters: [
      { id: 'CH-005', title: '好话术的三大要素', duration: 8, sortOrder: 1, isPreview: true },
      { id: 'CH-006', title: 'AI话术模板选择策略', duration: 10, sortOrder: 2, isPreview: false },
      { id: 'CH-007', title: '话术个性化调整技巧', duration: 12, sortOrder: 3, isPreview: false },
      { id: 'CH-008', title: '高转化话术的底层逻辑', duration: 15, sortOrder: 4, isPreview: false },
    ], instructor: '张老师', status: ContentStatus.PUBLISHED, enrolledCount: 432, completionRate: 68, rating: 4.5, createdAt: '2024-07-01', updatedAt: '2024-12-05' },
    { id: 'CRS-003', title: '客户诊断与需求分析', type: TrainingType.VIDEO, category: '核心技能', description: '学会用客户诊断工具快速分析客户需求并匹配产品方案', duration: 35, chapters: [
      { id: 'CH-009', title: '诊断模板的设计思路', duration: 8, sortOrder: 1, isPreview: false },
      { id: 'CH-010', title: '诊断结果解读方法', duration: 12, sortOrder: 2, isPreview: false },
      { id: 'CH-011', title: '问题匹配与方案推荐', duration: 15, sortOrder: 3, isPreview: false },
    ], instructor: '李总监', status: ContentStatus.PUBLISHED, enrolledCount: 356, completionRate: 71, rating: 4.6, createdAt: '2024-08-01', updatedAt: '2024-11-28' },
    { id: 'CRS-004', title: '代理商成长必修课', type: TrainingType.VIDEO, category: '代理商', description: '面向代理商的产品知识、销售技巧和团队管理全攻略', duration: 60, chapters: [
      { id: 'CH-012', title: '产品体系深度理解', duration: 15, sortOrder: 1, isPreview: true },
      { id: 'CH-013', title: '高效获客方法论', duration: 15, sortOrder: 2, isPreview: false },
      { id: 'CH-014', title: '客户跟进与成交技巧', duration: 18, sortOrder: 3, isPreview: false },
      { id: 'CH-015', title: '团队搭建与管理', duration: 12, sortOrder: 4, isPreview: false },
    ], instructor: '李总监', status: ContentStatus.PUBLISHED, enrolledCount: 186, completionRate: 54, rating: 4.3, createdAt: '2024-09-01', updatedAt: '2024-12-10' },
    { id: 'CRS-005', title: '极享AI合规与风控指南', type: TrainingType.DOCUMENT, category: '合规必读', description: '了解平台合规要求、数据安全规范和风险防控要点', duration: 25, chapters: [
      { id: 'CH-016', title: '平台使用规范', duration: 8, sortOrder: 1, isPreview: true },
      { id: 'CH-017', title: '数据安全与隐私保护', duration: 10, sortOrder: 2, isPreview: false },
      { id: 'CH-018', title: '违规行为与处罚', duration: 7, sortOrder: 3, isPreview: false },
    ], instructor: '法务部', status: ContentStatus.PUBLISHED, enrolledCount: 298, completionRate: 90, rating: 4.2, createdAt: '2024-10-01', updatedAt: '2024-11-20' },
  ], []);
}

export function useTrainingCamps(): TrainingCamp[] {
  return useMemo(() => [
    { id: 'CAMP-001', title: '12月新代理商特训营', description: '针对12月新签约代理商的高强度集训营，帮助快速上手', startDate: '2024-12-01', endDate: '2024-12-28', courses: ['CRS-001', 'CRS-002', 'CRS-004', 'CRS-005'], maxStudents: 50, enrolledCount: 38, status: TrainingStatus.IN_PROGRESS, instructor: '张老师', requirements: ['已签约代理商', '每天至少投入2小时学习'], createdAt: '2024-11-20' },
    { id: 'CAMP-002', title: 'Q4冲刺冲刺训练营', description: '第四季度最后一个月，全力冲刺年度目标', startDate: '2024-11-15', endDate: '2024-12-15', courses: ['CRS-002', 'CRS-003'], maxStudents: 30, enrolledCount: 28, status: TrainingStatus.IN_PROGRESS, instructor: '李总监', requirements: ['代理版及以上用户', '有明确销售目标'], createdAt: '2024-11-10' },
    { id: 'CAMP-003', title: '2025年1月新人训练营', description: '2025年第一期新人培训，面向所有新注册用户和代理商', startDate: '2025-01-05', endDate: '2025-01-25', courses: ['CRS-001', 'CRS-005'], maxStudents: 100, enrolledCount: 45, status: TrainingStatus.NOT_STARTED, instructor: '张老师', requirements: ['新注册用户或代理商'], createdAt: '2024-12-15' },
  ], []);
}

export function useAssignments(): StudentAssignment[] {
  return useMemo(() => [
    { id: 'ASG-001', campId: 'CAMP-001', campTitle: '12月新代理商特训营', studentName: '陈刚', courseId: 'CRS-001', courseTitle: '极享AI产品入门', title: '产品入门心得', content: '经过学习，对极享AI的产品体系有了全面了解，特别是客户诊断工具让我印象深刻。', status: ContentStatus.PUBLISHED, submittedAt: '2024-12-05', score: 92, comment: '理解深刻，建议结合实际案例进一步练习', gradedAt: '2024-12-06' },
    { id: 'ASG-002', campId: 'CAMP-001', campTitle: '12月新代理商特训营', studentName: '王强', courseId: 'CRS-002', courseTitle: 'AI直播话术实战课', title: '话术实战练习', content: '为某护肤品客户生成了一套直播话术，包含开场、产品介绍、促单三个环节。', status: ContentStatus.PUBLISHED, submittedAt: '2024-12-08', score: 85, comment: '结构完整，可以在促单环节加强紧迫感', gradedAt: '2024-12-09' },
    { id: 'ASG-003', campId: 'CAMP-001', campTitle: '12月新代理商特训营', studentName: '刘洋', courseId: 'CRS-004', courseTitle: '代理商成长必修课', title: '我的市场开拓计划', content: '计划先在本地跑通模式，再向周边城市扩展，初步锁定3个目标行业。', status: ContentStatus.PUBLISHED, submittedAt: '2024-12-10', score: 78, comment: '规划清晰，建议增加时间节点和量化目标', gradedAt: '2024-12-11' },
    { id: 'ASG-004', campId: 'CAMP-002', campTitle: 'Q4冲刺冲刺训练营', studentName: '张伟', courseId: 'CRS-003', courseTitle: '客户诊断与需求分析', title: '客户诊断案例分析', content: '对最近3个意向客户做了诊断分析，发现2个客户适合代理版，1个适合标准版。', status: ContentStatus.PUBLISHED, submittedAt: '2024-12-12', score: 90, comment: '分析很到位，继续跟进转化', gradedAt: '2024-12-13' },
  ], []);
}

export function useStudentProgress(): StudentProgress[] {
  return useMemo(() => [
    { id: 'SP-001', studentName: '陈刚', campId: 'CAMP-001', campTitle: '12月新代理商特训营', courseId: 'CRS-001', courseTitle: '极享AI产品入门', progress: 100, status: TrainingStatus.COMPLETED, lastAccessAt: '2024-12-05', enrolledAt: '2024-12-01', completedAt: '2024-12-05' },
    { id: 'SP-002', studentName: '陈刚', campId: 'CAMP-001', campTitle: '12月新代理商特训营', courseId: 'CRS-002', courseTitle: 'AI直播话术实战课', progress: 60, status: TrainingStatus.IN_PROGRESS, lastAccessAt: '2024-12-10', enrolledAt: '2024-12-01' },
    { id: 'SP-003', studentName: '王强', campId: 'CAMP-001', campTitle: '12月新代理商特训营', courseId: 'CRS-001', courseTitle: '极享AI产品入门', progress: 100, status: TrainingStatus.COMPLETED, lastAccessAt: '2024-12-03', enrolledAt: '2024-12-01', completedAt: '2024-12-03' },
    { id: 'SP-004', studentName: '王强', campId: 'CAMP-001', campTitle: '12月新代理商特训营', courseId: 'CRS-002', courseTitle: 'AI直播话术实战课', progress: 100, status: TrainingStatus.COMPLETED, lastAccessAt: '2024-12-08', enrolledAt: '2024-12-01', completedAt: '2024-12-08' },
    { id: 'SP-005', studentName: '刘洋', campId: 'CAMP-001', campTitle: '12月新代理商特训营', courseId: 'CRS-004', courseTitle: '代理商成长必修课', progress: 80, status: TrainingStatus.IN_PROGRESS, lastAccessAt: '2024-12-12', enrolledAt: '2024-12-01' },
    { id: 'SP-006', studentName: '张伟', campId: 'CAMP-002', campTitle: 'Q4冲刺冲刺训练营', courseId: 'CRS-003', courseTitle: '客户诊断与需求分析', progress: 100, status: TrainingStatus.COMPLETED, lastAccessAt: '2024-12-12', enrolledAt: '2024-11-15', completedAt: '2024-12-12' },
    { id: 'SP-007', studentName: '张伟', campId: 'CAMP-002', campTitle: 'Q4冲刺冲刺训练营', courseId: 'CRS-002', courseTitle: 'AI直播话术实战课', progress: 30, status: TrainingStatus.IN_PROGRESS, lastAccessAt: '2024-12-15', enrolledAt: '2024-11-15' },
  ], []);
}

/* ============= 交付服务中心 ============= */

export function useDeliverySOPs(): DeliverySOP[] {
  return useMemo(() => [
    { id: 'DSOP-001', title: '标准版客户 Onboarding 流程', category: SOPCategory.ONBOARDING, description: '标准版客户从开通到使用的基础引导流程', steps: [
      { stepOrder: 1, title: '账号开通与初始化', description: '为客户创建账号，配置基本信息', responsibleRole: '客户成功专员', duration: '0.5天', deliverables: ['已激活账号', '密码已发送'], checkItems: ['账号可正常登录', '基础信息已配置'] },
      { stepOrder: 2, title: '产品功能介绍', description: '远程会议介绍产品核心功能和使用方法', responsibleRole: '客户成功经理', duration: '1天', deliverables: ['功能演示PPT', '操作录屏'], checkItems: ['已完成功能演示', '客户已了解基本操作'] },
      { stepOrder: 3, title: '首次话术配置', description: '协助客户配置第一批AI话术模板', responsibleRole: '客户成功专员', duration: '1天', deliverables: ['首批话术模板', '配置指南'], checkItems: ['话术已可用', '客户测试满意'] },
      { stepOrder: 4, title: '数据看板设置', description: '配置客户专属数据看板', responsibleRole: '技术支持', duration: '0.5天', deliverables: ['数据看板已配置'], checkItems: ['数据正常展示', '客户可查看'] },
    ], responsibleRole: '客户成功部', estimatedDays: 3, status: ContentStatus.PUBLISHED, version: 'v2.1', createdAt: '2024-01-15', updatedAt: '2024-12-01' },
    { id: 'DSOP-002', title: '代理版客户深度交付流程', category: SOPCategory.DIAGNOSIS, description: '代理版客户的深度诊断和定制化配置流程', steps: [
      { stepOrder: 1, title: '客户需求深度调研', description: '通过问卷+深度访谈了解客户业务场景和痛点', responsibleRole: '客户成功经理', duration: '2天', deliverables: ['需求调研报告'], checkItems: ['已收集完整需求', '已确认核心痛点'] },
      { stepOrder: 2, title: '定制化方案设计', description: '根据需求设计定制化配置方案', responsibleRole: '解决方案架构师', duration: '2天', deliverables: ['定制方案文档'], checkItems: ['方案已审批', '客户已确认方案'] },
      { stepOrder: 3, title: '系统配置与测试', description: '按照方案进行系统配置和测试', responsibleRole: '技术支持', duration: '3天', deliverables: ['配置清单', '测试报告'], checkItems: ['所有功能已配置', '测试通过'] },
      { stepOrder: 4, title: '团队培训', description: '为客户团队提供系统使用培训', responsibleRole: '客户成功经理', duration: '2天', deliverables: ['培训资料', '培训考核结果'], checkItems: ['核心成员已培训', '考核通过率>=80%'] },
    ], responsibleRole: '解决方案部', estimatedDays: 9, status: ContentStatus.PUBLISHED, version: 'v1.3', createdAt: '2024-03-01', updatedAt: '2024-11-28' },
    { id: 'DSOP-003', title: '售后服务工单处理流程', category: SOPCategory.AFTER_SALE, description: '客户售后问题的标准化处理流程', steps: [
      { stepOrder: 1, title: '工单创建与分类', description: '接收客户问题并创建工单，按类型和优先级分类', responsibleRole: '客服专员', duration: '0.5天', deliverables: ['已创建工单'], checkItems: ['问题描述清晰', '分类准确', '优先级合理'] },
      { stepOrder: 2, title: '问题排查与诊断', description: '技术团队排查问题根因', responsibleRole: '技术支持工程师', duration: '1-2天', deliverables: ['问题诊断报告'], checkItems: ['已定位根因', '已确认影响范围'] },
      { stepOrder: 3, title: '解决方案实施', description: '制定并实施方案，解决问题', responsibleRole: '技术支持工程师', duration: '1-3天', deliverables: ['解决方案文档', '实施记录'], checkItems: ['方案已审批', '问题已解决', '客户已确认'] },
      { stepOrder: 4, title: '回访与关闭', description: '48小时内客户回访，确认满意度后关闭工单', responsibleRole: '客服专员', duration: '0.5天', deliverables: ['回访记录', '满意度评分'], checkItems: ['已完成回访', '满意度>=4分'] },
    ], responsibleRole: '客服部/技术部', estimatedDays: 6, status: ContentStatus.PUBLISHED, version: 'v3.0', createdAt: '2024-01-01', updatedAt: '2024-12-10' },
    { id: 'DSOP-004', title: 'OEM贴牌客户交付流程', category: SOPCategory.TRAINING, description: 'OEM客户的品牌定制和系统交付全流程', steps: [
      { stepOrder: 1, title: '品牌物料收集', description: '收集客户品牌VI素材和定制需求', responsibleRole: '品牌对接', duration: '3天', deliverables: ['品牌物料清单', '定制需求文档'], checkItems: ['素材齐全', '需求已明确'] },
      { stepOrder: 2, title: '系统定制开发', description: '根据需求进行品牌定制和系统开发', responsibleRole: '开发团队', duration: '10天', deliverables: ['定制系统', '开发文档'], checkItems: ['开发完成', '内部测试通过'] },
      { stepOrder: 3, title: '系统验收测试', description: '客户进行系统验收测试', responsibleRole: '客户成功经理', duration: '3天', deliverables: ['验收测试报告'], checkItems: ['客户验收通过', '问题已修复'] },
      { stepOrder: 4, title: '正式上线部署', description: '系统上线部署和切换', responsibleRole: '运维团队', duration: '1天', deliverables: ['上线确认单', '运维手册'], checkItems: ['系统已上线', '监控已配置'] },
    ], responsibleRole: '项目部', estimatedDays: 17, status: ContentStatus.PUBLISHED, version: 'v1.0', createdAt: '2024-06-01', updatedAt: '2024-11-15' },
  ], []);
}

export function useAcceptanceCriteria(): AcceptanceCriteria[] {
  return useMemo(() => [
    { id: 'AC-001', title: '标准版交付验收标准', category: SOPCategory.ONBOARDING, items: [
      { id: 'ACI-001', label: '账号开通', description: '客户账号正常登录，权限配置正确', standard: '登录成功率100%，权限匹配合同约定', required: true, method: '实际登录验证' },
      { id: 'ACI-002', label: '话术功能可用', description: 'AI话术生成和模板库功能正常', standard: '生成成功率>=99%，模板加载<=2秒', required: true, method: '功能测试' },
      { id: 'ACI-003', label: '数据看板展示', description: '基础数据看板数据实时展示', standard: '数据误差<=1%，刷新<=5秒', required: true, method: '数据核对' },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-01-15' },
    { id: 'AC-002', title: '代理版深度交付验收标准', category: SOPCategory.DIAGNOSIS, items: [
      { id: 'ACI-004', label: '客户诊断功能', description: '诊断模板配置完成，诊断功能可用', standard: '诊断准确率>=85%，响应<=3秒', required: true, method: '功能测试+人工复核' },
      { id: 'ACI-005', label: '团队权限管理', description: '子账号创建和权限配置完成', standard: '权限控制准确率100%', required: true, method: '逐项验证' },
      { id: 'ACI-006', label: '培训完成率', description: '核心团队完成培训并通过考核', standard: '培训完成率100%，考核通过率>=80%', required: true, method: '培训记录核查' },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-03-01' },
  ], []);
}

export function useServiceDiagnoses(): ServiceDiagnosis[] {
  return useMemo(() => [
    { id: 'SD-001', customerName: '杭州品尚电商', customerTier: ProductTier.AGENT, issueCategory: '功能使用', description: '客户诊断工具生成的报告数据与实际偏差较大', severity: Priority.HIGH, diagnosis: '数据同步延迟导致部分订单未被纳入分析', solution: '优化数据同步频率，从30分钟改为5分钟', status: OrderStatus.COMPLETED, servicePerson: '王工', createdAt: '2024-12-10', resolvedAt: '2024-12-12' },
    { id: 'SD-002', customerName: '广州星光MCN', customerTier: ProductTier.OEM, issueCategory: '系统性能', description: '话术生成响应缓慢，高峰期经常超时', severity: Priority.HIGH, diagnosis: '并发量突增，服务器资源不足', solution: '扩容服务器，增加缓存层，优化AI模型推理速度', status: OrderStatus.DELIVERED, servicePerson: '李工', createdAt: '2024-12-08' },
    { id: 'SD-003', customerName: '小美', customerTier: ProductTier.AGENT, issueCategory: '操作指导', description: '不知道如何使用竞品对比功能', severity: Priority.LOW, diagnosis: '新功能上线后未及时通知和培训', solution: '发送操作指南视频，安排15分钟线上指导', status: OrderStatus.COMPLETED, servicePerson: '客服小张', createdAt: '2024-12-05', resolvedAt: '2024-12-06' },
  ], []);
}

export function useAfterSaleRecords(): AfterSaleRecord[] {
  return useMemo(() => [
    { id: 'ASR-001', customerName: '杭州品尚电商', customerTier: ProductTier.AGENT, type: 'complaint', title: '数据报表不准确投诉', description: '客户反馈上周数据报表中转化率与后台数据对不上', priority: Priority.HIGH, status: OrderStatus.COMPLETED, assignee: '王工', responseAt: '2024-12-11', resolvedAt: '2024-12-12', satisfaction: 4, createdAt: '2024-12-10' },
    { id: 'ASR-002', customerName: '成都赵敏', customerTier: ProductTier.PARTNER, type: 'renewal', title: '合伙人版续费咨询', description: '客户合同即将到期，咨询续费政策和优惠方案', priority: Priority.MEDIUM, status: OrderStatus.CONFIRMED, assignee: '客户经理李芳', responseAt: '2024-12-13', createdAt: '2024-12-12' },
    { id: 'ASR-003', customerName: '贝贝母婴连锁', customerTier: ProductTier.AGENT, type: 'consultation', title: '新增门店开通咨询', description: '客户新开了5家门店，需要新增子账号和配置', priority: Priority.MEDIUM, status: OrderStatus.PENDING, assignee: '客服小张', createdAt: '2024-12-15' },
    { id: 'ASR-004', customerName: '武汉王强', customerTier: ProductTier.AGENT, type: 'maintenance', title: '系统无法登录', description: '客户反馈今早登录系统提示"账号异常"，无法正常使用', priority: Priority.HIGH, status: OrderStatus.DELIVERED, assignee: '李工', responseAt: '2024-12-15', createdAt: '2024-12-15' },
  ], []);
}

/* ============= 政策合同中心 ============= */

export function usePricingStrategies(): PricingStrategy[] {
  return useMemo(() => [
    { id: 'PS-001', name: '标准版年度定价（2024版）', productTier: ProductTier.STANDARD, basePrice: 899, discountRules: [
      { id: 'DR-001', name: '年付折扣', type: 'percentage', value: 10, condition: '一次性支付全年费用', priority: 1 },
      { id: 'DR-002', name: '双十二限时优惠', type: 'fixed', value: 100, condition: '2024年12月12日当天', priority: 2 },
    ], effectiveStart: '2024-01-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-01-01', updatedAt: '2024-11-01' },
    { id: 'PS-002', name: '代理版年度定价（2024版）', productTier: ProductTier.AGENT, basePrice: 9800, discountRules: [
      { id: 'DR-003', name: '年付折扣', type: 'percentage', value: 12, condition: '一次性支付全年费用', priority: 1 },
      { id: 'DR-004', name: '老客户升级优惠', type: 'percentage', value: 20, condition: '标准版老客户升级', priority: 2 },
    ], effectiveStart: '2024-01-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-01-15', updatedAt: '2024-10-01' },
    { id: 'PS-003', name: '贴牌版年度定价（2024版）', productTier: ProductTier.OEM, basePrice: 29800, discountRules: [
      { id: 'DR-005', name: '年付折扣', type: 'percentage', value: 15, condition: '一次性支付全年费用', priority: 1 },
      { id: 'DR-006', name: '批量采购优惠', type: 'percentage', value: 5, condition: '2年合同起签', priority: 2 },
    ], effectiveStart: '2024-03-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-03-01', updatedAt: '2024-09-01' },
    { id: 'PS-004', name: '合伙人版定价（2024版）', productTier: ProductTier.PARTNER, basePrice: 159800, discountRules: [
      { id: 'DR-007', name: '限时早鸟价', type: 'fixed', value: 20000, condition: '2024年12月31日前签约', priority: 1 },
    ], effectiveStart: '2024-06-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-06-01', updatedAt: '2024-11-01' },
    { id: 'PS-005', name: '2023年版定价（已过期）', productTier: ProductTier.STANDARD, basePrice: 799, discountRules: [], effectiveStart: '2023-01-01', effectiveEnd: '2023-12-31', status: PolicyStatus.ARCHIVED, createdAt: '2023-01-01', updatedAt: '2023-12-31' },
  ], []);
}

export function useCommissionPolicies(): CommissionPolicy[] {
  return useMemo(() => [
    { id: 'CP-001', title: '2024年标准佣金政策', applicableLevels: [AgentLevel.BRONZE, AgentLevel.SILVER, AgentLevel.GOLD, AgentLevel.PLATINUM, AgentLevel.DIAMOND], commissionRates: [
      { productTier: ProductTier.STANDARD, rate: 10 }, { productTier: ProductTier.AGENT, rate: 15 }, { productTier: ProductTier.OEM, rate: 20 }, { productTier: ProductTier.PARTNER, rate: 25 },
    ], settlementCycle: 'monthly', conditions: ['月销售额>=5万享受全额佣金', '月销售额<5万按80%发放', '连续3个月达标可申请晋升'], effectiveDate: '2024-01-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-01-01' },
    { id: 'CP-002', title: '钻石代理专属佣金政策', applicableLevels: [AgentLevel.DIAMOND], commissionRates: [
      { productTier: ProductTier.STANDARD, rate: 15 }, { productTier: ProductTier.AGENT, rate: 20 }, { productTier: ProductTier.OEM, rate: 25 }, { productTier: ProductTier.PARTNER, rate: 30 },
    ], settlementCycle: 'monthly', conditions: ['月销售额>=100万', '年度合同优先续签', '享受季度预支佣金权益'], effectiveDate: '2024-06-01', status: PolicyStatus.EFFECTIVE, createdAt: '2024-06-01' },
  ], []);
}

export function useRefundPolicies(): RefundPolicy[] {
  return useMemo(() => [
    { id: 'RP-001', title: '标准版退款政策', productTier: ProductTier.STANDARD, refundPeriod: '购买后7天内', refundRule: '7天内无条件全额退款', deductionRule: '超过7天按剩余天数比例退款', exceptions: ['已深度使用AI生成功能的不支持退款'], status: PolicyStatus.EFFECTIVE, effectiveDate: '2024-01-01', createdAt: '2024-01-01' },
    { id: 'RP-002', title: '代理版退款政策', productTier: ProductTier.AGENT, refundPeriod: '购买后15天内', refundRule: '15天内未深度使用可全额退款', deductionRule: '已使用按服务天数扣费后退还余额', exceptions: ['已完成团队配置的不支持退款', '已使用定制化服务的按实际扣除'], status: PolicyStatus.EFFECTIVE, effectiveDate: '2024-01-01', createdAt: '2024-01-01' },
    { id: 'RP-003', title: '贴牌版/合伙人版退款政策', productTier: ProductTier.OEM, refundPeriod: '购买后30天内', refundRule: '30天内按项目实施进度比例退款', deductionRule: '已发生的定制开发费用不退还', exceptions: ['定制开发已启动的不支持退款', '品牌物料已制作的按成本扣除'], status: PolicyStatus.EFFECTIVE, effectiveDate: '2024-03-01', createdAt: '2024-03-01' },
  ], []);
}

export function useComplianceRecords(): ComplianceRecord[] {
  return useMemo(() => [
    { id: 'CR-001', title: '2024年数据安全合规审查', category: 'data_privacy', description: '年度数据安全合规审查，包括数据处理流程、用户隐私保护、数据存储安全', requirement: '通过等保三级年审', deadline: '2024-12-31', responsiblePerson: '法务部', status: ContentStatus.DRAFT, remark: '已启动审查流程，待外部审计', createdAt: '2024-11-01' },
    { id: 'CR-002', title: '广告法合规检查（Q4）', category: 'advertising', description: '季度广告宣传材料合规审查，确保所有对外内容符合广告法要求', requirement: '所有宣传材料通过法务审核', deadline: '2024-12-20', responsiblePerson: '市场部', status: ContentStatus.PUBLISHED, createdAt: '2024-12-01' },
    { id: 'CR-003', title: '代理商合同备案', category: 'contract', description: '所有代理商合同完成法务备案和归档', requirement: '合同备案率100%', deadline: '2024-12-31', responsiblePerson: '销售运营部', status: ContentStatus.PUBLISHED, remark: '已完成85%备案', createdAt: '2024-10-01' },
  ], []);
}

export function useContractTemplates(): ContractTemplate[] {
  return useMemo(() => [
    { id: 'CTMP-001', title: '标准版服务合同', category: 'service', version: 'v3.0', clauses: [
      { id: 'CLC-001', title: '服务内容', content: '甲方为乙方提供标准版AI赋能平台服务，具体功能以产品清单为准', sortOrder: 1, isRequired: true },
      { id: 'CLC-002', title: '服务期限与费用', content: '合同服务期为一年，年费标准为¥899，支付方式为一次性支付', sortOrder: 2, isRequired: true },
      { id: 'CLC-003', title: '双方权利义务', content: '乙方有权在合同期内使用甲方平台全部标准功能，甲方负责平台运维和基础支持', sortOrder: 3, isRequired: true },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-01-01', updatedAt: '2024-11-15' },
    { id: 'CTMP-002', title: '代理合作协议', category: 'agency', version: 'v2.1', clauses: [
      { id: 'CLC-004', title: '代理权授予', content: '甲方授权乙方在约定区域内代理销售甲方产品', sortOrder: 1, isRequired: true },
      { id: 'CLC-005', title: '佣金结算', content: '佣金按月结算，比例为产品价格的15-30%，具体按等级确定', sortOrder: 2, isRequired: true },
      { id: 'CLC-006', title: '业绩考核', content: '乙方需完成年度销售目标，连续不达标可能影响代理资格', sortOrder: 3, isRequired: true },
      { id: 'CLC-007', title: '品牌使用规范', content: '乙方需遵守甲方品牌VI规范，未经授权不得自行修改', sortOrder: 4, isRequired: false },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-03-01', updatedAt: '2024-12-01' },
    { id: 'CTMP-003', title: 'OEM贴牌合作协议', category: 'oem', version: 'v1.2', clauses: [
      { id: 'CLC-008', title: '品牌授权', content: '甲方授权乙方在约定范围内使用甲方品牌元素进行定制', sortOrder: 1, isRequired: true },
      { id: 'CLC-009', title: '定制开发范围', content: '乙方可在甲方平台基础上进行品牌化定制，具体范围见附件', sortOrder: 2, isRequired: true },
      { id: 'CLC-010', title: '知识产权', content: '定制过程中产生的知识产权归属双方另行约定', sortOrder: 3, isRequired: true },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-06-01', updatedAt: '2024-11-20' },
  ], []);
}

/* ============= 品牌资产中心 ============= */

export function useVISpecs(): VISpec[] {
  return useMemo(() => [
    { id: 'VI-001', title: '品牌Logo规范', category: 'logo', description: '极享AI主品牌Logo的使用规范和示例', rules: [
      'Logo 最小使用尺寸：网页端32px，印刷品15mm',
      'Logo 周围保留安全区域，不小于Logo高度的1/4',
      '深色背景使用金色版本，浅色背景使用深色版本',
      '禁止拉伸、扭曲或改变Logo比例',
      '禁止添加任何外部效果（阴影、发光等）',
    ], examples: [
      { name: '金色Logo（深色背景）', url: '/mock/brand/logo-gold.png' },
      { name: '深色Logo（浅色背景）', url: '/mock/brand/logo-dark.png' },
      { name: '图标（favicon）', url: '/mock/brand/icon.png' },
    ], status: ContentStatus.PUBLISHED, version: 'v2.0', updatedAt: '2024-06-01' },
    { id: 'VI-002', title: '品牌色彩系统', category: 'color', description: '极享AI品牌主色、辅助色和功能色定义', rules: [
      '主色：金色 #D4A853 - 用于品牌标识、C端、关键按钮',
      '背景色：深空色 #0F0F1A - 用于系统主背景',
      '强调色：白色 #F5F5F7 - 用于主要文字和图标',
      '成功色：绿色 #22C55E - 用于成功状态、正向指标',
      '警告色：橙色 #F59E0B - 用于提醒和中等优先级',
      '错误色：红色 #EF4444 - 用于错误状态和负向指标',
    ], examples: [
      { name: '品牌色板', url: '/mock/brand/color-palette.png' },
    ], status: ContentStatus.PUBLISHED, version: 'v1.1', updatedAt: '2024-01-15' },
    { id: 'VI-003', title: '品牌字体规范', category: 'typography', description: '品牌中英文字体使用规范', rules: [
      '中文标题：Noto Sans SC Bold',
      '英文/数字正文：Inter',
      '代码/数据：JetBrains Mono',
      '最小字号：11px（仅用于辅助信息）',
      '行高：标题1.3-1.4，正文1.5-1.6',
    ], examples: [
      { name: '字体示例', url: '/mock/brand/typography-sample.png' },
    ], status: ContentStatus.PUBLISHED, version: 'v1.0', updatedAt: '2024-01-01' },
    { id: 'VI-004', title: '海报模板设计规范', category: 'imagery', description: '品牌海报、banner等宣传物料的设计规范', rules: [
      '海报标准尺寸：1080×1920px（竖版），1920×1080px（横版）',
      '品牌元素占比不超过画面30%',
      '留白空间不少于画面20%',
      '图片风格：科技感、简洁、高端',
      '禁止使用低质图片或带水印素材',
    ], examples: [
      { name: '产品海报示例', url: '/mock/brand/poster-sample.png' },
      { name: '活动Banner示例', url: '/mock/brand/banner-sample.png' },
    ], status: ContentStatus.PUBLISHED, version: 'v1.0', updatedAt: '2024-03-01' },
  ], []);
}

export function useBrandTemplates(): BrandTemplate[] {
  return useMemo(() => [
    { id: 'BT-001', title: '产品介绍PPT模板', category: 'presentation', description: '极享AI产品介绍的官方PPT模板', fileUrl: '/mock/templates/product-ppt.pptx', fileFormat: 'pptx', fileSize: 12.5, usage: '用于对外产品介绍和客户演示', tags: ['PPT', '产品', '对外'], status: ContentStatus.PUBLISHED, createdAt: '2024-06-01' },
    { id: 'BT-002', title: '社交媒体封面模板', category: 'social_media', description: '抖音/视频号/快手封面图模板', fileUrl: '/mock/templates/social-cover.psd', fileFormat: 'psd', fileSize: 45.2, usage: '用于各平台短视频封面制作', tags: ['社交媒体', '封面', '短视频'], status: ContentStatus.PUBLISHED, createdAt: '2024-07-01' },
    { id: 'BT-003', title: '商务合同封面模板', category: 'document', description: '正式合同文件封面和排版模板', fileUrl: '/mock/templates/contract-cover.docx', fileFormat: 'docx', fileSize: 2.1, usage: '用于正式合同文件排版', tags: ['合同', '商务', '正式'], status: ContentStatus.PUBLISHED, createdAt: '2024-08-01' },
    { id: 'BT-004', title: '公众号推文模板', category: 'social_media', description: '微信公众号文章排版模板', fileUrl: '/mock/templates/wechat-template.html', fileFormat: 'html', fileSize: 0.8, usage: '用于公众号推文排版', tags: ['公众号', '推文', '排版'], status: ContentStatus.PUBLISHED, createdAt: '2024-09-01' },
    { id: 'BT-005', title: '展会易拉宝模板', category: 'ad', description: '线下展会展架易拉宝设计模板', fileUrl: '/mock/templates/exhibition-banner.ai', fileFormat: 'ai', fileSize: 68.0, usage: '用于线下展会物料制作', tags: ['线下', '展会', '易拉宝'], status: ContentStatus.DRAFT, createdAt: '2024-12-01' },
  ], []);
}

export function useBrandCertificates(): BrandCertificate[] {
  return useMemo(() => [
    { id: 'BC-001', title: '极享AI 商标注册证（第35类）', type: 'trademark', certNumber: '第12345678号', issuer: '国家知识产权局', issueDate: '2023-06-15', expireDate: '2033-06-14', status: ContentStatus.PUBLISHED, remark: '涵盖广告、商业管理、市场营销', createdAt: '2023-06-15' },
    { id: 'BC-002', title: '极享AI 软件著作权登记证书', type: 'copyright', certNumber: '软著登字第9876543号', issuer: '国家版权局', issueDate: '2024-01-10', status: ContentStatus.PUBLISHED, createdAt: '2024-01-10' },
    { id: 'BC-003', title: '信息安全等级保护三级认证', type: 'certification', certNumber: '等保三级-2024-001', issuer: '公安部', issueDate: '2024-03-20', expireDate: '2027-03-19', status: ContentStatus.PUBLISHED, remark: '年度审核已通过', createdAt: '2024-03-20' },
    { id: 'BC-004', title: '发明专利：基于AI的直播话术生成方法', type: 'patent', certNumber: 'ZL202410000001.0', issuer: '国家知识产权局', issueDate: '2024-08-15', expireDate: '2044-08-14', status: ContentStatus.PUBLISHED, createdAt: '2024-08-15' },
    { id: 'BC-005', title: 'ISO 27001 信息安全管理体系认证', type: 'certification', certNumber: 'ISO27001-2024-001', issuer: '国际认证机构', issueDate: '2024-05-01', expireDate: '2027-04-30', status: ContentStatus.PUBLISHED, createdAt: '2024-05-01' },
  ], []);
}

/* ============= 数据运营中心 ============= */

export function useOperationDashboards(): OperationDashboard[] {
  return useMemo(() => [
    {
      id: 'OD-001', title: '12月运营总览', period: '2024-12',
      kpis: [
        { label: '新增客户', value: 258, change: 12.5, trend: 'up', icon: 'fa-solid fa-user-plus', color: '#3B82F6', suffix: '个' },
        { label: '新签合同额', value: 895000, change: 8.3, trend: 'up', icon: 'fa-solid fa-file-signature', color: '#22C55E', suffix: '元' },
        { label: '活跃代理商', value: 126, change: 5.2, trend: 'up', icon: 'fa-solid fa-handshake', color: '#A855F7', suffix: '个' },
        { label: '本月投诉率', value: 1.8, change: -0.5, trend: 'down', icon: 'fa-solid fa-circle-exclamation', color: '#F59E0B', suffix: '%' },
      ],
      charts: [
        { id: 'CHART-001', title: '月度收入趋势', type: 'line', labels: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], datasets: [
          { name: '标准版', values: [12, 15, 18, 22, 25, 28, 30, 35, 38, 42, 45, 48], color: '#3B82F6' },
          { name: '代理版', values: [8, 10, 15, 20, 25, 30, 35, 40, 48, 52, 58, 62], color: '#22C55E' },
        ]},
        { id: 'CHART-002', title: '产品收入占比', type: 'pie', labels: ['标准版', '代理版', '贴牌版', '合伙人版'], datasets: [
          { name: '收入占比', values: [18, 35, 28, 19], color: '#3B82F6' },
        ]},
        { id: 'CHART-003', title: '客户转化漏斗', type: 'funnel', labels: ['咨询', '试用', '意向', '签约', '付费'], datasets: [
          { name: '用户数', values: [1200, 680, 320, 158, 102], color: '#22C55E' },
        ]},
      ],
      createdAt: '2024-12-18',
    },
  ], []);
}

export function useDataFunnels(): DataFunnel[] {
  return useMemo(() => [
    { id: 'DF-001', name: '获客转化漏斗（12月）', stages: [
      { stage: '曝光（直播间观看）', count: 15800, rate: '100%', color: '#3B82F6' },
      { stage: '点击（进入主页/加关注）', count: 6320, rate: '40%', color: '#22C55E' },
      { stage: '互动（评论/私信）', count: 2844, rate: '18%', color: '#A855F7' },
      { stage: '加微（添加微信）', count: 1580, rate: '10%', color: '#F59E0B' },
      { stage: '诊断（完成诊断问卷）', count: 1106, rate: '7%', color: '#EF4444' },
      { stage: '成交（完成付费）', count: 632, rate: '4%', color: '#D4A853' },
    ], period: '2024-12', updatedAt: '2024-12-18' },
    { id: 'DF-002', name: '代理商招募漏斗（Q4）', stages: [
      { stage: '意向咨询', count: 320, rate: '100%', color: '#3B82F6' },
      { stage: '提交资料', count: 185, rate: '57.8%', color: '#22C55E' },
      { stage: '审核通过', count: 128, rate: '40%', color: '#A855F7' },
      { stage: '签约培训', count: 96, rate: '30%', color: '#F59E0B' },
      { stage: '正式代理', count: 72, rate: '22.5%', color: '#D4A853' },
    ], period: '2024-Q4', updatedAt: '2024-12-18' },
  ], []);
}

export function useRankings() {
  return useMemo(() => ({
    sales: [
      { id: 'RK-001', rank: 1, name: '赵敏', metric: 1560000, metricLabel: '销售额（元）', change: 12.3, trend: 'up' },
      { id: 'RK-002', rank: 2, name: '李芳', metric: 892000, metricLabel: '销售额（元）', change: 8.5, trend: 'up' },
      { id: 'RK-003', rank: 3, name: '刘洋', metric: 567000, metricLabel: '销售额（元）', change: 15.2, trend: 'up' },
      { id: 'RK-004', rank: 4, name: '张伟', metric: 458000, metricLabel: '销售额（元）', change: -2.1, trend: 'down' },
      { id: 'RK-005', rank: 5, name: '王强', metric: 215000, metricLabel: '销售额（元）', change: 5.8, trend: 'up' },
      { id: 'RK-006', rank: 6, name: '陈刚', metric: 89000, metricLabel: '销售额（元）', change: 22.6, trend: 'up' },
    ],
    commission: [
      { id: 'RK-007', rank: 1, name: '赵敏', metric: 234000, metricLabel: '佣金（元）', change: 15.8, trend: 'up' },
      { id: 'RK-008', rank: 2, name: '李芳', metric: 133800, metricLabel: '佣金（元）', change: 9.2, trend: 'up' },
      { id: 'RK-009', rank: 3, name: '刘洋', metric: 85050, metricLabel: '佣金（元）', change: 18.5, trend: 'up' },
      { id: 'RK-010', rank: 4, name: '张伟', metric: 68700, metricLabel: '佣金（元）', change: 3.4, trend: 'up' },
      { id: 'RK-011', rank: 5, name: '王强', metric: 32250, metricLabel: '佣金（元）', change: -1.2, trend: 'down' },
    ],
    leads: [
      { id: 'RK-012', rank: 1, name: '李芳', metric: 89, metricLabel: '引流线索数', change: 25.6, trend: 'up' },
      { id: 'RK-013', rank: 2, name: '张伟', metric: 68, metricLabel: '引流线索数', change: 12.3, trend: 'up' },
      { id: 'RK-014', rank: 3, name: '刘洋', metric: 42, metricLabel: '引流线索数', change: -5.8, trend: 'down' },
    ],
  }), []);
}

export function useComplaintAnalysis(): ComplaintAnalysis[] {
  return useMemo(() => [
    { id: 'CA-001', category: '功能使用问题', count: 38, proportion: 35.2, trend: 'down', topIssues: [{ issue: '话术生成不符合预期', count: 12 }, { issue: '数据报表不准确', count: 8 }, { issue: '诊断结果偏差', count: 6 }] },
    { id: 'CA-002', category: '系统性能', count: 22, proportion: 20.4, trend: 'down', topIssues: [{ issue: '页面加载慢', count: 9 }, { issue: '功能响应超时', count: 7 }, { issue: '移动端兼容性问题', count: 4 }] },
    { id: 'CA-003', category: '售后服务', count: 18, proportion: 16.7, trend: 'up', topIssues: [{ issue: '客服响应慢', count: 8 }, { issue: '问题未解决', count: 5 }, { issue: '态度问题', count: 3 }] },
    { id: 'CA-004', category: '计费与合同', count: 15, proportion: 13.9, trend: 'flat', topIssues: [{ issue: '账单金额有误', count: 6 }, { issue: '续费流程复杂', count: 4 }, { issue: '合同条款疑问', count: 3 }] },
    { id: 'CA-005', category: '其他', count: 15, proportion: 13.9, trend: 'down', topIssues: [{ issue: '产品建议', count: 8 }, { issue: '合作咨询', count: 5 }] },
  ], []);
}

export function useOperationReviews(): OperationReview[] {
  return useMemo(() => [
    { id: 'OR-001', title: '12月第一周运营复盘', period: '2024-12-02~2024-12-08', author: '运营总监', summary: '本周整体数据较好，新增客户58个，签约额18.5万。短视频获客效果显著提升。', highlights: [
      '抖音短视频"直播带货翻倍秘籍"播放量突破2.3万，引流线索89条',
      '广州天河商圈地推活动效果良好，收集意向客户42个',
      'Q4冲刺训练营学员活跃度提升至85%',
    ], issues: [
      '直播间流量波动较大，周三场观众数下降30%',
      '2个售后工单处理超时，需优化SLA流程',
      '新代理商培训完成率仅54%，需加强督促',
    ], actionItems: [
      { action: '优化直播排期，增加热门时段场次', owner: '王芳', deadline: '2024-12-15' },
      { action: '售后工单增加自动催办机制', owner: '李工', deadline: '2024-12-20' },
      { action: '对未完成培训的代理商进行一对一跟进', owner: '张老师', deadline: '2024-12-18' },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-12-09' },
    { id: 'OR-002', title: '12月第二周运营复盘', period: '2024-12-09~2024-12-15', author: '运营总监', summary: '本周业务持续增长，新签合同额25.8万。上海展会效果超预期。', highlights: [
      '上海AI产业博览会收集意向客户68个，现场签约3个',
      '新品发布直播在线峰值412人，新增线索58条',
      '钻石代理赵敏月销售额突破150万，创历史新高',
    ], issues: [
      '广州星光MCN反映话术生成响应缓慢',
      '2个代理商结算单审核未通过，需完善数据校验',
      '12月新人训练营报名进度偏慢（目标50人，仅28人报名）',
    ], actionItems: [
      { action: '扩容服务器，优化AI推理性能', owner: '李工', deadline: '2024-12-22' },
      { action: '完善结算单数据自动校验功能', owner: '王工', deadline: '2024-12-25' },
      { action: '加大新人训练营宣传力度', owner: '市场部', deadline: '2024-12-20' },
    ], status: ContentStatus.PUBLISHED, createdAt: '2024-12-16' },
  ], []);
}
