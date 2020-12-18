export const screamDialogStyle = {
  closeButton: {
    position: "absolute" as const,
    top: "3%" as const,
    left: "90%" as const,
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  submitButton: {
    marginTop: 20,
    position: "relative" as const,
    float: "right" as const,
  },
  invisibleSeparator: {
    border: "none" as const,
    margin: 4,
  },
  profileImage: {
    maxWidth: 200,
    heigth: 200,
    borderRadius: "50%" as const,
    objectFit: "cover" as const,
  },
  dialogContent: {
    padding: 20,
    overflow: "hidden" as const, 
  }
};
