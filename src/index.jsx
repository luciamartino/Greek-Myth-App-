import {createRoot} from "react-dom/client"
import { StrictMode } from "react"
import "./index.css"
import { Quiz } from "./Quiz"

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Quiz />
    </StrictMode>
)