import pixplayer from './images/pixplayer.png';
import fantasy from './images/fantasy.jpg';

export default function PlayerImage() {
    return (
        <div>
            <img src={fantasy} alt="pixplayer" style={{ width: '800px', height: '700px' }} />
        </div>
    );
}
