import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import Exercise from "../components/Exercise";
const WorkoutScreen = () => {
  const { params } = useRoute();
  const exercises = params.exercises;
  const navigation = useNavigation();
  return (
    <SafeAreaView className="relative flex-1">
      <View className="bg-white">
        <View className="relative">
          <Image
            source={{ uri: params.imgUrl }}
            className="w-full h-[150px]"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-4"
          >
            <ArrowLeftIcon size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        <ScrollView className="ml-2">
          {exercises.map((item) => (
            <Exercise key={item.id} exercise={item} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CurrentExercise", {
            exercises,
          });
        }}
        className="absolute bottom-10 py-2 px-8 rounded-md bg-blue-600 self-center"
      >
        <Text className="uppercase text-white font-bold">Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
