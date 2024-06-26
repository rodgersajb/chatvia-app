

export default function LoginButton() {
    const { pending } = useFormStatus()

    const handleClick = (event) => {
        if (pending) {
            event.preventDefault()
        }
    }

    return ( 
    <button aria-disabled={pending} onClick={handleClick} type="submit">Login</button>

)
}