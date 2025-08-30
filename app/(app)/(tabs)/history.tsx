import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex flex-1 bg-slate-950">

      <Header />

      <Content />

    </SafeAreaView>
  );
}

function Header() {
  return (
    <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between border-b border-gray-800">
      <Text className="font-bold text-cyan-400 text-lg tracking-widest" >
        Tinta
      </Text>
      <Text className="text-gray-400 text-sm">History</Text>
    </View>
  );
}

function Content() {
  const sessions = [
    { date: "Aug 28, 2025", type: "HIIT + Core", calories: "420", duration: "45 min" },
    { date: "Aug 27, 2025", type: "Mobility Flow", calories: "180", duration: "30 min" },
    { date: "Aug 26, 2025", type: "Strength Training", calories: "530", duration: "60 min" },
  ];

  return (
    <ScrollView className="px-6 py-4">
      {/* Refreshing Sentiment */}
      <View className="mb-6">
        <Text className="text-cyan-300 text-xl font-semibold">🧠 Progress Unlocked</Text>
        <Text className="text-gray-400 mt-1">
          Every drop of sweat is a data point. You're evolving—one rep, one breath, one choice at a time.
        </Text>
      </View>

      {/* Session History */}
      <Text className="text-cyan-300 text-xl font-semibold mb-4">📅 Recent Sessions</Text>
      {sessions.map((session, index) => (
        <SessionCard key={index} {...session} />
      ))}
    </ScrollView>
  );
}


function SessionCard({
  date,
  type,
  calories,
  duration,
}: {
  date: string;
  type: string;
  calories: string;
  duration: string;
}) {
  return (
    <View className="bg-gray-900 rounded-xl p-4 mb-4 shadow-md shadow-cyan-500/20">
      <Text className="text-gray-400 text-sm mb-1">{date}</Text>
      <Text className="text-cyan-300 font-medium text-lg mb-2">{type}</Text>
      <View className="flex-row justify-between">
        <Text className="text-gray-300 text-sm">🔥 {calories} kcal</Text>
        <Text className="text-gray-300 text-sm">⏱️ {duration}</Text>
      </View>
    </View>
  );
}
