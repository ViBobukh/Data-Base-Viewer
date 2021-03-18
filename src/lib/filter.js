export default function filter(str, users) {
  const words = str.split();
  return users.filter((user) => {
    return words.every((word) => {
      return user.name.indexOf(word) !== -1;
    });
  });
}
