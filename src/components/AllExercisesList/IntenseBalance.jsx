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

export default function IntenseBalance() {
  const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();

  const exerciseData = [
    {
      title: 'Single-Leg Deadlift',
      description: 'Stand on one leg, hinge at your hips, and reach your arms toward the ground while lifting your free leg behind you. Return to the starting position.',
      duration: '3 sets of 8 reps each leg',
      type: 'balance',
      color: '#fce4ec', // Light pink color for balance
    },
    {
      title: 'Side Plank',
      description: 'Lie on your side, prop yourself up on your elbow, and stack your feet on top of each other. Lift your hips, creating a straight line from head to heels.',
      duration: '3 sets of 20-30 seconds each side',
      type: 'balance',
      color: '#fff3e0', // Light orange color for balance
    },
    {
      title: 'Bosu Ball Squats',
      description: 'Stand on a Bosu ball with feet shoulder-width apart. Perform squats while maintaining balance on the ball.',
      duration: '3 sets of 12-15 reps',
      type: 'balance',
      color: '#e8f5e9', // Light green color for balance
    },
    {
      title: 'Single-Leg Balance with Dumbbell Row',
      description: 'Stand on one leg, hold a dumbbell in one hand, and perform a row by pulling the weight towards your chest. Switch legs and repeat.',
      duration: '3 sets of 10 reps each leg',
      type: 'balance',
      color: '#e0f7fa', // Light cyan color for balance
    },
    {
      title: 'Single-Leg Plyometric Jumps',
      description: 'Stand on one leg, then explosively jump forward and land softly on the same leg. Repeat for the desired reps, then switch legs.',
      duration: '3 sets of 8 reps each leg',
      type: 'balance',
      color: '#fff9c4', // Light yellow color for balance
    },
    {
      title: 'Warrior III Pose',
      description: 'Stand on one leg, hinge at your hips, and extend your arms and free leg backward. Keep your body in a straight line.',
      duration: '3 sets of 20-30 seconds each leg',
      type: 'balance',
      color: '#e0f2f1', // Light teal color for balance
    },
    {
      title: 'Cool Down',
      description: 'Take deep breaths and perform stretches to release tension in your muscles, focusing on hamstrings, quadriceps, and hip flexors.',
      duration: 'Cool Down',
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
          <Typography variant="h5">Intense Balance Workout</Typography>
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
