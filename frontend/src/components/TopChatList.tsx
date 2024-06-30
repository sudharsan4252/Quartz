import { asset } from "../assets/assets"
const TopChatList = () => {
  return (
    <div className="p-2 flex border-b-2 h-16">
        <div className="flex gap-3 w-60 items-center" >
            <h3 className="font-semibold text-2xl" >Messages</h3>
            <img src={asset.down} alt="down_arrow" className="w-4 h-3"/>
            <div className="relative w-8 ml-1.5" >
                <img src={asset.oval} alt="circle" className="w-8" />
                <h1 className="absolute left-2 bottom-0.5 font-semibold " >12</h1>
            </div>
        </div>
        <img src={asset.add} alt="Add_icon" className="w-12" />
    </div>
  )
}

export default TopChatList