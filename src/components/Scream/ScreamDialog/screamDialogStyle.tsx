export const screamDialogStyle = {
  closeButton: {
    position: "absolute" as const,
    top: "3%" as const,
    left: "90%" as const,
  },
  invisibleSeparator: {
    border: "none" as const,
    margin: 4,
  },
  visibleSeparator: {
    width: "100%" as const,
    borderBottom: "1px solid rgba(0,0,0,0.1)" as const,
    marginBottom: 20,
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: "50%" as const,
    objectFit: "cover" as const,
  },
  dialogContent: {
    padding: 20,
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
  },
  expandButton: {
    position: "absolute" as const,
    left: "90%",
  },
  progress: {
    textAlign: 'center' as const,
    marginTop: 50,
    marginBottom: 50,
  },
};
