import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
    animation,
    animateChild
} from '@angular/animations';
export const OPACITY_CONTAIN = trigger('opacityContain',[
    state('hide', style({
        opacity: 0,
    })),
    state('show', style({
        opacity: 1,
    })),
    transition('* => hide', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    transition('* => show', animateChild()),
])


