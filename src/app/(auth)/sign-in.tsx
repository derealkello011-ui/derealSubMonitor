import { Link } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView>
          <Text>SignIn Page</Text>
          <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  )
}

export default SignIn