import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import MaterialCard, { MaterialItem } from './components/MaterialCard';

const mockData: MaterialItem[] = [
  { id: 'MS-001', title: '直播间开场话术模板（通用版）', category: 'scripts', content: '直播开场3分钟黄金话术，包含自我介绍、价值主张、互动引导三部分，适用于所有品类直播间开场使用。', author: '张明', status: 'published', views: 1280, downloads: 356, createdAt: '2024-12-15T10:00:00', tags: ['直播', '开场', '通用'] },
  { id: 'MS-002', title: '产品介绍短视频脚本——功能展示类', category: 'scripts', content: '60秒短视频脚本，从痛点引入到功能展示再到行动号召，节奏紧凑适合抖音投放。', author: '李芳', status: 'published', views: 890, downloads: 234, createdAt: '2024-12-12T14:00:00', tags: ['短视频', '产品介绍', '抖音'] },
  { id: 'MS-003', title: '客户见证视频脚本模板', category: 'scripts', content: '真实客户使用前后的对比叙事脚本，包含采访引导语、故事线编排、数据呈现方式。', author: '王芳', status: 'published', views: 654, downloads: 189, createdAt: '2024-12-10T09:30:00', tags: ['见证', '客户故事', '视频'] },
  { id: 'MS-004', title: '促销活动短视频脚本（限时折扣）', category: 'scripts', content: '限时促销短视频脚本，突出紧迫感和稀缺性，包含倒计时画面建议和价格锚点话术。', author: '陈晨', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-18T16:00:00', tags: ['促销', '折扣', '短视频'] },
  { id: 'MS-005', title: 'AI功能演示脚本——口播版', category: 'scripts', content: '口播演示极享AI核心功能的脚本，从注册到生成第一条话术的全流程，适合教程类视频。', author: '张明', status: 'published', views: 1560, downloads: 445, createdAt: '2024-12-08T11:00:00', tags: ['AI', '演示', '教程'] },
  { id: 'MS-006', title: '年底收官系列脚本（5集连播）', category: 'scripts', content: '年终5集短视频系列脚本，从回顾到展望到促销，每集30-45秒，适合连续投放。', author: '李芳', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-19T15:00:00', tags: ['年终', '系列', '连播'] },
];

export default function ScriptsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    return mockData.filter((item) => {
      const matchSearch = !search || item.title.includes(search) || item.content.includes(search) || item.tags.some((t: string) => t.includes(search));
      const matchFilter = filter === 'all' || item.tags.includes(filter);
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <Box>
      <SectionHeader title="短视频脚本" />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索脚本..." value={search} onChange={setSearch} />
        <FilterChips
          options={[
            { label: '全部', value: 'all' },
            { label: '直播', value: '直播' },
            { label: '短视频', value: '短视频' },
            { label: '教程', value: '教程' },
            { label: '促销', value: '促销' },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MaterialCard item={item} icon="fa-solid fa-file-lines" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
