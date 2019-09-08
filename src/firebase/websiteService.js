import { websitesRef } from './firebase';

export const addWebsite = website => {
	websitesRef.push(website);
}

export const removeWebsite = website => {
	websitesRef.child(website.key).remove();
}

export const fetchWebsites = (onFetch) => {
	websitesRef.on('value', snapshot => {
		onFetch(snapshot.val())
	})
}
