import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollPicker } from 'react-native-value-picker';

export default function StatesSelector(props: any) {

    
    // Selected Value from states list
    const [pickedValue, setPickedValue] = useState(props.defaultDiscountAndTax);

    const stateSelected = (value: any) => {
        // Set the picked on local state
        setPickedValue(value);
        // Send the selected state value back to parent component.
        props.selectedState(value);
    }
    return (
      <View style={styles.wrapper}>
        <ScrollPicker
        // We need to tell the picker the current picked value
        currentValue={pickedValue}
        // The picker is a pure component so we need to tell it
        // what data it needs to subscribe to, otherwise it won't
        // re-render
        // extraData={pickedValue}
        // The array of objects which makes up the list
        list={props.statesList}
        // Callback function to update the picked value
        onItemPress={stateSelected}
        // Changes the text color in the list
        labelColor="black"
        // Changes color of the row separator in the list
        separatorColor="gray"
        // Changes color of the text of the picked item in the list
        selectedColor="red"
        />
      </View>
    );
}
const styles = StyleSheet.create({
    wrapper : {
        justifyContent: "center",
        alignItems: "center",
    }
})