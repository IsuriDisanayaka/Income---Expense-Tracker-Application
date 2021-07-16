import React, { Component } from 'react'
import { Text, View } from 'react-native'
import incomeReport from './incomeReport'
import expenseReport from './expenseReport';

 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default class report extends Component {
    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Income" component={incomeReport} />
            <Tab.Screen name="Expense" component={expenseReport} />
          </Tab.Navigator>
        )
    }
}
