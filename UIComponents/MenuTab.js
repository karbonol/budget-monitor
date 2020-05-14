import React from 'react';
import style from '../styles';
import {View,Text,StyleSheet} from 'react-native';
export default class MenuTab extends React.Component {
     state={
        selectedIndex : 0 
    }
    render(){
    return(
        <View style={style.tabMenu}> 
        {
            this.props.items.map((item,index)=><Text style={this.state.selectedIndex==index?
                [style.tabMenuItems,style.tabMenuItemSelected]:style.tabMenuItems}
                 onPress = {()=>{
                     this.setState({selectedIndex:index})
                     this.props.onclick(index);
                    }}
                >{item}</Text>)
        }
        </View>
    );
}
}
