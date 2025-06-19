import ThemedContainer from "@/components/ThemedContainer";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { loadListInfo } from "@/src/data/dao/storageListDao";
import { SecureStrTp } from "@/src/data/storage/types";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import PasswordInput from "@/components/PasswordInput";
import ItemOptions from "./itemOptions";
import CogButton from "@/components/CogButton";

export default function TokenList() {
    const [tokenList, setTokenList] = useState<SecureStrTp>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedID, setSelectedID] = useState<number>();
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
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
            >
                <ItemOptions itemId={selectedID} handleCloseAction={() => setIsVisible(false)} />
            </Modal>
            {tokenList.map((item, index) => {
                return (

                    <ThemedContainer style={{ marginTop: index === 0 ? '10%' : 0, }} backgroundColor='#555' key={item.id} type="subContainer">
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <ThemedText type="title">{item.info}</ThemedText>
                            <CogButton
                                onPress={() => {
                                    setIsVisible(true);
                                    if (item.id) { setSelectedID(item.id); }
                                    console.log(item.id)
                                }}
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
                            <PasswordInput readOnly={true} value={item.passwd} />
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