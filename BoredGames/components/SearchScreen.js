import {View,Stylesheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {this.setState({search});
    }

    render() {
        const {search} = this.state;
        return (
            <div> 
                <form>
                    <input type="text"
                   placeholder="Search"
                   id="searchBar"
                   onChange={this.updateSearch}
                   className={styles.lobbyCodeBox}>
                   </input>
                </form>
            </div>
        );
    }

}
