import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';

/* ============= Phase 1-A 页面 ============= */
import DashboardPage from '@/pages/dashboard/DashboardPage';
import ProductMatrixPage from '@/pages/products/ProductMatrixPage';
import ProjectLayout from '@/pages/project';
import OverviewPage from '@/pages/project/OverviewPage';
import FAQPage from '@/pages/project/FAQPage';
import CompetitivePage from '@/pages/project/CompetitivePage';
import GuidePage from '@/pages/project/GuidePage';
import SalesLayout from '@/pages/sales';
import ScriptsPage from '@/pages/sales/ScriptsPage';
import QAPage from '@/pages/sales/QAPage';
import DiagnosisPage from '@/pages/sales/DiagnosisPage';
import QuotationsPage from '@/pages/sales/QuotationsPage';
import SOPPage from '@/pages/sales/SOPPage';

/* ============= Phase 1-B 页面 ============= */
import AgentLayout from '@/pages/agent';
import AgentListPage from '@/pages/agent/AgentListPage';
import PolicyListPage from '@/pages/agent/PolicyListPage';
import AgreementListPage from '@/pages/agent/AgreementListPage';
import SettlementListPage from '@/pages/agent/SettlementListPage';
import GrowthPathPage from '@/pages/agent/GrowthPathPage';

import AcquisitionLayout from '@/pages/acquisition';
import DailyActionPage from '@/pages/acquisition/DailyActionPage';
import ShortVideoPage from '@/pages/acquisition/ShortVideoPage';
import LiveStreamPage from '@/pages/acquisition/LiveStreamPage';
import PrivateDomainPage from '@/pages/acquisition/PrivateDomainPage';
import OfflineActivityPage from '@/pages/acquisition/OfflineActivityPage';

import CasesLayout from '@/pages/cases';
import CaseListPage from '@/pages/cases/CaseListPage';
import TemplateListPage from '@/pages/cases/TemplateListPage';
import MaterialListPage from '@/pages/cases/MaterialListPage';
import InterviewListPage from '@/pages/cases/InterviewListPage';

import TrainingLayout from '@/pages/training';
import CourseListPage from '@/pages/training/CourseListPage';
import CampListPage from '@/pages/training/CampListPage';
import AssignmentListPage from '@/pages/training/AssignmentListPage';
import ProgressPage from '@/pages/training/ProgressPage';

/* ============= Phase 2 页面 ============= */
import DeliveryLayout from '@/pages/delivery';
import SOPListPage from '@/pages/delivery/SOPListPage';
import AcceptancePage from '@/pages/delivery/AcceptancePage';
import DiagnosisListPage from '@/pages/delivery/DiagnosisListPage';
import AfterSaleListPage from '@/pages/delivery/AfterSaleListPage';

import PoliciesLayout from '@/pages/policies';
import PricingListPage from '@/pages/policies/PricingListPage';
import CommissionPolicyPage from '@/pages/policies/CommissionPolicyPage';
import RefundPolicyPage from '@/pages/policies/RefundPolicyPage';
import CompliancePage from '@/pages/policies/CompliancePage';
import ContractTemplatePage from '@/pages/policies/ContractTemplatePage';

import BrandLayout from '@/pages/brand';
import VISpecPage from '@/pages/brand/VISpecPage';
import BrandTemplatePage from '@/pages/brand/BrandTemplatePage';
import CertificateListPage from '@/pages/brand/CertificateListPage';

import DataLayout from '@/pages/data';
import DataDashboardPage from '@/pages/data/DataDashboardPage';
import FunnelPage from '@/pages/data/FunnelPage';
import RankingPage from '@/pages/data/RankingPage';
import ComplaintPage from '@/pages/data/ComplaintPage';
import ReviewListPage from '@/pages/data/ReviewListPage';

/* ============= 素材中心 + 系统设置 ============= */
import MaterialsLayout from '@/pages/materials';
import ScriptsMaterialPage from '@/pages/materials/ScriptsPage';
import LiveScriptsPage from '@/pages/materials/LiveScriptsPage';
import MomentsPage from '@/pages/materials/MomentsPage';
import PostersPage from '@/pages/materials/PostersPage';
import VideosPage from '@/pages/materials/VideosPage';

import SettingsLayout from '@/pages/settings';
import UsersPage from '@/pages/settings/UsersPage';
import RolesPage from '@/pages/settings/RolesPage';
import LogsPage from '@/pages/settings/LogsPage';

/* 交付服务追加 */
import SurveyPage from '@/pages/delivery/SurveyPage';
/* 政策合同追加 */
import ReportingPage from '@/pages/policies/ReportingPage';

/* ============= 路由配置 ============= */

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      /* Phase 1-A */
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'products', element: <ProductMatrixPage /> },
      {
        path: 'project',
        element: <ProjectLayout />,
        children: [
          { index: true, element: <Navigate to="/project/overview" replace /> },
          { path: 'overview', element: <OverviewPage /> },
          { path: 'faq', element: <FAQPage /> },
          { path: 'competitive', element: <CompetitivePage /> },
          { path: 'guide', element: <GuidePage /> },
        ],
      },
      {
        path: 'sales',
        element: <SalesLayout />,
        children: [
          { index: true, element: <Navigate to="/sales/scripts" replace /> },
          { path: 'scripts', element: <ScriptsPage /> },
          { path: 'qa', element: <QAPage /> },
          { path: 'diagnosis', element: <DiagnosisPage /> },
          { path: 'quotations', element: <QuotationsPage /> },
          { path: 'sop', element: <SOPPage /> },
        ],
      },
      /* Phase 1-B */
      {
        path: 'agent',
        element: <AgentLayout />,
        children: [
          { index: true, element: <Navigate to="/agent/list" replace /> },
          { path: 'list', element: <AgentListPage /> },
          { path: 'policies', element: <PolicyListPage /> },
          { path: 'agreements', element: <AgreementListPage /> },
          { path: 'settlements', element: <SettlementListPage /> },
          { path: 'growth', element: <GrowthPathPage /> },
        ],
      },
      {
        path: 'acquisition',
        element: <AcquisitionLayout />,
        children: [
          { index: true, element: <Navigate to="/acquisition/daily" replace /> },
          { path: 'daily', element: <DailyActionPage /> },
          { path: 'short-video', element: <ShortVideoPage /> },
          { path: 'live', element: <LiveStreamPage /> },
          { path: 'private-domain', element: <PrivateDomainPage /> },
          { path: 'offline', element: <OfflineActivityPage /> },
        ],
      },
      {
        path: 'cases',
        element: <CasesLayout />,
        children: [
          { index: true, element: <Navigate to="/cases/list" replace /> },
          { path: 'list', element: <CaseListPage /> },
          { path: 'templates', element: <TemplateListPage /> },
          { path: 'materials', element: <MaterialListPage /> },
          { path: 'interviews', element: <InterviewListPage /> },
        ],
      },
      {
        path: 'training',
        element: <TrainingLayout />,
        children: [
          { index: true, element: <Navigate to="/training/courses" replace /> },
          { path: 'courses', element: <CourseListPage /> },
          { path: 'camps', element: <CampListPage /> },
          { path: 'assignments', element: <AssignmentListPage /> },
          { path: 'progress', element: <ProgressPage /> },
        ],
      },
      /* Phase 2 */
      {
        path: 'delivery',
        element: <DeliveryLayout />,
        children: [
          { index: true, element: <Navigate to="/delivery/sop" replace /> },
          { path: 'sop', element: <SOPListPage /> },
          { path: 'acceptance', element: <AcceptancePage /> },
          { path: 'diagnosis', element: <DiagnosisListPage /> },
          { path: 'after-sale', element: <AfterSaleListPage /> },
          { path: 'survey', element: <SurveyPage /> },
        ],
      },
      {
        path: 'policies',
        element: <PoliciesLayout />,
        children: [
          { index: true, element: <Navigate to="/policies/pricing" replace /> },
          { path: 'pricing', element: <PricingListPage /> },
          { path: 'commission', element: <CommissionPolicyPage /> },
          { path: 'refund', element: <RefundPolicyPage /> },
          { path: 'compliance', element: <CompliancePage /> },
          { path: 'contracts', element: <ContractTemplatePage /> },
          { path: 'reporting', element: <ReportingPage /> },
        ],
      },
      {
        path: 'brand',
        element: <BrandLayout />,
        children: [
          { index: true, element: <Navigate to="/brand/vi" replace /> },
          { path: 'vi', element: <VISpecPage /> },
          { path: 'templates', element: <BrandTemplatePage /> },
          { path: 'certificates', element: <CertificateListPage /> },
        ],
      },
      {
        path: 'data',
        element: <DataLayout />,
        children: [
          { index: true, element: <Navigate to="/data/dashboard" replace /> },
          { path: 'dashboard', element: <DataDashboardPage /> },
          { path: 'funnel', element: <FunnelPage /> },
          { path: 'ranking', element: <RankingPage /> },
          { path: 'complaint', element: <ComplaintPage /> },
          { path: 'reviews', element: <ReviewListPage /> },
        ],
      },
      /* 素材中心 */
      {
        path: 'materials',
        element: <MaterialsLayout />,
        children: [
          { index: true, element: <Navigate to="/materials/scripts" replace /> },
          { path: 'scripts', element: <ScriptsMaterialPage /> },
          { path: 'live-scripts', element: <LiveScriptsPage /> },
          { path: 'moments', element: <MomentsPage /> },
          { path: 'posters', element: <PostersPage /> },
          { path: 'videos', element: <VideosPage /> },
        ],
      },
      /* 系统设置 */
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <Navigate to="/settings/users" replace /> },
          { path: 'users', element: <UsersPage /> },
          { path: 'roles', element: <RolesPage /> },
          { path: 'logs', element: <LogsPage /> },
        ],
      },
    ],
  },
]);
