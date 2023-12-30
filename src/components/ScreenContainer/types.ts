import {SafeAreaViewProps} from 'react-native-safe-area-context';

export interface ScreenContainerProps extends SafeAreaViewProps {
  children: React.ReactNode;
}
