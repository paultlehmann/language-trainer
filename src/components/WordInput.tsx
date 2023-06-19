import { ChangeEvent, useState } from 'react';
import { TextField } from '../mui';

interface IWordInputProps {
  answer: string;
}

const WordInput = (props: IWordInputProps) => {
  const { answer } = props;

  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(ev: ChangeEvent<HTMLInputElement>) => setText(ev.target.value)}
    />
  );
};

export default WordInput;
