export function initExpertAsses() {
  const container = document.querySelector('.box-expert-asses');
  if (!container) return;

  const items = container.querySelectorAll('.box-expert-asses__item:not(.item-total)');
  const totalEl = container.querySelector('.item-total .total');

  if (!items.length || !totalEl) return;

  let sum = 0;
  let count = 0;

  items.forEach(item => {
    const assesEl = item.querySelector('.asses');
    if (!assesEl) return;

    const value = parseFloat(assesEl.textContent.replace(',', '.'));
    if (isNaN(value)) return;

    sum += value;
    count++;
  });

  if (!count) return;

  const result = (sum / count) * 10;
  totalEl.textContent = result.toFixed(1).replace('.', ',');
}