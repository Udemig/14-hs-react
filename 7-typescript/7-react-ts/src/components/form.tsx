import type { ChangeEvent, FormEvent, MouseEvent } from "react"

const Form = () => {
    // form göndeilmesi:
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    // input değişince
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    // butona tıklandığında
    const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Submit</button>
    </form>
  )
}

export default Form