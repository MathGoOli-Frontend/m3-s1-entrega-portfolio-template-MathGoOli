import {Header} from  "./components/Header/index.jsx"
import {Welcome} from "./components/Welcome/index.jsx"
import {About} from "./components/About/index.jsx"
import {Technologies} from "./components/Technologies/index.jsx"
import {Projects} from "./components/Projects/index.jsx"
import {Contact} from "./components/Contact/index.jsx"

import "./styles/globalStyles.css"

export const App = () => {

  return (
    <>
      <Header></Header>
      <main>
        <Welcome></Welcome>
        <About></About>
        <Technologies></Technologies>
        <Projects></Projects>
        <Contact></Contact>

      </main>
    </>
  )
}

