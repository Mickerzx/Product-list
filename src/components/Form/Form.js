import React from 'react';
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";

const FormItem = (props) => {
    return (
        <Form>
            <input style={{margin: '0 10px'}} type="text" onChange={props.createItem}
                   value={props.vall}/>
            <input style={{width: '60px'}}
                   type="number" min='1' onChange={props.createPrice} value={props.price}/>
            <span style={{padding: '0 15px'}}>KGS</span>
            <Button onClick={props.addItem}>add</Button>
        </Form>
    );
};

export default FormItem;