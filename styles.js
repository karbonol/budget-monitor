import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding:20,
      
    },
    orangeButton:{
        borderRadius:12,
        backgroundColor: 'orange',
        padding:12
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    tabMenu:{
      flexDirection:'row',
      alignContent:'center',
      borderWidth:1,
      borderColor:'black',
      borderRadius:12
    },
    tabMenuItems:{
      paddingHorizontal:12,
      paddingVertical:5,
    },
    tabMenuItemSelected:{
      backgroundColor:'grey',
      color:'white',
      borderRadius:12
    },
    card:{
      shadowColor:'black',
      alignSelf:'stretch',
      shadowOpacity:0.8,
      shadowOffset:{ width: 1, height: 1 },
      padding:20,
      backgroundColor:'white',
      borderRadius:12
    }
  });
  export default styles;