import { Component } from 'rxcomp';
import { accent, background, foreground } from '../colors/colors';

export default class TodoItemComponent extends Component {

	// onInit() {}

	onChanges(changes) {
		// console.log('onChanges', changes);
		this.background = background(this.item.id);
		this.foreground = foreground(this.item.id);
		this.accent = accent(this.item.id);
	}

	// onView() {}

	// onDestroy() {}

	onToggle($event) {
		// console.log('onToggle', $event);
		this.toggle.next($event);
	}

	onRemove($event) {
		// console.log('onRemove', $event);
		this.remove.next($event);
	}

}

TodoItemComponent.meta = {
	selector: '[todo-item-component]',
	inputs: ['item'],
	outputs: ['toggle', 'remove'],
	// template syntax example
	/*
	template: // html // `
		<div class="content" [style]="{ background: background, color: foreground, '--accent': accent }">
			<button type="button" class="btn--toggle" (click)="onToggle(item)">
				<div class="title" [innerHTML]="item.name"></div>
				<div class="date" [innerHTML]="item.date | date : 'en-US' : { month: 'short', day: '2-digit', year: 'numeric' }"></div>
			</button>
			<button type="button" class="btn--remove" (click)="onRemove(item)">
				<i class="icon--remove"></i>
			</button>
		</div>
	`,
	*/
};
