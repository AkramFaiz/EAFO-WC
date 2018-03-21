import {trigger, transition, style, animate, keyframes, query} from '@angular/animations';

export let bounceEffect = trigger('bounceEffect',[
    transition('void => *',[
       animate(800,keyframes([
         style({opacity: 0, transform: 'translateY(-200px)',offset:0}),
         style({opacity: 1, transform: 'translateY(25px)',offset:0.5}),
         style({opacity: 1, transform: 'translateY(0)',offset:1}),
       ]))
    ])
  ]);

  export let bounceChildEffect = trigger('bounceChildEffect',[
    transition(':leave',[
      query('section > ul li',[
        animate(600,keyframes([
          style({opacity: 0, transform: 'translateY(-200px)',offset:0}),
          style({opacity: 1, transform: 'translateY(25px)',offset:0.5}),
          style({opacity: 1, transform: 'translateY(0)',offset:1}),
        ]))
      ])
       
    ])
  ]);