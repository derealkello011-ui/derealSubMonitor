import { Link } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  return (
    <SafeAreaView>
          <Text>SignUP Page</Text>
          <Link href="/(auth)/sign-in">Create an account</Link>
    </SafeAreaView>
  )
}

export default SignUp