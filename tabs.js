import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WriteStoryScreen from '../screens/WriteStoryScreen';
import ReadStoryScreen from '../screens/ReadStoryScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Write" component={WriteStoryScreen}/>
            <Tab.Screen name="Read" component={ReadStoryScreen}/>
        </Tab.Navigator>
    )
}

export default Tabs;