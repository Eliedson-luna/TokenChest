import { ThemedText } from '@/components/ThemedText';
import ThemedContainer from '@/components/ThemedContainer';
import { StyleSheet } from 'react-native';
import { memo } from 'react';
import ThemedButton from '@/components/ThemedButton';

type LinkElement = {
  link: string;
  label: string;
};

const linkElements: LinkElement[] = [
  { link: "/(tabs)/Form", label: "Guarde uma nova senha em seu baú!" },
  { link: "/(tabs)/Form", label: "Olhar baú de senhas" }
]

type ButtonsProps = {
  linkElements: LinkElement[];
};

const Buttons = ({ linkElements }: ButtonsProps) => {
  return (
    <>
      {linkElements.map((element, index) => (
        <ThemedButton link={element.link} key={index} text={element.label} />
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
