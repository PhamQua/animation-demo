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
    state('show', style({
        opacity: 1,
    })),
    state('hide', style({
        opacity: 0
    })),
    transition('hide => show', [
        style({
            opacity: 1,
        }),
        query('.item-test', [
            style({ opacity: 0, transform: 'translateX(-50px)' }),
            stagger(100, [
                animate('500ms', style({ opacity: 1, transform: 'translateX(0px)' }))
            ])
        ], { optional: true })
    ]),
    // transition('show => hide', [
    //     style({
    //         opacity: 1,
    //     }),
    //     query('.item-test', [
    //         style({ opacity: 1, transform: 'translateX(0px)' }),
    //         stagger(500, [
    //             animate('500ms', style({ opacity: 0, transform: 'translateX(-50px)' }))
    //         ])
    //     ], { optional: true }),
    // ])
])


