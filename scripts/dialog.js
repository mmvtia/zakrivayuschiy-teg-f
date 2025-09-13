(function () {
  const openBtn = document.querySelector('.dialog__button');
  const dialog  = document.querySelector('.dialog__content');
  const closeBtn = dialog?.querySelector('.dialog__button__close');

  if (!openBtn || !dialog) return;

  const supportsDialog = typeof dialog.showModal === 'function';

  function openDialog() {
    if (supportsDialog) {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }

  function closeDialog() {
    if (supportsDialog) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  }

  openBtn.addEventListener('click', openDialog);

  closeBtn?.addEventListener('click', closeDialog);

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDialog();
  });

  dialog.addEventListener('click', (e) => {
    const r = dialog.getBoundingClientRect();
    const inside =
      e.clientX >= r.left && e.clientX <= r.right &&
      e.clientY >= r.top  && e.clientY <= r.bottom;
    if (!inside) closeDialog();
  });
})();