import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";

const RestScreen = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(3);
  useEffect(() => {
    if (timer == 0) navigation.goBack();
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);
  return (
    <SafeAreaView className="bg-white flex-1">
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/05/16/16/43/drink-3406291_1280.png",
        }}
        className="h-[600px] w-full"
        resizeMode="stretch"
      />
      <Text className="text-center font-bold text-3xl mt-10">Take a Break</Text>

      <Text className="text-center text-white font-bold text-4xl mt-10 bg-orange-400">
        {timer}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;
