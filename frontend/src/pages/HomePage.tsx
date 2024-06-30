import ChatList from '../components/ChatList'
import GroupChat from '../components/GroupChat'
import ChatContainer from '../components/InChatcontainer'
import SideBar from '../components/SideBar'
import TopChatList from '../components/TopChatList'

const HomePage = () => {
return (
    <div className='flex w-screen'>
        <SideBar/>
        <div className='flex flex-col border-r-2'>
            <TopChatList/>
            <ChatList/>
        </div>
        <ChatContainer/>
        <GroupChat/>
    </div>
)
}

export default HomePage