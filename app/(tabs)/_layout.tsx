import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            display: 'none'
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            href: null
          }}
        />
        <Tabs.Screen
          name="Form/index"
          options={{
            href: null
          }}
        />
      </Tabs>
    </>
  );
}
