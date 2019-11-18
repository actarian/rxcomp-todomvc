import { ClassDirective, EventDirective, ForStructure, IfStructure, InnerHtmlDirective, JsonPipe, Module, StyleDirective } from 'rxcomp';
import AppComponent from './app.component';
import DatePipe from './date/date.pipe';
import TodoItemComponent from './todo-item/todo-item.component';

Module.use({
	factories: [
		ClassDirective,
		EventDirective,
		ForStructure,
		IfStructure,
		InnerHtmlDirective,
		StyleDirective,
		TodoItemComponent,
	],
	pipes: [
		DatePipe,
		JsonPipe,
	],
	bootstrap: AppComponent,
});
