import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"
import Input from "../Input"

const LoginModal = () =>{
    const loginModal = useLoginModal()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setisLoading] = useState(false)

    const onSubmit = useCallback(async () => {
      try {
        setisLoading(true);
        //todo add login
        loginModal.onClose();
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(true);
      }
      //dependency
    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            
            />
        </div>
    )

    return(
        <div>

        </div>
    )
}

export default LoginModal