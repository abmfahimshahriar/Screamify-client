export const staticProfileStyle = {
  paper: {
    padding: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center" as const,
      position: "relative" as const,
      "& button": {
        position: "absolute" as const,
        top: "80%" as const,
        left: "70%" as const,
      },
    },
    "& .profile-image": {
      width: 200 as const,
      height: 200 as const,
      objectFit: "cover" as const,
      maxWidth: "100%" as const,
      borderRadius: "50%" as const,
    },
    "& .profile-details": {
      textAlign: "center" as const,
      "& span, svg": {
        verticalAlign: "middle" as const,
      },
      "& a": {
        color: "#00bcd4" as const,
      },
    },
    "& hr": {
      border: "none" as const,
      margin: "0 0 10px 0" as const,
    },
  },
};
