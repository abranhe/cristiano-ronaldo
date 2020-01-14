import test from 'ava';
import cristianoRonaldo from '.';

test('Main', async t => {
	t.is(typeof await cristianoRonaldo(), 'object');

	const cr7 = await cristianoRonaldo();

	t.is(typeof cr7.goals, 'number');
	t.true(cr7.goals >= 716);
});
