import { getIdFromUrl, getUserFromId } from "@/app/lib/actions";
import Doge from "./buttons-n-shit/doge";
import { auth } from "@/auth";

export default async function MiddlePanel() {
    // const session = await auth()
    // const id = getIdFromUrl(session?.user?.image as string)
    // const userData = await getUserFromId(id)

    return (
        <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-[#08fbff] from-[#0076ff] items-center justify-center">
            <h1 className="text-4xl font-semibold py-4 text-black">DogeCoin: {0}</h1>
            <Doge />
        </div>
    );
}
