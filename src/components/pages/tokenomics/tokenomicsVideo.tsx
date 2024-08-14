import { VideoPlayer } from "@/components/common/videoPlayer/videoPlayer";

export function TokenomicsVideo() {

    const videoUrl = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4';

    return <section>
        <h2 className="text-3xl font-bold mb-4">How To Buy</h2>
        <div className="aspect-video">
            <VideoPlayer width={'100%'} height={'100%'} url={videoUrl} playing controls />
        </div>
    </section>
}