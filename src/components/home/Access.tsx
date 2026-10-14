import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SECTION_IDS } from '@/constants/navigation';
import SectionTitle from '@/components/common/SectionTitle';
import SectionContainer from '@/components/common/SectionContainer';

import { ACCESS_CONTENT } from '@/constants/access';

export default function Access() {
  return (
    <SectionContainer id={SECTION_IDS.ACCESS}>
      <SectionTitle>{ACCESS_CONTENT.title}</SectionTitle>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        {ACCESS_CONTENT.description}
      </Typography>

      <Box
        sx={{
          width: '100%',
          height: '450px',
          position: 'relative',
          border: '2px solid',
          borderColor: 'secondary.main',
          borderRadius: 4,
          overflow: 'hidden',
          display: 'block',
        }}
      >
        <iframe
          src={ACCESS_CONTENT.googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </SectionContainer>
  );
}
