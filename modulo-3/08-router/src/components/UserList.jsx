import { Link } from "react-router-dom";
import users from "../data/users.json";

function UserList() {
    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
