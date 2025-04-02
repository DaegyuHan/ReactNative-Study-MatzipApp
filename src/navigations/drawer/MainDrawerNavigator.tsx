import {createDrawerNavigator} from "@react-navigation/drawer";
import MapHomeScreen from '@/screens/map/MapHomeScreen.tsx';
import CalenderHomeScreen from '@/screens/calender/CalenderHomeScreen.tsx';
import FeedHomeScreen from '@/screens/feed/FeedHomeScreen.tsx';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MapHome" component={MapHomeScreen} />
            <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
            <Drawer.Screen name="CalenderHome" component={CalenderHomeScreen} />
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;
