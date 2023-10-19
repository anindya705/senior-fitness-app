import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ExerciseCard = ({ title, description, duration, type, handleCompleteExercise, isExerciseCompleted, cardColor }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    handleCompleteExercise(title);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '16px' }}
    >
      <Card variant="outlined" sx={{ backgroundColor: cardColor }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body2">Duration: {duration}</Typography>
          {!isExerciseCompleted(title) && (
            <Box sx={{ marginTop: '16px' }}>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
                Finish
              </Button>
            </Box>
          )}
          {isExerciseCompleted(title) && (
            <Box sx={{ marginTop: '16px' }}>
              <Button variant="contained" disabled>
                Completed
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const useExerciseCompletion = () => {
  const [completedExercises, setCompletedExercises] = useState([]);

  const handleCompleteExercise = (exercise) => {
    setCompletedExercises([...completedExercises, exercise]);
  };

  const isExerciseCompleted = (exercise) => {
    return completedExercises.includes(exercise);
  };

  return { handleCompleteExercise, isExerciseCompleted };
};

export default function IntenseStrength() {
  const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();

  const exerciseData = [
    {
      title: 'Gentle Neck Rolls',
      description: 'Roll your neck in circles, both ways, to warm up.',
      duration: 'Warm-up',
      type: 'strength',
      color: '#fce4ec', // Light pink color for strength
    },
    {
      title: 'Arm Circles',
      description: 'Stand with feet shoulder-width apart, swing arms in a circle to stretch.',
      duration: '2 sets of 8-10 reps',
      type: 'strength',
      color: '#fff3e0', // Light orange color for strength
    },
    {
      title: 'Squats',
      description: 'Stand with feet hip-width apart, lower into a squat position, then rise back up.',
      duration: '3 sets of 8-10 reps',
      type: 'strength',
      color: '#e8f5e9', // Light green color for strength
    },
    {
      title: 'Push-Ups',
      description: 'Place your hands on a sturdy surface at shoulder-width, lower your chest towards the surface, then push back up.',
      duration: '3 sets of 6-8 reps',
      type: 'strength',
      color: '#e0f7fa', // Light cyan color for strength
    },
    {
      title: 'Lunges',
      description: 'Step forward with one leg, lowering your body until both knees form 90-degree angles. Push back to the starting position and alternate legs.',
      duration: '3 sets of 10 reps per leg',
      type: 'strength',
      color: '#fff9c4', // Light yellow color for strength
    },
    {
      title: 'Dumbbell Rows',
      description: 'Hold dumbbells with palms facing your body, bend at the hips, and let the dumbbells hang. Pull the dumbbells up toward your chest, then lower them back down.',
      duration: '3 sets of 8-10 reps',
      type: 'strength',
      color: '#e0f2f1', // Light teal color for strength
    },
    {
      title: 'Bicep Curls',
      description: 'Sit on a chair, arms by sides, holding dumbbells. Curl arms up, then slowly lower.',
      duration: '2 sets of 8-10 reps',
      type: 'strength',
      color: '#e3f2fd', // Light blue color for strength
    },
    {
      title: 'Standing Heel Raises',
      description: 'Stand behind a chair, lift heels off the ground, then lower.',
      duration: '3 sets of 12-15 reps',
      type: 'strength',
      color: '#fce4ec', // Light pink color for strength
    },
    {
      title: 'Standing Hip Extensions',
      description: 'Stand behind a chair, extend one leg back, then lower.',
      duration: '3 sets of 10 reps per leg',
      type: 'strength',
      color: '#fff3e0', // Light orange color for strength
    },
    {
      title: 'Cool Down',
      description: 'March in place or take a leisurely walk for 10 minutes. Stretch major muscle groups, holding each stretch for around 30-60 seconds.',
      duration: 'Cool Down',
      type: 'cooldown',
      color: '#e8f5e9', // Light green color for cooldown
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={containerVariants}
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Intense Strength Workout</Typography>
        </CardContent>
      </Card>

      {exerciseData.map((exercise) => (
        <ExerciseCard
          key={exercise.title}
          title={exercise.title}
          description={exercise.description}
          duration={exercise.duration}
          type={exercise.type}
          handleCompleteExercise={handleCompleteExercise}
          isExerciseCompleted={isExerciseCompleted}
          cardColor={exercise.color}
        />
      ))}
    </motion.div>
  );
}
