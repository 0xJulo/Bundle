import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
}

// Actual component
export default function NewBundleScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>New Bundle Screen</Text>
                <Button title="Save bundle" onPress={() => navigation.navigate('Dashboard')} />
            </View>
        </SafeAreaView>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    text: {
        color: '#80baa8',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#192d32',
    },
});

