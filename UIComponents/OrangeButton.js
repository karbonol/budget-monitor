import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
export default function OrangeButton(props){
    return(
    <TouchableOpacity style={[styles.orangeButton,props.style]}>
                <Text style={{color:'white'}}>{props.title}</Text>
            </TouchableOpacity>);
}