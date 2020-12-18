export const commentsStyle = {
    invisibleSeparator: {
      border: "none" as const,
      margin: 4,
    },
    visibleSeparator: {
      width: "100%" as const,
      borderBottom: "1px solid rgba(0,0,0,0.1)" as const,
      marginBottom: 20,
    },
    commentImage: {
      maxWidth: 100,
      width: 100,
      height: 100, 
      borderRadius: "50%" as const,
      objectFit: "cover" as const,
    },
    commentData: {
        marginLeft: 20,
        overflow: "auto" as const,
    },
    dialogContent: {
      padding: 20,
      overflow: "hidden" as const,
    },
    expandButton: {
      position: "absolute" as const,
      left: "90%",
    },
    progress: {
      textAlign: 'center' as const,
      marginTop: 50,
      marginBottom: 50,
    }
  };
  