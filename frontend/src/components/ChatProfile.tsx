import { useContext } from "react"
import { StoreContext } from "../context/StoreContext";
import { asset } from "../assets/assets";


const ChatProfile = () => {
    const context = useContext(StoreContext);
    const Chat_list = context?.Chat_list;
if (Chat_list === null || Chat_list === undefined) {
        throw new Error("ExampleComponent must be used within a StoreContextProvider");
    }
  return (
    <div className="flex w-full h-16  border-b-2 p-2 justify-between items-center " >
        <div className="flex gap-4 items-center">
            <div><img className="w-12 h-12 rounded-full " src={Chat_list[0].image} alt="profile" /></div>
            
            <div className="flex flex-col mb-3  ">
                <h2 className="text-2xl ">{Chat_list[0].name}</h2>
                <div className="flex flex-row items-center gap-1 ">
                    <img className="w-1.5 h-1.5 mt-1" src={Chat_list[0].status?asset.gear:asset.search} alt="status" /> 
                    <h1 className="text-xs font-normal">{Chat_list[0].status?'online':'ofline'}</h1>
                </div>
            </div>
        </div>
        <div className="flex gap-2 w-18 justify-between border rounded items-center p-1 px-2 bg-gray-100">
            <img className="w-3.5 h-3.5" src={asset.search} alt="call" />
            <h1 className="font-normal">Call</h1>
        </div>
    </div>
  )
}

export default ChatProfile