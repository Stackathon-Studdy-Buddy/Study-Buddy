import axios from 'axios'

//ACTION TYPES:
const GET_MEETINGS = 'GET_MEETINGS';
const GET_SINGLE_MEETING='GET_SINGLE_MEETING';
//INITIAL STATE:
const meetings = [];

//ACTION CREATORS:
const getMeetings=(meetings)=>({
  type:GET_MEETINGS,
  meetings
})
export const getSingleMeeting=(meeting)=>({
  type:GET_SINGLE_MEETING,
  meeting
})

//THUNK CREATORS
export const gotMeetings =() => async dispatch => {
  try{
    const response=await axios.get('https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/meetings')
    dispatch(getMeetings(response.data||meetings))
  }catch(error){
    console.error(error)
  }
}

//REDUCER
export default function(state = meetings, action) {
  switch (action.type) {
    case GET_MEETINGS:
      return action.meetings
    case GET_SINGLE_MEETING:
       return [action.meeting]
    default:
      return state
  }
}

