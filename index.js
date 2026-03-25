function createLoginTracker (userInfo){  
    let username = "user 1";
    let password = "password!";
    let attemptCount = 0;
    let maxatttemptCount = 3;
    return (passwordAttempt) => {
      attemptCount++

      if (attemptCount >3) {
         console.log("Account is locked!");
       return "Account locked due to too many failed login attempts"
      }

      if (passwordAttempt === userInfo.password ){
        console.log("Password correct!");
      return "Login successful";
      }
         console.log("Password incorrect.");
        return `Attempt ${attemptCount}: Login failed`;
    }
  }

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
