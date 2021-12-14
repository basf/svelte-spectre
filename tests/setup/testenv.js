import { JSDOM } from 'jsdom';
import { tick } from 'svelte';

const { window } = new JSDOM('');

export function setup() {
	// @ts-ignore
	global.window = window;
	global.document = window.document;
	global.navigator = window.navigator;
	global.getComputedStyle = window.getComputedStyle;
	global.requestAnimationFrame = null;
}

export function reset() {
	window.document.title = '';
	window.document.head.innerHTML = '';
	window.document.body.innerHTML = '';
}

/**
 * @typedef RenderOutput
 * @property container {HTMLElement}
 * @property component {import('svelte').SvelteComponent}
 */

/**
 * @return {RenderOutput}
 */
export function render(Tag, props = {}) {
	Tag = Tag.default || Tag;
	const container = window.document.body;
	const component = new Tag({ props, target: container });
	return { container, component };
}

// TODO - dinamicly $$slots --------------------------------

// import { detach, insert, noop } from 'svelte/internal';

// function createSlots(slots) {
// 	const svelteSlots = {};

// 	for (const slotName in slots) {
// 		svelteSlots[slotName] = [createSlotFn(slots[slotName])];
// 	}

// 	function createSlotFn(element) {
// 		return function () {
// 			return {
// 				c: noop,

// 				m: function mount(target, anchor) {
// 					insert(target, element, anchor);
// 				},

// 				d: function destroy(detaching) {
// 					if (detaching) {
// 						detach(element);
// 					}
// 				},

// 				l: noop,
// 			};
// 		};
// 	}
// 	return svelteSlots;
// }

// new Component({
// 	target: element,
// 	props: {
// 		$$slots: createSlots({ slot_name1: element1, slot_name2: element2, ... }),
// 		$$scope: {},
// 	},
// });

// new Parent({
// 	target: document.body,
// 	props: {
// 		$$scope: {},
// 		$$slots: create({
// 			default: [Child],
// 			// Or
// 			default: [new Child({ $$inline: true, props: { ...} })]
// 		})
// 	}
// });

// export function createSlots(slots) {
// 	const svelteSlots = {};

// 	for (const slotName in slots) {
// 		svelteSlots[slotName] = [createSlotFn(slots[slotName])];
// 	}

// 	function createSlotFn([ele, props = {}]) {
// 		if (is_function(ele) && Object.getPrototypeOf(ele) === SvelteComponent) {
// 			const component: any = new ele({});
// 			return function () {
// 				return {
// 					c() {
// 						create_component(component.$$.fragment);
// 						component.$set(props);
// 					},
// 					m(target, anchor) {
// 						mount_component(component, target, anchor, null);
// 					},
// 					d(detaching) {
// 						destroy_component(component, detaching);
// 					},
// 					l: noop,
// 				};
// 			};
// 		}
// 		else {
// 			return function () {
// 				return {
// 					c: noop,
// 					m: function mount(target, anchor) {
// 						insert(target, ele, anchor);
// 					},
// 					d: function destroy(detaching) {
// 						if (detaching) {
// 							detach(ele);
// 						}
// 					},
// 					l: noop,
// 				};
// 			};
// 		}
// 	}
// 	return svelteSlots;
// }

// const { container } = render(Row, {
// 	props: {
// 		gutter: 20,
// 		$$slots: createSlots({ default: [Col, { span: 12 }] }),
// 		$$scope: {},
// 	}
// });

/**
 * @param {HTMLElement} elem
 * @param {String} event
 * @param {any} [details]
 * @returns Promise<void>
 */
export function fire(elem, event, details) {
	let evt = new window.Event(event, details);
	elem.dispatchEvent(evt);
	return tick();
}
