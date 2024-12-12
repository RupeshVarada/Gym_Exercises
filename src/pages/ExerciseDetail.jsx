import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  exercisesOptions,
  youtubeOptions,
  fetchData,
} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVedios from "../components/ExerciseVedios";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVedios, setexerciseVedios] = useState([]);
  const [exerciseTarget, setexerciseTarget] = useState([]);
  const [exerciseEquipment, setexerciseEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setexerciseDetail(exerciseDetailData);

      const exerciseVediosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setexerciseVedios(exerciseVediosData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setexerciseTarget(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setexerciseEquipment(equipmentExerciseData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVedios
        exerciseVedios={exerciseVedios}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exerciseTarget={exerciseTarget}
        exerciseEquipment={exerciseEquipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
