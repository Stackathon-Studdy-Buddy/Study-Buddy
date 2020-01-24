import axios from 'axios'

//ACTION TYPES:
const CREATE_USER = 'CREATE_USER'

//INITIAL STATE:
const defaultUser = {}

//ACTION CREATORS:
const createUser = (user) => ({type: CREATE_USER, user})

//dummyUser
let dummy = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  password: '123'
}

//THUNK CREATORS
export const signup = user => async dispatch => {
  try{

    dispatch(createUser(user))

  }catch(error){
    console.error(error)
  }
}

//REDUCER
export default function(state = defaultUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.user
    default:
      return state
  }
}

