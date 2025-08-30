import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-black px-6 py-8">
      {/* Header */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://your-avatar-url.com/avatar.png" }}
          className="w-24 h-24 rounded-full border-4 border-[#00f5ff]"
        />
        <Text className="text-white text-xl font-semibold mt-4 tracking-wide">Alex Kouadio</Text>
        <Text className="text-[#00f5ff] text-sm">Level 7 · CyberFit Protocol</Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-between bg-[#2e2e3e] rounded-xl p-4 mb-6">
        <View className="items-center">
          <Text className="text-white text-lg font-bold">12</Text>
          <Text className="text-gray-400 text-xs">Workouts</Text>
        </View>
        <View className="items-center">
          <Text className="text-white text-lg font-bold">5h 42m</Text>
          <Text className="text-gray-400 text-xs">Time Logged</Text>
        </View>
        <View className="items-center">
          <Text className="text-white text-lg font-bold">3,200</Text>
          <Text className="text-gray-400 text-xs">Calories Burned</Text>
        </View>
      </View>

      {/* Goals */}
      <View className="bg-[#2e2e3e] rounded-xl p-4">
        <Text className="text-white text-base font-semibold mb-2">Next Mission</Text>
        <Text className="text-gray-300 text-sm mb-4">Complete 5 HIIT sessions this week</Text>
        <TouchableOpacity className="bg-[#00f5ff] rounded-full py-2 px-4 self-start">
          <Text className="text-black font-bold text-sm">View Progress</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



