// Créez votre middleware personnalisé
export const customMiddleware = (store: any) => (next :any) => async (action: any) => {
    const thisAction = action.type

    if (thisAction === 'user/updateUserData') {

        const firstName = action.payload.firstName
        const lastName = action.payload.lastName
        const token = action.payload.token

        const upadateUserData = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: "PUT", 
          headers: new Headers({'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`}),
          body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
          })
        })

        return next(action);
    }

    if (thisAction === 'user/logOut') {
      localStorage.removeItem('connexion')
      return next(action);
    }

    return next(action);
};