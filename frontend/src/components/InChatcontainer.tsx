import ChatInterface from "./ChatInterface"
import ChatProfile from "./ChatProfile"

const ChatContainer = () => {
  return (
    <div className="w-1/2 border-r-2 h-screen flex flex-col">
        <ChatProfile/>
        <ChatInterface/>
    </div>
  )
}

export default ChatContainer