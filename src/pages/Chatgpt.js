import React,{useState} from 'react'
import './Chatgpt.css'
import gptLogo from './assets/chatgptLogo.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'
import userIcom from './assets/user-icon.png'
import { sendMsgToOpenAI } from './Openai'
function Chatgpt() {
    const [input, setInput] = useState("")
    const handleSend = async()=>{
        const res = await sendMsgToOpenAI(input)
        console.log(res)
    }
    return (
        <div className='App'>
            <div className="sidebar">
                <div className="upperSide">
                    <div className="upperSideTop"><img src={gptLogo} alt="Logo" className='logo' /><span className="brand">ChatGPT</span></div>
                    <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                    <div className="upperSideBottom">
                        <button className="query"><img src={msgIcon} alt="" />What is Programming ?</button>
                        <button className="query"><img src={msgIcon} alt="" />How to use an AI</button>
                    </div>
                </div>
                <div className="lowerSide">
                    <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
                    <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Save</div>
                    <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade To Pro</div>
                </div>


            </div>
            <div className="mainbar">
                <div className="chats">
                    <div className="chat">
                        <img className="chatImg" src={userIcom} alt="userIcon" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum quo animi perferendis illum neque consequatur saepe amet quisquam dolorem?</p>
                    </div>
                    <div className="chat bot">
                        <img className="chatImg" src={gptLogo} alt="userIcon" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nisi? Nam veniam sed excepturi. Dignissimos expedita impedit, perferendis inventore blanditiis, quas et quod consectetur fugit optio amet velit nostrum dolor vitae qui sequi repellendus debitis laborum quo. Corporis nihil tempore quos eveniet at quas doloribus mollitia ducimus veritatis velit eos distinctio exercitationem illum ratione ullam odio dicta quam nisi modi atque necessitatibus ipsam asperiores, debitis cumque. Hic, et nobis! A excepturi laboriosam recusandae quos cupiditate praesentium hic, eveniet laudantium aspernatur, veniam iure culpa accusamus quidem, voluptas alias similique. Laborum harum hic id eligendi natus recusandae et cum quibusdam voluptatem asperiores?</p>
                    </div>
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input type="text" placeholder='message chatGPT' value={input} onChange={(e)=> setInput(e.target.value)}/><button className="send" onClick={handleSend}><img src={send} alt="send" /></button>
                    </div>
                    <p className='info'>chatGPT may produce inaccurate information about people,places or facts.chatGPT aaugust 20 version</p>
                </div>
            </div>
        </div>
    )
}

export default Chatgpt
