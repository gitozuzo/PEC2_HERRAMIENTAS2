module.exports = {
  extends: ["stylelint-config-recommended-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "scss/at-rule-no-unknown": true,
    "at-rule-no-unknown": null,
    "selector-class-pattern": [
      "^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
      {
        message:
          "El selector debe seguir la convención BEM (block__element--modifier)",
      },
    ],

    "max-nesting-depth": 6,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "unit-allowed-list": [
      "em",
      "rem",
      "%",
      "s",
      "vh",
      "vw",
      "px",
      "fr",
      "svh",
      "lvh",
      "cqi",
      "dvh",
    ],
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],

    "no-descending-specificity": null,
    "scss/at-if-no-null": null,
  },
};
