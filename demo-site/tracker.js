(function () {
  const API_URL =
    "https://insightflow-analytics.onrender.com/api/events";
  function getSessionId() {
    let sessionId = localStorage.getItem(
      "insightflow_session"
    );

    if (!sessionId) {
      sessionId = crypto.randomUUID();

      localStorage.setItem(
        "insightflow_session",
        sessionId
      );
    }

    return sessionId;
  }

  function getPageUrl() {
  const path = window.location.pathname.toLowerCase();

  if (
    path === "/" ||
    path.includes("index")
  ) {
    return "/home";
  }

  if (
    path.includes("pricing")
  ) {
    return "/pricing";
  }

  return path;
}

  async function sendEvent(eventData) {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error(
        "InsightFlow Tracking Error:",
        error
      );
    }
  }

  async function trackPageView() {
    await sendEvent({
      sessionId: getSessionId(),

      eventType: "page_view",

      pageUrl: getPageUrl(),

      timestamp:
        new Date().toISOString(),
    });
  }

  async function trackClick(event) {
    const target = event.target;

    if (
      target.tagName === "SCRIPT" ||
      target.tagName === "HTML"
    ) {
      return;
    }

    await sendEvent({
      sessionId: getSessionId(),

      eventType: "click",

      pageUrl: getPageUrl(),

      timestamp:
        new Date().toISOString(),

      x: event.clientX,

      y: event.clientY,
    });
  }

  function init() {
    console.log(
      " InsightFlow Tracker Initialized"
    );

    trackPageView();

    document.addEventListener(
      "click",
      trackClick
    );
  }

  window.InsightFlow = {
    init,
    getSessionId,
  };

  init();
})();