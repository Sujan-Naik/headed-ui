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
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import styles from "./headed-accordion.module-INQTZ4TC.module.css";
var AccordionItem = ({ title, children, variant }) => /* @__PURE__ */ React.createElement(Disclosure, null, ({ open }) => /* @__PURE__ */ React.createElement("div", { className: `${styles[`hui-${variant}-accordion`]} ${open ? styles[`open`] : ""}`, style: {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100"
} }, /* @__PURE__ */ React.createElement(DisclosureButton, { className: `${styles[`hui-${variant}-accordion-title`]}` }, /* @__PURE__ */ React.createElement("p", null, title, " ", /* @__PURE__ */ React.createElement("a", { className: styles[`accordion-arrow`] }, " ", open ? "\u25B2" : "\u25BC", " "))), /* @__PURE__ */ React.createElement(DisclosurePanel, { className: `${styles[`hui-${variant}-accordion-content`]}` }, children)));
var HeadedAccordion = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};

// src/components/unit/interactive/Button/headed-button.tsx
import { Button } from "@headlessui/react";
import React2 from "react";
import styles2 from "./headed-button.module-HCCTWVQY.module.css";
var HeadedButton = ({
  children,
  onClick,
  className = "",
  variant,
  type = "button",
  disabled,
  form,
  name,
  value,
  autoFocus,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  id
}) => {
  return /* @__PURE__ */ React2.createElement(
    Button,
    {
      onClick,
      className: `${styles2[`hui-${variant}-button`]} ${className}`,
      type,
      disabled,
      form,
      name,
      value,
      autoFocus,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      id
    },
    children
  );
};

// src/components/unit/content/Card/headed-card.tsx
import React3 from "react";
import styles3 from "./headed-card.module-7UYFQ556.module.css";
var HeadedCard = ({
  width,
  height,
  variant,
  children,
  style,
  className
}) => {
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: `${styles3[`hui-${variant}-card`]} ${className != null ? className : ""}`,
      style: __spreadValues({ width, height }, style)
    },
    children
  );
};

// src/components/unit/overlays/Dialog/headed-dialog.tsx
import React4 from "react";
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
  return /* @__PURE__ */ React4.createElement(
    Dialog,
    {
      open: isOpen,
      onClose: onClick,
      className: `fixed inset-0 z-10 overflow-y-auto ${styles4[`hui-${variant}-dialog`]}`,
      style
    },
    /* @__PURE__ */ React4.createElement(DialogPanel, null, /* @__PURE__ */ React4.createElement(HeadedCard, { variant }, /* @__PURE__ */ React4.createElement(Dialog.Title, null, title), /* @__PURE__ */ React4.createElement("div", null, children), /* @__PURE__ */ React4.createElement(HeadedButton, { variant, onClick }, "Close")))
  );
};

// src/components/unit/overlays/Dropdown/headed-dropdown.tsx
import React5 from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import styles5 from "./headed-dropdown.module-W6ARFRBT.module.css";
var HeadedDropdown = ({ options, horizontal, selected, onChange, variant }) => {
  return /* @__PURE__ */ React5.createElement(Listbox, { horizontal, value: selected, onChange }, /* @__PURE__ */ React5.createElement("div", { className: "relative" }, /* @__PURE__ */ React5.createElement(ListboxButton, { className: styles5[`hui-${variant}-dropdown-button`] }, selected), /* @__PURE__ */ React5.createElement(ListboxOptions, { className: "absolute z-10", style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  } }, options.map((option) => /* @__PURE__ */ React5.createElement(
    ListboxOption,
    {
      key: option.value,
      value: option.value,
      className: styles5[`hui-${variant}-dropdown-option`]
    },
    option.label
  )))));
};

// src/components/unit/interactive/Input/headed-input.tsx
import React6 from "react";
import styles6 from "./headed-input.module-NX5NXN6J.module.css";
var HeadedInput = (_a) => {
  var _b = _a, {
    onChange,
    className = "",
    variant
  } = _b, props = __objRest(_b, [
    "onChange",
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ React6.createElement(
    "input",
    __spreadProps(__spreadValues({}, props), {
      onChange,
      className: `${styles6[`hui-${variant}-input`]} ${className}`
    })
  );
};

// src/components/unit/interactive/TextArea/headed-text-area.tsx
import React7 from "react";
import MDEditor from "@uiw/react-md-editor";
import styles7 from "./headed-text-area.module-IBSY2BL6.module.css";
var HeadedTextArea = ({
  value,
  onChange,
  placeholder,
  className = "",
  variant,
  disabled,
  rows = 4,
  cols,
  maxLength,
  required,
  readOnly,
  autoFocus,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  id,
  name,
  width,
  height,
  markdown = false
}) => {
  if (markdown) {
    const handleMDChange = (val) => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: val || "" }
        };
        onChange(syntheticEvent);
      }
    };
    return /* @__PURE__ */ React7.createElement(
      MDEditor,
      {
        value,
        onChange: handleMDChange,
        "data-color-mode": "dark",
        className,
        height,
        style: { width }
      }
    );
  }
  return /* @__PURE__ */ React7.createElement(
    "textarea",
    {
      value,
      onChange,
      placeholder,
      className: `${styles7[`hui-${variant}-textarea`]} ${className}`,
      disabled,
      rows,
      cols,
      maxLength,
      required,
      readOnly,
      autoFocus,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      id,
      name,
      style: { width, height }
    }
  );
};

// src/components/unit/navigation/Link/headed-link.tsx
import React8 from "react";
import Link from "next/link";
import styles8 from "./headed-link.module-US5OGH4P.module.css";
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
  return /* @__PURE__ */ React8.createElement(Link, __spreadProps(__spreadValues({}, props), { className: `${styles8[`hui-${variant}-link`]} ${className != null ? className : ""}`, onClick }), children);
};

// src/components/unit/overlays/Modal/headed-modal.tsx
import React9 from "react";
import { Dialog as Dialog2 } from "@headlessui/react";
import styles9 from "./headed-modal.module-IAQREMUA.module.css";
var HeadedModal = ({ isOpen, onClose, title, children, variant }) => {
  return /* @__PURE__ */ React9.createElement(Dialog2, { open: isOpen, onClose, className: styles9[`hui-${variant}-modal`] }, /* @__PURE__ */ React9.createElement("div", { className: styles9[`hui-${variant}-modal-panel`] }, /* @__PURE__ */ React9.createElement(Dialog2.Title, { className: styles9[`hui-${variant}-modal-title`] }, title), children, /* @__PURE__ */ React9.createElement(HeadedButton, { variant, onClick: onClose }, "Close")));
};

// src/components/unit/overlays/Popover/headed-popover.tsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import styles10 from "./headed-popover.module-PW2BTQBJ.module.css";
import React10 from "react";
function HeadedPopover({ title, children, variant }) {
  return /* @__PURE__ */ React10.createElement(Popover, { className: "relative" }, /* @__PURE__ */ React10.createElement(PopoverButton, { className: `${styles10[`hui-${variant}-popover-button`]}` }, title), /* @__PURE__ */ React10.createElement(PopoverPanel, { anchor: "bottom", className: `${styles10[`hui-${variant}-popover-panel`]} flex flex-col` }, children));
}

// src/components/unit/content/Select/headed-select.tsx
import { Description, Field, Label, Select } from "@headlessui/react";
import React11 from "react";
import styles11 from "./headed-select.module-AOTXMAQC.module.css";
var HeadedSelect = ({
  options,
  label,
  description,
  value,
  onChange,
  variant,
  name,
  required = false,
  disabled = false,
  placeholder = "Select an option"
}) => {
  return /* @__PURE__ */ React11.createElement(HeadedCard, { variant }, /* @__PURE__ */ React11.createElement(Field, null, /* @__PURE__ */ React11.createElement(Label, null, label, required && " *"), description && /* @__PURE__ */ React11.createElement(Description, { className: styles11[`hui-${variant}-description`] }, description), /* @__PURE__ */ React11.createElement(
    Select,
    {
      name,
      value,
      onChange,
      required,
      disabled,
      className: styles11[`hui-${variant}-select`]
    },
    /* @__PURE__ */ React11.createElement("option", { value: "", disabled: true }, placeholder),
    options.map((opt) => {
      const option = typeof opt === "string" ? { value: opt, label: opt } : opt;
      return /* @__PURE__ */ React11.createElement("option", { key: option.value, value: option.value }, option.label);
    })
  )));
};

// src/components/unit/interactive/Switch/headed-switch.tsx
import { Switch } from "@headlessui/react";
import React12 from "react";
import styles12 from "./headed-switch.module-RHD66WUN.module.css";
var HeadedSwitch = ({
  checked,
  onChange,
  className = "",
  variant,
  label
}) => {
  return /* @__PURE__ */ React12.createElement("div", { className: `flex items-center ${className}` }, label && /* @__PURE__ */ React12.createElement("span", { className: styles12[`hui-${variant}-switch-label`] }, label), /* @__PURE__ */ React12.createElement(
    Switch,
    {
      checked,
      onChange,
      className: ` ${styles12[`hui-${variant}-switch`]}`
    }
  ));
};

// src/components/unit/content/Tabs/headed-tabs.tsx
import React13 from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles13 from "./headed-tabs.module-Q2DDZXN6.module.css";
var HeadedTabs = ({ tabs, children, onClick, variant = "primary" /* Primary */ }) => {
  return /* @__PURE__ */ React13.createElement(TabGroup, null, /* @__PURE__ */ React13.createElement(TabList, { className: styles13[`hui-${variant}-tabs`] }, tabs.map((tab, index) => /* @__PURE__ */ React13.createElement(Tab, { key: index, className: styles13[`hui-${variant}-tab`], onClick }, tab))), /* @__PURE__ */ React13.createElement(TabPanels, null, children.map((content, index) => /* @__PURE__ */ React13.createElement(TabPanel, { key: index, className: styles13[`hui-${variant}-panel`] }, content))));
};

// src/components/unit/content/TextAnim/headed-text-anim.tsx
import { useState, useEffect } from "react";
import React14 from "react";
import styles14 from "./headed-text-anim.module-JLVDERQ5.module.css";
var TextAnimationType = /* @__PURE__ */ ((TextAnimationType2) => {
  TextAnimationType2["TYPEWRITER"] = "typewriter";
  TextAnimationType2["FADE_IN"] = "fade-in";
  TextAnimationType2["SLIDE_UP"] = "slide-up";
  TextAnimationType2["COLOR_CYCLE"] = "color-cycle";
  return TextAnimationType2;
})(TextAnimationType || {});
var HeadedTextAnim = ({
  children,
  animation,
  className = "",
  speed = 500,
  delay = 2e3,
  colors = ["#ff0000", "#00ff00", "#0000ff"],
  tag: Tag = "h1",
  onComplete
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = typeof children === "string" ? children : "";
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      switch (animation) {
        case "typewriter" /* TYPEWRITER */:
          let index = 0;
          const typeTimer = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
              clearInterval(typeTimer);
              onComplete == null ? void 0 : onComplete();
            }
          }, speed);
          return () => clearInterval(typeTimer);
        case "fade-in" /* FADE_IN */:
          setDisplayText(fullText);
          setIsVisible(true);
          setTimeout(() => onComplete == null ? void 0 : onComplete(), speed);
          break;
        case "slide-up" /* SLIDE_UP */:
          setDisplayText(fullText);
          setIsVisible(true);
          setTimeout(() => onComplete == null ? void 0 : onComplete(), speed);
          break;
        case "color-cycle" /* COLOR_CYCLE */:
          setDisplayText(fullText);
          const colorTimer = setInterval(() => {
            setCurrentColorIndex((prev) => (prev + 1) % colors.length);
          }, speed);
          return () => clearInterval(colorTimer);
        default:
          setDisplayText(fullText);
      }
    }, delay);
    return () => clearTimeout(delayTimer);
  }, [fullText, animation, speed, delay, colors, onComplete]);
  const getAnimationStyle = () => {
    switch (animation) {
      case "color-cycle" /* COLOR_CYCLE */:
        return { color: colors[currentColorIndex] };
      default:
        return {};
    }
  };
  return /* @__PURE__ */ React14.createElement(
    Tag,
    {
      className: `${styles14[`text-anim-${animation}`]} ${isVisible ? styles14.visible : ""} ${className}`,
      style: getAnimationStyle()
    },
    displayText
  );
};

// src/components/unit/overlays/Toast/headed-toast.tsx
import React15 from "react";
import styles15 from "./headed-toast.module-NCOECBPH.module.css";
var PositionEnum = /* @__PURE__ */ ((PositionEnum2) => {
  PositionEnum2["CENTER"] = "center";
  PositionEnum2["TOP"] = "top";
  PositionEnum2["BOTTOM"] = "bottom";
  PositionEnum2["TOP_LEFT"] = "top-left";
  PositionEnum2["TOP_RIGHT"] = "top-right";
  PositionEnum2["BOTTOM_LEFT"] = "bottom-left";
  PositionEnum2["BOTTOM_RIGHT"] = "bottom-right";
  return PositionEnum2;
})(PositionEnum || {});
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
  return /* @__PURE__ */ React15.createElement(
    "div",
    {
      className: ` z-10 overflow-y-auto ${styles15[`hui-${variant}-toast`]}`,
      style
    },
    /* @__PURE__ */ React15.createElement(HeadedCard, { variant }, /* @__PURE__ */ React15.createElement("h2", null, title), /* @__PURE__ */ React15.createElement("div", null, children), /* @__PURE__ */ React15.createElement(HeadedButton, { variant, onClick }, "Close"))
  );
};

// src/components/nested/content/Carousel/headed-carousel.tsx
import React16, { useState as useState2 } from "react";
var HeadedCarousel = ({ children, variant }) => {
  const childrenArray = React16.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState2(0);
  const goBack = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };
  const goForward = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  return /* @__PURE__ */ React16.createElement("div", { className: "flex-col" }, /* @__PURE__ */ React16.createElement(HeadedCard, { variant }, childrenArray[currentIndex]), /* @__PURE__ */ React16.createElement("div", { className: "flex-row", style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React16.createElement(HeadedButton, { variant, onClick: goBack }, " Go Back"), /* @__PURE__ */ React16.createElement(HeadedButton, { variant, onClick: goForward }, " Go Forward")));
};

// src/components/nested/date/Calendar/headed-calendar.tsx
import React18, { useState as useState3 } from "react";

// src/components/nested/date/Calendar/headed-calendar-month.tsx
import React17 from "react";
var getMonthDays = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();
  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push({ day: null, date: null });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      date: new Date(year, month, day)
    });
  }
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({ day: null, date: null });
  }
  return calendarDays;
};
var HeadedCalendarMonth = ({ variant, year, month, events }) => {
  const days = React17.useMemo(() => getMonthDays(year, month), [year, month]);
  const eventsMap = React17.useMemo(() => {
    const map = {};
    events.forEach((event) => {
      const dateStr = event.date.toDateString();
      if (!map[dateStr]) {
        map[dateStr] = [];
      }
      map[dateStr].push(event);
    });
    return map;
  }, [events]);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return /* @__PURE__ */ React17.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px" } }, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => /* @__PURE__ */ React17.createElement("div", { key: dayName, style: { fontWeight: "bold", textAlign: "center" } }, dayName)), days.map((dayObj, index) => {
    if (dayObj.day === null || !dayObj.date) {
      return /* @__PURE__ */ React17.createElement("div", { key: index });
    }
    const dateStr = dayObj.date.toDateString();
    const dayEvents = eventsMap[dateStr] || [];
    return /* @__PURE__ */ React17.createElement("div", { key: index, style: { border: "1px solid #ccc", padding: "4px" } }, /* @__PURE__ */ React17.createElement("div", { style: { fontWeight: "bold" } }, dayObj.day), dayEvents.map((event, idx) => {
      const startStr = event.date.toLocaleDateString(void 0, options);
      const endStr = event.endDate ? event.endDate.toLocaleDateString(void 0, options) : null;
      const dateRange = endStr ? `${startStr} - ${endStr}` : startStr;
      return /* @__PURE__ */ React17.createElement(HeadedCard, { key: idx, variant }, /* @__PURE__ */ React17.createElement("h2", { style: { fontSize: "0.9em", margin: 0 } }, event.name), /* @__PURE__ */ React17.createElement("p", { style: { fontSize: "0.8em", margin: 0 } }, event.description), /* @__PURE__ */ React17.createElement("p", { style: { fontSize: "0.7em", margin: 0 } }, dateRange));
    }));
  }));
};

// src/components/nested/date/Calendar/headed-calendar.tsx
var HeadedCalendar = ({
  variant,
  initialYear,
  initialMonth,
  events
}) => {
  const today = /* @__PURE__ */ new Date();
  const [year, setYear] = useState3(initialYear != null ? initialYear : today.getFullYear());
  const [month, setMonth] = useState3(initialMonth != null ? initialMonth : today.getMonth());
  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const handlePrevYear = () => {
    setYear((prev) => prev - 1);
  };
  const handleNextYear = () => {
    setYear((prev) => prev + 1);
  };
  return /* @__PURE__ */ React18.createElement("div", null, /* @__PURE__ */ React18.createElement("div", { style: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" } }, /* @__PURE__ */ React18.createElement(HeadedButton, { variant, onClick: handlePrevYear }, "Previous Year"), /* @__PURE__ */ React18.createElement(HeadedButton, { variant, onClick: handlePrevMonth }, "Previous Month"), /* @__PURE__ */ React18.createElement("div", { style: { fontWeight: "bold" } }, new Date(year, month).toLocaleString(void 0, { month: "long", year: "numeric" })), /* @__PURE__ */ React18.createElement(HeadedButton, { variant, onClick: handleNextMonth }, "Next Month"), /* @__PURE__ */ React18.createElement(HeadedButton, { variant, onClick: handleNextYear }, "Next Year")), /* @__PURE__ */ React18.createElement(HeadedCalendarMonth, { variant, year, month, events }));
};

// src/components/nested/date/DatePicker/headed-date-picker.tsx
import React19, { useState as useState4 } from "react";
var HeadedDatePicker = ({ variant }) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: new Date(0, i).toLocaleString("default", { month: "long" })
  }));
  const hours = Array.from({ length: 24 }, (_, i) => ({
    value: i.toString(),
    label: i.toString().padStart(2, "0")
  }));
  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i.toString(),
    label: i.toString().padStart(2, "0")
  }));
  const [selectedYear, setSelectedYear] = useState4(years[0].toString());
  const [selectedMonth, setSelectedMonth] = useState4(months[0].value.toString());
  const selectedOption = months.find((m) => m.value === Number(selectedMonth));
  const selectedLabel = selectedOption ? selectedOption.label : "";
  const [selectedDay, setSelectedDay] = useState4("1");
  const [selectedHour, setSelectedHour] = useState4("0");
  const [selectedMinute, setSelectedMinute] = useState4("0");
  const getDaysInMonth = (year, month) => {
    return new Date(parseInt(year), parseInt(month), 0).getDate();
  };
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString()
  }));
  const handleSubmit = () => {
    const date = new Date(
      parseInt(selectedYear),
      parseInt(selectedMonth) - 1,
      parseInt(selectedDay),
      parseInt(selectedHour),
      parseInt(selectedMinute)
    );
    alert(`Selected Date and Time: ${date.toString()}`);
  };
  return /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("label", { htmlFor: "year" }, "Year:"), /* @__PURE__ */ React19.createElement(
    HeadedDropdown,
    {
      options: years.map((yr) => ({ label: yr.toString(), value: yr.toString() })),
      selected: selectedYear,
      onChange: (value) => setSelectedYear(value),
      variant
    }
  )), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("label", { htmlFor: "month" }, "Month:"), /* @__PURE__ */ React19.createElement(
    HeadedDropdown,
    {
      options: months.map((m) => ({ label: m.label, value: m.value.toString() })),
      selected: selectedLabel,
      onChange: (value) => setSelectedMonth(value),
      variant
    }
  )), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("label", { htmlFor: "day" }, "Day:"), /* @__PURE__ */ React19.createElement(
    HeadedDropdown,
    {
      options: days,
      selected: selectedDay,
      onChange: (value) => setSelectedDay(value),
      variant
    }
  )), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("label", { htmlFor: "hour" }, "Hour:"), /* @__PURE__ */ React19.createElement(
    HeadedDropdown,
    {
      options: hours,
      selected: selectedHour,
      onChange: (value) => setSelectedHour(value),
      variant
    }
  )), /* @__PURE__ */ React19.createElement("div", null, /* @__PURE__ */ React19.createElement("label", { htmlFor: "minute" }, "Minute:"), /* @__PURE__ */ React19.createElement(
    HeadedDropdown,
    {
      options: minutes,
      selected: selectedMinute,
      onChange: (value) => setSelectedMinute(value),
      variant
    }
  )), /* @__PURE__ */ React19.createElement(HeadedButton, { variant, onClick: handleSubmit }, "Submit"));
};

// src/components/nested/content/Grid/headed-grid.tsx
import React20 from "react";
var HeadedGrid = ({
  children,
  variant,
  height,
  width,
  fillDirection = "rows"
}) => {
  const childCount = React20.Children.count(children);
  const isAutoHeight = height === "auto";
  let columns, rows;
  if (isAutoHeight) {
    if (fillDirection === "rows") {
      columns = Math.ceil(Math.sqrt(childCount));
      rows = Math.ceil(childCount / columns);
    } else {
      rows = Math.ceil(Math.sqrt(childCount));
      columns = Math.ceil(childCount / rows);
    }
  } else {
    const aspectRatio = typeof width === "number" && typeof height === "number" ? width / height : 1;
    if (fillDirection === "rows") {
      columns = Math.ceil(Math.sqrt(childCount * aspectRatio));
      rows = Math.ceil(childCount / columns);
    } else {
      rows = Math.ceil(Math.sqrt(childCount / aspectRatio));
      columns = Math.ceil(childCount / rows);
    }
  }
  return /* @__PURE__ */ React20.createElement(HeadedCard, { variant, width: String(width), height: String(height), style: { justifyContent: "center" } }, /* @__PURE__ */ React20.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: isAutoHeight ? "auto" : `repeat(${rows}, minmax(0, 1fr))`,
        placeItems: "center",
        gridAutoFlow: fillDirection === "rows" ? "row" : "column",
        gap: "10px",
        boxSizing: "border-box"
      }
    },
    children
  ));
};

// src/components/nested/milestones/Progress/headed-progress.tsx
import React21 from "react";
import styles16 from "./headed-progress.module-6PIITCGR.module.css";
var HeadedProgress = ({
  progress,
  className = "",
  style = {},
  variant
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: `${styles16[`hui-${variant}-progress-container`]} ${className}`,
      style
    },
    /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `${styles16[`hui-${variant}-progress-fill`]}`,
        style: { width: `${clampedProgress}%` }
      },
      /* @__PURE__ */ React21.createElement(
        "div",
        {
          className: `${styles16[`hui-head`]}`
        }
      )
    )
  );
};

// src/components/nested/milestones/Stepper/headed-stepper.tsx
import React22 from "react";
var HeadedStepper = ({
  steps,
  currentStepsCompleted,
  variant
}) => {
  const clampedStepper = Math.min(100, Math.max(0, currentStepsCompleted / (steps.length - 1) * 100));
  return /* @__PURE__ */ React22.createElement("div", null, /* @__PURE__ */ React22.createElement(HeadedProgress, { progress: clampedStepper, variant }), /* @__PURE__ */ React22.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    marginTop: "20px"
  } }, steps.map((value, index) => /* @__PURE__ */ React22.createElement("div", { key: index, style: { flex: 1, display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React22.createElement(HeadedCard, { variant }, value)))));
};

// src/components/nested/date/Timeline/headed-timeline.tsx
import React24 from "react";

// src/components/nested/date/event.tsx
import React23 from "react";
var HeadedEvent = ({ variant, name, description, date, endDate }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  let startStr = date.toLocaleDateString(void 0, options);
  if (endDate) {
    const endStr = endDate.toLocaleDateString(void 0, options);
    startStr = `${startStr} - ${endStr}`;
  }
  return /* @__PURE__ */ React23.createElement(HeadedCard, { variant }, /* @__PURE__ */ React23.createElement("h1", null, " ", name), /* @__PURE__ */ React23.createElement("p", null, " ", description), /* @__PURE__ */ React23.createElement("p", null, " ", startStr, " "));
};

// src/components/nested/date/Timeline/headed-timeline.tsx
var HeadedTimeline = ({ variant, events }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  return /* @__PURE__ */ React24.createElement(React24.Fragment, null, sortedEvents.map((event, index) => /* @__PURE__ */ React24.createElement(HeadedEvent, __spreadProps(__spreadValues({ key: index }, event), { variant }))));
};
export {
  AccordionItem,
  HeadedAccordion,
  HeadedButton,
  HeadedCalendar,
  HeadedCard,
  HeadedCarousel,
  HeadedDatePicker,
  HeadedDialog,
  HeadedDropdown,
  HeadedGrid,
  HeadedInput,
  HeadedLink,
  HeadedModal,
  HeadedPopover,
  HeadedProgress,
  HeadedSelect,
  HeadedStepper,
  HeadedSwitch,
  HeadedTabs,
  HeadedTextAnim,
  HeadedTextArea,
  HeadedTimeline,
  HeadedToast,
  PositionEnum,
  TextAnimationType,
  VariantEnum
};
//# sourceMappingURL=index.js.map