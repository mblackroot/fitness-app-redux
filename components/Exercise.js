import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { CheckIcon } from "react-native-heroicons/outline";

const Exercise = ({ exercise }) => {
  const navigation = useNavigation();
  const { completedExercises } = useSelector((state) => state.stats);
  const isDone = completedExercises.includes(exercise.name);
  return (
    <View className="flex-row mt-4 items-center justify-between">
      <View className="flex-row gap-x-4 items-center">
        <Image source={{ uri: exercise.image }} className="w-16 h-16" />
        <View className="gap-y-2">
          <Text className="font-bold">{exercise.name}</Text>
          <Text>x{exercise.sets}</Text>
        </View>
      </View>
      {isDone && (
        <View className="bg-green-500 p-1 rounded-full mr-4">
          <CheckIcon size={18} color={"white"} />
        </View>
      )}
    </View>
  );
};

export default Exercise;
