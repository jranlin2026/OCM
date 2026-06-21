import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import MaterialCard, { MaterialItem } from './components/MaterialCard';

const mockData: MaterialItem[] = [
  { id: 'MV-001', title: '极享AI产品宣传片（3分钟完整版）', category: 'videos', content: '完整版产品宣传片，涵盖产品定位、核心功能、客户见证、使用场景等内容，适合展会和招商场景播放。', author: '视频组', status: 'published', views: 5600, downloads: 890, createdAt: '2024-12-10T10:00:00', tags: ['宣传片', '完整版', '招商'] },
  { id: 'MV-002', title: '产品教程视频——从注册到成交（15分钟）', category: 'videos', content: '完整的产品使用教程，从注册账号到生成话术到客户诊断到成交的全流程演示。', author: '视频组', status: 'published', views: 3200, downloads: 678, createdAt: '2024-12-08T14:00:00', tags: ['教程', '使用', '全流程'] },
  { id: 'MV-003', title: '客户见证视频——小美的故事（2分钟）', category: 'videos', content: '客户小美从直播新手到月销60万的真实故事，包含采访和实操画面，情感真实有感染力。', author: '视频组', status: 'published', views: 4500, downloads: 560, createdAt: '2024-12-06T09:00:00', tags: ['见证', '故事', '客户'] },
  { id: 'MV-004', title: '代理商采访视频——赵敏的合伙人之路', category: 'videos', content: '钻石合伙人赵敏的深度采访视频，分享从个人代理到区域合伙人的成长历程和经验。', author: '视频组', status: 'published', views: 2800, downloads: 445, createdAt: '2024-12-04T16:00:00', tags: ['采访', '合伙人', '代理'] },
  { id: 'MV-005', title: '年度总结视频——2024极享AI大事记', category: 'videos', content: '2024年度极享AI重要里程碑和客户成功故事集锦，适合年终大会和朋友圈传播。', author: '视频组', status: 'draft', views: 0, downloads: 0, createdAt: '2024-12-18T15:00:00', tags: ['年度', '总结', '大事记'] },
  { id: 'MV-006', title: '功能更新视频——V2.0新功能速览', category: 'videos', content: 'V2.0版本新功能介绍视频，包含AI话术升级、客户诊断增强、数据看板新增等功能演示。', author: '视频组', status: 'published', views: 1900, downloads: 334, createdAt: '2024-12-02T11:00:00', tags: ['更新', 'V2.0', '功能'] },
];

export default function VideosPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => mockData.filter((i) => {
    const ms = !search || i.title.includes(search) || i.tags.some((t: string) => t.includes(search));
    const mf = filter === 'all' || i.tags.includes(filter);
    return ms && mf;
  }), [search, filter]);

  return (
    <Box>
      <SectionHeader title="视频素材" />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索视频..." value={search} onChange={setSearch} />
        <FilterChips
          options={[
            { label: '全部', value: 'all' },
            { label: '宣传片', value: '宣传片' },
            { label: '教程', value: '教程' },
            { label: '见证', value: '见证' },
            { label: '采访', value: '采访' },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MaterialCard item={item} icon="fa-solid fa-video" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
