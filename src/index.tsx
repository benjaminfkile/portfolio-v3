import ReactDOM from "react-dom"
import ReduxStore from "./Redux/ReduxStore"
import {SocketContext, socket} from "./Context/socket"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.render(
    <Provider store={ReduxStore}>
        <BrowserRouter>
            <SocketContext.Provider value={socket}>
                <App />
            </SocketContext.Provider>
        </BrowserRouter>
    </Provider>, document.getElementById("root"))