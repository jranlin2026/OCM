import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import DiagnosisForm from './components/DiagnosisForm';
import { useDiagnoses } from '@/hooks/useMockData';

export default function DiagnosisPage() {
  const diagnoses = useDiagnoses();

  return (
    <Box>
      <SectionHeader title="客户诊断模板" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {diagnoses.map((template) => (
          <DiagnosisForm key={template.id} template={template} />
        ))}
      </Box>
    </Box>
  );
}
