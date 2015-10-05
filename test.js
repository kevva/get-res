import test from 'ava';
import getRes from './';

test('fetch 10 items', async t => {
	t.plan(10);

	const data = await getRes();

	data.forEach(el => {
		t.regexTest(/^\d{3,4}x\d{3,4}$/i, el.item);
	});
});
