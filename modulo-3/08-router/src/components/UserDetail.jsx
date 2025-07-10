import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import users from "../data/users.json";

function UserDetail() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            const foundUser = users.find((u) => u.id === userId);
            setUser(foundUser);
            setIsLoading(false);
        }, 1000);
    }, [userId]);

    if (isLoading) {
        return <p>Cargando usuario...</p>;
    }

    if (!user) {
        return <p>Usuario no encontrado</p>;
    }

    return (
        <div>
            <h2>Detalle de {user.name}</h2>
            <p>Planeta: {user.planet}</p>
        </div>
    );
}

export default UserDetail;
