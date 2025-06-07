import { SecureStr } from "../storage/secureStore";

export async function loadListInfo() {
    try {
        const secureStr = new SecureStr();
        const loadedInfo = await secureStr.loadInfo();
        return loadedInfo
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Erro desconhecido")
        }
    }
}