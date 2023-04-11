import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignOutPage from "./pages/sign-in-and-sin-up/sign-in-and-sign-up.component";

import Header from "./components/header/header.component.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      
      // storing the data that exist in firestore in a state in our apps

      if (userAuth) {
        //if user is signIn
        const userRef = await createUserProfileDocument(userAuth);

        //we check if our db has updated any data at that reference
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
        
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignOutPage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
