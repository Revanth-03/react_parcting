import { createRoot } from "react-dom/client";
import Timer from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Timer />);
