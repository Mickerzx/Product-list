import React from 'react';
import Table from "reactstrap/es/Table";
import Item from "../Item/Item";

const ItemTable = ({item,remove}) => {
    let sum = 0;
    item.map(i => sum += i.price);
    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            <Item item={item}
                  remove={remove}
            />
            </tbody>
            <tfoot>
            <tr>
                <td colSpan='4'>Total spent: {sum}</td>
            </tr>
            </tfoot>
        </Table>
    );
};

export default ItemTable;