function AnonsVideo() {
    return (
        <div className="mt-[80px] xl:mt-[62px] z-9 relative  xl:px-[135px]  ">
            {/* lg:max-w-[821px] xl:max-w-[1021px] 2xl:max-w-[1221px] */}
            <div className="w-full  aspect-video mx-auto z-10 rounded-[24px] overflow-hidden">
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
