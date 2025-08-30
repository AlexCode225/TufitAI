import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

export default function WorkoutScreen() {
  return (
    <SafeAreaView className="flex-1  bg-black   p-6">
      <Text className="text-3xl font-bold text-white mb-4">
        🏋️‍♂️ AI Workout Assistant
      </Text>

      <Text className="text-lg text-white mb-2 mt-5">
        Enter workout name for AI to assist:
      </Text>

<TextInput
        placeholder="e.g. Full Body Blast"
        className="text-xl text-black  border border-blue-950 rounded-md p-3"
      />

    <TouchableOpacity className="bg-cyan-500 rounded-full py-3">
        <Text className="text-black text-center font-semibold"> Search</Text>
      </TouchableOpacity>
    </SafeAreaView>





  );
}
