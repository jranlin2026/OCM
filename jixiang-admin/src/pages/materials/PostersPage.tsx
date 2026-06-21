import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import MaterialCard, { MaterialItem } from './components/MaterialCard';

const mockData: MaterialItem[] = [
  { id: 'MP-001', title: '产品介绍海报——标准版（899元）', category: 'posters', content: '标准版产品介绍海报，包含核心功能、价格、扫码购买二维码，适合朋友圈和社群传播。', author: '设计部', status: 'published', views: 2100, downloads: 567, createdAt: '2024-12-15T10:00:00', tags: ['海报', '标准版', '产品'] },
  { id: 'MP-002', title: '代理招募海报——黄金等级', category: 'posters', content: '黄金代理商招募海报，突出佣金比例、扶持政策、成长路径等核心信息，视觉冲击力强。', author: '设计部', status: 'published', views: 1780, downloads: 423, createdAt: '2024-12-13T14:00:00', tags: ['海报', '招募', '代理'] },
  { id: 'MP-003', title: '节日营销海报——元旦活动', category: 'posters', content: '元旦新年活动海报，包含限时折扣信息、活动时间、参与方式，节日氛围设计。', author: '设计部', status: 'published', views: 1340, downloads: 345, createdAt: '2024-12-11T09:00:00', tags: ['海报', '节日', '元旦'] },
  { id: 'MP-004', title: '客户见证海报——小美的蜕变', category: 'posters', content: '客户成功案例海报，展示小美从0到月销60万的数据对比，配合真实照片和金句。', author: '设计部', status: 'published', views: 980, downloads: 267, createdAt: '2024-12-09T16:00:00', tags: ['海报', '案例', '见证'] },
  { id: 'MP-005', title: 'OEM贴牌版宣传海报', category: 'posters', content: 'OEM贴牌版产品宣传海报，突出品牌定制、独立部署、数据私有等核心卖点。', author: '设计部', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-18T11:00:00', tags: ['海报', 'OEM', '贴牌'] },
];

export default function PostersPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.title.includes(search) || i.tags.some((t: string) => t.includes(search))), [search]);

  return (
    <Box>
      <SectionHeader title="海报素材" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索海报..." value={search} onChange={setSearch} />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MaterialCard item={item} icon="fa-solid fa-image" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
