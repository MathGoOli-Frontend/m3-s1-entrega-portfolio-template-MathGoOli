import {Header} from  "./components/Header/index.jsx"
import {Welcome} from "./components/Welcome/index.jsx"

import "./styles/globalStyles.css"

export const App = () => {

  return (
    <>
      <Header></Header>
      <main>
      <Welcome></Welcome>

      </main>
    </>
  )
}

