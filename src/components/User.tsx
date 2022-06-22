import { useState } from "react";

interface UserInterface {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>();

  const login = () => {
    setUser({
      uid: "3048920384",
      name: "Lautaro Vilas",
    });
  };

  return (
    <div className="mt-5">
      <h3>User</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {user ? (
        <pre>{`${user.uid}  ${user.name}`}</pre>
      ) : (
        <pre>No hay usuario</pre>
      )}
    </div>
  );
};
