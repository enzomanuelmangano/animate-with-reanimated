import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// import { PressableScale } from '../animations/action-tray/components/TouchableScale';

// I'm not a fan of HOCs, but this one is useful :)
export const withCustomBackIcon = ({
  Component,
  backIconDark = true,
  iconMarginTop = 0,
  iconMarginLeft = 0,
}: {
  Component:
    | (() => React.JSX.Element)
    | React.MemoExoticComponent<() => React.JSX.Element>
    | ReturnType<typeof gestureHandlerRootHOC>;
  backIconDark?: boolean;
  iconMarginTop?: number;
  iconMarginLeft?: number;
}) => {
  return () => {
    const { goBack } = useNavigation();
    const { top: safeTop } = useSafeAreaInsets();
    const backgroundColor = backIconDark
      ? 'rgba(0,0,0,0.1)'
      : 'rgba(255,255,255,0.2)';
    const color = backIconDark ? 'black' : 'white';

    return (
      <>
        <TouchableOpacity
          onPress={goBack}
          style={[
            {
              top: 24 + safeTop + iconMarginTop,
              marginLeft: iconMarginLeft,
              backgroundColor,
              borderColor: color,
            },
            styles.button,
          ]}
        >
          <MaterialIcons name="close" size={24} color={color} />
        </TouchableOpacity>
        <Component />
      </>
    );
  };
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    aspectRatio: 1,
    position: 'absolute',
    left: 20,
    zIndex: 1000,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
