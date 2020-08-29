import React, { Component } from "react";

// Import data
import { Items, itemDetails } from "./Data.jsx";

// Create context
const DataContext = React.createContext();

// Provider
class ContextProvider extends Component {
  state = {
    items: [],
    itemDetails: itemDetails,
    bag: [],
    subTotal: 0,
    tax: 0,
    total: 0,
  };

  // Create a deep copy of data array
  setItems = () => {
    let itemsCopy = [];
    itemsCopy = JSON.parse(JSON.stringify(Items));
    this.setState(() => {
      return { items: itemsCopy };
    });
  };

  componentDidMount() {
    this.setItems();
  }

  getItem = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    return item;
  };

  viewDetail = (id) => {
    const item = this.getItem(id);
    this.setState(() => {
      return { itemDetails: item };
    });
  };

  addToBag = (id) => {
    let itemsCopy = [...this.state.items];
    const index = itemsCopy.indexOf(this.getItem(id));
    const item = itemsCopy[index];
    item.inBag = true;
    let count = item.count;
    item.count = count + 1;
    const price = item.price;
    item.total = price;

    this.setState(
      () => {
        return { items: itemsCopy, bag: [...this.state.bag, item] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Methods for the bag
  incrementCount = (id) => {
    let bag = [...this.state.bag];
    const currentItem = bag.find((item) => item.id === id);
    const index = bag.indexOf(currentItem);
    const item = bag[index];
    item.count = item.count + 1;
    item.total = item.count * item.price;

    this.setState(
      () => {
        return { bag: [...bag] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrementCount = (id) => {
    let bag = [...this.state.bag];
    const currentItem = bag.find((item) => item.id === id);
    const index = bag.indexOf(currentItem);
    const item = bag[index];
    item.count = item.count - 1;
    if (item.count === 0) {
      this.removeItem(id);
    } else {
      item.total = item.count * item.price;
      this.setState(
        () => {
          return { bag: [...bag] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let items = [...this.state.items];
    let bag = [...this.state.bag];
    bag = bag.filter((item) => item.id !== id);
    const index = items.indexOf(this.getItem(id));
    let removedItem = items[index];
    removedItem.inBag = false;
    removedItem.count = 0;
    removedItem.total = 0;
    this.setState(
      () => {
        return {
          bag: [...bag],
          items: [...items],
        };
      },
      () => {
        this.addTotals();
      }
    );
    console.log("Item removed");
  };

  emptyBag = (id) => {
    this.setState(
      () => {
        return { bag: [] };
      },
      () => {
        this.setItems();
        this.addTotals();
      }
    );
    console.log("Bag emptied");
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.bag.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.15).toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        subTotal: subTotal,
        tax: tax,
        total: total,
      };
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          viewDetail: this.viewDetail,
          addToBag: this.addToBag,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
          removeItem: this.removeItem,
          emptyBag: this.emptyBag,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

// Consumer
const ContextConsumer = DataContext.Consumer;

export { ContextProvider, ContextConsumer };
