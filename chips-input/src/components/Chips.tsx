interface IChipsProp{
    text:string
    id:number
    handleRemove :(id:number)=>void
}

const Chips:React.FC<IChipsProp> = ({text , id  , handleRemove}) => {
  return (
    <div className="flex gap-5 p-3 justify-center items-center bg-red-400 h-8 w-auto rounded-md">
        <h3>{text}</h3>
        <button onClick={()=>handleRemove(id)} className="text-red cross-btn bg-blue-200 rounded-md px-3">X</button>
    </div>
  )
}

export default Chips