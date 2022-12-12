import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const Chat = () => {
  const [username, setUsername] = useState('')

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  return (
    <ChatEngine
      height='100vh'
      userName='helloworld@hi.com'
      userSecret='helloworld'
      projectID='a375e6cd-0f1b-4c3a-95df-385ee25d9074'
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  )
}

export default Chat;