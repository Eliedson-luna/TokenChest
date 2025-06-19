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

export async function deleteItemInfo(itemId: number) {
    try {
        const secureStr = new SecureStr();
        secureStr.deleteItem(itemId);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
        else {
            throw new Error('Erro desconhecido ao excluir item da lista')
        }
    }
}