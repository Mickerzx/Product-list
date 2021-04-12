import React, {Fragment} from 'react';

const Item = ({item,remove}) => {

    return (
        <Fragment>
            {item.map((i, index) => (
            <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                    <i style={{cursor: 'pointer', fontSize: '20px'}}
                       onClick={() => remove(i.id)} className="fas fa-times"/>
                </td>
            </tr>
            ))}
        </Fragment>
    );
};

export default Item;