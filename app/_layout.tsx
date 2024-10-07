import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      router.push("storybook");
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
