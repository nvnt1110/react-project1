import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import "./App.css";
import authReducers from "./redux/reducers";
import DetailProduct from "./screens/detail-product/DetailProduct";
import Home from "./screens/home/Home";
import Login from "./screens/login";
import PageEmpty from "./screens/page-not-found/PageEmpty";
import Product from "./screens/product/Product";

// const _products = ["Widget", "Gadget", "Doohickey"];
// const _colors = ["Black", "White", "Red", "Green", "Blue"];
// const _someCountries = ["US", "Germany", "UK", "Japan", "Italy", "Greece"];
// const getData = (count) => {
//   const data = [];
//   const dt = new Date();
//   // add count items
//   for (let i = 0; i < count; i++) {
//     // constants used to create data items
//     const date = new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60);
//     const countryId = Math.floor(Math.random() * _someCountries.length);
//     const productId = Math.floor(Math.random() * _products.length);
//     const colorId = Math.floor(Math.random() * _colors.length);
//     // create the item
//     const item = {
//       id: i,
//       start: date,
//       end: new Date(date.getTime() + Math.random() * 30 * (24 * 60 * 60 * 1000)),
//       country: _someCountries[countryId],
//       product: _products[productId],
//       color: _colors[colorId],
//       countryId,
//       productId,
//       colorId,
//       amount: Math.random() * 10000 - 5000,
//       amount2: Math.random() * 10000 - 5000,
//       discount: Math.random() / 4,
//       active: i % 4 === 0
//     };
//     // add the item to the list
//     data.push(item);
//   }
//   return data;
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     const customer = { name: "Foo" };
//     const card = { amount: 7, product: "Bar", unitprice: 42 };
//     this.state = {
//       message: `Hello ${customer.name},
//       want to buy ${card.amount} ${card.product} for
//       a total of ${card.amount * card.unitprice} bucks?`,
//       data: getData(500)
//     };
//   }

//   render() {
//     const { message, data } = this.state;
//     return (
//       <div>
//         <wjGrid.FlexGrid itemsSource={data} autoClipboard={false}>
//           <wjGrid.FlexGridColumn header="Date" binding="start" width={80} minWidth={40} maxWidth={160}>
//           </wjGrid.FlexGridColumn>
//           <wjGrid.FlexGridColumn header="Product" binding="product" width="2*" allowResizing={false}>
//           </wjGrid.FlexGridColumn>
//           <wjGrid.FlexGridColumn header="Revenue" binding="amount" width="*" allowResizing={false}>
//           </wjGrid.FlexGridColumn>
//           <wjGrid.FlexGridColumn header="Expense" binding="amount2" format="n0" width="*" allowResizing={false}>
//           </wjGrid.FlexGridColumn>
//         </wjGrid.FlexGrid>
//       </div>
//     );
//   }
// }

// const App = () => {
//   const [data, setData] = useState(getData(500));
//   const customer = { name: "Foo" };
//   const card = { amount: 7, product: "Bar", unitprice: 42 };
//   const message = `Hello ${customer.name},
//        want to buy ${card.amount} ${card.product} for
//        a total of ${card.amount * card.unitprice} bucks?`;
//   const clickButtonPlus = () => setData(getData(2));
//   return (
//     <div>
//       <button type="button" onClick={clickButtonPlus}>plus</button>
//       <wjGrid.FlexGrid itemsSource={data} autoClipboard={false}>
//         <wjGrid.FlexGridColumn header="Date" binding="start" width={80} minWidth={40} maxWidth={160}>
//           <span>{message}</span>
//         </wjGrid.FlexGridColumn>
//         <wjGrid.FlexGridColumn header="Product" binding="product" width="2*" allowResizing={false}>
//         </wjGrid.FlexGridColumn>
//         <wjGrid.FlexGridColumn header="Revenue" binding="amount" width="*" allowResizing={false}>
//         </wjGrid.FlexGridColumn>
//         <wjGrid.FlexGridColumn header="Expense" binding="amount2" format="n0" width="*" allowResizing={false}>
//         </wjGrid.FlexGridColumn>
//       </wjGrid.FlexGrid>
//     </div>
//   );
// };

const store = createStore(authReducers);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" children={(props) => {
            console.log("App ~ props", props)
            return props.match.isExact ? <DetailProduct {...props} /> : <PageEmpty />;
          }}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
