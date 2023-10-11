import { createContext, useEffect } from "react";
const UserContext = createContext({
    user: {
        name: "Hansal",
        email: "hansalamrakar@gmail.com"
    }
})
UserContext.displayName = UserContext;

export default UserContext;