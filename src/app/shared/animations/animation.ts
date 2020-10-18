import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
    group,
    animation
} from '@angular/animations';

export const LIST_ANIMATION = trigger('listAnimation', [
    state('hide', 
        style({
            opacity: 0,
            transform: 'translateX(-50px)'
        })
    ),
    transition('hide => show', [
        query('.item-test', [
            style({ opacity: 0, transform: 'translateX(-50px)' }),
            stagger(500, [
                animate('500ms', style({ opacity: 1, transform: 'none' }))
            ])
        ], { optional: true })
    ]),
    transition('show => hide', [
        query('.item-test', [
            style({ opacity: 1, transform: 'translateX(0px)' }),
            stagger(500, [
                animate('500ms', style({ opacity: 0, transform: 'translateX(-50px)' }))
            ])
        ], { optional: true })
    ])
])


