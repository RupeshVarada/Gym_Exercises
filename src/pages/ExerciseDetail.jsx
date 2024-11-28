import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exercisesOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVedios from '../components/ExerciseVedios';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  
  const [exerciseDetail, setexerciseDetail]=useState({});
  const { id } = useParams();
  console.log(id);
  
  useEffect( () => {
    const fetchExercisesData =  async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}` ,exercisesOptions);
      console.log({exerciseDetailData});
      setexerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  }, [id]);
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVedios />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
