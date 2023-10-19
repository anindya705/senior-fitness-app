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

export default function MildBalance() {
  const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();

  const exerciseData = [
    {
      title: 'One-Leg Stand',
      description: 'Stand tall, lift one foot off the ground, and balance on the other leg. Hold for 30 seconds, then switch legs.',
      duration: '30 seconds each leg',
      type: 'balance',
      color: '#fce4ec', // Light pink color for balance
    },
    {
      title: 'Heel-to-Toe Walk',
      description: 'Take ten small steps forward, placing the heel of one foot directly in front of the toes of the other foot with each step. Maintain a straight line and steady pace.',
      duration: '10 steps',
      type: 'balance',
      color: '#fff3e0', // Light orange color for balance
    },
    {
      title: 'Clock Reach',
      description: 'Stand on one leg, imagine a clock face beneath you, and reach your free leg out to different "hour" positions while keeping your balance.',
      duration: '5 reps each side',
      type: 'balance',
      color: '#e8f5e9', // Light green color for balance
    },
    {
      title: 'Tightrope Walk',
      description: 'Imagine walking on a tightrope. Take ten small steps forward, placing one foot directly in front of the other.',
      duration: '10 steps',
      type: 'balance',
      color: '#e0f7fa', // Light cyan color for balance
    },
    {
      title: 'Single-Leg Hip Hinge',
      description: 'Stand on one leg, slightly bend your knee, and hinge at your hips, reaching your free leg backward. Return to the starting position.',
      duration: '8-10 reps each leg',
      type: 'balance',
      color: '#fff9c4', // Light yellow color for balance
    },
    {
      title: 'Tree Pose',
      description: 'Stand tall, place the sole of one foot against the inner thigh of the opposite leg, and find your balance. Hold for 30 seconds, then switch legs.',
      duration: '30 seconds each leg',
      type: 'balance',
      color: '#e0f2f1', // Light teal color for balance
    },
    {
      title: 'Cool Down',
      description: 'Take a few deep breaths and perform gentle stretches for your lower body, focusing on hamstrings, calves, and hips.',
      duration: 'Cooldown',
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
          <Typography variant="h5">Light / Moderate Balance Workout</Typography>
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
