import React, { Component } from 'react';

import { FlatList } from 'react-native-gesture-handler';

import { Text, View, AsyncStorage } from 'react-native'

import UserItem from './UserItem';


class User extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }
    
    _storeData = async (data) => {
        console.log(data);
        try{
            await AsyncStorage.setItem('Datos', JSON.stringify(data))
            .then(console.log("SavedInStorage"))
        }
        catch(error){
            console.log(error);
        }
    }
    
    _retrieveData = async() => {
        try{
            const datos = await AsyncStorage.getItem('Datos');
            if(datos !== null){
            this.setState({
                data: JSON.parse(datos),
                loading: false
            })
            console.log("data retrieved from Storage");
            }
            else{console.log("no data in storage");}
        }

        catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        this._retrieveData()
        fetch("https://randomuser.me/api/?results=500&inc=name,login,picture")
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    data: result,
                    loading: false,
                })
                this._storeData(result);
            },

            (error) => {
                console.log(error);
            }
        )
    }

    
    render() {

        if(this.state.loading){
            return(
                <Text>Loading</Text>
            )
        }
        return (
            <View style={{flex:1}}>
                <FlatList 
                    data = {this.state.data.results}
                    renderItem = {({ item }) => <UserItem   Nombre={item.name.first + ' ' + item.name.last} 
                                                            Imagen={item.picture.large} 
                                                            navigation = {this.props.navigation}/>}
                    keyExtractor = {item => item.login.uuid}
                    />
            </View>
        );
    }
}

export default User;