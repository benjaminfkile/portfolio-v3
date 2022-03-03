import { useState } from "react"
import Menu from "./MobileMenu/MobileMenu"
import { Route, Switch } from "react-router-dom"
import Skills from "./Pages/Skills/Skills"
import About from "./Pages/About/About"
import "./App.css"

const App = () => {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className={`App-${theme}`}>
      <Menu
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="Content">
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <About
                theme={theme}
              />
            }
          />
          <Route
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
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
