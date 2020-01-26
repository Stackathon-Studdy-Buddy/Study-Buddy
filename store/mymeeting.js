import axios from 'axios'

//ACTION TYPES:
const GET_MY_MEETINGS = 'GET_MY_MEETINGS';

//INITIAL STATE:
const myMeetings = [];

//ACTION CREATORS:
const getMyMeetings=(meetings)=>({
  type:GET_MY_MEETINGS,
  meetings
})

//THUNK CREATORS
export const gotMyMeetings = (id) => async dispatch => {
  try{
    const response=await axios.get(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/meetings/my/${id}`)
    dispatch(getMyMeetings(response.data||myMeetings))
  }catch(error){
    console.error(error)
  }
}

//REDUCER
export default function(state = myMeetings, action) {
  switch (action.type) {
    case GET_MY_MEETINGS:
      return action.meetings
    default:
      return state
  }
}
