import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider, connect } from "react-redux";
import { productsStore } from "../store";

import BillingScreen from "./BillingScreen";
import ProductsScreen from "./ProductsScreen";
import SettingsScreen from "./settingsScreen";

export default function AppTabs() {
  const Tab = createBottomTabNavigator();


  // Connect screen to redux states
  let BillingScreenContainer = connect((productsList) => ({productsList}))(BillingScreen)
  let ProductsScreenContainer = connect((productsList) => ({productsList}))(ProductsScreen)
  
  return (
    <Provider store={productsStore}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerTitleAlign: 'center',
            tabBarIconStyle: { display: 'none' },
            tabBarStyle: tabBarsStyle.center,
            tabBarLabelStyle: tabBarsStyle.tabBarLabel,
            tabBarLabel: 'Billing',
            headerTitle: 'Billing'
          }}
          name="BillingScreen"
          component={BillingScreenContainer}
        />

        <Tab.Screen
          options={{
            title: 'Products',
            tabBarIconStyle: { display: 'none' },
            tabBarStyle: tabBarsStyle.center,
            tabBarLabelStyle: tabBarsStyle.tabBarLabel,
            tabBarLabel: 'Products'
          }}
          name="ProductsScreen"
          component={ProductsScreenContainer}
        />

        <Tab.Screen
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarStyle: tabBarsStyle.center,
            tabBarLabelStyle: tabBarsStyle.tabBarLabel,
            tabBarLabel: 'Settings'
          }}
          name="SettingsScreen"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </Provider>
  );
}
const tabBarsStyle = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    height: '100%',
    display: 'flex',
    textAlignVertical: 'center',
    fontSize: 16
  }
})