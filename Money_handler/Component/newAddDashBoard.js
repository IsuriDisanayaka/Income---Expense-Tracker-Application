import React, { Component } from 'react'
import incomeD from  './incomeDashBoard';
import expense from './expense'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default class newAddDashBoard extends Component {
    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Income" component={incomeD} />
            <Tab.Screen name="Expense" component={expense} />
          </Tab.Navigator>
        )
    }
}
