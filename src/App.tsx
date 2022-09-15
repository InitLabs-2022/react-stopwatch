import { FC, PropsWithChildren } from "react";
import "./App.css";
import StopWatch from "./StopWatch";

const BoldText: FC<PropsWithChildren> = ({ children }) => {
  return <p style={{ fontWeight: "bold" }}>{children}</p>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoldText>Stop Watch</BoldText>
        <StopWatch />
      </header>
    </div>
  );
}

export default App;
