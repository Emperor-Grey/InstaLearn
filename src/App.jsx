import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {useSelector} from 'react-redux';
import MainNav from './navigation/MainNav';
import {selectCurrentTheme} from './redux/reducers/themeSlice';
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
  const currentTheme = useSelector(selectCurrentTheme);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    SystemNavigationBar.stickyImmersive();
  });

  let paperTheme;

  switch (currentTheme) {
    case 'GreenApple':
      paperTheme =
        systemColorScheme === 'dark' ? {...GreenDark} : {...GreenLight};
      break;

    case 'Banana':
      paperTheme =
        systemColorScheme === 'dark' ? {...BananaDark} : {...BananaLight};
      break;

    case 'GrapeSoda':
      paperTheme =
        systemColorScheme === 'dark' ? {...GrapeDark} : {...GrapeLight};
      break;

    default:
      paperTheme =
        systemColorScheme === 'dark' ? {...BlueDark} : {...BlueLight};
  }

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'default'}
      />
      <NavigationContainer theme={paperTheme}>
        <MainNav />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
