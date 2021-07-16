import React, { Component } from 'react'
import transaction from  './transaction';
import newAddDashBoard from './newAddDashBoard'
import report from './report'
import account from './account'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default class dashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() {
        return (
        
            
          <Tab.Navigator>
           <Tab.Screen name="new" component={newAddDashBoard} />
          <Tab.Screen  name="Transaction" component={transaction} />
          <Tab.Screen  name="Report" component={report} />
          <Tab.Screen name="Account" component={account} />
        </Tab.Navigator>
        )}} 