import { useContext, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import About from "./Pages/About/About"
import { SocketContext } from "./Context/socket"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "./Redux/Slices/themeSlice"
import EditTheme from "./Utilis/EditTheme/EditTheme"
import "./App.css"

const App = () => {
  const theme = useSelector((state: any) => state.themeSlice.theme)
  const dispatch = useDispatch()
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.on("theme", (theme: any) => {
      dispatch(setTheme(theme))
      console.log(theme)
    })

  }, [dispatch, socket])

  return (
    <div className="App" style={{ "backgroundColor": theme.PalleteColor1 }}>
      <Switch>
        <Route
          exact path="/"
          render={() => <About />}
        />
      </Switch>
      <EditTheme />
    </div>
  )
}

export default App
