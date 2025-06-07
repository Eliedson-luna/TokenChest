import { SecurePassword, SecureStr } from "../storage/secureStore";

export const savePassword = async (info: string, user: string, passwd: string) => {
    try {
        const register = new SecurePassword(info, user, passwd).register();
        const registerList = new SecureStr(register);
        registerList.saveInfo();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Erro desconhecido ao guardar senha")
        }
    }
}
