import React, { Component } from 'react';

import { FlatList } from 'react-native-gesture-handler';

import { Text, ScrollView, AsyncStorage, RefreshControl } from 'react-native'

import UserItem from './UserItem';


class User extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loadingIcon: true,
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
        this._retrieveData()
        this.getData()
    }

    getData(){
        this.setState({loadingIcon: true})
        fetch("https://randomuser.me/api/?results=500&inc=name,login,picture")
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    data: result,
                    loadingIcon: false,
                })
                this._storeData(result);
            },

            (error) => {
                console.log(error);
            }
        )
    }

    
    render() {

        return (
                <ScrollView style={{flex:1}}
                            refreshControl = {<RefreshControl refreshing = {this.state.loadingIcon} onRefresh = {() => this.getData() }/>}>
                    <FlatList 
                        data = {this.state.data.results}
                        renderItem = {({ item }) => <UserItem   Nombre={item.name.first + ' ' + item.name.last} 
                        Imagen={item.picture.large} 
                        navigation = {this.props.navigation}/>}
                        keyExtractor = {item => item.login.uuid}
                        />
                </ScrollView>
        );
    }
}

export default User;