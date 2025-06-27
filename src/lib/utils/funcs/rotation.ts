export function setRotation(e: MouseEvent, card: HTMLElement) {
  const rect = card.getBoundingClientRect();
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;
  const x = -(localY / rect.height - 0.5) * 3;
  const y = (localX / rect.width - 0.5) * 4;

  return { x, y };
}
