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

export default function IntenseCardio() {
  const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();

  const exerciseData = [
    {
      title: 'Warm-up',
      description: 'Begin with marching in place, arm circles, and leg swings to prepare your body.',
      duration: '5 minutes',
      type: 'warmup',
      color: '#fce4ec', // Light pink color for warm-up
    },
    {
      title: 'High Knees',
      description: 'Stand tall and lift your knees as high as possible, alternating between legs.',
      duration: '1 minute',
      type: 'exercise',
      color: '#fff3e0', // Light orange color for exercise
    },
    {
      title: 'Jumping Jacks',
      description: 'Perform classic jumping jacks to boost your heart rate.',
      duration: '1 minute',
      type: 'exercise',
      color: '#e8f5e9', // Light green color for exercise
    },
    {
      title: 'Stationary Jogging',
      description: 'Jog in place, lifting your knees and swinging your arms.',
      duration: '2 minutes',
      type: 'exercise',
      color: '#e0f7fa', // Light cyan color for exercise
    },
    {
      title: 'Mountain Climbers',
      description: 'Assume a plank position and alternate bringing your knees toward your chest.',
      duration: '1 minute',
      type: 'exercise',
      color: '#fff9c4', // Light yellow color for exercise
    },
    {
      title: 'Speed Skaters',
      description: 'Leap from side to side, stretching your arms out like a speed skater.',
      duration: '1 minute',
      type: 'exercise',
      color: '#e0f2f1', // Light teal color for exercise
    },
    {
      title: 'Burpees',
      description: 'Perform full-body burpees, including a push-up and jump at the end.',
      duration: '1 minute',
      type: 'exercise',
      color: '#e6ee9c', // Light lime color for exercise
    },
    {
      title: 'Jump Rope',
      description: 'Mimic jump rope movements, using an imaginary rope or a lightweight prop.',
      duration: '2 minutes',
      type: 'exercise',
      color: '#f0f4c3', // Light lime green color for exercise
    },
    {
      title: 'Cool Down',
      description: 'Walk slowly, followed by gentle stretches for your legs, arms, and torso.',
      duration: '3 minutes',
      type: 'cooldown',
      color: '#e3f2fd', // Light blue color for cooldown
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
          <Typography variant="h5">Intense Endurance Workout</Typography>
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
