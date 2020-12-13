import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (ref, { treshold, root, rootMargin }) => {
	const [state, setState] = useState({
		inVies: false,
		triggered: false,
		entry: undefined
	});

	observer = useRef();

	let observer = new IntersectionObserver((entries, observerInstance) => {
		// Check if the element is intersecting
		if (entries[0].intersectionRatio > 0) {
			// if the state is updated, set triggered to not re-observe the element
			setState({
				inView: true,
				triggered: true,
				entry: observerInstance
			});
			// unobserve the element
			observerInstance.unobserve(ref.current);
		}
		return;
	},
		{
			treshold: treshold || 0,
			root: root || null,
			rootMargin: rootMargin || "0%"
		}
	);

	useEffect(() => {
		// check if the element exists and not been already triggered
		if (ref.current && !state.triggered) {
			observer.observe(ref.current);
		}
	});

	return [state.inView, state.entry]
}
