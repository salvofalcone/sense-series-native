import * as React from "react";
import { useState, useEffect } from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Welcome from "./src/screens/Welcome";
import Home from "./src/screens/Home";
import Trending from "./src/screens/Trending";
import Search from "./src/screens/Search";

//Styles
import { Colors } from "./src/utils/Colors";

//Utils
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/**
 * App component that handles loading state and renders bottom tab navigator.
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  /* This useEffect handle the initial loading */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Welcome />;
  }

  return (
    <NavigationContainer style={{ backgroundColor: "#101415" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Trending") {
              iconName = "trending-up";
            } else if (route.name === "Search") {
              iconName = "search";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            display: "flex",
          },
          tabBarActiveTintColor: "#eb3d00",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
