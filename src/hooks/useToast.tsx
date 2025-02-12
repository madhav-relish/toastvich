import { useState } from "react"


type Props = {
    message?: string
}

const useToast = ({message}: Props) => {
    const [toast, setToast] = useState(message || "")
  return {toast}
}

export default useToast