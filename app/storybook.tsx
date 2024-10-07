import { Stack } from "expo-router";
import { View } from "react-native";
import Storybook from "../.storybook";

export default function StorybookLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Storybook />
    </View>
  );
}
