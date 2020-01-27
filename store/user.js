import axios from 'axios'

//ACTION TYPES:
const GET_USER = 'GET_USER'

//INITIAL STATE:
const defaultUser = {
  // firstName: 'John',
  // lastName: 'Doe',
  // email: 'john@email.com',
  // password: '123'
}

//ACTION CREATORS:
const getUser = (user) => ({type: GET_USER, user})

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
    const res1 = await axios.get(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/${user.email}`)

    if(!res1.data.firstName){
      let res = await axios.post('https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/create', user)

      console.log(user)
      dispatch(getUser(user))
    }

  }catch(error){
    console.error(error)
  }
}

export const login = (email, password) => async dispatch => {
  try{
    const res = await axios.get(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/${email}`)

    if(res.data.password === password){
      return dispatch(getUser(res.data || defaultUser))
    }

    return dispatch(getUser(defaultUser))
  }catch{
    console.error(error)
  }
}

export const updateProfile = user => async dispatch => {
  try{
    let res = await axios.put(`https://us-central1-stackathon-2c6f1.cloudfunctions.net/api/users/update/${user.email}`, user)
    dispatch(getUser(user))

  }catch(error){
    console.error(error)
  }
}


//REDUCER
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

