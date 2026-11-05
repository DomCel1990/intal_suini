import { Injectable, signal } from "@angular/core";
import { PRODUCTS_DATA, TIMELINE_EVENTS } from "../constants/date";

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    currentCategory = signal<string>('all');
    currentServing = signal<number>(4);

    isModalOpen = signal<boolean>(false);
    selectProductId = signal<string>('guanciale');

    allProducts = Object.values(PRODUCTS_DATA);
    timeLineEvents = TIMELINE_EVENTS;

    
}