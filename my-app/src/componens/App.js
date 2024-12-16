import React from "react";

import  NewTaskForm  from "./NewTaskForm";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <h1>TODO</h1>
        <NewTaskForm />
        <Footer />
    </div>
  );
}




export default App;