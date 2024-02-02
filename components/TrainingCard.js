import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { BoltIcon, PowerIcon } from "react-native-heroicons/outline";
const TrainingCard = ({ cardTitle, imgUrl, exercises }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Workout", {
          imgUrl,
          exercises,
        })
      }
      className="relative mt-2"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-full h-[160px] rounded-lg"
      />
      <Text className="absolute top-4 left-2 text-white bg-orange-400 px-1 uppercase font-bold text-xl">
        {cardTitle}
      </Text>
      <View className="absolute bottom-4 left-4">
        <BoltIcon size={20} color={"white"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default TrainingCard;
