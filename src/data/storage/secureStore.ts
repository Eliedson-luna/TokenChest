import * as SecureStore from 'expo-secure-store';
import { SecurePasswdTp, SecureStrTp } from './types';

export class SecureStr {
    private CONFIGKEY: string = 'SecurePasswordList'
    private register?: SecurePasswdTp;

    constructor();

    constructor(register?: SecurePasswdTp);

    constructor(register?: SecurePasswdTp) {
        this.register = register
    }

    private async saveSecureStore(secureStoreInstance: SecureStrTp) {
        await SecureStore.setItemAsync(this.CONFIGKEY, JSON.stringify(secureStoreInstance));
    };

    private async loadSecureStoreInfo() {
        const storedList = await SecureStore.getItemAsync(this.CONFIGKEY);
        return storedList ? JSON.parse(storedList) : [];
    };

    loadInfo = async (): Promise<SecureStrTp> => {
        const storedConfig = await this.loadSecureStoreInfo();
        if (storedConfig) {
            return storedConfig;
        } else {
            return [];
        }
    };

    saveInfo = async () => {
        try {
            if (this.register) {
                const storedInfo: SecureStrTp = await this.loadSecureStoreInfo();
                this.register?.id == await storedInfo.length + 1;
                storedInfo.push(this.register)
                await this.saveSecureStore(storedInfo);
            } else {
                throw Error('Falha ao instanciar objeto Password.register')
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro desconhecido ao guardar")
            }
        }
    };
    deleteInfo = async () => {

    }

}


export class SecurePassword {
    private id?: number;
    private info: string;
    private user: string;
    private passwd: string;

    constructor(info: string, user: string, passwd: string) {
        const fields = { info, user, passwd };

        for (const [key, value] of Object.entries(fields)) {
            if (!value || value.trim() === '') {
                throw new Error(`Dado faltante: ${key}`);
            }
        }
        this.info = info;
        this.user = user;
        this.passwd = passwd;
    }

    register(): SecurePasswdTp {
        const register: SecurePasswdTp = { id: this.id, info: this.info, user: this.user, passwd: this.passwd }
        return register
    }

}