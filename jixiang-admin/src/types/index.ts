/* ============= 极享AI 全局类型定义 ============= */

export enum ProductTier {
  STANDARD = 'standard',
  AGENT = 'agent',
  OEM = 'oem',
  PARTNER = 'partner',
}

export enum ContentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export enum ScriptCategory {
  LIVE = 'live',
  CHAT = 'chat',
  PHONE = 'phone',
  MOMENTS = 'moments',
  OFFLINE = 'offline',
}

export enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  DELIVERED = 'delivered',
  COMPLETED = 'completed',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  tier: ProductTier;
  description: string;
  benefits: string[];
  deliveryItems: string[];
  status: ContentStatus;
  sales: number;
  revenue: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContentBlock {
  id: string;
  module: string;
  category: string;
  title: string;
  content: string;
  coverImage?: string;
  status: ContentStatus;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
  status: ContentStatus;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  description: string;
  features: CompetitorFeature[];
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CompetitorFeature {
  category: string;
  ourValue: string;
  competitorValue: string;
  isAdvantage: boolean;
}

export interface GuideStep {
  id: string;
  title: string;
  description: string;
  stepOrder: number;
  icon: string;
  actionItems: string[];
  status: ContentStatus;
}

export interface Script {
  id: string;
  title: string;
  category: ScriptCategory;
  content: string;
  tags: string[];
  viewCount: number;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SalesQA {
  id: string;
  question: string;
  answer: string;
  scenario: string;
  keywords: string[];
  status: ContentStatus;
  helpfulCount: number;
  createdAt: string;
}

export interface DiagnosisTemplate {
  id: string;
  title: string;
  questions: DiagnosisQuestion[];
  status: ContentStatus;
  createdAt: string;
}

export interface DiagnosisQuestion {
  id: string;
  label: string;
  type: 'text' | 'select' | 'radio' | 'checkbox';
  options?: string[];
  required: boolean;
}

export interface Quotation {
  id: string;
  title: string;
  targetTier: ProductTier;
  description: string;
  items: QuotationItem[];
  totalAmount: number;
  status: ContentStatus;
  createdAt: string;
}

export interface QuotationItem {
  name: string;
  description: string;
  amount: number;
  unit: string;
}

export interface SOP {
  id: string;
  title: string;
  targetStage: string;
  steps: SOPStep[];
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SOPStep {
  stepOrder: number;
  title: string;
  description: string;
  duration: string;
  resources: string[];
  checkItems: string[];
}

export interface KPIItem {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
  suffix?: string;
}

export interface OrderRecord {
  id: string;
  customerName: string;
  productName: string;
  amount: number;
  status: OrderStatus;
  agentName: string;
  createdAt: string;
}

export interface TodoItem {
  id: string;
  title: string;
  priority: Priority;
  deadline: string;
  completed: boolean;
  module: string;
}

export interface DashboardData {
  kpis: KPIItem[];
  revenue: { month: string; revenue: number; orders: number }[];
  funnel: { stage: string; count: number; rate: string }[];
  orders: OrderRecord[];
  todos: TodoItem[];
}

// ============= 招商代理中心 =============

export enum AgentLevel {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
  DIAMOND = 'diamond',
}

export enum SettlementStatus {
  PENDING = 'pending',
  AUDITING = 'auditing',
  APPROVED = 'approved',
  PAID = 'paid',
  REJECTED = 'rejected',
}

export enum AgreementStatus {
  DRAFT = 'draft',
  PENDING_SIGN = 'pending_sign',
  ACTIVE = 'active',
  EXPIRED = 'expired',
  TERMINATED = 'terminated',
}

export interface Agent {
  id: string;
  name: string;
  phone: string;
  email: string;
  level: AgentLevel;
  region: string;
  totalSales: number;
  totalCommission: number;
  agreementCount: number;
  status: ContentStatus;
  joinedAt: string;
  updatedAt: string;
}

export interface CommissionRule {
  id: string;
  level: AgentLevel;
  productTier: ProductTier;
  commissionRate: number; // 百分比，如 15 表示 15%
  condition: string; // 条件说明
  status: ContentStatus;
  createdAt: string;
}

export interface CommissionSettlement {
  id: string;
  agentId: string;
  agentName: string;
  period: string; // 结算周期，如 "2025-06"
  totalAmount: number;
  commissionAmount: number;
  rate: number;
  status: SettlementStatus;
  orderCount: number;
  paidAt?: string;
  remark?: string;
  createdAt: string;
}

export interface AgentAgreement {
  id: string;
  agentId: string;
  agentName: string;
  title: string;
  level: AgentLevel;
  startDate: string;
  endDate: string;
  commissionRate: number;
  status: AgreementStatus;
  fileUrl?: string;
  remark?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AgentPolicy {
  id: string;
  title: string;
  category: string; // 'level' | 'commission' | 'training' | 'reward'
  content: string;
  effectiveDate: string;
  expireDate?: string;
  status: ContentStatus;
  sortOrder: number;
  createdAt: string;
}

export interface GrowthPath {
  id: string;
  title: string;
  fromLevel: AgentLevel;
  toLevel: AgentLevel;
  requirements: string[];
  benefits: string[];
  estimatedDuration: string;
  sortOrder: number;
  status: ContentStatus;
}

// ============= 获客引流中心 =============

export enum AcquisitionChannel {
  SHORT_VIDEO = 'short_video',
  LIVE = 'live',
  PRIVATE_DOMAIN = 'private_domain',
  OFFLINE = 'offline',
}

export enum TaskStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  OVERDUE = 'overdue',
}

export interface DailyAction {
  id: string;
  title: string;
  channel: AcquisitionChannel;
  description: string;
  status: TaskStatus;
  assignee: string;
  deadline: string;
  completedAt?: string;
  result?: string;
  createdAt: string;
}

export interface ShortVideoPlan {
  id: string;
  title: string;
  platform: string; // 'douyin' | 'kuaishou' | 'shipinhao'
  script: string;
  publishDate: string;
  status: ContentStatus;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  leads: number; // 引流线索数
  createdAt: string;
}

export interface LiveStreamPlan {
  id: string;
  title: string;
  platform: string;
  scheduledAt: string;
  duration: number; // 分钟
  host: string;
  status: ContentStatus;
  peakViewers: number;
  totalViewers: number;
  newFollowers: number;
  leads: number;
  remark?: string;
  createdAt: string;
}

export interface PrivateDomainRecord {
  id: string;
  channel: string; // 'wechat' | 'group' | 'moments' | 'official_account'
  title: string;
  content: string;
  publishDate: string;
  status: ContentStatus;
  views: number;
  interactions: number;
  leads: number;
  tags: string[];
  createdAt: string;
}

export interface OfflineActivity {
  id: string;
  title: string;
  location: string;
  activityDate: string;
  budget: number;
  actualCost: number;
  contacts: number;
  leads: number;
  status: ContentStatus;
  description: string;
  responsiblePerson: string;
  remark?: string;
  createdAt: string;
}

// ============= 案例见证中心 =============

export enum CaseCategory {
  INDUSTRY = 'industry',       // 行业案例
  PRODUCT = 'product',         // 产品案例
  REGION = 'region',           // 区域案例
  TRANSFORMATION = 'transformation', // 转型案例
}

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseCategory;
  customerName: string;
  customerTier: ProductTier;
  coverImage?: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  status: ContentStatus;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CaseTemplate {
  id: string;
  title: string;
  description: string;
  category: CaseCategory;
  sections: CaseTemplateSection[];
  status: ContentStatus;
  createdAt: string;
}

export interface CaseTemplateSection {
  id: string;
  title: string;
  placeholder: string;
  hint: string;
  sortOrder: number;
}

export interface MaterialCollection {
  id: string;
  caseId?: string;
  title: string;
  type: 'image' | 'video' | 'document' | 'audio' | 'screenshot';
  fileUrl: string;
  fileSize: number;
  source: string; // 来源描述
  tags: string[];
  status: ContentStatus;
  uploadedAt: string;
  remark?: string;
}

export interface CustomerInterview {
  id: string;
  customerName: string;
  customerTitle: string;
  tier: ProductTier;
  interviewDate: string;
  interviewer: string;
  highlights: string[];
  transcript?: string;
  videoUrl?: string;
  status: ContentStatus;
  tags: string[];
  createdAt: string;
}

// ============= 培训赋能中心 =============

export enum TrainingType {
  VIDEO = 'video',
  LIVE = 'live',
  DOCUMENT = 'document',
  QUIZ = 'quiz',
}

export enum TrainingStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  EXPIRED = 'expired',
}

export interface Course {
  id: string;
  title: string;
  type: TrainingType;
  category: string;
  description: string;
  duration: number; // 分钟
  chapters: CourseChapter[];
  instructor: string;
  status: ContentStatus;
  enrolledCount: number;
  completionRate: number;
  rating: number;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CourseChapter {
  id: string;
  title: string;
  duration: number;
  sortOrder: number;
  isPreview: boolean;
}

export interface TrainingCamp {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  courses: string[]; // course ids
  maxStudents: number;
  enrolledCount: number;
  status: TrainingStatus;
  instructor: string;
  requirements: string[];
  createdAt: string;
}

export interface StudentAssignment {
  id: string;
  campId: string;
  campTitle: string;
  studentName: string;
  courseId: string;
  courseTitle: string;
  title: string;
  content: string;
  fileUrl?: string;
  score?: number;
  comment?: string;
  submittedAt: string;
  gradedAt?: string;
  status: ContentStatus;
}

export interface StudentProgress {
  id: string;
  studentName: string;
  campId: string;
  campTitle: string;
  courseId: string;
  courseTitle: string;
  progress: number; // 0-100
  status: TrainingStatus;
  lastAccessAt: string;
  enrolledAt: string;
  completedAt?: string;
}

// ============= 交付服务中心 =============

export enum SOPCategory {
  ONBOARDING = 'onboarding',       // 客户 onboarding
  DIAGNOSIS = 'diagnosis',         // 诊断服务
  TRAINING = 'training',           // 培训交付
  AFTER_SALE = 'after_sale',       // 售后服务
}

export interface DeliverySOP {
  id: string;
  title: string;
  category: SOPCategory;
  description: string;
  steps: DeliverySOPStep[];
  responsibleRole: string;
  estimatedDays: number;
  status: ContentStatus;
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeliverySOPStep {
  stepOrder: number;
  title: string;
  description: string;
  responsibleRole: string;
  duration: string;
  deliverables: string[];
  checkItems: string[];
}

export interface AcceptanceCriteria {
  id: string;
  title: string;
  category: SOPCategory;
  items: AcceptanceItem[];
  status: ContentStatus;
  createdAt: string;
}

export interface AcceptanceItem {
  id: string;
  label: string;
  description: string;
  standard: string;
  required: boolean;
  method: string; // 验收方式
}

export interface ServiceDiagnosis {
  id: string;
  customerName: string;
  customerTier: ProductTier;
  issueCategory: string;
  description: string;
  severity: Priority;
  diagnosis: string;
  solution: string;
  status: OrderStatus;
  servicePerson: string;
  createdAt: string;
  resolvedAt?: string;
}

export interface AfterSaleRecord {
  id: string;
  customerName: string;
  customerTier: ProductTier;
  type: string; // 'complaint' | 'maintenance' | 'renewal' | 'consultation'
  title: string;
  description: string;
  priority: Priority;
  status: OrderStatus;
  assignee: string;
  responseAt?: string;
  resolvedAt?: string;
  satisfaction?: number; // 1-5
  createdAt: string;
}

// ============= 政策合同中心 =============

export enum PolicyStatus {
  DRAFT = 'draft',
  EFFECTIVE = 'effective',
  EXPIRED = 'expired',
  ARCHIVED = 'archived',
}

export interface PricingStrategy {
  id: string;
  name: string;
  productTier: ProductTier;
  basePrice: number;
  discountRules: DiscountRule[];
  effectiveStart: string;
  effectiveEnd?: string;
  status: PolicyStatus;
  remark?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DiscountRule {
  id: string;
  name: string;
  type: 'percentage' | 'fixed' | 'seasonal' | 'volume';
  value: number;
  condition: string;
  priority: number;
}

export interface CommissionPolicy {
  id: string;
  title: string;
  applicableLevels: AgentLevel[];
  commissionRates: { productTier: ProductTier; rate: number }[];
  settlementCycle: string; // 'monthly' | 'quarterly' | 'weekly'
  conditions: string[];
  effectiveDate: string;
  expireDate?: string;
  status: PolicyStatus;
  createdAt: string;
}

export interface RefundPolicy {
  id: string;
  title: string;
  productTier: ProductTier;
  refundPeriod: string; // 退款期限描述
  refundRule: string;
  deductionRule: string;
  exceptions: string[];
  status: PolicyStatus;
  effectiveDate: string;
  createdAt: string;
}

export interface ComplianceRecord {
  id: string;
  title: string;
  category: string; // 'contract' | 'data_privacy' | 'advertising' | 'tax'
  description: string;
  requirement: string;
  deadline: string;
  responsiblePerson: string;
  status: ContentStatus;
  remark?: string;
  createdAt: string;
}

export interface ContractTemplate {
  id: string;
  title: string;
  category: string; // 'agency' | 'oem' | 'partner' | 'service'
  version: string;
  clauses: ContractClause[];
  status: ContentStatus;
  fileUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContractClause {
  id: string;
  title: string;
  content: string;
  sortOrder: number;
  isRequired: boolean;
}

// ============= 品牌资产中心 =============

export interface VISpec {
  id: string;
  title: string;
  category: string; // 'logo' | 'color' | 'typography' | 'icon' | 'imagery'
  description: string;
  rules: string[];
  examples: { name: string; url: string }[];
  status: ContentStatus;
  version: string;
  updatedAt: string;
}

export interface BrandTemplate {
  id: string;
  title: string;
  category: string; // 'social_media' | 'presentation' | 'document' | 'email' | 'ad'
  thumbnail?: string;
  description: string;
  fileUrl: string;
  fileFormat: string;
  fileSize: number;
  usage: string;
  tags: string[];
  status: ContentStatus;
  createdAt: string;
}

export interface BrandCertificate {
  id: string;
  title: string;
  type: string; // 'trademark' | 'copyright' | 'license' | 'certification' | 'patent'
  certNumber: string;
  issuer: string;
  issueDate: string;
  expireDate?: string;
  fileUrl?: string;
  status: ContentStatus;
  remark?: string;
  createdAt: string;
}

// ============= 数据运营中心 =============

export enum DataMetricType {
  REVENUE = 'revenue',
  USER = 'user',
  CONVERSION = 'conversion',
  CONTENT = 'content',
  SERVICE = 'service',
}

export interface OperationDashboard {
  id: string;
  title: string;
  period: string;
  kpis: KPIItem[];
  charts: ChartData[];
  createdAt: string;
}

export interface ChartData {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'pie' | 'funnel';
  labels: string[];
  datasets: { name: string; values: number[]; color: string }[];
}

export interface DataFunnel {
  id: string;
  name: string;
  stages: FunnelStage[];
  period: string;
  updatedAt: string;
}

export interface FunnelStage {
  stage: string;
  count: number;
  rate: string;
  color: string;
}

export interface RankingItem {
  id: string;
  rank: number;
  name: string;
  metric: number;
  metricLabel: string;
  change: number;
  trend: 'up' | 'down' | 'flat';
}

export interface ComplaintAnalysis {
  id: string;
  category: string;
  count: number;
  proportion: number;
  trend: 'up' | 'down' | 'flat';
  topIssues: { issue: string; count: number }[];
}

export interface OperationReview {
  id: string;
  title: string;
  period: string;
  author: string;
  summary: string;
  highlights: string[];
  issues: string[];
  actionItems: { action: string; owner: string; deadline: string }[];
  status: ContentStatus;
  createdAt: string;
}
