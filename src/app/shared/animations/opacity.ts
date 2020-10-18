import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';
export const OPACITY_ANIMATION = trigger('opacityAnimation',[
    state('hide', style({
        opacity: 0,
        transform: 'translateY(50px)',
    })),
    state('show', style({
        opacity: 1,
        transform: 'none',
    })),
    transition('* => hide', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    transition('* => show',  animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
])


