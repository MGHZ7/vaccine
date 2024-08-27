import './styles.scss';

import ReactPlayer, { ReactPlayerProps } from "react-player";

export function VideoPlayer(props: ReactPlayerProps & { className?: string }) {

    return <ReactPlayer   {...props} />
}