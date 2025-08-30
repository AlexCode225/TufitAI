import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex flex-1 bg-black">
      <Header />
      <Content />
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View className="   font-bold text-cyan-400 text-2xl tracking-widest px-4 lg:px-6 h-14 flex items-center flex-row justify-between border-b border-gray-800">
  <Text> Settings</Text>
   
    
   </View>
  );
}

function Content() {
  return (
    <View className="flex-1 px-6 py-4">
      <Text className="text-cyan-300 text-xl font-semibold mb-2">Welcome back, Alex</Text>
      <Text className="text-gray-400 mb-6">Your body is ready. Let’s optimize performance.</Text>

      <View className="bg-gray-900 rounded-xl p-4 mb-6 shadow-lg shadow-cyan-500/20">
        <Text className="text-cyan-400 font-medium mb-2">🧬 Biometrics</Text>
        <View className="flex-row justify-between">
          <Metric label="Heart Rate" value="72 bpm" />
          <Metric label="Sleep" value="7.5 hrs" />
          <Metric label="Recovery" value="92%" />
        </View>
      </View>

      <View className="bg-gray-900 rounded-xl p-4 mb-6 shadow-lg shadow-cyan-500/20">
        <Text className="text-cyan-400 font-medium mb-2"> Today's Focus</Text>
        <Text className="text-gray-300">• HIIT + Core Stability</Text>
        <Text className="text-gray-300">• Mobility Flow</Text>
        <Text className="text-gray-300">• AI-guided cooldown</Text>
      </View>

      <TouchableOpacity className="bg-cyan-500 rounded-full py-3">
        <Text className="text-black text-center font-semibold">Start Session</Text>
      </TouchableOpacity>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View className="items-center">
      <Text className="text-lg font-bold text-cyan-300">{value}</Text>
      <Text className="text-xs text-gray-400">{label}</Text>
    </View>
  );
}
