import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import MaterialCard, { MaterialItem } from './components/MaterialCard';

const mockData: MaterialItem[] = [
  { id: 'ML-001', title: '直播间互动话术合集（100条）', category: 'live-scripts', content: '涵盖欢迎、互动、催单、逼单、感谢等直播全流程话术，共100条精编文案，可直接复制使用。', author: '张明', status: 'published', views: 2340, downloads: 678, createdAt: '2024-12-14T10:00:00', tags: ['直播', '互动', '话术'] },
  { id: 'ML-002', title: '高客单直播间话术（29800级）', category: 'live-scripts', content: '针对高客单价产品的直播间话术策略，包含信任建立、价值塑造、异议处理、成交促单全套流程。', author: '李芳', status: 'published', views: 1450, downloads: 389, createdAt: '2024-12-11T14:00:00', tags: ['高客单', '直播', '成交'] },
  { id: 'ML-003', title: '直播开场暖场话术模板', category: 'live-scripts', content: '直播间开播前10分钟暖场话术，包含天气互动、话题引入、观众欢迎、预告亮点等环节。', author: '王芳', status: 'published', views: 980, downloads: 267, createdAt: '2024-12-09T09:00:00', tags: ['暖场', '开场', '直播'] },
  { id: 'ML-004', title: '直播逼单话术（限时限量版）', category: 'live-scripts', content: '直播间最后5分钟逼单话术，结合限量库存+限时折扣+从众心理三重刺激，转化率提升3倍。', author: '陈晨', status: 'published', views: 1890, downloads: 512, createdAt: '2024-12-07T16:00:00', tags: ['逼单', '限时', '转化'] },
  { id: 'ML-005', title: '年后复播话术（开工福利场）', category: 'live-scripts', content: '节后复播首场话术，包含假期回顾、开工福利、新品预告等内容，快速激活粉丝。', author: '张明', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-18T11:00:00', tags: ['复播', '开工', '福利'] },
];

export default function LiveScriptsPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.title.includes(search) || i.tags.some((t: string) => t.includes(search))), [search]);

  return (
    <Box>
      <SectionHeader title="直播话术" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索直播话术..." value={search} onChange={setSearch} />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MaterialCard item={item} icon="fa-solid fa-microphone" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
