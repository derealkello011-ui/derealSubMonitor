import "@/app/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="font-bold text-green-500 text-xl">
        Welcome to Nativewind!
      </Text>
      <View className="space-y-3 mt-6 py-6">
        <Link
          href="/onboarding"
          className="font-bold text-green-500 text-xl"
        >Go to Onboarding</Link>
        <Link
          href="/(auth)/sign-in"
          className="mt-6 font-bold text-green-500 text-xl"

        > Go to sign in</Link>
        <Link
          href="/(auth)/sign-up"
          className="font-bold text-green-500 text-xl"
        > Go to sign up</Link>

        <Link href="/subscriptions/[id]">Spotify Subscription</Link>
        <Link
          href={{
            pathname: "/subscriptions/[id]",
            params: {id: "claude"},
          }}
        >
          Claude Max Subscription
        </Link>
      </View>
    </View>
  );
}