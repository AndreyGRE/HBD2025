function AnonsVideo() {
    return (
        <div className="mt-[56px] xl:mt-65 z-9 relative">
            <div className="w-full lg:max-w-[821px] xl:max-w-[1021px] 2xl:max-w-[1221px] aspect-video mx-auto z-10">
                <iframe
                    className="w-full h-full "
                    src="https://vkvideo.ru/video_ext.php?oid=-227236036&id=456239131&hd=2&hash=43c886cd104aed31&autoplay=0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    title="Видео"
                ></iframe>
            </div>
        </div>
    );
}

export default AnonsVideo;
