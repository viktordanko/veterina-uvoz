import { useEffect } from 'react'


export const useBodyScrollLock = () => {
	useEffect(() => {
		const defaultStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = defaultStyle;
		}
	}, []);

}