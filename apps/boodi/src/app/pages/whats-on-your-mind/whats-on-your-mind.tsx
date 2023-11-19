import { Button } from '@boodi/ui/button';
import styles from './whats-on-your-mind.module.scss';
import { Input } from '@boodi/ui/input';
import { useState } from 'react';
import { API_URLS } from '@boodi/services/api-urls';
import DOMPurify from 'dompurify';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  const [inputText, setInputText] = useState('not enough hours in the day');
  const [boodiResponse, setBoodiResponse] = useState('');

  const go = () => {
    const url = API_URLS.api.zeroShotWisdom;
    const socket = new WebSocket(url);

    socket.onopen = () => {
      const request = JSON.stringify({ inputText });
      socket.send(request);
    };

    socket.onmessage = (e) => {
      setBoodiResponse((res) => res + e.data);
    };

    socket.onclose = (e) => {
      // console.log('Socket closed', e.code, e.reason);
    };

    socket.onerror = (err) => {
      console.error('Websocket error:', err);
    };
  };

  return (
    <div
      id="WhatsOnYourMindPage"
      className="w-screen min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center"
    >
      <div className="w-full sm:w-[580px] px-5">
        {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[286px] mx-auto">
          What's on your mind?
        </h1> */}
        <h1 className="text-transparent bg-clip-text  w-[284px] mx-auto">
          What's on your mind?
        </h1>
        <div id="InputArea">
          <Input
            type="text"
            className="w-full my-4"
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button className="w-full my-4 mt-0" onClick={() => go()}>
            Go
          </Button>
        </div>

        <div id="OutputArea" className="mx-auto">
          <div
            className={styles['boodi-response']}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(boodiResponse),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
