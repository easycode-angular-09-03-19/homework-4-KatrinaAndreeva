export function generateId(): string {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  return "ssssssssss".replace(/s/g, () => uniqueValues[Math.floor(Math.random() * uniqueValues.length)]);
  }