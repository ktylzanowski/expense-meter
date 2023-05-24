import React, { useContext } from "react";

import AuthContext from "./context/AuthContext";
import ExpensesMenu from "./components/menu/ExpensesMenu";
import UserMenu from "./components/menu/UserMenu";
const App = () => {
  let { user } = useContext(AuthContext);

  return <div>{!user ? <UserMenu /> : <ExpensesMenu />}</div>;
};

export default App;
