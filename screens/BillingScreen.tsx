import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import StatesSelector from "../components/StatesSelector";
import { ProductsTable } from "../components/ProductsTable";

import { statesList, defaultDiscountAndTax } from "../api/stateList";
import { sumProductsPrice, getDiscountValue, getTaxValue, TotalPrice} from "../api/products";

import { isValidString, isValidPrice, isValidNumber } from "../validator/validator";
export default function BillingScreen({productsList, dispatch}) {

    // Local state of products list of component
    // const [productsList, updateProductList] = useState([]);
    // Intitialize state of teh selected states, wit default value of tax and discount
    const [selectedState, setSelectedState] = useState(defaultDiscountAndTax);

    // Product Attributes
    const [productName, setProductName] = useState();
    const [productQuantity, setProductQuantity] = useState();
    const [productPrice, setProductPrice] = useState();

    const [errors, updateErrors] = useState({});
    // Input refrences
    const productNameInputRefrence = useRef();
    const productQuantityInputRefrence = useRef();
    const productPriceInputRefrence = useRef();
    // Add product to the list of products
    const addProduct = () => {
        if(isValidString(productName) && isValidNumber(productQuantity) && isValidPrice(productPrice)) {
            dispatch (
                {
                    type: 'ADD_PRODUCT', 
                    product: 
                    {
                        name: productName, 
                        quantity: productQuantity,
                        price: productPrice
                    }
                }
            )
            // RESETING BORDER COLORS FOR INPUTS
            productNameInputRefrence.current.style.borderColor = '';
            productPriceInputRefrence.current.style.borderColor = '';
            productQuantityInputRefrence.current.style.borderColor = '';
        }else {
            if(!isValidString(productName)) {
                updateErrors({name: {message: 'Please Enter a valid name of product only Alphabets and numbers are allowed'}})
                productNameInputRefrence.current.style.borderColor = 'red';
            }else {
                productNameInputRefrence.current.style.borderColor = '';
            }
            if(!isValidPrice(productPrice)){
                updateErrors({price: {message: 'Please Enter a valid price eg: 10 OR 10.99'}})
                productPriceInputRefrence.current.style.borderColor = 'red';
            }else {
                productPriceInputRefrence.current.style.borderColor = '';
            }
            if(!isValidNumber(productQuantity)){
                updateErrors({quantity: {message: 'Please Enter a valid quantity number'}})
                productQuantityInputRefrence.current.style.borderColor = 'red';
            }else {
                productQuantityInputRefrence.current.style.borderColor = '';
            }
        }
        console.log(errors);
    }

    // Get Picked Value of states and their discount and tax and update its state.
    const pickedState = (value: any) => {
        setSelectedState(value);
    }

    // Raw-bottom-sheet ref to show states list
    const refRBSheet = useRef();

    return (
        <ScrollView style={styles.wrapper}>
            <View style={[styles.addProductWrapper, styles.wrapperPadding]}>
                <Text style={{ fontSize: 20 }}>Add product</Text>
                <Text
                    style={{ color: "#4aa4ff", fontSize: 20 }}
                    onPress={() => { refRBSheet.current.open() }}>
                    State Selected : {selectedState.label}
                </Text>
            </View>
            <View style={[styles.wrapperPadding]}>
                <TextInput
                    ref={productNameInputRefrence}
                    style={styles.inputStyle}
                    value={productName}
                    onChangeText={text => setProductName(text)}
                    placeholder="Product Label"
                />
                {/* <Text>{errors.name}</Text> */}
            </View>
            <View style={[styles.wrapperPadding, styles.secondRow]}>
                <TextInput
                    ref={productPriceInputRefrence}
                    keyboardType="numeric"
                    value={productPrice}
                    onChangeText={text => setProductPrice(text)}
                    style={[styles.inputStyle, { flex: 0.5, marginRight: 10 }]}
                    placeholder="Enter Price"
                />
                <TextInput
                    ref={productQuantityInputRefrence}
                    keyboardType="numeric"
                    value={productQuantity}
                    onChangeText={text => setProductQuantity(text)}
                    style={[styles.inputStyle, { flex: 0.5, marginRight: 10 }]}
                    placeholder="Enter Quantity"
                />
                <Text onPress={addProduct} style={{ color: "#4aa4ff", textAlignVertical: "center" }}>Add to list</Text>
            </View>
            <View>
                <ProductsTable productsList={productsList} />
            </View>

            <View style={{ justifyContent: "center", paddingVertical: 10, paddingHorizontal: 15 }}>
                <Text >Total price without tax : {"$" + sumProductsPrice(productsList)}</Text>
                <Text>Discount {selectedState.discount + "%"} : {"$" + getDiscountValue(productsList, selectedState)}</Text>
                <Text>tax {selectedState.tax + "%"} : {"$" + getTaxValue(productsList, selectedState)}</Text>
                <Text>Total price : {"$" + TotalPrice(productsList, selectedState)}</Text>
            </View>

            <View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={RBSheetStyle}
                >
                    <StatesSelector selectedState={pickedState} statesList={statesList} />
                </RBSheet>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        paddingTop: 20,
    },
    wrapperPadding: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    pageTitle: {
        textAlign: "center",
        fontSize: 30,
    },
    addProductWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#cfd0d1",
        padding: 5,
    },
    secondRow: {
        flexDirection: "row"
    },
    error: {
        borderColor: 'red',
    }
});

const RBSheetStyle = {
    wrapper: {
        backgroundColor: "#000000a8"
    },
    draggableIcon: {
        backgroundColor: "#000"
    }
}
