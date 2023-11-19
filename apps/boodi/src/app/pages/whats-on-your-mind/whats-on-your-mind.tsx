import { Button } from '@boodi/ui/button';
import styles from './whats-on-your-mind.module.scss';
import { Input } from '@boodi/ui/input';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  const [inputText, setInputText] = useState('');

  const go = () => {
    console.log('clicked go', inputText);
  };

  return (
    <div
      id="WhatsOnYourMindPage"
      className="w-screen h-screen flex flex-col justify-center items-center bg-sky-100"
    >
      <div id="InputArea">
        <Input
          type="text"
          className="w-[500px]"
          placeholder="What's on your mind?"
          onChange={(e) => setInputText(e.target.value)}
        />
        <br />
        <Button onClick={() => go()}>Go</Button>
      </div>

      <div id="OutputArea" className="hidden">
        output
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
