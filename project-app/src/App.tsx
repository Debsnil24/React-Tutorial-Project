import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [AlertVisible, setVisibility] = useState(false);
  const items = [
    "Karnataka",
    "Tamil Nadu",
    "Maharashtra",
    "Odisha",
    "Delhi",
    "Kerala",
  ];
  const handleSelecteditem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="States"
        setSelectedItem={handleSelecteditem}
      />
      {AlertVisible && (
        <Alert
          color="primary"
          text="Hey this is a custom alert!"
          onClose={() => setVisibility(false)}
        />
      )}
      <Button
        color="secondary"
        text="Custom Button"
        onClick={() => setVisibility(true)}
      />
    </div>
  );
}

export default App;
