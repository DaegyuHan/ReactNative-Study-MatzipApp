import {createDrawerNavigator} from '@react-navigation/drawer';
import CalenderHomeScreen from '@/screens/calender/CalenderHomeScreen.tsx';
import FeedHomeScreen from '@/screens/feed/FeedHomeScreen.tsx';
import MapStackNavigator, {MapStackParamList} from '@/navigations/stack/MapStackNavigator.tsx';
import {mainNavigations} from '@/constants';
import {NavigatorScreenParams} from "@react-navigation/native";

export type MainDrawerParamList = {
    [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
    [mainNavigations.FEED]: undefined
    [mainNavigations.CALENDER]: undefined
}

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerType: 'front',
    }}>
      <Drawer.Screen name={mainNavigations.HOME} component={MapStackNavigator} options={{
          title: '홈',
      }}/>
      <Drawer.Screen name={mainNavigations.FEED} component={FeedHomeScreen} options={{
          title: '피드',
      }}/>
      <Drawer.Screen name={mainNavigations.CALENDER} component={CalenderHomeScreen} options={{
          title: '캘린더',
      }}/>
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
