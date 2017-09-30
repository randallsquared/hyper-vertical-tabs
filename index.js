
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      body {
        background-color: dimgray;
      }
      .header_header {
        background-color: #000;
      }
      .notifications_view {
        background-color: #000;
      }
      .tabs_nav {
        width: 120px;
        line-height: 1.9;
      }
      .tabs_hiddenNav {
        display: block;
      }
      .tabs_list {
        max-height: 22px;
        flex-flow: column;
      }
      .tab_text {
        height: 22px;
      }
      .tab_active {
        border-bottom: 1px solid;
        background-color: #494949;
        font-weight: bold;
      }
      .tab_tab {
        border-bottom: 1px solid;
      }
      .tab_icon {
        top: 4px;
        right: 1px;
      }
      .tab_textInner {
        left: 4px;
      }
      .terms_terms {
        left: 120px;
        background-color: #000;
      }
      .terms_termsShifted {
        margin-top: 34px;
      }
    `,
  });
};

