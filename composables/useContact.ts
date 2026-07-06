// Single source of truth for the seller's contact endpoints, previously duplicated
// across HomeSlider, PriceSection and CtaBand.
const EMAIL = 'v.juengling@t-online.de';
const WHATSAPP_NUMBER = '4915128803091';

export function useContact() {
	return {
		email: EMAIL,
		mailto: `mailto:${EMAIL}`,
		whatsappNumber: WHATSAPP_NUMBER,
		whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
	};
}
