import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { DemandeDeCour } from './model/DemandeDeCour';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    demandes: DemandeDeCour[] = [];

    location: any;
    routerSubscription: any;

    constructor(private router: Router) {
    }

    ngOnInit(){
        this.demandes = [
            // Sample data
            new DemandeDeCour({
              demandeDeCour_Id: 1,
              titre_demande: 'Math Tutoring',
              detail_demande: 'Need help with algebra',
              locale: 'Online',
              prix_max: 50,
              prix_min: 30,
              statutDemande: 'Pending',
              adress: { /* Address data */ },
              matiere: { name: 'Math' },
              etudiant: { /* Etudiant data */ },
              teacher: { /* Teacher data */ },
              date: '2024-05-01' // Add a date property if not existing
            }),
            // Add more sample demands
          ];

        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}