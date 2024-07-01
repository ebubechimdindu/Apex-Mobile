import { Stack , Tabs} from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fffff',
        },
        headerTintColor: '#0000',
        headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="auth/login" options={{
        presentation:'modal'
      }}/>
    </Stack>
  );
}
