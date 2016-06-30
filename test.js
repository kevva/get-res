import test from 'ava';
import getRes from './';

test(async t => {
	for (const {item} of await getRes()) {
		t.regex(item, /^\d{3,4}x\d{3,4}$/i);
	}
});
