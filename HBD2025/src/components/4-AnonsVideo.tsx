function AnonsVideo() {
    return (
        <div className="mt-[56px] xl:mt-65 z-9 relative">
            <div className="w-full lg:max-w-[821px] xl:max-w-[1021px] 2xl:max-w-[1221px] aspect-video mx-auto z-10">
                <iframe
                    className="w-full h-full "
                    src="https://vk.com/video_ext.php?oid=-227236036&id=456239027&hash=578e4bc00eb2507d&autoplay=0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    title="Видео"
                ></iframe>
            </div>
        </div>
    );
}

export default AnonsVideo;
