import axios from 'axios'

//ACTION TYPES:
const CREATE_USER = 'CREATE_USER'
const GET_USER = 'GET_USER'
const UPDATE_USER = 'UPDATE_USER'

//INITIAL STATE:
const defaultUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  password: '123'
}

//ACTION CREATORS:
const createUser = (user) => ({type: CREATE_USER, user})
const getUser = (user) => ({type: GET_USER, user})
const updateUser = (user) => ({type: UPDATE_USER, user})

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
    let res = await axios.post('https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/create', user)

    dispatch(createUser(res.data))

  }catch(error){
    console.error(error)
  }
}

export const updateProfile = user => async dispatch => {
  try{
    let res = await axios.put(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/update/${user.email}`, user)
    dispatch(updateUser(res.data))
  }catch(error){
    console.error(error)
  }
}

export const loadUser = () => async dispatch => {
  console.log("MADE IT HERE")
  try {
    // const res = await axios.get(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/${user.email}`)
    // dispatch(getUser(res.data || defaultUser))
    let res = dummy
    dispatch(getUser(res))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export default function(state = defaultUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.user
    case GET_USER:
      return action.user
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}

