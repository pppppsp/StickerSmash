import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"#ffd33d",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ 
          title: "Home", 
          tabBarLabel: "Home",
          tabBarIcon: ({color, focused})=>{
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={24}/>
          },
         }}
      />
      <Tabs.Screen
        name="about"
        options={{ 
          title: "About", 
          tabBarLabel: "About",
          tabBarIcon: ({color, focused})=>{
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24}/>
          },
         }}
      />
    </Tabs>
  );
}
