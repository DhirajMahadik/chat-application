import styled from "styled-components";


const ChatMessages = styled.div`
 height: 82vh;
 overflow: auto;
.message{
    width: 75%;
    .content{
        background-color: lightgreen;
        width: fit-content;
        margin: 10px;
        padding: 2px 10px;
        .user{
            font-size: 14px;
            font-style: italic;
            font-weight: bold;
        }
        .message-content{
            font-size: 15px;
        }
        .time{
            font-size: 10px;
        }
    }

    
}

.user-message{
    width: 75%;
    justify-content: end;
    .content{
        background-color: lightgray;
        width: fit-content;
        margin: 10px;
        padding: 2px 10px;
        .user{
            font-size: 14px;
            font-style: italic;
            font-weight: bold;
            text-align: end;
        }
        .message-content{
            font-size: 15px;
        }
        .time{
            font-size: 10px;
            text-align: end;
        }
    }
}

`

export default ChatMessages;