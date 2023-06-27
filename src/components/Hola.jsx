import { useState } from "react"

const Hola = () => {

    const [modal,setModal] = useState(false)

  return (
    <div>
        <button>
            Abrir Modal
        </button>
    </div>
  )
}

export default Hola