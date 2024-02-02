import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TrainingCard from "../components/TrainingCard";
import Data from "../data/fitness.js";
import { useDispatch, useSelector } from "react-redux";

import { ArrowPathIcon } from "react-native-heroicons/outline";
import { reset } from "../redux/features/statsSlice.js";

const HomeScreen = () => {
  const { workouts, kcal, minutes } = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-orange-400 h-[190px]">
          <View className="mt-2 mx-2">
            {/* Header title */}
            <Text className="uppercase text-white font-bold text-2xl">
              Home Workout
            </Text>

            {/* Stats */}
            <View className="flex-row justify-between mx-6 mt-3">
              <View className="items-center">
                <Text className="text-white font-bold text-2xl">
                  {workouts}
                </Text>
                <Text className="text-gray-100 font-semibold">Workouts</Text>
              </View>
              <View className="items-center">
                <Text className="text-white font-bold text-2xl">{kcal}</Text>
                <Text className="text-gray-100 font-semibold">KCAL</Text>
              </View>
              <View className="items-center">
                <Text className="text-white font-bold text-2xl">{minutes}</Text>
                <Text className="text-gray-100 font-semibold">Minutes</Text>
              </View>
            </View>

            {/* Header Image */}
            <View className="mx-8 mt-3">
              <Image
                source={{
                  uri: "https://www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all",
                }}
                className="h-[140px] w-full rounded-[30px] opacity-90"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => dispatch(reset())}
          className="absolute right-11 top-2 rounded-full bg-orange-100 p-1"
        >
          <ArrowPathIcon size={20} color="black" />
        </TouchableOpacity>

        <View className="my-20 mx-5">
          {Data.map((item) => (
            <TrainingCard
              key={item.id}
              cardTitle={item.name}
              imgUrl={item.image}
              exercises={item.excersises}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
