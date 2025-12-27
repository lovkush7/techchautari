import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Chat.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Chatcomponent from '../../components/chat/chatcomponent/Chatcomponent'
import Usemessages from '../../controlauth/msgstroe'

const Chat = () => {
  const {selectedUsers} = Usemessages();
  return (
    <div>
        <Navbar/>
        <div className="page-container">
          <div className="page-content">
            <div className="chat-card">
              <div className="chat-container">
                <Sidebar/>
              {!selectedUsers ? "no chat selected" : <Chatcomponent/>}  

              </div>
            </div>
          </div>
        </div>

     
    </div>
  )
}

export default Chat
