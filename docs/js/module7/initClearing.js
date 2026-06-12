const BLOCK = '.js-clearing';
const INPUT = '.js-clearing-input';
const BTN = '.js-clearing-btn';

function hasValidBlocks() {
  return [...document.querySelectorAll(BLOCK)].some(
    (block) => block.querySelector(INPUT) && block.querySelector(BTN),
  );
}

function onDocumentClick(e) {
  const btn = e.target.closest(BTN);
  if (!btn) return;

  const block = btn.closest(BLOCK);
  if (!block || !block.contains(btn)) return;

  const input = block.querySelector(INPUT);
  if (!input) return;

  e.preventDefault();
  input.value = '';
  input.focus({ preventScroll: true });
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

export function initClearing() {
  if (!hasValidBlocks()) return;

  document.addEventListener('click', onDocumentClick);
}
