import { Button } from '@boodi/ui/button';
import styles from './whats-on-your-mind.module.scss';
import { Input } from '@boodi/ui/input';
import { useState } from 'react';
import { API_URLS } from '@boodi/services/api-urls';
import DOMPurify from 'dompurify';
import {
  ArrowBigRight,
  ArrowRightCircle,
  ChevronRight,
  MousePointerClick,
} from 'lucide-react';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  const [inputText, setInputText] = useState('not enough hours in the day');
  const [boodiResponse, setBoodiResponse] = useState('');

  const initVh = window.innerHeight;

  const go = () => {
    setBoodiResponse('');
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
      className="w-screen min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-start"
    >
      <img
        src="./../../../../public/boodi-logo.svg"
        className="w-[200px]"
        style={{ marginTop: `${initVh / 8}px` }}
      />

      <div
        className="w-[320px] sm:w-[80%] sm:max-w-[500px] md:w-[500px] px-5"
        style={{ marginTop: `${initVh / 8}px` }}
      >
        <h1 className="text-transparent bg-clip-text  w-[284px] mx-auto">
          What's on your mind?
        </h1>
        <div id="InputArea" className="flex flex-col md:flex-row">
          <Input
            type="text"
            className=""
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') go();
            }}
          />
          <Button className="mt-3 md:mt-0 md:ml-3" onClick={() => go()}>
            <MousePointerClick />
          </Button>
        </div>

        <div id="OutputArea" className="mx-auto mt-7">
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
