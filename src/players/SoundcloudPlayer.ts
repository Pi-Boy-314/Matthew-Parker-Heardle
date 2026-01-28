import { Player } from "./PlayerBase"

export class SoundcloudPlayer extends Player {
    Widget: any;
    Playing: boolean;
    Volume: number;

    constructor(url: string){
        super(url);

        const main = document.getElementsByTagName("main")[0];
        const container = document.createElement("div");
        container.classList.add("hidden");

        const iframe = document.createElement("iframe");
        iframe.id = "soundcloud-iframe";
        iframe.name = "soundcloud";
        iframe.allow = "autoplay";
        iframe.height = "0";
        iframe.src = "https://w.soundcloud.com/player/?url=" + url;
        container.appendChild(iframe);

        main.appendChild(container);

        window.setInterval(()=>{
            this.Widget.isPaused((paused: boolean)=>{
                this.Playing = !paused;
            });
        }, 200);

        this.Widget = SC.Widget(iframe);

        this.Volume = 50
        this.Widget.setVolume(this.Volume)
    }

    PlayMusicUntilEnd(started_callback: () => void | null, finished_callback: () => void | null): void
    {
        if(started_callback != null) started_callback();
        this.Widget.play();
    }

    PlayMusic(timer: number, started_callback: () => void | null, finished_callback: () => void | null): void
    {
        this.Widget.play();

        let onPlay = ()=>{

            if(started_callback != null) started_callback();
            window.setTimeout(()=>{
                this.Widget.isPaused((paused: boolean)=>{
                    if(!paused){
                        this.StopMusic();
                        if(finished_callback != null)finished_callback();
                    }
                });
            }, timer*1000);

            this.Widget.unbind(SC.Widget.Events.PLAY);
        }

        this.Widget.bind(SC.Widget.Events.PLAY, onPlay);
    }

    StopMusic(): void
    {
        this.Widget.pause();
        this.Widget.seekTo(0);
    }

    async GetCurrentMusicTime(callback: (percentage: number)=>void)
    {
        if(!this.Playing) callback(0);

        this.Widget.getPosition((n: number)=>{
            callback(n);
        })
    }

    async GetCurrentMusicLength(callback: (length: number)=>void)
    {
        this.Widget.getDuration((n: number)=>{
            callback(n);
        });
    }

    GetVolume(): number {
        return this.Volume;
    }

    SetVolume(volume: number): void {
        this.Volume = volume;
        this.Widget.setVolume(volume)
    }
}
