import React, {Component} from 'react'
import './App.css';
import {nanoid} from "nanoid";
import {Container} from "reactstrap";
import FormItem from "./components/Form/Form";
import ItemTable from "./components/ItemTable/ItemTable";


class App extends Component {
    state = {
        item: [],
        value: '',
        price: ''
    };

    createItem = (event) => {
        this.setState({value: event.target.value})
    };
    createPrice = (event) => {
        this.setState({price: event.target.value})
    };

    addItem = () => {
        if (this.state.value && this.state.price) {
            let items = [...this.state.item];
            let item = {
                name: this.state.value,
                price: parseInt(this.state.price),
                id: nanoid()
            };
            items.push(item);
            this.setState({item: items, value: '', price: ''});
        }
    };

    removeItem = (id) => {
        const index = this.state.item.findIndex(p => p.id === id);
        let items = [...this.state.item];
        items.splice(index, 1);
        this.setState({item: items});
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <ItemTable item={this.state.item}
                               remove={this.removeItem}
                    />
                    <FormItem
                        createItem={this.createItem}
                        createPrice={this.createPrice}
                        vall={this.state.value}
                        price={this.state.price}
                        addItem={this.addItem}
                    />
                </Container>
            </div>
        )
    }

}

export default App;
