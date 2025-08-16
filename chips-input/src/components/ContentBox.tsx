import Chips from "./Chips"


const ContentBox = () => {
    return (
        <div className="flex flex-col h-1/2 w-1/2 bg-red-100 rounded-md p-5">
            <input className="py-3 px-3 mb-3 rounded" type="text" placeholder="Enter here" />
            <div className="h-full w-full flex flex-wrap rounded-md bg-green-100">
                <Chips/>
            </div>
        </div>
    )
}

export default ContentBox