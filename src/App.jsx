import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {useSelector} from 'react-redux';
import BottomNav from './navigation/BottomNav';
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

  // useEffect(() => {
  //   const initialTheme = 'GreenApple';
  //   dispatch(setTheme(initialTheme));
  // }, [dispatch, systemColorScheme]);

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
      <BottomNav />
    </PaperProvider>
  );
};

export default App;
