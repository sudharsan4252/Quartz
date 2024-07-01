import CallLogs from "./CallLogs"
import GroupChatsList from "./GroupChatsList"

const GroupChat = () => {
  return (
    <div className="  flex flex-col w-80" >
        <div className="h-16  w-full  flex  border-b-2 items-center p-4  gap-8" >
            <h1 className="font-medium w-50  text-xl">Group Messages</h1>
            <div className=" rounded border px-2 bg-gray-200 w-20 py-2 flex items-center justify-center ">
                <h1>CallLog</h1>
            </div>
        </div>
        <div className="font-medium pl-4 border-b-2 h-10 justify-start flex items-center gap-2"><h1>ME</h1> 
        <h1 className="font-thin">the new messages </h1>
        </div>
        <GroupChatsList />
        <CallLogs/>
    </div>
  )
}

export default GroupChat