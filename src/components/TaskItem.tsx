import {
  Box,
  Checkbox,
  Pressable,
  useColorModeValue,
  useToken,
} from 'native-base';
import React from 'react';

interface Props {
  isDone: boolean;
  onToggleCheckbox?: () => void;
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox } = props;
  // const highlightColor = useToken(
  //   'colors',
  //   useColorModeValue('blue.500', 'blue.400')
  // )
  // const boxStroke = useToken(
  //   'colors',
  //   useColorModeValue('muted.300', 'muted.500')
  // )

  // const checkmarkColor = useToken('colors', useColorModeValue('white', 'white'))

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText'),
  );
  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600'),
  );
  return (
    <Box width={30} height={30} mr={2}>
      <Pressable onPress={onToggleCheckbox}>
        <Checkbox value="checkbox-task" isChecked={isDone} />
      </Pressable>
    </Box>
  );
};

export default TaskItem;
