const luhn = require('./dist/');

/** Valid Numbers */

test('Validate Valid Visa Credit Card Numbers', () => {
    expect(luhn('4916737743057301')).toBe(true);
    expect(luhn('4856917591145752')).toBe(true);
    expect(luhn('4491434969706596')).toBe(true);
    expect(luhn('4718457855667918')).toBe(true);
    expect(luhn('4121627957352194')).toBe(true);
    expect(luhn('4583347776468516')).toBe(true);
    expect(luhn('4009825593361366')).toBe(true);
    expect(luhn('4242309944959829')).toBe(true);
    expect(luhn('4522696277003949')).toBe(true);
});

test('Validate Valid Master Card Numbers', () => {
    expect(luhn('5290982730123160')).toBe(true);
    expect(luhn('5255166330865106')).toBe(true);
    expect(luhn('5168855064377546')).toBe(true);
    expect(luhn('5178878667824183')).toBe(true);
    expect(luhn('5590675984361042')).toBe(true);
    expect(luhn('5120517065642990')).toBe(true);
    expect(luhn('5576342703649631')).toBe(true);
    expect(luhn('5440049701341053')).toBe(true);
    expect(luhn('5467799206846117')).toBe(true);
});

test('Validate Valid Amex Numbers', () => {
    expect(luhn('340463479709536')).toBe(true);
    expect(luhn('341401144331947')).toBe(true);
    expect(luhn('349692096340462')).toBe(true);
    expect(luhn('347837944499638')).toBe(true);
    expect(luhn('376334817432197')).toBe(true);
    expect(luhn('343801160704216')).toBe(true);
    expect(luhn('342237781268565')).toBe(true);
    expect(luhn('341654023257811')).toBe(true);
    expect(luhn('341312451321472')).toBe(true);
});

test('Validate Valid Discover Numbers', () => {
    expect(luhn('6011128219325241')).toBe(true);
    expect(luhn('6011000000000004')).toBe(true);
    expect(luhn('6011503767379354')).toBe(true);
    expect(luhn('6011735324769954')).toBe(true);
    expect(luhn('6011932464592870')).toBe(true);
    expect(luhn('6011550351055338')).toBe(true);
    expect(luhn('6011698070502765')).toBe(true);
    expect(luhn('6011652197542873')).toBe(true);
    expect(luhn('6011027959624815')).toBe(true);
});

/** Invalid Numbers */

test('Validate InValid Visa Credit Card Numbers', () => {
    expect(luhn('4916377743357301')).toBe(false);
    expect(luhn('4856193391154752')).toBe(false);
    expect(luhn('4491344969706596')).toBe(false);
    expect(luhn('4718547844667918')).toBe(false);
    expect(luhn('4121633357352194')).toBe(false);
    expect(luhn('4583437776668516')).toBe(false);
    expect(luhn('4009285596661366')).toBe(false);
    expect(luhn('4242039947759829')).toBe(false);
    expect(luhn('4522996277703949')).toBe(false);
});

test('Validate InValid Master Card Numbers', () => {
    expect(luhn('5292282730123160')).toBe(false);
    expect(luhn('5252266330865106')).toBe(false);
    expect(luhn('5162255064377546')).toBe(false);
    expect(luhn('5172278667824183')).toBe(false);
    expect(luhn('5593475984361042')).toBe(false);
    expect(luhn('5122217065642990')).toBe(false);
    expect(luhn('5573342703649631')).toBe(false);
    expect(luhn('5444449701341053')).toBe(false);
    expect(luhn('5465599206846117')).toBe(false);
});

test('Validate InValid Amex Numbers', () => {
    expect(luhn('340488479709536')).toBe(false);
    expect(luhn('341661144331947')).toBe(false);
    expect(luhn('349772096330462')).toBe(false);
    expect(luhn('347888944499638')).toBe(false);
    expect(luhn('376388817432197')).toBe(false);
    expect(luhn('343888160704216')).toBe(false);
    expect(luhn('342288781268565')).toBe(false);
    expect(luhn('341654029957811')).toBe(false);
    expect(luhn('341312459921472')).toBe(false);
});

test('Validate InValid Discover Numbers', () => {
    expect(luhn('6011128339325241')).toBe(false);
    expect(luhn('6011116933423328')).toBe(false);
    expect(luhn('6011633642935192')).toBe(false);
    expect(luhn('6011533100359198')).toBe(false);
    expect(luhn('6011733704724069')).toBe(false);
    expect(luhn('6011633935081074')).toBe(false);
    expect(luhn('6011133361959559')).toBe(false);
    expect(luhn('6011033545079140')).toBe(false);
    expect(luhn('6021933139722280')).toBe(false);
});
