import axios from "axios";

export const sendMessages = async (
  senderId: string,
  receiverId: string,
  data: any
) => {
  try {
    const res = await axios.post(
      `https://chat-service-o3sa.onrender.com/api/startchat/${senderId}/${receiverId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        }, 
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};



//// GET CONVER SATION ////

export const getConversation = async (senderId:string,receiverId:string) => {
  console.log(`sederid:-`,senderId,'reiver=',receiverId)
  
  try {
    const res = await axios.get(`https://chat-service-o3sa.onrender.com/api/conversation/${senderId}/${receiverId}` )
    return res
  } catch (error) {
    return error
  }
}





/////////////////// - GET CHATS - //////////////

export const getChats = async (conversationId:string) => {
  try {
    const res = await axios.get(`https://chat-service-o3sa.onrender.com/api/getchats/${conversationId}`)
    return res
  } catch (error) {
    return error
  }
}