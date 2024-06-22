import { useState } from "react"

interface Props {
    items: string[]
    heading: string
    onSelectItem: (item: string) => void
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleClick = (e: React.MouseEvent, index: number, item: string): void => {
        setSelectedIndex(index)
        console.log(e);
        onSelectItem(item)
    }

  return (
    <>
    <h1 className="text-4xl font-bold my-6">{heading}</h1>
    <ul>
        {items.map((item, index) => (
            <li 
                key={index}
                className={`mx-6 py-6 px-2 cursor-pointer text-slate-900 text-xl  ${selectedIndex == index && 'bg-slate-200'}`}
                onClick={(e) => handleClick(e, index, item)}
            >{item}</li>
        ))}
    </ul>
    </>
  )
}

export default ListGroup