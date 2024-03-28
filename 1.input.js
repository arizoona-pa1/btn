const coding_input = {
  element: function (parentElement, object, version = 0) {
    // object.id
    // object.name
    // object.value
    // object.placeholder
    // object.type
    // object.label
    // object.icon
    // object.attributes
    // object.autocomplete = on
    // object.textError
    // object.style
    const {
      id,
      name,
      value,
      label,
      type,
      placeholder,
      autocomplete,
      attributes,
      icon,
      iconSide,
      direction,
      textError,
      style,
    } = object;

    let hasIcon = icon ? "true" : "false";
    let tag_icon = icon ? '<div class="icon">' + icon + "</div>" : "";
    // --------------------------------
    const input = `
          <div id="${id}" data-type="input" data-name="coding" data-dir="${
      direction ?? "ltr"
    }" data-version="${version}">
              <div class="field" data-contain-icon="${hasIcon}" data-dir-icon="${iconSide}" data-status="fine">
                  <input 
                      type="${name ?? type}"
                      name="${name}"
                      placeholder="${placeholder ?? "Enter Text"}"
                      value="${value ?? ""}"
                      autocomplete="${autocomplete ?? "on"}"
                      ${attributes ?? ""}
                  >
                  <label for="${id}">
                      <p>${label ?? name}</p>
                  </label>
                  ${tag_icon}
                </div>
              <div class="absulote_message">
                  <span class="message_box">${textError ?? ""}</span>
              </div>
          </div >
          `;
    // --------------------------------
    // style.bgColor
    // style.color
    // style.height
    const root = [
      {
        variable: "--bg-color-coding-input",
        cssName: "bgColor",
      },
      {
        variable: "--height-coding-input",
        cssName: "height",
      },
      {
        variable: "--color-coding-input",
        cssName: "color",
      },
      {
        variable: "--font-size-coding-input",
        cssName: "font-size",
      },
      {
        variable: "--font-size-coding-input-icon",
        cssName: "font-size-icon",
      },
      {
        variable: "--font-size-coding-input-label",
        cssName: "font-size-label",
      },
      {
        variable: "--font-size-coding-input-label-focus",
        cssName: "font-size-label-focus",
      },
      {
        variable: "--font-size-coding-input-message",
        cssName: "font-size-message",
      },
      {
        variable: "--font-size-coding-input-placeholder",
        cssName: "font-size-placeholder",
      },
      {
        variable: "--border-radius-coding-input",
        cssName: "border-radius",
      },
      {
        variable: "--border-style-coding-input",
        cssName: "border-style",
      },
      {
        variable: "--border-width-coding-input",
        cssName: "border-width",
      },
      {
        variable: "--border-color-coding-input",
        cssName: "border-color",
      },
      {
        variable: "--border-width-coding-input-focus",
        cssName: "border-width-focus",
      },
      {
        variable: "--border-color-coding-input-focus",
        cssName: "border-color-focus",
      },
      {
        variable: "--border-color-coding-input-filled",
        cssName: "border-width-filled",
      },
      {
        variable: "--color-placeholder-coding-input",
        cssName: "color-placeholder",
      },
      {
        variable: "--text-indent-coding-input",
        cssName: "text-indent",
      },
      {
        variable: "--outline-coding-input",
        cssName: "outline",
      },
      {
        variable: "--outline-coding-input-focus",
        cssName: "outline-focus",
      },
      {
        variable: "--outline-coding-input-filled ",
        cssName: "outline-filled",
      },
    ];
    if (typeof style == "object") {
      root.forEach(({ variable, cssName }) => {
        if (style[`${cssName}`]) {
          parentElement.style.setProperty(variable, style[cssName]);
        }
      });
    }
    // --------------------------------
    parentElement.innerHTML = input;
    // --------------------------------
  },
  copy: (index = "verison") => {
    return `input(parentElement, {
            id: 'mandatory', // mandatory
            name: 'mandatory', // mandatory
            type: 'default_name', // optional
            value: 'value', // optional
            placeholder: 'placeholder', // optional
            label: 'label', // mandatory
            icon: 'icon', // optional node/ element/ text
            iconSide: 'default_right', // optional
            attributes: 'required max_length="100"',  // optional
            textError: 'text error', // optional
            autocomplete:'default_off', // optional off/on
            direction:'default_ltr', // optional
            style: { 
                color: 'default_inherit', // optional
                bgColor: 'default_inherit', // optional
                height: 'default_50px', // optional
                font-size: 'default_1rem', // optional
                font-size-icon: 'default_1.1rem', // optional
                font-size-label: 'default_0.7rem', // optional
                font-size-label-focus: 'default_0.7rem', // optional
                font-size-message: 'default_0.8rem', // optional
                font-size-placeholder: 'default_0.8rem', // optional
                border-radius: 'default_0', // optional
                border-style: 'default_solid', // optional
                border-width: 'default_1px', // optional
                border-color: 'default_gray', // optional
                border-width-focus: 'default_2px', // optional
                border-color-focus: 'default_dodgerblue', // optional
                border-color-filled: 'default_black', // optional
                color-placeholder: 'default_gray', // optional
                text-indent: 'default_15px', // optional
                outline: 'default_none', // optional
                outline-focus: 'default_none', // optional
                outline-filled: 'default_none', // optional
            }
        }, ${index})`;
  },
  version: {
    length: 8,
  },
};
