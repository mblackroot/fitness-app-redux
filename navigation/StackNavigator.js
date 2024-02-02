import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import CurrentWorkoutScreen from "../screens/CurrentWorkoutScreen";
import RestScreen from "../screens/RestScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          fullScreenGestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CurrentExercise"
          component={CurrentWorkoutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rest"
          component={RestScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
