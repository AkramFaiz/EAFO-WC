import { Component, OnInit, trigger, transition, style, animate, keyframes} from '@angular/core';

export let bounceEffect = trigger('bounceEffect',[
    transition('void => *',[
       animate(600,keyframes([
         style({opacity: 0, transform: 'translateY(-200px)',offset:0}),
         style({opacity: 1, transform: 'translateY(25px)',offset:0.5}),
         style({opacity: 1, transform: 'translateY(0)',offset:1}),
       ]))
    ])
  ]);