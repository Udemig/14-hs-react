const getUserName = (name) => {
  return "@" + name.trim().toLowerCase().replaceAll(" ", "_").slice(0, 20);
};

export default getUserName;
