import { Box, HStack, Pressable, Text } from 'native-base';
import React, { useEffect, memo } from 'react';

import Animated, {
  useSharedValue,
  Easing,
  withSequence,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface Props {
  strikethrough: boolean;
  textColor: string;
  inactiveTextColor: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedHStack = Animated.createAnimatedComponent(HStack);
const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedTaskLabel = memo((props: Props) => {
  const { strikethrough, inactiveTextColor, textColor, children, onPress } =
    props;
  return (
    <Pressable onPress={onPress}>
      <AnimatedHStack alignItems={'center'}>
        <AnimatedText fontSize={19} noOfLines={1} isTruncated px={1}>
          {children}
        </AnimatedText>
        <AnimatedBox position={'absolute'} h={1} borderBottomWidth={1} />
      </AnimatedHStack>
    </Pressable>
  );
});

export default AnimatedTaskLabel;
