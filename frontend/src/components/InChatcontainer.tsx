import ChatInterface from "./ChatInterface"
import ChatProfile from "./ChatProfile"
import TextBar from "./TextBar"

const ChatContainer = () => {
  return (
    <div className="w-3/5 border-r-2 h-screen flex flex-col">
        <ChatProfile/>
        <ChatInterface/>
        <TextBar/>
    </div>
  )
}

export default ChatContainer