import { getFolderList } from "@/apis/api";
import { getRefinedUser } from "@/apis/services";
import { UserInterface } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetUser = () => {
    const [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        (async () => {
            const refinedUser = await getRefinedUser();
            setUser(refinedUser);
        })();
    }, []);

    return { user };
};
