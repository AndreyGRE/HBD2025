function AnonsVideo() {
    return (
        <div className="mt-[56px] xl:mt-65">
            <div className="flex flex-col gap-2 xl:gap-18">
                <div className="flex flex-col  items-center">
                    <div className="text-white text-[32px] xl:text-[100px] font-[750] xl:pr-40">
                        АНОНС
                    </div>
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400] pl-20 xl:pl-40 xl:mt-[-40px]">
                        МЕРОПРИЯТИЯ
                    </div>
                </div>
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full"
                        src="https://vk.com/video_ext.php?oid=-227236036&id=456239027&hash=578e4bc00eb2507d&autoplay=0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        title="Видео"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default AnonsVideo;
