import { ThemedText } from '@/components/ThemedText';
import ThemedContainer from '@/components/ThemedContainer';
import { StyleSheet } from 'react-native';
import { memo } from 'react';
import { RelativePathString } from 'expo-router';
import ThemedNavigator from '@/components/ThemedNavigator';

type LinkElement = {
  link: RelativePathString;
  label: string;
};

const linkElements: LinkElement[] = [
  { link: "./(tabs)/Form/", label: "Guarde uma nova senha!" },
  { link: "./(Table)/Chest/", label: "Baú de senhas" }
]

type ButtonsProps = {
  linkElements: LinkElement[];
};

const Buttons = ({ linkElements }: ButtonsProps) => {
  return (
    <>
      {linkElements.map((element, index) => (
        <ThemedNavigator link={element.link} key={index} text={element.label} />
      ))}
    </>
  )
}

const MemoButtons = memo(Buttons)

export default function HomeScreen() {
  return (
    <ThemedContainer backgroundColor='#333' style={styles.container} type='default'>
      <ThemedContainer backgroundColor='#555' type='subContainer'>
        <ThemedText type='title'>
          Suas senhas salvas em seu próprio local seguro!
        </ThemedText>
      </ThemedContainer>

      <ThemedContainer backgroundColor='#555' type='subContainer'>
        <MemoButtons linkElements={linkElements} />
      </ThemedContainer>
    </ThemedContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '50%'
  }
})
