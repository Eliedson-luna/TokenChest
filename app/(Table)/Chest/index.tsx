import ThemedContainer from "@/components/ThemedContainer";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { loadListInfo } from "@/src/data/dao/storageListDao";
import { SecureStrTp } from "@/src/data/storage/types";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import PasswordInput from "@/components/PasswordInput";
import Entypo from "@expo/vector-icons/Entypo";

export default function TokenList() {
    const [tokenList, setTokenList] = useState<SecureStrTp>([]);

    async function loadInfo() {
        try {
            const loadedInfo = await loadListInfo()
            setTokenList(loadedInfo)
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                Toast.show({ type: 'error', text2: error.message })
            } else {
                Toast.show({ type: 'error', text2: 'Erro desconhecido.' })
            }
        }
    }

    useEffect(() => {
        loadInfo();
    }, [])

    return (
        <ThemedContainer backgroundColor='#333' type='default'>
            {tokenList.map((item, index) => {
                return (
                    <ThemedContainer backgroundColor='#555' key={index} type="subContainer">
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <ThemedText type="title">{item.info}</ThemedText>
                            <Entypo
                                onPress={() => {

                                }}
                                style={{ alignSelf: 'center', marginRight: 10 }}
                                name={'cog'}
                                size={20}
                                color="black"
                            />
                        </View>
                        <View style={styles.textBox}>
                            <ThemedText
                                type="defaultSemiBold"
                                style={styles.label}>
                                Usuário:
                            </ThemedText>
                            <ThemedInput
                                value={item.user}
                                readOnly={true}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <ThemedText
                                type="defaultSemiBold"
                                style={styles.label}
                            >
                                Senha:
                            </ThemedText>
                            <PasswordInput value={item.passwd} />
                        </View>
                    </ThemedContainer>
                )
            }
            )
            }
        </ThemedContainer>
    )
}

const styles = StyleSheet.create({
    textBox: {
        flexDirection: 'row',
        gap: 10
    },
    label: {
        width: '20%',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 8

    },
    input: {
        width: 150
    }
})