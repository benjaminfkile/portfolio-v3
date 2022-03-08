import { useContext, useEffect, useState } from "react"
import Menu from "./MobileMenu/MobileMenu"
import { Route, Switch } from "react-router-dom"
import Skills from "./Pages/Skills/Skills"
import About from "./Pages/About/About"
import { SocketContext } from "./Context/socket"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "./Redux/Slices/themeSlice"
import "./App.css"

const App = () => {
  const theme = useSelector((state: any) => state.themeSlice.theme)
  const dispatch = useDispatch()
  const socket = useContext(SocketContext)
  
  useEffect(() => {
    socket.on("theme", (theme: any) => {
      dispatch(setTheme(theme))
    })

  }, []);

  return (
    <div className="App" style={{"backgroundColor": theme.PalleteColor4}}>
      {/* <Menu
        theme={theme}
        toggleTheme={toggleTheme}
      /> */}
      <div className="Content">
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <About/>
            }
          />
          {/* <Route
            path="/about"
            render={() =>
              <About
                theme={theme}
              />
            }
          />
          <Route
            path="/skills"
            render={() => <Skills
              theme={theme}
            />}
          /> */}
        </Switch>
      </div>
    </div>
  )
}

export default App
