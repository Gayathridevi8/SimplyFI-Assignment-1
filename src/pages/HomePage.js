import { useEffect, useState } from "react";
import Card from "../components/Card";

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Unexpected error occured", err);
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }

  return (
    <div className="container w-full mx-auto px-[15px]">
      {users?.length > 0 &&
        users.map((user) => {
          return <Card details={user} />;
        })}
    </div>
  );
};
