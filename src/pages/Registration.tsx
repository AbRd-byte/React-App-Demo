import React from "react";

const Registration = () => {
  return (
    <div>
      <h4>Registration</h4>
      <section>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
};

export default Registration;
