import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className={`bg-white mr-4 w-[260px]`}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-[100%] h-40 rounded-sm"
        resizeMode="cover"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#00BBCC" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <MapPinIcon color="#00BBCC" size={22} />
          <Text className="text-xs text-gray-500 pr-4 text-justify">
            Nearby - {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
