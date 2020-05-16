import React from 'react'; 
import OrangeButton from './UIComponents/OrangeButton';
import styles from './styles';
import {Text, View,} from 'react-native';
import MenuTab from './UIComponents/MenuTab';
import Cards from './UIComponents/Cards';


export default class MainScreen extends React.Component{
    items = ['Today','This month','In 7 days'];
    accountExpenses = [
        {title:'Savings account',expenses:[23.3,54.3,65.4]},
        {title:'Otome account',expenses:[56.43,76.45,32.65]},
        {title:'PayPal',expenses:[65.0,653.3,76.54]}
    ];
    state={filterMode:0}

    onMenuTabClicked(index){
        this.setState({filterMode:index});
    }
    navigateToAccountScreen(){
          this.props.navigation.navigate('AccountMoreDetails');
    }
    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <OrangeButton title="pay your expense" />
            <MenuTab  items={this.items} onclick={this.onMenuTabClicked.bind(this)}/>
            {this.accountExpenses.map((account)=><Cards 
            title = {account.title} 
            expense={account.expenses[this.state.filterMode]}
            onMoreDetails={this.navigateToAccountScreen.bind(this)} />)}
        </View>
    );
}
}
