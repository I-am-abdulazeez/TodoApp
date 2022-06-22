import {
  Box,
  Checkbox,
  HStack,
  Pressable,
  Text,
  useColorModeValue,
  useToken,
} from 'native-base';
import React from 'react';
import AnimatedTaskLabel from './AnimatedTaskLabel';

interface Props {
  isDone: boolean;
  onToggleCheckbox?: () => void;
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox } = props;

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText'),
  );
  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600'),
  );
  return (
    <HStack
      py={2}
      px={4}
      w="full"
      alignItems={'center'}
      bg={useColorModeValue('warmGray.50', 'primary.900')}>
      <Box mr={2}>
        <Checkbox
          value="checkbox-task"
          size={'lg'}
          isChecked={isDone}
          onChange={onToggleCheckbox}
          accessibilityLabel="task-item"
        />
      </Box>
      <AnimatedTaskLabel
        strikethrough={isDone}
        textColor={activeTextColor}
        inactiveTextColor={doneTextColor}>
        Task Item
      </AnimatedTaskLabel>
    </HStack>
  );
};

export default TaskItem;
