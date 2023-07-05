import { Subject } from 'rxjs';

// Create a subject to emit the counter values
const counterSubject$ = new Subject();

// Implement the counter
let counter = 0;

// Function to increment the counter and emit the updated value
function incrementCounter() {
	counter++;
	counterSubject$.next(counter);
}

// Start the counter by invoking the incrementCounter function every second
setInterval(incrementCounter, 1000);

// Subscribe to the counter subject to receive the updated values
counterSubject$.subscribe((value) => {
	console.log('Counter:', value);
});
