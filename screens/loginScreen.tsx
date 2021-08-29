import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
export default function LoginScreen({ navigation }){
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Login</Text>
            <TextInput value="user" placeholder="Username" style={styles.input} />
            <TextInput value="password" secureTextEntry placeholder="Password" style={styles.input} />
            <Button onPress={() => {navigation.navigate("AppTabs")}} title="Login" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
        color: "#2196f3",
        marginBottom: 15
    },
    wrapper: {
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 8
    },
});
