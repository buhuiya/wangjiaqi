/*自定义播放时长插件*/
export default {
    setXGtimer(myPlayer, duration, util){
        let container = util.createDom('xg-time', `<span class="xgplayer-time-current" style="display:inline-block;">${myPlayer.currentTime || util.format(0)}</span>
            <span style="display:inline-block;color:#fff;">${duration || util.format(0)}</span>`, {}, 'xgplayer-time')
        myPlayer.once('ready', () => {
            if(myPlayer.controls) {
                myPlayer.controls.appendChild(container)
            }
        })
        let onTimeChange = function () {
            if (myPlayer.videoConfig.mediaType !== 'audio' || !myPlayer.isProgressMoving || !player.dash) {
                container.innerHTML = `<span class="xgplayer-time-current" style="display:inline-block;">${util.format(myPlayer.currentTime || 0)}</span>` + `<span style="display:inline-block;color:#fff;">${util.format(duration)}</span>`
            }
        }
        myPlayer.on('durationchange', onTimeChange)
        myPlayer.on('timeupdate', onTimeChange)

        function onDestroy () {
            myPlayer.off('durationchange', onTimeChange)
            myPlayer.off('timeupdate', onTimeChange)
            myPlayer.off('destroy', onDestroy)
        }
        myPlayer.once('destroy', onDestroy)
    }
}

