import React from 'react';

// React Native imports
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    WalletConnections: undefined;
}

const WalletButton: React.FC = () => {
    return (
      <TouchableOpacity style={styles.circle}>
          <MaterialIcons name='wallet' size={30} color='white' />
       </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#80baa8',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default WalletButton;

