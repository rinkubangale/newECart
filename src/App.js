import LinkForm from "./Component/LinkForm";
import Clock from "./Component/Clock";
import Footer from "./Component/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Rinku!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>
        Hi, I'm Time and I will never Stop <Clock />
      </h2>
      <LinkForm />
      <Footer />
    </div>
  );
}
