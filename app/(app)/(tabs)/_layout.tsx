import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import React from "react";


export default function _layout() {
  return (
    <Tabs>
       <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

    

     

 <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        }}
      />

  <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" color={color} size={size} />
          ),
        }}
      />

 <Tabs.Screen
        name="Active-workout"
        options={{
          title: "Active workout",
          href:"/",
          headerShown: false,
        
          tabBarStyle: {
            display: "none"
          }

        }}
      />

 <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircle" color={color} size={size} />
          ),
        }}
      />
  <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />



      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />

    
    </Tabs>
    
  );
}
