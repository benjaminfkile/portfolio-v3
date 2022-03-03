import ReactDOM from "react-dom"
import ReduxStore from "./Redux/ReduxStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.render(
    <Provider store={ReduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"))



