
//Interface for the props
interface Props {
    text: string
    key: number
}

const Todo = (props: Props) => {
    return (
        <li>
            {
                props.text

            }
        </li>
    )
}

export default Todo