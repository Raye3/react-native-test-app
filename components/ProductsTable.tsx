import React from "react";
import { DataTable } from "react-native-paper";

export function ProductsTable(props: { productsList: any[]; }) {
    return (
        <DataTable>
        <DataTable.Header>
            <DataTable.Title>Product Name</DataTable.Title>
            <DataTable.Title>Nos</DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Title>Total Price</DataTable.Title>
        </DataTable.Header>

        {props.productsList.map((product, index) => (
            <DataTable.Row key={index}>
                <DataTable.Cell>{product.name}</DataTable.Cell>
                <DataTable.Cell>{product.quantity}</DataTable.Cell>
                <DataTable.Cell>{product.price}</DataTable.Cell>
                <DataTable.Cell>{product.quantity * product.price}</DataTable.Cell>
            </DataTable.Row>
        ))}
    </DataTable>
    )
}