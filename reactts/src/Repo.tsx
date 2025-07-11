import React from 'react'

//Interface and the type for the props
interface Props {
    index?: string
    name?: string
    url: string
}

const Repo = ({ url }: Props) => {
    return (
        <>
            <div  className='bg-gray-700 p-4 rounded-md shadow'>
                <img
                    src={url}
                    className='h-[200px] w-[200px] rounded-md'
                />
            </div></>
    )
}

export default Repo