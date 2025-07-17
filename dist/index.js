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

// src/components/Button/primary-button.tsx
import { Button } from "@headlessui/react";
import React2 from "react";

// src/components/Button/primary-button.module.css
var primary_button_default = {};

// src/components/Button/primary-button.tsx
var PrimaryButton = ({ children, onClick, className = "" }) => {
  return /* @__PURE__ */ React2.createElement(
    Button,
    {
      onClick,
      className: `${primary_button_default["primary-button"]} ${className}`
    },
    children
  );
};

// src/components/Accordion/primary-accordion.tsx
import React3 from "react";
import { Disclosure } from "@headlessui/react";
var PrimaryAccordion = ({ children }) => {
  return /* @__PURE__ */ React3.createElement("div", null, children);
};

// src/components/Card/primary-card.tsx
import React4 from "react";

// src/components/Card/primary-card.module.css
var primary_card_default = {};

// src/components/Card/primary-card.tsx
var PrimaryCard = ({ width, height, children }) => {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: primary_card_default["primary-card"],
      style: { width, height }
    },
    children
  );
};

// src/components/Dialog/primary-dialog.tsx
import React5 from "react";
import { Dialog } from "@headlessui/react";

// src/components/Dialog/primary-dialog.module.css
var primary_dialog_default = {};

// src/components/Dialog/primary-dialog.tsx
var PrimaryDialog = ({ isOpen, onClose, title, children }) => {
  return /* @__PURE__ */ React5.createElement(Dialog, { open: isOpen, onClose, className: primary_dialog_default["primary-dialog"] }, /* @__PURE__ */ React5.createElement("div", { className: primary_dialog_default["primary-dialog-panel"] }, /* @__PURE__ */ React5.createElement(Dialog.Title, { className: primary_dialog_default["primary-dialog-title"] }, title), children, /* @__PURE__ */ React5.createElement("button", { onClick: onClose, className: primary_dialog_default["primary-button"] }, "Close")));
};

// src/components/Dropdown/primary-dropdown.tsx
import React6, { Fragment } from "react";
import { Listbox } from "@headlessui/react";

// src/components/Dropdown/primary-dropdown.module.css
var primary_dropdown_default = {};

// src/components/Dropdown/primary-dropdown.tsx
var PrimaryDropdown = ({ options, selected, onChange }) => {
  return /* @__PURE__ */ React6.createElement(Listbox, { value: selected, onChange }, /* @__PURE__ */ React6.createElement("div", { className: "relative" }, /* @__PURE__ */ React6.createElement(Listbox.Button, { className: primary_dropdown_default["primary-dropdown"] }, selected), /* @__PURE__ */ React6.createElement(Listbox.Options, { className: "absolute z-10" }, options.map((option) => /* @__PURE__ */ React6.createElement(Listbox.Option, { key: option, value: option, as: Fragment }, ({ focus }) => /* @__PURE__ */ React6.createElement("li", { className: `cursor-pointer ${focus ? "bg-gray-200" : ""}` }, option))))));
};

// src/components/Link/primary-link.tsx
import React7 from "react";
import Link from "next/link";

// src/components/Link/primary-link.module.css
var primary_link_default = {};

// src/components/Link/primary-link.tsx
var PrimaryLink = (_a) => {
  var _b = _a, {
    children,
    className,
    onClick
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "onClick"
  ]);
  return /* @__PURE__ */ React7.createElement(Link, __spreadProps(__spreadValues({}, props), { className: `${primary_link_default["link"]} ${className != null ? className : ""}`, onClick }), children);
};

// src/components/Modal/primary-modal.tsx
import React8 from "react";
import { Dialog as Dialog2 } from "@headlessui/react";

// src/components/Modal/primary-modal.module.css
var primary_modal_default = {};

// src/components/Modal/primary-modal.tsx
var PrimaryModal = ({ isOpen, onClose, title, children }) => {
  return /* @__PURE__ */ React8.createElement(
    Dialog2,
    {
      open: isOpen,
      onClose,
      className: `fixed inset-0 z-10 overflow-y-auto ${primary_modal_default["primary-modal"]}`
    },
    /* @__PURE__ */ React8.createElement("div", { className: "modal-content" }, /* @__PURE__ */ React8.createElement(Dialog2.Title, null, title), /* @__PURE__ */ React8.createElement("div", null, children), /* @__PURE__ */ React8.createElement("button", { onClick: onClose, className: "custom-button" }, "Close"))
  );
};

// src/components/Popover/primary-popover.tsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
function PrimaryPopover({ title, children }) {
  return /* @__PURE__ */ React.createElement(Popover, { className: "relative" }, /* @__PURE__ */ React.createElement(PopoverButton, null, title), /* @__PURE__ */ React.createElement(PopoverPanel, { anchor: "bottom", className: "flex flex-col" }, children));
}

// src/components/Select/primary-select.tsx
import { Description, Field, Select } from "@headlessui/react";
import React9 from "react";
var PrimarySelect = ({ options, description, onChange }) => {
  return /* @__PURE__ */ React9.createElement(PrimaryCard, null, /* @__PURE__ */ React9.createElement(Field, null, /* @__PURE__ */ React9.createElement(Description, null, description), /* @__PURE__ */ React9.createElement(Select, { name: "status", "aria-label": "Project status", onChange }, options.map((option) => /* @__PURE__ */ React9.createElement("option", { key: option, value: option }, option)))));
};

// src/components/Tabs/primary-tabs.tsx
import React10 from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// src/components/Tabs/primary-tabs.module.css
var primary_tabs_default = {};

// src/components/Tabs/primary-tabs.tsx
var PrimaryTabs = ({ tabs, children, onClick }) => {
  return /* @__PURE__ */ React10.createElement(TabGroup, null, /* @__PURE__ */ React10.createElement(TabList, { className: primary_tabs_default["primary-tabs"] }, tabs.map((tab, index) => /* @__PURE__ */ React10.createElement(Tab, { key: index, className: primary_tabs_default["primary-tab"], onClick }, tab))), /* @__PURE__ */ React10.createElement(TabPanels, null, children.map((content, index) => /* @__PURE__ */ React10.createElement(TabPanel, { key: index, className: "tab-panel" }, content))));
};
export {
  PrimaryAccordion,
  PrimaryButton,
  PrimaryCard,
  PrimaryDialog,
  PrimaryDropdown,
  PrimaryLink,
  PrimaryModal,
  PrimaryPopover,
  PrimarySelect,
  PrimaryTabs
};
//# sourceMappingURL=index.js.map