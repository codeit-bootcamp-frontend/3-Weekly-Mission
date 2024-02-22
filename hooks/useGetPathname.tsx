import { useRouter } from "next/router";

const useGetPathname = () => {
    const route = useRouter();
    const { pathname } = route;
    return { pathname };
};

export default useGetPathname;
