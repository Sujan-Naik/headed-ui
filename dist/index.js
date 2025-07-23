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
import styles from "./headed-accordion.module-D4G5HC6N.module.css";
var AccordionItem = ({ title, children, variant }) => /* @__PURE__ */ React.createElement(Disclosure, null, ({ open }) => /* @__PURE__ */ React.createElement("div", { className: `${styles[`hui-${variant}-accordion`]} ${open ? styles[`open`] : ""}`, style: {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
} }, /* @__PURE__ */ React.createElement(DisclosureButton, { className: `${styles[`hui-${variant}-accordion-title`]}` }, /* @__PURE__ */ React.createElement("p", null, title, " ", /* @__PURE__ */ React.createElement("a", { className: styles[`accordion-arrow`] }, " ", open ? "\u25B2" : "\u25BC", " "))), /* @__PURE__ */ React.createElement(DisclosurePanel, { className: `${styles[`hui-${variant}-accordion-content`]}` }, children)));
var HeadedAccordion = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};

// src/components/unit/interactive/Button/headed-button.tsx
import { Button } from "@headlessui/react";
import React2 from "react";
import styles2 from "./headed-button.module-HCCTWVQY.module.css";
var HeadedButton = ({ children, onClick, className = "", variant }) => {
  return /* @__PURE__ */ React2.createElement(
    Button,
    {
      onClick,
      className: `${styles2[`hui-${variant}-button`]} ${className}`
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

// src/components/unit/navigation/Link/headed-link.tsx
import React6 from "react";
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
  return /* @__PURE__ */ React6.createElement(Link, __spreadProps(__spreadValues({}, props), { className: `${styles6[`hui-${variant}-link`]} ${className != null ? className : ""}`, onClick }), children);
};

// src/components/unit/overlays/Modal/headed-modal.tsx
import React7 from "react";
import { Dialog as Dialog2 } from "@headlessui/react";
import styles7 from "./headed-modal.module-IAQREMUA.module.css";
var HeadedModal = ({ isOpen, onClose, title, children, variant }) => {
  return /* @__PURE__ */ React7.createElement(Dialog2, { open: isOpen, onClose, className: styles7[`hui-${variant}-modal`] }, /* @__PURE__ */ React7.createElement("div", { className: styles7[`hui-${variant}-modal-panel`] }, /* @__PURE__ */ React7.createElement(Dialog2.Title, { className: styles7[`hui-${variant}-modal-title`] }, title), children, /* @__PURE__ */ React7.createElement(HeadedButton, { variant, onClick: onClose }, "Close")));
};

// src/components/unit/overlays/Popover/headed-popover.tsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import styles8 from "./headed-popover.module-PW2BTQBJ.module.css";
import React8 from "react";
function HeadedPopover({ title, children, variant }) {
  return /* @__PURE__ */ React8.createElement(Popover, { className: "relative" }, /* @__PURE__ */ React8.createElement(PopoverButton, { className: `${styles8[`hui-${variant}-popover-button`]}` }, title), /* @__PURE__ */ React8.createElement(PopoverPanel, { anchor: "bottom", className: `${styles8[`hui-${variant}-popover-panel`]} flex flex-col` }, children));
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
  return /* @__PURE__ */ React12.createElement(
    "div",
    {
      className: ` z-10 overflow-y-auto ${styles12[`hui-${variant}-toast`]}`,
      style
    },
    /* @__PURE__ */ React12.createElement(HeadedCard, { variant }, /* @__PURE__ */ React12.createElement("h2", null, title), /* @__PURE__ */ React12.createElement("div", null, children), /* @__PURE__ */ React12.createElement(HeadedButton, { variant, onClick }, "Close"))
  );
};

// src/components/nested/content/Carousel/headed-carousel.tsx
import React13, { useState } from "react";
var HeadedCarousel = ({ children, variant }) => {
  const childrenArray = React13.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  return /* @__PURE__ */ React13.createElement("div", { className: "flex-col" }, /* @__PURE__ */ React13.createElement(HeadedCard, { variant }, childrenArray[currentIndex]), /* @__PURE__ */ React13.createElement("div", { className: "flex-row", style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React13.createElement(HeadedButton, { variant, onClick: goBack }, " Go Back"), /* @__PURE__ */ React13.createElement(HeadedButton, { variant, onClick: goForward }, " Go Forward")));
};

// src/components/nested/date/Calendar/headed-calendar.tsx
import React15, { useState as useState2 } from "react";

// src/components/nested/date/Calendar/headed-calendar-month.tsx
import React14 from "react";
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
  const days = React14.useMemo(() => getMonthDays(year, month), [year, month]);
  const eventsMap = React14.useMemo(() => {
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
  return /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px" } }, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => /* @__PURE__ */ React14.createElement("div", { key: dayName, style: { fontWeight: "bold", textAlign: "center" } }, dayName)), days.map((dayObj, index) => {
    if (dayObj.day === null || !dayObj.date) {
      return /* @__PURE__ */ React14.createElement("div", { key: index });
    }
    const dateStr = dayObj.date.toDateString();
    const dayEvents = eventsMap[dateStr] || [];
    return /* @__PURE__ */ React14.createElement("div", { key: index, style: { border: "1px solid #ccc", padding: "4px" } }, /* @__PURE__ */ React14.createElement("div", { style: { fontWeight: "bold" } }, dayObj.day), dayEvents.map((event, idx) => {
      const startStr = event.date.toLocaleDateString(void 0, options);
      const endStr = event.endDate ? event.endDate.toLocaleDateString(void 0, options) : null;
      const dateRange = endStr ? `${startStr} - ${endStr}` : startStr;
      return /* @__PURE__ */ React14.createElement(HeadedCard, { key: idx, variant }, /* @__PURE__ */ React14.createElement("h2", { style: { fontSize: "0.9em", margin: 0 } }, event.name), /* @__PURE__ */ React14.createElement("p", { style: { fontSize: "0.8em", margin: 0 } }, event.description), /* @__PURE__ */ React14.createElement("p", { style: { fontSize: "0.7em", margin: 0 } }, dateRange));
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
  const [year, setYear] = useState2(initialYear != null ? initialYear : today.getFullYear());
  const [month, setMonth] = useState2(initialMonth != null ? initialMonth : today.getMonth());
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
  return /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement("div", { style: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" } }, /* @__PURE__ */ React15.createElement(HeadedButton, { variant, onClick: handlePrevYear }, "Previous Year"), /* @__PURE__ */ React15.createElement(HeadedButton, { variant, onClick: handlePrevMonth }, "Previous Month"), /* @__PURE__ */ React15.createElement("div", { style: { fontWeight: "bold" } }, new Date(year, month).toLocaleString(void 0, { month: "long", year: "numeric" })), /* @__PURE__ */ React15.createElement(HeadedButton, { variant, onClick: handleNextMonth }, "Next Month"), /* @__PURE__ */ React15.createElement(HeadedButton, { variant, onClick: handleNextYear }, "Next Year")), /* @__PURE__ */ React15.createElement(HeadedCalendarMonth, { variant, year, month, events }));
};

// src/components/nested/date/DatePicker/headed-date-picker.tsx
import React16, { useState as useState3 } from "react";
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
  const [selectedYear, setSelectedYear] = useState3(years[0].toString());
  const [selectedMonth, setSelectedMonth] = useState3(months[0].value.toString());
  const selectedOption = months.find((m) => m.value === Number(selectedMonth));
  const selectedLabel = selectedOption ? selectedOption.label : "";
  const [selectedDay, setSelectedDay] = useState3("1");
  const [selectedHour, setSelectedHour] = useState3("0");
  const [selectedMinute, setSelectedMinute] = useState3("0");
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
  return /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("label", { htmlFor: "year" }, "Year:"), /* @__PURE__ */ React16.createElement(
    HeadedDropdown,
    {
      options: years.map((yr) => ({ label: yr.toString(), value: yr.toString() })),
      selected: selectedYear,
      onChange: (value) => setSelectedYear(value),
      variant
    }
  )), /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("label", { htmlFor: "month" }, "Month:"), /* @__PURE__ */ React16.createElement(
    HeadedDropdown,
    {
      options: months.map((m) => ({ label: m.label, value: m.value.toString() })),
      selected: selectedLabel,
      onChange: (value) => setSelectedMonth(value),
      variant
    }
  )), /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("label", { htmlFor: "day" }, "Day:"), /* @__PURE__ */ React16.createElement(
    HeadedDropdown,
    {
      options: days,
      selected: selectedDay,
      onChange: (value) => setSelectedDay(value),
      variant
    }
  )), /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("label", { htmlFor: "hour" }, "Hour:"), /* @__PURE__ */ React16.createElement(
    HeadedDropdown,
    {
      options: hours,
      selected: selectedHour,
      onChange: (value) => setSelectedHour(value),
      variant
    }
  )), /* @__PURE__ */ React16.createElement("div", null, /* @__PURE__ */ React16.createElement("label", { htmlFor: "minute" }, "Minute:"), /* @__PURE__ */ React16.createElement(
    HeadedDropdown,
    {
      options: minutes,
      selected: selectedMinute,
      onChange: (value) => setSelectedMinute(value),
      variant
    }
  )), /* @__PURE__ */ React16.createElement(HeadedButton, { variant, onClick: handleSubmit }, "Submit"));
};

// src/components/nested/milestones/Progress/headed-progress.tsx
import React17 from "react";
import styles13 from "./headed-progress.module-6PIITCGR.module.css";
var HeadedProgress = ({
  progress,
  className = "",
  style = {},
  variant
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ React17.createElement(
    "div",
    {
      className: `${styles13[`hui-${variant}-progress-container`]} ${className}`,
      style
    },
    /* @__PURE__ */ React17.createElement(
      "div",
      {
        className: `${styles13[`hui-${variant}-progress-fill`]}`,
        style: { width: `${clampedProgress}%` }
      },
      /* @__PURE__ */ React17.createElement(
        "div",
        {
          className: `${styles13[`hui-head`]}`
        }
      )
    )
  );
};

// src/components/nested/milestones/Stepper/headed-stepper.tsx
import React18 from "react";
var HeadedStepper = ({
  steps,
  currentStepsCompleted,
  variant
}) => {
  const clampedStepper = Math.min(100, Math.max(0, currentStepsCompleted / (steps.length - 1) * 100));
  return /* @__PURE__ */ React18.createElement("div", null, /* @__PURE__ */ React18.createElement(HeadedProgress, { progress: clampedStepper, variant }), /* @__PURE__ */ React18.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    marginTop: "20px"
  } }, steps.map((value, index) => /* @__PURE__ */ React18.createElement("div", { key: index, style: { flex: 1, display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React18.createElement(HeadedCard, { variant }, value)))));
};

// src/components/nested/date/Timeline/headed-timeline.tsx
import React20 from "react";

// src/components/nested/date/event.tsx
import React19 from "react";
var HeadedEvent = ({ variant, name, description, date, endDate }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  let startStr = date.toLocaleDateString(void 0, options);
  if (endDate) {
    const endStr = endDate.toLocaleDateString(void 0, options);
    startStr = `${startStr} - ${endStr}`;
  }
  return /* @__PURE__ */ React19.createElement(HeadedCard, { variant }, /* @__PURE__ */ React19.createElement("h1", null, " ", name), /* @__PURE__ */ React19.createElement("p", null, " ", description), /* @__PURE__ */ React19.createElement("p", null, " ", startStr, " "));
};

// src/components/nested/date/Timeline/headed-timeline.tsx
var HeadedTimeline = ({ variant, events }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  return /* @__PURE__ */ React20.createElement(React20.Fragment, null, sortedEvents.map((event, index) => /* @__PURE__ */ React20.createElement(HeadedEvent, __spreadProps(__spreadValues({ key: index }, event), { variant }))));
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
  HeadedLink,
  HeadedModal,
  HeadedPopover,
  HeadedProgress,
  HeadedSelect,
  HeadedStepper,
  HeadedSwitch,
  HeadedTabs,
  HeadedTimeline,
  HeadedToast,
  PositionEnum,
  VariantEnum
};
//# sourceMappingURL=index.js.map