import React from "react";
import { SafeAreaView, Text, View, Switch, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex flex-1 bg-black px-6 py-4">
      <Text className="text-cyan-300 text-2xl font-semibold mb-6"> Settings</Text>
      <SettingGroup />
    </SafeAreaView>
  );
}

function SettingGroup() {
  return (
    <View className="space-y-6">
      <SettingToggle label="AI Voice Guidance" />
      <SettingToggle label="Dark Mode" defaultOn />
      <SettingToggle label="Haptic Feedback" />
      <SettingLink label="Edit Profile" />
      <SettingLink label="Workout Preferences" />
      <SettingLink label="Privacy & Data" />
    </View>
  );
}

function SettingToggle({
  label,
  defaultOn = false,
}: {
  label: string;
  defaultOn?: boolean;
}) {
  const [isEnabled, setIsEnabled] = React.useState(defaultOn);
  return (
    <View className="flex-row justify-between items-center bg-gray-900 rounded-xl px-4 py-3 shadow-md shadow-cyan-500/20">
      <Text className="text-gray-300 text-base">{label}</Text>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: "#555", true: "#0ff" }}
        thumbColor={isEnabled ? "#0ff" : "#888"}
      />
    </View>
  );
}

function SettingLink({ label }: { label: string }) {
  return (
    <TouchableOpacity className="bg-gray-900 rounded-xl px-4 py-3 shadow-md shadow-cyan-500/20">
      <Text className="text-gray-300 text-base">{label}</Text>
    </TouchableOpacity>
  );
}
