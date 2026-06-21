import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import { colors } from '@/theme/tokens';

const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const ProductMatrixPage = lazy(() => import('@/pages/products/ProductMatrixPage'));

const ProjectLayout = lazy(() => import('@/pages/project'));
const OverviewPage = lazy(() => import('@/pages/project/OverviewPage'));
const FAQPage = lazy(() => import('@/pages/project/FAQPage'));
const CompetitivePage = lazy(() => import('@/pages/project/CompetitivePage'));
const GuidePage = lazy(() => import('@/pages/project/GuidePage'));

const SalesLayout = lazy(() => import('@/pages/sales'));
const ScriptsPage = lazy(() => import('@/pages/sales/ScriptsPage'));
const QAPage = lazy(() => import('@/pages/sales/QAPage'));
const DiagnosisPage = lazy(() => import('@/pages/sales/DiagnosisPage'));
const QuotationsPage = lazy(() => import('@/pages/sales/QuotationsPage'));
const SOPPage = lazy(() => import('@/pages/sales/SOPPage'));

const AgentLayout = lazy(() => import('@/pages/agent'));
const AgentListPage = lazy(() => import('@/pages/agent/AgentListPage'));
const PolicyListPage = lazy(() => import('@/pages/agent/PolicyListPage'));
const AgreementListPage = lazy(() => import('@/pages/agent/AgreementListPage'));
const SettlementListPage = lazy(() => import('@/pages/agent/SettlementListPage'));
const GrowthPathPage = lazy(() => import('@/pages/agent/GrowthPathPage'));

const AcquisitionLayout = lazy(() => import('@/pages/acquisition'));
const DailyActionPage = lazy(() => import('@/pages/acquisition/DailyActionPage'));
const ShortVideoPage = lazy(() => import('@/pages/acquisition/ShortVideoPage'));
const LiveStreamPage = lazy(() => import('@/pages/acquisition/LiveStreamPage'));
const PrivateDomainPage = lazy(() => import('@/pages/acquisition/PrivateDomainPage'));
const OfflineActivityPage = lazy(() => import('@/pages/acquisition/OfflineActivityPage'));

const CasesLayout = lazy(() => import('@/pages/cases'));
const CaseListPage = lazy(() => import('@/pages/cases/CaseListPage'));
const TemplateListPage = lazy(() => import('@/pages/cases/TemplateListPage'));
const MaterialListPage = lazy(() => import('@/pages/cases/MaterialListPage'));
const InterviewListPage = lazy(() => import('@/pages/cases/InterviewListPage'));

const TrainingLayout = lazy(() => import('@/pages/training'));
const CourseListPage = lazy(() => import('@/pages/training/CourseListPage'));
const CampListPage = lazy(() => import('@/pages/training/CampListPage'));
const AssignmentListPage = lazy(() => import('@/pages/training/AssignmentListPage'));
const ProgressPage = lazy(() => import('@/pages/training/ProgressPage'));

const DeliveryLayout = lazy(() => import('@/pages/delivery'));
const SOPListPage = lazy(() => import('@/pages/delivery/SOPListPage'));
const AcceptancePage = lazy(() => import('@/pages/delivery/AcceptancePage'));
const DiagnosisListPage = lazy(() => import('@/pages/delivery/DiagnosisListPage'));
const AfterSaleListPage = lazy(() => import('@/pages/delivery/AfterSaleListPage'));
const SurveyPage = lazy(() => import('@/pages/delivery/SurveyPage'));

const PoliciesLayout = lazy(() => import('@/pages/policies'));
const PricingListPage = lazy(() => import('@/pages/policies/PricingListPage'));
const CommissionPolicyPage = lazy(() => import('@/pages/policies/CommissionPolicyPage'));
const RefundPolicyPage = lazy(() => import('@/pages/policies/RefundPolicyPage'));
const CompliancePage = lazy(() => import('@/pages/policies/CompliancePage'));
const ContractTemplatePage = lazy(() => import('@/pages/policies/ContractTemplatePage'));
const ReportingPage = lazy(() => import('@/pages/policies/ReportingPage'));

const BrandLayout = lazy(() => import('@/pages/brand'));
const VISpecPage = lazy(() => import('@/pages/brand/VISpecPage'));
const BrandTemplatePage = lazy(() => import('@/pages/brand/BrandTemplatePage'));
const CertificateListPage = lazy(() => import('@/pages/brand/CertificateListPage'));

const DataLayout = lazy(() => import('@/pages/data'));
const DataDashboardPage = lazy(() => import('@/pages/data/DataDashboardPage'));
const FunnelPage = lazy(() => import('@/pages/data/FunnelPage'));
const RankingPage = lazy(() => import('@/pages/data/RankingPage'));
const ComplaintPage = lazy(() => import('@/pages/data/ComplaintPage'));
const ReviewListPage = lazy(() => import('@/pages/data/ReviewListPage'));

const MaterialsLayout = lazy(() => import('@/pages/materials'));
const ScriptsMaterialPage = lazy(() => import('@/pages/materials/ScriptsPage'));
const LiveScriptsPage = lazy(() => import('@/pages/materials/LiveScriptsPage'));
const MomentsPage = lazy(() => import('@/pages/materials/MomentsPage'));
const PostersPage = lazy(() => import('@/pages/materials/PostersPage'));
const VideosPage = lazy(() => import('@/pages/materials/VideosPage'));

const SettingsLayout = lazy(() => import('@/pages/settings'));
const UsersPage = lazy(() => import('@/pages/settings/UsersPage'));
const RolesPage = lazy(() => import('@/pages/settings/RolesPage'));
const RecycleBinPage = lazy(() => import('@/pages/settings/RecycleBinPage'));
const LogsPage = lazy(() => import('@/pages/settings/LogsPage'));

function RouteFallback() {
  return (
    <Box
      sx={{
        minHeight: 240,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.gold,
      }}
    >
      <CircularProgress size={28} sx={{ color: colors.gold }} />
    </Box>
  );
}

function withSuspense(node: ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{node}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: withSuspense(<DashboardPage />) },
      { path: 'products', element: withSuspense(<ProductMatrixPage />) },
      {
        path: 'project',
        element: withSuspense(<ProjectLayout />),
        children: [
          { index: true, element: <Navigate to="/project/overview" replace /> },
          { path: 'overview', element: withSuspense(<OverviewPage />) },
          { path: 'faq', element: withSuspense(<FAQPage />) },
          { path: 'competitive', element: withSuspense(<CompetitivePage />) },
          { path: 'guide', element: withSuspense(<GuidePage />) },
        ],
      },
      {
        path: 'sales',
        element: withSuspense(<SalesLayout />),
        children: [
          { index: true, element: <Navigate to="/sales/scripts" replace /> },
          { path: 'scripts', element: withSuspense(<ScriptsPage />) },
          { path: 'qa', element: withSuspense(<QAPage />) },
          { path: 'diagnosis', element: withSuspense(<DiagnosisPage />) },
          { path: 'quotations', element: withSuspense(<QuotationsPage />) },
          { path: 'sop', element: withSuspense(<SOPPage />) },
        ],
      },
      {
        path: 'agent',
        element: withSuspense(<AgentLayout />),
        children: [
          { index: true, element: <Navigate to="/agent/list" replace /> },
          { path: 'list', element: withSuspense(<AgentListPage />) },
          { path: 'policies', element: withSuspense(<PolicyListPage />) },
          { path: 'agreements', element: withSuspense(<AgreementListPage />) },
          { path: 'settlements', element: withSuspense(<SettlementListPage />) },
          { path: 'growth', element: withSuspense(<GrowthPathPage />) },
        ],
      },
      {
        path: 'acquisition',
        element: withSuspense(<AcquisitionLayout />),
        children: [
          { index: true, element: <Navigate to="/acquisition/daily" replace /> },
          { path: 'daily', element: withSuspense(<DailyActionPage />) },
          { path: 'short-video', element: withSuspense(<ShortVideoPage />) },
          { path: 'live', element: withSuspense(<LiveStreamPage />) },
          { path: 'private-domain', element: withSuspense(<PrivateDomainPage />) },
          { path: 'offline', element: withSuspense(<OfflineActivityPage />) },
        ],
      },
      {
        path: 'cases',
        element: withSuspense(<CasesLayout />),
        children: [
          { index: true, element: <Navigate to="/cases/list" replace /> },
          { path: 'list', element: withSuspense(<CaseListPage />) },
          { path: 'templates', element: withSuspense(<TemplateListPage />) },
          { path: 'materials', element: withSuspense(<MaterialListPage />) },
          { path: 'interviews', element: withSuspense(<InterviewListPage />) },
        ],
      },
      {
        path: 'training',
        element: withSuspense(<TrainingLayout />),
        children: [
          { index: true, element: <Navigate to="/training/courses" replace /> },
          { path: 'courses', element: withSuspense(<CourseListPage />) },
          { path: 'camps', element: withSuspense(<CampListPage />) },
          { path: 'assignments', element: withSuspense(<AssignmentListPage />) },
          { path: 'progress', element: withSuspense(<ProgressPage />) },
        ],
      },
      {
        path: 'delivery',
        element: withSuspense(<DeliveryLayout />),
        children: [
          { index: true, element: <Navigate to="/delivery/sop" replace /> },
          { path: 'sop', element: withSuspense(<SOPListPage />) },
          { path: 'acceptance', element: withSuspense(<AcceptancePage />) },
          { path: 'diagnosis', element: withSuspense(<DiagnosisListPage />) },
          { path: 'after-sale', element: withSuspense(<AfterSaleListPage />) },
          { path: 'survey', element: withSuspense(<SurveyPage />) },
        ],
      },
      {
        path: 'policies',
        element: withSuspense(<PoliciesLayout />),
        children: [
          { index: true, element: <Navigate to="/policies/pricing" replace /> },
          { path: 'pricing', element: withSuspense(<PricingListPage />) },
          { path: 'commission', element: withSuspense(<CommissionPolicyPage />) },
          { path: 'refund', element: withSuspense(<RefundPolicyPage />) },
          { path: 'compliance', element: withSuspense(<CompliancePage />) },
          { path: 'contracts', element: withSuspense(<ContractTemplatePage />) },
          { path: 'reporting', element: withSuspense(<ReportingPage />) },
        ],
      },
      {
        path: 'brand',
        element: withSuspense(<BrandLayout />),
        children: [
          { index: true, element: <Navigate to="/brand/vi" replace /> },
          { path: 'vi', element: withSuspense(<VISpecPage />) },
          { path: 'templates', element: withSuspense(<BrandTemplatePage />) },
          { path: 'certificates', element: withSuspense(<CertificateListPage />) },
        ],
      },
      {
        path: 'data',
        element: withSuspense(<DataLayout />),
        children: [
          { index: true, element: <Navigate to="/data/dashboard" replace /> },
          { path: 'dashboard', element: withSuspense(<DataDashboardPage />) },
          { path: 'funnel', element: withSuspense(<FunnelPage />) },
          { path: 'ranking', element: withSuspense(<RankingPage />) },
          { path: 'complaint', element: withSuspense(<ComplaintPage />) },
          { path: 'reviews', element: withSuspense(<ReviewListPage />) },
        ],
      },
      {
        path: 'materials',
        element: withSuspense(<MaterialsLayout />),
        children: [
          { index: true, element: <Navigate to="/materials/scripts" replace /> },
          { path: 'scripts', element: withSuspense(<ScriptsMaterialPage />) },
          { path: 'live-scripts', element: withSuspense(<LiveScriptsPage />) },
          { path: 'moments', element: withSuspense(<MomentsPage />) },
          { path: 'posters', element: withSuspense(<PostersPage />) },
          { path: 'videos', element: withSuspense(<VideosPage />) },
        ],
      },
      {
        path: 'settings',
        element: withSuspense(<SettingsLayout />),
        children: [
          { index: true, element: <Navigate to="/settings/users" replace /> },
          { path: 'users', element: withSuspense(<UsersPage />) },
          { path: 'roles', element: withSuspense(<RolesPage />) },
          { path: 'recycle-bin', element: withSuspense(<RecycleBinPage />) },
          { path: 'logs', element: withSuspense(<LogsPage />) },
        ],
      },
    ],
  },
]);
