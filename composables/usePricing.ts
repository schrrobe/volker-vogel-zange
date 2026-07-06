import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// The pliers have a single price of 140 EUR. For a few markets we show a familiar
// currency symbol instead of the Euro sign. NOTE: the amount itself is NOT converted –
// per-market pricing/currency should be confirmed with the client before extending this map.
const PRICE_AMOUNT = '140';

interface Currency {
	symbol: string;
	position: 'prefix' | 'suffix';
	code: string;
}

const CURRENCY_BY_LOCALE: Record<string, Currency> = {
	en: { symbol: '$', position: 'prefix', code: 'USD' },
	gb: { symbol: '£', position: 'prefix', code: 'GBP' },
};

const DEFAULT_CURRENCY: Currency = { symbol: '€', position: 'suffix', code: 'EUR' };

export function usePricing() {
	const { locale } = useI18n();

	const currency = computed<Currency>(() => CURRENCY_BY_LOCALE[locale.value] ?? DEFAULT_CURRENCY);

	const priceDisplay = computed(() =>
		currency.value.position === 'prefix'
			? `${currency.value.symbol}${PRICE_AMOUNT}`
			: `${PRICE_AMOUNT}${currency.value.symbol}`,
	);

	return { amount: PRICE_AMOUNT, currency, priceDisplay };
}
