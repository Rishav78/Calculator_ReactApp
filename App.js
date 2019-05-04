/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
 	StyleSheet,
 	Text,
 	View, 
 	TextInput, 
 	Button,
 	TouchableOpacity 
 	} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  	state = {
  		query : '',
  		ans : '',
  		flag : false
  	}
  	updateQuery = (num)=>{
  		this.setState({query : this.state.query + num})
  		this.setState({flag : true})
  	}
  	operation = (opp)=>{
  		if(this.state.flag == true){
  			this.setState({query : this.state.query + opp})
  			this.setState({flag : false})
  		}
  	}
  	del = ()=>{
  		if(this.state.query.length > 0){
  			this.setState({query : this.state.query.substr(0,this.state.query.length-1)})
  			if(!isNaN(this.state.query[this.state.query.length-1]) && this.state.query.length>1){
  				this.setState({flag : true})
  			}else{
  				this.setState({flag : false})
  			}
  		}
  	}
  	updateAns = ()=>{
  		if(this.state.flag==true){
  			var x = eval(this.state.query)
  			this.setState({ans : '= ' + x})
  		}else{
  			this.setState({ans : 'Invalid Input'})
  		}
  	}
  	reset = ()=>{
  		this.setState({query : ''})
  		this.setState({ans : ''})
  		this.setState({flag : false})
  	}
	render() {
	    return (
	        <View style={styles.container}>
	      		<View style={styles.query}>
	      			<Text style={{fontSize : 30}}>{this.state.query}</Text>
	      		</View>
	      		<View style={styles.ans}>
	      			<Text style={{fontSize : 20}}>{this.state.ans}</Text>
	      		</View>
	      		<View style={styles.buttons}>
	      			<View style={styles.num}>

	      				<View style={styles.row}>
	      					<TouchableOpacity onPress={ () => this.reset()} style={styles.btn}>
	      						<Text style={styles.digits}>C</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.del()} style={styles.btn}>
	      						<Text style={styles.digits}>DEL</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.operation('%')}  style={styles.btn}>
	      						<Text style={styles.digits}>%</Text>
	      					</TouchableOpacity>
	      				</View>

	      				<View style={styles.row}>
	      					<TouchableOpacity onPress={ () => this.updateQuery(7)} style={styles.btn}>
	      						<Text style={styles.digits}>7</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(8)} style={styles.btn}>
	      						<Text style={styles.digits}>8</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(9)} style={styles.btn}>
	      						<Text style={styles.digits}>9</Text>
	      					</TouchableOpacity>
	      				</View>

	      				<View  style={styles.row}>
	      					<TouchableOpacity onPress={ () => this.updateQuery(4)} style={styles.btn}>
	      						<Text style={styles.digits}>4</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(5)} style={styles.btn}>
	      						<Text style={styles.digits}>5</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(6)} style={styles.btn}>
	      						<Text style={styles.digits}>6</Text>
	      					</TouchableOpacity>
	      				</View>

	      				<View  style={styles.row}>

	      					<TouchableOpacity onPress={ () => this.updateQuery(1)} style={styles.btn}>
	      						<Text style={styles.digits}>1</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(2)} style={styles.btn}>
	      						<Text style={styles.digits}>2</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery(3)} style={styles.btn}>
	      						<Text style={styles.digits}>3</Text>
	      					</TouchableOpacity>


	      				</View>



	      				<View  style={styles.row}>

	      					<TouchableOpacity style={styles.btn}>
	      						<Text style={styles.digits}>0</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery('.')} style={styles.btn}>
	      						<Text style={styles.digits}>.</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.updateQuery('0')} style={styles.btn}>
	      						<Text style={styles.digits}>0</Text>
	      					</TouchableOpacity>

	      				</View>
	      			</View>
	      			<View style={styles.operations}>
	      				<TouchableOpacity onPress={ () => this.operation('/')} style={styles.btn}>
	      						<Text style={styles.digits}>/</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.operation('*')} style={styles.btn}>
	      						<Text style={styles.digits}>*</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.operation('-')} style={styles.btn}>
	      						<Text style={styles.digits}>-</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={ () => this.operation('+')} style={styles.btn}>
	      						<Text style={styles.digits}>+</Text>
	      					</TouchableOpacity>
	      					<TouchableOpacity onPress={() => this.updateAns()} style={styles.btn}>
	      						<Text style={styles.digits}>=</Text>
	      					</TouchableOpacity>
	      			</View>
	      		</View>
	      	</View>
	    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  query : {
  	flex : 3,
  	justifyContent : 'flex-end',
  	alignItems : 'flex-end',
  	padding : 10,
  },
  ans : {
  	flex : 1,
  	padding : 0,
  	justifyContent : 'center',
  	alignItems : 'flex-end',
  	padding : 10
  },
  buttons : {
  	flex : 6,
  	flexDirection : 'row',
  },
  num : {
  	flex : 3,
  },
  operations : {
  	flex : 1,
  },
  row : {
  	flex : 1,
  	flexDirection : 'row',
  },
  btn : {
  	flex : 1,
  	borderWidth : 0.3,
  	borderColor : '#cccccc',
  	justifyContent : 'center',
  	alignItems : 'center'
  },
  digits : {
  	color : 'black',
  	fontSize : 20
  }
});
