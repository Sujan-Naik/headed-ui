var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/variants.ts
var VariantEnum = /* @__PURE__ */ ((VariantEnum2) => {
  VariantEnum2["Primary"] = "primary";
  VariantEnum2["Secondary"] = "secondary";
  VariantEnum2["Tertiary"] = "tertiary";
  VariantEnum2["Outline"] = "outline";
  return VariantEnum2;
})(VariantEnum || {});

// src/components/unit/content/Accordion/headed-accordion.tsx
import React2 from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import styles from "./headed-accordion.module-D4G5HC6N.module.css";
var AccordionItem = ({ title, children, variant }) => /* @__PURE__ */ React2.createElement(Disclosure, null, ({ open }) => /* @__PURE__ */ React2.createElement("div", { className: `${styles[`hui-${variant}-accordion`]} ${open ? styles[`open`] : ""}`, style: {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
} }, /* @__PURE__ */ React2.createElement(DisclosureButton, { className: `${styles[`hui-${variant}-accordion-title`]}` }, /* @__PURE__ */ React2.createElement("p", null, title, " ", /* @__PURE__ */ React2.createElement("a", { className: styles[`accordion-arrow`] }, " ", open ? "\u25B2" : "\u25BC", " "))), /* @__PURE__ */ React2.createElement(DisclosurePanel, { className: `${styles[`hui-${variant}-accordion-content`]}` }, children)));
var HeadedAccordion = ({ children }) => {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
};

// src/components/unit/interactive/Button/headed-button.tsx
import { Button } from "@headlessui/react";
import React3 from "react";
import styles2 from "./headed-button.module-HCCTWVQY.module.css";
var HeadedButton = ({ children, onClick, className = "", variant }) => {
  return /* @__PURE__ */ React3.createElement(
    Button,
    {
      onClick,
      className: `${styles2[`hui-${variant}-button`]} ${className}`
    },
    children
  );
};

// src/components/unit/content/Card/headed-card.tsx
import React4 from "react";
import styles3 from "./headed-card.module-7UYFQ556.module.css";
var HeadedCard = ({
  width,
  height,
  variant,
  children,
  style,
  className
}) => {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `${styles3[`hui-${variant}-card`]} ${className != null ? className : ""}`,
      style: __spreadValues({ width, height }, style)
    },
    children
  );
};

// src/components/unit/overlays/Dialog/headed-dialog.tsx
import React5 from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import styles4 from "./headed-dialog.module-CSSLP4FQ.module.css";
var HeadedDialog = ({ isOpen, onClick, title, children, variant, position }) => {
  const getPositionStyles = (pos) => {
    const baseStyles = {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // pointerEvents: 'none' as const,
      backgroundColor: "transparent"
    };
    switch (pos) {
      case "top" /* TOP */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-start",
          paddingTop: "20px",
          justifyContent: "center"
        });
      case "bottom" /* BOTTOM */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-end",
          paddingBottom: "20px",
          justifyContent: "center"
        });
      case "top-left" /* TOP_LEFT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "20px"
        });
      case "top-right" /* TOP_RIGHT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "20px"
        });
      case "bottom-left" /* BOTTOM_LEFT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "20px"
        });
      case "bottom-right" /* BOTTOM_RIGHT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: "20px"
        });
      case "center" /* CENTER */:
      default:
        return __spreadProps(__spreadValues({}, baseStyles), {
          alignItems: "center",
          justifyContent: "center"
        });
    }
  };
  const style = getPositionStyles(position);
  return /* @__PURE__ */ React5.createElement(
    Dialog,
    {
      open: isOpen,
      onClose: onClick,
      className: `fixed inset-0 z-10 overflow-y-auto ${styles4[`hui-${variant}-dialog`]}`,
      style
    },
    /* @__PURE__ */ React5.createElement(DialogPanel, null, /* @__PURE__ */ React5.createElement(HeadedCard, { variant }, /* @__PURE__ */ React5.createElement(Dialog.Title, null, title), /* @__PURE__ */ React5.createElement("div", null, children), /* @__PURE__ */ React5.createElement(HeadedButton, { variant, onClick }, "Close")))
  );
};

// src/components/unit/overlays/Dropdown/headed-dropdown.tsx
import React6 from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import styles5 from "./headed-dropdown.module-W6ARFRBT.module.css";
var HeadedDropdown = ({ options, horizontal, selected, onChange, variant }) => {
  return /* @__PURE__ */ React6.createElement(Listbox, { horizontal, value: selected, onChange }, /* @__PURE__ */ React6.createElement("div", { className: "relative" }, /* @__PURE__ */ React6.createElement(ListboxButton, { className: styles5[`hui-${variant}-dropdown-button`] }, selected), /* @__PURE__ */ React6.createElement(ListboxOptions, { className: "absolute z-10", style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  } }, options.map((option) => /* @__PURE__ */ React6.createElement(
    ListboxOption,
    {
      key: option.value,
      value: option.value,
      className: styles5[`hui-${variant}-dropdown-option`]
    },
    option.label
  )))));
};

// src/components/unit/navigation/Link/headed-link.tsx
import React7 from "react";
import Link from "next/link";
import styles6 from "./headed-link.module-US5OGH4P.module.css";
var HeadedLink = (_a) => {
  var _b = _a, {
    children,
    className,
    onClick,
    variant
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "onClick",
    "variant"
  ]);
  return /* @__PURE__ */ React7.createElement(Link, __spreadProps(__spreadValues({}, props), { className: `${styles6[`hui-${variant}-link`]} ${className != null ? className : ""}`, onClick }), children);
};

// src/components/unit/overlays/Modal/headed-modal.tsx
import React8 from "react";
import { Dialog as Dialog2 } from "@headlessui/react";
import styles7 from "./headed-modal.module-IAQREMUA.module.css";
var HeadedModal = ({ isOpen, onClose, title, children, variant }) => {
  return /* @__PURE__ */ React8.createElement(Dialog2, { open: isOpen, onClose, className: styles7[`hui-${variant}-modal`] }, /* @__PURE__ */ React8.createElement("div", { className: styles7[`hui-${variant}-modal-panel`] }, /* @__PURE__ */ React8.createElement(Dialog2.Title, { className: styles7[`hui-${variant}-modal-title`] }, title), children, /* @__PURE__ */ React8.createElement(HeadedButton, { variant, onClick: onClose }, "Close")));
};

// src/components/unit/overlays/Popover/headed-popover.tsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import styles8 from "./headed-popover.module-PW2BTQBJ.module.css";
function HeadedPopover({ title, children, variant }) {
  return /* @__PURE__ */ React.createElement(Popover, { className: "relative" }, /* @__PURE__ */ React.createElement(PopoverButton, { className: `${styles8[`hui-${variant}-popover-button`]}` }, title), /* @__PURE__ */ React.createElement(PopoverPanel, { anchor: "bottom", className: `${styles8[`hui-${variant}-popover-panel`]} flex flex-col` }, children));
}

// src/components/unit/content/Select/headed-select.tsx
import { Description, Field, Label, Select } from "@headlessui/react";
import React9 from "react";
import styles9 from "./headed-select.module-AOTXMAQC.module.css";
var HeadedSelect = ({ options, label, description, onChange, variant }) => {
  return /* @__PURE__ */ React9.createElement(HeadedCard, { variant }, /* @__PURE__ */ React9.createElement(Field, null, /* @__PURE__ */ React9.createElement(Label, null, label), /* @__PURE__ */ React9.createElement(Description, { className: `${styles9[`hui-${variant}-description`]}` }, description), /* @__PURE__ */ React9.createElement(Select, { name: "status", "aria-label": "Project status", onChange }, options.map((option) => /* @__PURE__ */ React9.createElement("option", { className: `${styles9[`hui-${variant}-select`]}`, key: option, value: option }, option)))));
};

// src/components/unit/interactive/Switch/headed-switch.tsx
import { Switch } from "@headlessui/react";
import React10 from "react";
import styles10 from "./headed-switch.module-RHD66WUN.module.css";
var HeadedSwitch = ({
  checked,
  onChange,
  className = "",
  variant,
  label
}) => {
  return /* @__PURE__ */ React10.createElement("div", { className: `flex items-center ${className}` }, label && /* @__PURE__ */ React10.createElement("span", { className: styles10[`hui-${variant}-switch-label`] }, label), /* @__PURE__ */ React10.createElement(
    Switch,
    {
      checked,
      onChange,
      className: ` ${styles10[`hui-${variant}-switch`]}`
    }
  ));
};

// src/components/unit/content/Tabs/headed-tabs.tsx
import React11 from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles11 from "./headed-tabs.module-Q2DDZXN6.module.css";
var HeadedTabs = ({ tabs, children, onClick, variant = "primary" /* Primary */ }) => {
  return /* @__PURE__ */ React11.createElement(TabGroup, null, /* @__PURE__ */ React11.createElement(TabList, { className: styles11[`hui-${variant}-tabs`] }, tabs.map((tab, index) => /* @__PURE__ */ React11.createElement(Tab, { key: index, className: styles11[`hui-${variant}-tab`], onClick }, tab))), /* @__PURE__ */ React11.createElement(TabPanels, null, children.map((content, index) => /* @__PURE__ */ React11.createElement(TabPanel, { key: index, className: styles11[`hui-${variant}-panel`] }, content))));
};

// src/components/unit/overlays/Toast/headed-toast.tsx
import React12 from "react";
import styles12 from "./headed-toast.module-NCOECBPH.module.css";
var HeadedToast = ({
  isOpen,
  onClick,
  title,
  children,
  variant,
  position
}) => {
  const getPositionStyles = (pos) => {
    const baseStyles = {
      // backgroundColor: 'transparent',
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    switch (pos) {
      case "top" /* TOP */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)"
        });
      case "bottom" /* BOTTOM */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)"
        });
      case "top-left" /* TOP_LEFT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          top: "20px",
          left: "20px",
          transform: void 0
        });
      case "top-right" /* TOP_RIGHT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          top: "20px",
          right: "20px",
          transform: void 0
        });
      case "bottom-left" /* BOTTOM_LEFT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          bottom: "20px",
          left: "20px",
          transform: void 0
        });
      case "bottom-right" /* BOTTOM_RIGHT */:
        return __spreadProps(__spreadValues({}, baseStyles), {
          bottom: "20px",
          right: "20px",
          transform: void 0
        });
      case "center" /* CENTER */:
      default:
        return __spreadProps(__spreadValues({}, baseStyles), {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        });
    }
  };
  const style = getPositionStyles(position);
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ React12.createElement(
    "div",
    {
      className: ` z-10 overflow-y-auto ${styles12[`hui-${variant}-toast`]}`,
      style
    },
    /* @__PURE__ */ React12.createElement(HeadedCard, { variant }, /* @__PURE__ */ React12.createElement("h2", null, title), /* @__PURE__ */ React12.createElement("div", null, children), /* @__PURE__ */ React12.createElement(HeadedButton, { variant, onClick }, "Close"))
  );
};
export {
  AccordionItem,
  HeadedAccordion,
  HeadedButton,
  HeadedCard,
  HeadedDialog,
  HeadedDropdown,
  HeadedLink,
  HeadedModal,
  HeadedPopover,
  HeadedSelect,
  HeadedSwitch,
  HeadedTabs,
  HeadedToast,
  VariantEnum
};
//# sourceMappingURL=index.js.map