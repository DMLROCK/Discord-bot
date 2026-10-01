// components-v2.js
// Minimal placeholder for Valley bot UI components

const SECTION_TITLES = {
  home: "🌿 Stoner Valley",
  economy: "💵 Economy",
  work: "💼 Work",
  shop: "🏪 Shop",
  inventory: "🎒 Inventory",
  phone: "📱 Phone",
  property: "🏠 Property",
  business: "🏢 Business"
};

function buildV2MessagePayload(options) {
  const {
    userId,
    section,
    response,
    actions,
    update
  } = options;

  // Return a basic Discord message payload
  return {
    content: response?.content || "",
    embeds: response?.embeds || [],
    ephemeral: response?.ephemeral || false,
    components: actions && actions.length > 0 ? buildActionComponents(actions) : []
  };
}

function buildActionComponents(actions) {
  // Placeholder: return empty component array
  // Full implementation would create Discord action rows/select menus
  return [];
}

module.exports = {
  SECTION_TITLES,
  buildV2MessagePayload
};
