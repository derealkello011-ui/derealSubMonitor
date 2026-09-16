import clsx from 'clsx';
import { Image } from 'expo-image';
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { tabs } from "../constants/data";
import { colors, components } from '../constants/theme';

const tabBar = components.tabBar;

const _layout = () => {
    const insets = useSafeAreaInsets();
    
    const TabIcon = ( { focused, icon }: TabIconProps ) => {
        return (
            <View className="tabs-icon">
                <View className={clsx( 'tabs-pill', focused &&
                    'tabs-active'
                )}>
                    <Image
                        source={icon}
                        className='tabs-glyph'
                    />
                </View>
            </View>
        );
    }

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: Math.max( insets.bottom, tabBar.horizontalInset ),
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
            }
        }} >
            {tabs.map( ( tab ) => (
                <Tabs.Screen name={tab.name} key={tab.name} options={{
                    title: tab.title,
                    tabBarIcon: ( { focused } ) => (
                        <TabIcon focused={focused} icon={tab.icon} />
                    )
                }} />
            ))}
        </Tabs>
    );
}

export default _layout