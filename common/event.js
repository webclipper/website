const trackEvent = (action, custom) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'home',
      ...custom,
    });
  }
};

export default trackEvent;
