export const mdeOptions = {
  toolbar: [
    "heading",
    "bold",
    "italic",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "table",
    "code",
    "|",
    "preview",
  ],
  placeholder: "Not içeriğinizi giriniz...",
  previewClass: ["bg-background", "p-4", "rounded-md", "prose"],
} as const;

export const selectStyles = {
  control: (styles: object) => ({
    ...styles,
    backgroundColor: "bg-card",
    borderColor: "border-primary",
    padding: "5px",
    "&:hover": {
      borderColor: "border-primary",
    },
    border: "1px solid var(--color-border)",
  }),

  input: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
  }),

  multiValue: (styles: object) => ({
    ...styles,
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text-primary)",
    borderRadius: "10px",
  }),

  multiValueLabel: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
    fontSize: "16px",
  }),

  option: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
    backgroundColor: "var(--color-background)",
    "&:hover": {
      backgroundColor: "var(--color-primary)",
    },
  }),

  menu: (styles: object) => ({
    ...styles,
    background: "var(--color-background)",
  }),
};
