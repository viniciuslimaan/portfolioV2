import { memo, useState } from 'react';

import { Icon } from '@iconify/react';
import useSound from 'use-sound';

import interstellarSoundtrack from '../../assets/audio/insterstellar-soundtrack.mp3';
import interstellarImg from '../../assets/img/interstellar.jpg';

import { AudioImage, Button, Player } from './styles';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3);

  const [play, { pause }] = useSound(interstellarSoundtrack, {
    volume: volume,
  });

  const handleMusicState = (): void => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolume = (type: string): void => setVolume(parseFloat(type));

  const getAudioIcon = () => {
    if (volume === 0)
      return <Icon className="icon" icon="ph:speaker-simple-x-duotone" />;
    else if (volume >= 0.01 && volume <= 0.49)
      return <Icon className="icon" icon="ph:speaker-simple-low-duotone" />;
    else if (volume >= 0.5 && volume <= 0.9)
      return <Icon className="icon" icon="ph:speaker-simple-high-duotone" />;
    else
      return <Icon className="icon" icon="ph:speaker-simple-slash-duotone" />;
  };

  return (
    <Player>
      <div className="showHandlers">
        <Icon className="icon" icon="ph:headphones-duotone" />
      </div>

      <div className="audio">
        <AudioImage>
          <img src={interstellarImg} alt="Imagem do filme interstellar" />
        </AudioImage>

        <div className="handlers">
          <Button disabled>
            <Icon className="icon" icon="ph:skip-back-duotone" />
          </Button>

          <Button className="play" onClick={() => handleMusicState()}>
            {isPlaying ? (
              <Icon className="icon" icon="ph:pause-duotone" />
            ) : (
              <Icon className="icon" icon="ph:play-duotone" />
            )}
          </Button>

          <Button disabled>
            <Icon className="icon" icon="ph:skip-forward-duotone" />
          </Button>
        </div>

        <hr />

        <div className="volume">
          <Button
            onClick={() => (volume > 0.1 ? setVolume(0) : setVolume(0.3))}
          >
            {getAudioIcon()}
          </Button>

          <input
            type="range"
            min="0"
            max="0.9"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolume(e.target.value)}
          />
        </div>
      </div>
    </Player>
  );
};

export default memo(MusicPlayer);
