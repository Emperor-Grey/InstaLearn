import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { ActivityIndicator, PaperProvider, useTheme } from 'react-native-paper';
import {
  Provider as ReduxProvider,
  useSelector,
} from 'react-redux/dist/react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainNav from './navigation/MainNav';
import { selectCurrentTheme } from './redux/reducers/themeSlice';
import store, { persister } from './redux/store';
import {
  darkTheme as BananaDark,
  lightTheme as BananaLight,
} from './themes/Banana';
import {
  darkTheme as BlueDark,
  lightTheme as BlueLight,
} from './themes/BlueSapphire';
import {
  darkTheme as GrapeDark,
  lightTheme as GrapeLight,
} from './themes/GrapeSoda';
import {
  darkTheme as GreenDark,
  lightTheme as GreenLight,
} from './themes/GreenApple';
const App = () => {
  const theme = useTheme();

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.onBackground,
        }}
      >
        <ActivityIndicator size={52} color={theme.colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persister} loading={null}>
        <StatusBar
          animated={true}
          hidden
          style="auto"
          networkActivityIndicatorVisible={true}
        />
        <Main />
      </PersistGate>
    </ReduxProvider>
  );
};

const Main = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    NavigationBar.setBehaviorAsync('overlay-swipe');
    NavigationBar.setVisibilityAsync('hidden');
  }, []);

  let paperTheme;

  switch (currentTheme) {
    case 'GreenApple':
      paperTheme =
        systemColorScheme === 'dark' ? { ...GreenDark } : { ...GreenLight };
      break;

    case 'Banana':
      paperTheme =
        systemColorScheme === 'dark' ? { ...BananaDark } : { ...BananaLight };
      break;

    case 'GrapeSoda':
      paperTheme =
        systemColorScheme === 'dark' ? { ...GrapeDark } : { ...GrapeLight };
      break;

    default:
      paperTheme =
        systemColorScheme === 'dark' ? { ...BlueDark } : { ...BlueLight };
  }

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={paperTheme}>
        <MainNav />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
