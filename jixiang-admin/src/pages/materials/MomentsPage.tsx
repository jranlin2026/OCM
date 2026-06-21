import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import MaterialCard, { MaterialItem } from './components/MaterialCard';

const mockData: MaterialItem[] = [
  { id: 'MM-001', title: '早安语录——创业励志系列（30条）', category: 'moments', content: '30条适合朋友圈发布的早安励志语录，结合创业场景，附带配图建议和发布时间推荐。', author: '王芳', status: 'published', views: 1890, downloads: 456, createdAt: '2024-12-16T08:00:00', tags: ['早安', '励志', '创业'] },
  { id: 'MM-002', title: '产品种草朋友圈文案（客户见证类）', category: 'moments', content: '以客户真实使用感受为切入点的种草文案，包含使用前后对比、数据展示、推荐理由三段式结构。', author: '李芳', status: 'published', views: 1230, downloads: 345, createdAt: '2024-12-14T10:00:00', tags: ['种草', '客户见证', '文案'] },
  { id: 'MM-003', title: '限时活动朋友圈文案模板', category: 'moments', content: '限时折扣/秒杀/拼团等5种活动类型的朋友圈文案模板，包含紧迫感话术和评论区互动引导。', author: '陈晨', status: 'published', views: 1560, downloads: 423, createdAt: '2024-12-12T14:00:00', tags: ['活动', '限时', '模板'] },
  { id: 'MM-004', title: '晚间情感朋友圈（品牌温度系列）', category: 'moments', content: '晚间发布的品牌温度类朋友圈，分享团队故事、用户感谢、行业思考等内容，提升品牌好感度。', author: '王芳', status: 'published', views: 890, downloads: 234, createdAt: '2024-12-10T20:00:00', tags: ['晚间', '品牌', '情感'] },
  { id: 'MM-005', title: '年底感恩朋友圈系列（7天连发）', category: 'moments', content: '年终7天连发朋友圈系列文案，从回顾到感谢到展望，每天一个主题，适合12月最后一周发布。', author: '张明', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-18T15:00:00', tags: ['年终', '感恩', '系列'] },
];

export default function MomentsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => mockData.filter((i) => {
    const ms = !search || i.title.includes(search) || i.tags.some((t: string) => t.includes(search));
    const mf = filter === 'all' || i.tags.includes(filter);
    return ms && mf;
  }), [search, filter]);

  return (
    <Box>
      <SectionHeader title="朋友圈素材" />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索朋友圈素材..." value={search} onChange={setSearch} />
        <FilterChips
          options={[
            { label: '全部', value: 'all' },
            { label: '早安', value: '早安' },
            { label: '种草', value: '种草' },
            { label: '活动', value: '活动' },
            { label: '品牌', value: '品牌' },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MaterialCard item={item} icon="fa-solid fa-comment-dots" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
