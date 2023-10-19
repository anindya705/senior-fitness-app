import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StretchCard = ({ title, description }) => (
  <Card variant="outlined" style={{ marginBottom: '16px' }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
);

export default function CardioStretch() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Cardio Stretches</Typography>
        </CardContent>
      </Card>

      <StretchCard
        title="Standing Quad Stretch"
        description="Grab the back of a chair with one hand for support, bend your other knee and grab your foot with your free hand. Hold for ten seconds, then switch."
      />

      <StretchCard
        title="Seated Knee to Chest"
        description="Sit in a chair, grab one knee and slowly pull it towards your chest. Hold for ten seconds, then guide the leg back down and switch to the other leg."
      />

      <StretchCard
        title="Hamstring Stretch"
        description="Sit on the floor, extend one leg out, and lean forward, reaching for your thigh, knee, or ankle. Hold for ten seconds, then switch to the other leg."
      />

      <StretchCard
        title="Soleus Stretch"
        description="Stand and face a wall, place one foot in front of the other and both hands on the wall. Slowly bend your knees and hold for ten seconds. Stand up and swap the position of your feet."
      />

      <StretchCard
        title="Overhead Side Stretch"
        description="Stand with feet shoulder-width apart, raise your arms over your head, and slowly lean to one side. Hold for ten seconds, then return to the center and lean to the other side."
      />

      <StretchCard
        title="Tricep Stretch"
        description="Stand with feet shoulder-width apart, raise both arms over your head, and bend one arm behind your head. Place the other hand on the elbow of the bent arm and pull the elbow down. Hold for ten seconds, then switch to the other arm."
      />

      <StretchCard
        title="Shoulder Stretch"
        description="Stand with feet shoulder-width apart, reach one arm across your body, and place the other hand on the upper part of your arm. Pull the arm closer to your body. Hold for ten seconds, then switch to the other arm."
      />

      <StretchCard
        title="Cat Cow Stretch"
        description="Start on all fours with hands below shoulders and knees below hips. Round your back up slowly and tuck in your chin. Reverse by arching your back and lifting your hips and head."
      />

      <StretchCard
        title="Upper Back Stretch"
        description="Stand or sit with arms out in front, face palms outwards, and interlock fingers. Try to bring shoulder blades apart. Hold for thirty seconds."
      />
    </div>
  );
}
