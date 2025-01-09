export const getRefToScrollSpecificPosition = (text, smoothScrollToRef, homeRef, howItWorksRef, whyUsRef, fraturesRef, aboutUsRef, testimonialRef, faqRef) => {
    switch (text) {
        case 'homeRef':
            smoothScrollToRef(homeRef);
            break;
        case 'howItWorksRef':
            smoothScrollToRef(howItWorksRef);
            break;
        case 'whyUsRef':
            smoothScrollToRef(whyUsRef);
            break;
        case 'fraturesRef':
            smoothScrollToRef(fraturesRef);
            break;
        case 'aboutUsRef':
            smoothScrollToRef(aboutUsRef);
            break;
        case 'testimonialRef':
            smoothScrollToRef(testimonialRef);
            break;
        case 'faqRef':
            smoothScrollToRef(faqRef);
            break;

        default:
            console.warn(`Unknown ref: ${text}`);
    }
    return
}