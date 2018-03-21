import {trigger, transition, style, animate, keyframes} from '@angular/animations';

export let fadeOut = trigger('fadeOut',[
    transition(':leave',[        
       animate(500,style({ opacity: 0 }))
    ])
  ]);