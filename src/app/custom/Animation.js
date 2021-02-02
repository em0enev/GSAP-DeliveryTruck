import gsap from "gsap/gsap-core";
import { Elastic } from "gsap/gsap-core";
import selectors from "./selectors";

export default class Animation {
    constructor() {
        this._tl = gsap.timeline().pause();
        this._selectors = selectors
    }

    async start() {

        this._tl.to(this._selectors.list, { id: 'listUp', y: '-50px' })
            .to(this._selectors.list, { id: 'listDown', y: '0' })
            .to(this._selectors.listItems[0], { id: 'listItem0', y: '100px', opacity: 0 })
            .to(this._selectors.listItems[1], { id: 'listDown1', y: '100px', opacity: 0 }, '<')
            .to(this._selectors.listItems[2], { id: 'listDown2', y: '100px', opacity: 0 }, '<')
            .to(this._selectors.truckBtnBg, { id: 'truckBtnScaleUp', scale: '1.2', transformOrigin: 'center' })
            .to(this._selectors.truckBtnBg, { id: 'truckBtnScaleDown', scale: '1', transformOrigin: 'center' })
            .to(this._selectors.container, { id: 'container', opacity: 1 })
            .to(this._selectors.containerParts, { id: 'containerParts', opacity: 1, stagger: 0 }, '<')
            .to(this._selectors.backWheel1, { id: 'backWheel1', opacity: 1 })
            .to(this._selectors.backWheel2, { id: 'backWheel2', opacity: 1 }, '<')
            .to(this._selectors.backWheelBack1, { id: 'backWheelBack1', opacity: 1 }, '<')
            .to(this._selectors.backWheelBack2, { id: 'backWheelBack2', opacity: 1 }, '<')
            .to(this._selectors.frontGroup, { id: 'frontGroup', opacity: 1 })
            .to(this._selectors.frontWheelsBack, { id: 'frontWheelsBack', opacity: 1 }, '<')
            .to(this._selectors.frontWheel1, { id: 'frontWheel1', opacity: 1 }, '<')
            .to(this._selectors.frontWheel2, { id: 'frontWheel2', opacity: 1 }, '<')
            .to(this._selectors.truck, { id: 'truckMovement', x: '500px', ease: Elastic.easeInOut.config(5, 1.5), opacity: '0', duration: 3 })
            .to(this._selectors.shippedLabel, { id: 'shippedLabel', opacity: '1' })



        this._selectors.playBtn.addEventListener('click', () => this._startAnimation())
        this._selectors.truckBtn.addEventListener('click', () => this._startAnimation())
        this._selectors.pauseBtn.addEventListener('click', () => this._pauseAnimation())
        this._selectors.reverseBtn.addEventListener('click', () => this._reverseAnimation())
    }

    _startAnimation() {
        if (this._tl.paused()) {
            this._tl.play();
        } else {
            console.log('dsds')
            this._tl.restart();
        }
    }

    _pauseAnimation() {
        this._tl.pause()
    }

    _reverseAnimation() {
        this._tl.reverse();
    }
}