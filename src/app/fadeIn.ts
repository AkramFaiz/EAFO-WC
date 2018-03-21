import {trigger, transition, style, animate, keyframes} from '@angular/animations';

export let fadeIn = trigger('fadeIn',[
    transition(':enter',[
        style({ opacity: 1 }),
       animate(1000)
    ])
  ]);