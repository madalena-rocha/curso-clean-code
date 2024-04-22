function updateUserRoute({ body, params }) {
  const { name, email, password } = body

  updateUserController({ 
    name, 
    email, 
    password, 
  })
}

function updateUserController(data) {
  const { name, email, password } = data

  usersRepository.update({ 
    name, 
    email, 
    password, 
  })
}

const usersRepository = {
  update(data) {
    // const user = updateUserOnDatabase()

    return {
      user,
    }
  },
}

// updateUserRoute({
//   body: { name, email, password },
//   params: { id: 1 },
// })