import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const getOneProfile = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const createGoal = async (id, goalData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/goals`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goalData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteGoal = async (profileId, goalId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/goals/${goalId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const addExercise = async (profileId, pushData) => {
  try {
    const res = await fetch (`${BASE_URL}/${profileId}/exercises`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pushData)
    })
    return res.json()
  } catch (error) {
    
  }
}
const addMeal = async (profileId, pushMealData) => {
  try {
    const res = await fetch (`${BASE_URL}/${profileId}/meals`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pushMealData)
    })
    return res.json()
  } catch (error) {
    
  }
}

const updateGoal = async (profileId, goalId, goalData) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/goals/${goalId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goalData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteExercise = async (profileId, exerciseId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/exercises/${exerciseId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteMeal = async (profileId, mealId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/meals/${mealId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { getAllProfiles, addPhoto, getOneProfile, createGoal, deleteGoal, addExercise, updateGoal, deleteExercise, addMeal, deleteMeal }
