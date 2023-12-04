import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Navegação 2', url: 'navegacao2', icon: 'paper-plane' },
    { title: 'Alert', url: 'alert', icon: 'chatbox' },
    { title: 'Toast', url: 'toast', icon: 'chatbubble' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'construct' },
    { title: 'Badge', url: 'badge', icon: 'albums' },
    { title: 'Card', url: 'card', icon: 'id-card' },
    { title: 'Checkbox', url: 'checkbox', icon: 'shield-checkmark' },
    { title: 'Input', url: 'input', icon: 'information-circle' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
