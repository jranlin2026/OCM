import { useState } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import CertificateCard from './components/CertificateCard';
import { useBrandCertificates } from '@/hooks/useMockData';

const TYPE_OPTIONS = [
  { label: '全部', value: 'all' },
  { label: '商标', value: 'trademark' },
  { label: '著作权', value: 'copyright' },
  { label: '许可证', value: 'license' },
  { label: '认证', value: 'certification' },
  { label: '专利', value: 'patent' },
];

export default function CertificateListPage() {
  const [filter, setFilter] = useState('all');
  const certificates = useBrandCertificates();

  const filtered = filter === 'all'
    ? certificates
    : certificates.filter((c) => c.type === filter);

  return (
    <Box>
      <SectionHeader title="品牌证书" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={TYPE_OPTIONS} value={filter} onChange={setFilter} />
      </Box>
      {filtered.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: '#6B6B82',
            fontSize: '0.875rem',
          }}
        >
          暂无符合条件的品牌证书
        </Box>
      ) : (
        filtered.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))
      )}
    </Box>
  );
}
