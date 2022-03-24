import React, {useState} from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {firstName, lastName, email, password, confirmPassword};
    console.log("Hello, ")
    setFirstName("");
    setEmail("");
    setPassword("");
  };

  return(
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name </label>
          <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)} />
        </div>
          {firstName.length < 2 && firstName.length > 0 ? <p>First Name must be at least 2 characters</p> : null}
        <div>
          <label>Last Name </label>
          <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)} />
        </div>
          {lastName.length < 2 && lastName.length > 0 ? <p>Last Name must be at least 2 characters</p> : null}
        <div>
          <label>Email </label>
          <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>
          {email.length < 2 && email.length > 0 ? <p>Email must be at least 2 characters</p> : null}
        <div>
          <label>Password </label>
          <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
        </div>
          {password.length < 8 && password.length > 0 ? <p>Password must be at least 8 characters</p> : null}
        <div>
          <label>Confirm Password </label>
          <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} />
        </div>
          {confirmPassword !== password ? <p>Password must match</p> : null}
      </form>
    </div>
  )
}

export default UserForm