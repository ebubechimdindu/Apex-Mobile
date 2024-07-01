import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../assets/Theme/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => <AntDesign name='home' size={26} color={COLORS.tertiary} {...props} />,
    wallet: (props) => <Ionicons name='card-outline' size={26} color={COLORS.tertiary} {...props} />,
    terminal: (props) => <Ionicons name='terminal-outline' size={26} color={COLORS.tertiary} {...props} />,
    profile: (props) => <AntDesign name='user' size={26} color={COLORS.tertiary} {...props} />,
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const IconComponent = icons[route.name];

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.item}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {IconComponent ? (
              IconComponent({
                style: {
                  color: isFocused ? COLORS.primary : COLORS.tertiary,
                },
              })
            ) : (
              <Text>?</Text> // Fallback if the icon is not found
            )}
            <Text style={{
              color: isFocused ? COLORS.primary : COLORS.tertiary,
              fontSize: 11,
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#100F0F",
    paddingVertical: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
