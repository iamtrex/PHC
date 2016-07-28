import Q from 'q'
import jsforce from 'jsforce'

const loginUrl = 'https://test.salesforce.com'
const username = 'howardxchen@gmail.com.blueprint'
const password = 'beautifulEngineering1' + '4ARuPtBouu2rf3A3cDCoZ0fu'

let currentConnection

export default function login() {
  const deferred = Q.defer()

  if (currentConnection) {
    deferred.resolve({
      message: "Already logged in.",
      connection: currentConnection,
    })
  } else {
    const conn = new jsforce.Connection({
      loginUrl,
    })

    conn.login(username, password, function(err, userInfo) {
      if (err) {
        deferred.reject({
          message: err,
        })
      } else {
        currentConnection = conn
        deferred.resolve({
          message: "Successfully logged in.",
          connection: currentConnection,
        })
      }
    })
  }

  return deferred.promise
}