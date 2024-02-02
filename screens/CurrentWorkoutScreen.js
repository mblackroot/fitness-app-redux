import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { complete, increment } from "../redux/features/statsSlice";

const CurrentWorkoutScreen = () => {
  const { params } = useRoute();
  const exercises = params.exercises;
  const [index, setIndex] = useState(0);
  const exercise = exercises[index];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <Image source={{ uri: exercise.image }} className="w-full h-[200px]" />
      <View className="mt-10 mx-10 space-y-10">
        <Text className="font-bold text-2xl self-center">{exercise.name}</Text>
        <Text className="self-center font-bold text-4xl">x{exercise.sets}</Text>

        <TouchableOpacity
          onPress={() => {
            if (index < exercises.length - 1) {
              dispatch(increment());
              dispatch(complete(exercise));
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            } else {
              dispatch(complete(exercise));
              navigation.navigate("Workout", {
                exercises,
              });
            }
          }}
          className="bg-blue-600 py-2 rounded-full"
        >
          <Text className="uppercase text-center font-bold text-white text-xl">
            {index < exercises.length - 1 ? "Done" : "End of session"}
          </Text>
        </TouchableOpacity>

        <View className="flex-row gap-x-3 self-center">
          {index > 0 ? (
            <TouchableOpacity
              onPress={() => {
                setIndex(index - 1);
              }}
              className="bg-green-500 px-3 py-1 rounded-full"
            >
              <Text className="uppercase text-white font-bold text-lg">
                Prev
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            onPress={() => {
              if (index < exercises.length - 1) setIndex(index + 1);
              else {
                navigation.navigate("Workout", {
                  exercises,
                });
              }
            }}
            className="bg-green-500 px-3 py-1 rounded-full"
          >
            <Text className="uppercase text-white font-bold text-lg">Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWorkoutScreen;
