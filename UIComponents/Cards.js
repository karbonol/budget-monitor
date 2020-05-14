import React from 'react';
import {View, Text} from 'react-native';
import style from '../styles';

export default class extends React.Component{
    render() {
        return(
        <View style={style.card}>
            <Text>{this.props.title}</Text>
            <Text>{this.props.expense}</Text>
            <Text style={{alignSelf:'flex-end'}}>Read More -></Text>
        </View>);    
    } 
}