import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export const PostAuth = ({ userId }: { userId: string }) => {

    const users = useSelector(selectAllUsers);
    const auth = users.find(user => user.name === userId);

    return (
        <span>By { auth ? auth.name : "Unknown Auth" }</span>
    );
};